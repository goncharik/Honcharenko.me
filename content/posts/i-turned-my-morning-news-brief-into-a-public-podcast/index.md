---
title: "I Turned My Morning News Brief Into a Public Podcast"
date: 2026-11-05T13:21:35+01:00
draft: false
description: "A Hermes Agent cron job already wrote my morning news brief. Turning it into audio was easy; turning that audio into Morning Signal Brief, a public daily podcast with two synthetic hosts, took a real publishing pipeline."
categories:
- Tools
tags: ["AI", "hermes-agent", "agents", "automation", "podcast", "text-to-speech"]
---

I am still using Hermes Agent every day, and cron jobs have become one of its features I use most. They let Hermes run recurring tasks without waiting for me to start a new chat each time.

One of those cron jobs gathers news from the previous day and delivers a personalized brief in the morning. It checks the sources I tend to care about: Product Hunt, Hacker News, Reddit, GitHub Trending, and a separate pass for Swift projects. It selects the useful items, summarizes them, and keeps the links so I can return to the original sources.

Reading the brief was not a problem. I still like having the written version, especially because it preserves the source links. I simply thought it was worth adding a listening option.

My mornings are busy right now. I am getting one child ready for school while also taking care of our baby. I can read the brief later, but listening often fits that part of the day better.

So I turned the same brief into an audio version.

The first version was only for me. Then I listened to it and thought it was interesting enough that somebody else might want it too. That private experiment became [Morning Signal Brief](https://morning-brief.honcharenko.me/), a public daily podcast with two synthetic hosts, chapters, linked show notes, an RSS feed, and considerably more infrastructure than I expected from "turn this text into audio."

It has now been running for more than a month. As of November 5, 2026, there are 40 public episodes. After the early fixes, the workflow runs smoothly and almost entirely on its own. Most mornings, my part is simply listening to the new episode.

{{< img src="morning-signal-cover.png" alt="Morning Signal Brief podcast artwork: illustrated hosts Chloe and Jeff in headphones talking into microphones at a studio desk under an On Air sign and a Morning Signal Brief Podcast banner" size-method="Fit" size-format="1600x1600" class="img-wide" >}}

## The written brief still comes first

I previously wrote about [setting up Hermes Agent as my personal operator](https://honcharenko.me/posts/i-set-up-hermes-agent-as-my-personal-operator/). One of the jobs that grew out of that setup was a personalized morning brief.

Hermes does not search the internet at random and ask a model to improvise a news summary. The brief has recurring source groups and an editorial order. Product Hunt catches new products. Hacker News adds technical discussions and updates. Reddit can surface practical reports from people building things. GitHub Trending shows projects getting attention, including a separate Swift pass because that is directly relevant to my work.

Some days one source has nothing worth including. That is fine. I would rather have a shorter brief than fill a section because the template says it should exist.

GitHub Trending needed one extra check. The same repositories often stay on the list for several days, which made successive episodes repeat the same projects. I added a check against the previous four episodes so a repository does not become a new story just because it is trending again. A substantive release or another meaningful development can justify returning to it; staying on the list does not.

The written version remains the source of truth. The podcast does not perform another independent research pass. It starts with the complete brief, chooses roughly six to ten stories that work in audio, and rewrites them for listening.

This matters because a written digest and a podcast are not the same object. A paragraph full of links and compact technical details can work on a screen and sound terrible when read aloud.

## Why I used two hosts instead of narration

My first instinct was simple narration. Feed the brief into text to speech and get an MP3.

It sounded like somebody reading a document, because that was exactly what it was.

The current show uses two hosts, Chloe and Jeff. Chloe carries most of the facts, context, and transitions between sources. Jeff is supposed to add something: a trade-off, a skeptical question, an implication, or a connection to another story. He should not repeat Chloe in different words.

The dialogue is also written differently from the original brief. Sentences are shorter. URLs are removed from the spoken text. The episode moves source by source, and each provider becomes a chapter. If there are only six worthwhile stories, the script uses six. It does not add filler to reach an arbitrary duration.

The two-host format does not automatically make synthetic speech interesting. Bad generated banter is still bad. But a controlled conversation is easier for me to follow during a busy morning than a voice reading a compressed report.

## Making it public changed the problem

A private audio file can be rough. I know where it came from, I know which details refer to my own work, and I can forgive a missing link because I still have the written brief.

A public podcast needs stricter boundaries.

The public script cannot include private projects, work details, personal recommendations, or anything else that belonged only in my original brief. Every story discussed in the episode needs a canonical link. The episode needs a useful summary, chapter markers, stable media URLs, and show notes that let a listener inspect the source instead of trusting a synthetic conversation.

It also has to work outside my own player. A browser opening an MP3 successfully does not prove that Apple Podcasts, Spotify, or another podcast client will handle the feed correctly.

That was the point where a small TTS experiment became a publishing system.

## The production pipeline

The current daily flow looks like this:

{{< img src="morning-signal-pipeline.png" alt="Morning Signal Brief daily pipeline: written brief from Hermes at 07:00, public-safe Chloe and Jeff script at 07:20, Gemini TTS speech generation with one cached request per turn, finished MP3 assembled, aligned, mastered, and checked, episode assets uploaded to Cloudflare R2, public RSS feed consumed by Overcast on iPhone and by the website" size-method="Fit" size-format="1600x1600" class="img-wide" >}}

Each Chloe or Jeff turn is sent as a separate request. The returned audio is cached as raw PCM and joined locally in a deterministic order. Word alignment is used to build chapters and place transitions. The final episode is a mono MP3 mastered around `-19 LUFS`.

The public media lives in Cloudflare R2. A small static site reads the same RSS metadata as podcast clients, so I do not maintain one episode database for the feed and another for the website. The website, [Apple Podcasts](https://podcasts.apple.com/us/podcast/morning-signal-brief/id6817403239), [Spotify](https://open.spotify.com/show/4waFoalsjbB8muOnANMRle), and the raw [RSS feed](https://morning-brief.honcharenko.me/feed.xml) all point back to the same published episode data.

The implementation is not complicated because any single step is unusual. It is complicated because a daily episode only works when all the boundaries agree.

## The failures shaped the system

The useful lessons came from episodes and publication attempts that did not work cleanly.

### Automated checks could not hear a changing voice

One episode passed the technical checks. It decoded from beginning to end. The duration and file structure were valid. Loudness and peak levels were within the expected range. The words aligned with the script.

I still rejected it.

The hosts' voices drifted enough during the episode that they no longer sounded consistent. The file was technically correct and unpleasant to listen to.

An earlier multi-speaker generation approach gave the model too much room to change the voices. Generating one speaker turn at a time made the output easier to control and gave me a useful retry boundary. It reduced the problem, but it did not eliminate it. Listening can still catch continuity problems that the automated checks miss.

### A stalled request should not waste the whole episode

TTS requests can stall or fail after earlier turns have already succeeded. Regenerating the full episode would waste time and money, and it could produce different versions of the turns that were already good.

The pipeline now caches every completed turn. A failed turn can be retried on its own, and a production watchdog prevents one request from waiting forever. Local assembly starts from the cached pieces, so recovery does not mean beginning again.

This is one reason I prefer many small generation calls over one large request. It creates more files and more bookkeeping, but failures stay small.

### A publishing failure should not erase a good episode

At first, local production and public publication felt like one operation. That made a Git or hosting problem look as if the episode itself had failed.

They are separate states now.

An episode can pass content review and audio QA even if the website or public upload has a problem. The finished local MP3 remains available for another publishing attempt rather than needing to be generated again. Public publication reports its own result.

That separation sounds obvious in retrospect. It was less obvious when everything lived in one morning script.

### Source links have to exist before speech

Trying to reconstruct show notes after generating the audio was fragile. A sentence in the script might combine several claims, and the original links were easy to lose while converting a written brief into dialogue.

Now the source URLs are structured alongside the transcript segments. The same data generates the linked RSS notes and the expanded show notes on the website. If a story is spoken, it must already have a direct source attached to it.

This also makes the public/private boundary easier to check before synthesis rather than after the episode exists.

### Podcast clients are less forgiving than a browser

The publication check goes beyond opening the MP3 URL. It verifies the media type, enclosure byte length, stable episode identifier, artwork, chapters, a full download, and HTTP byte-range responses. It also decodes the published MP3 from start to finish.

Upload order matters too. Episode media and chapter files go first. The RSS feed goes last. Otherwise a podcast client can discover an episode whose audio is not available yet.

I also ran into a smaller caching problem: storage contained a new cover while the public edge briefly served the old bytes. The verification path now uses checksum-aware requests, and website artwork uses content-hashed filenames where possible.

None of these problems is impressive by itself. Together they decide whether a daily automated show feels dependable or random.

## Good enough is a product decision

Morning Signal Brief currently uses Gemini 3.8 Flash TTS. The voices are not perfectly human and some lines sound more synthetic than others.

After more than a month of listening, they are good enough for what I want: a short morning catch-up on topics that interest me. I do not need the voices to be indistinguishable from human hosts for the brief to be useful.

There is now a back catalog to try, rather than just a few early samples. I keep listening to new episodes in the morning, which is the most useful validation I have for my own use case. Whether other people want the same format is still a separate question.

ElevenLabs is the obvious provider to test if listeners consistently say that voice quality gets in the way. Based on my rough estimate for this workload, though, it would cost around ten times more than the current setup.

For now, spending that much more would optimize an unproven bottleneck. I do not yet know whether the limiting factor is voice quality, story selection, episode length, distribution, or simply that few people want another daily technology podcast.

The cheaper system lets me test those questions.

If voice quality becomes the recurring complaint, I can render one representative episode with both providers and compare the result against the real cost. I do not need to migrate the entire pipeline first.

## What my mornings look like now

The early failures took work to sort out. These days, the podcast runs smoothly and almost autonomously. I am no longer manually working through production each morning. I subscribe to the public RSS feed in Overcast on my iPhone and listen to the new episode there, just like any other listener.

That does not mean every failure mode is solved or that I have handed off responsibility for what gets published. I still own the source choices, the public/private boundary, and the rules the system follows. But those decisions no longer require me to supervise every run.

The GitHub duplicate check is the kind of adjustment that comes from actually listening over time. The pipeline can work correctly and still repeat yesterday's interesting repository. Fixing that made the daily brief more useful without changing the format.

That is also why the podcast has stayed useful to me. It did not begin with "I want to generate a podcast with AI." It began with an existing information habit that did not fit the part of the day when I wanted to use it.

The written brief already worked. Audio gave me another way to use it during a busy part of the day.

Making it public created a larger engineering problem, but it also produced something concrete that other people can try.

You can listen and subscribe at [morning-brief.honcharenko.me](https://morning-brief.honcharenko.me/), on [Apple Podcasts](https://podcasts.apple.com/us/podcast/morning-signal-brief/id6817403239), or on [Spotify](https://open.spotify.com/show/4waFoalsjbB8muOnANMRle).

I am especially interested in one question: are the synthetic voices already good enough for a short daily briefing, or do they get in the way?
