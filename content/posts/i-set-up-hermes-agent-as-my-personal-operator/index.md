---
title: "I Set Up Hermes Agent as My Personal Operator"
date: 2026-06-12T06:14:12+02:00
draft: false
description: "I set up Hermes Agent as a persistent personal operator with one job: push me from starting projects toward shipping, publishing, and validating them."
categories:
- Tools
tags: ["ai", "hermes-agent", "agents", "automation", "productivity"]
---

{{< img src="header.png" alt="Retro mission-control operator wearing a Hermes-Agent patch at a vintage console, talking to an AI assistant on a green CRT screen" size-method="Fit" size-format="1600x1600" class="img-wide" >}}

I have too many unfinished things.

That is probably the honest starting point.

I have contractor work, several indie apps, a personal blog, early YouTube ideas, cycling videos waiting to be edited, book notes, AI/devtool experiments, and a long running hope that eventually my own products and content can replace contract work.

The problem is not that I cannot build things. I can build things. I am a mobile developer; shipping code is the comfortable part.

The uncomfortable part is everything around it: choosing what matters, cutting scope, publishing before it feels perfect, marketing, launch strategy, content consistency, and remembering why I made a decision two weeks ago.

So I started looking at personal AI agents less as toys and more as a possible operating layer for my work.

Not an AI employee in the hype sense. Not something I trust to run my life while I sleep. More like a persistent assistant that knows what I am trying to do, keeps context across sessions, helps me make decisions, and pushes me back toward shipping when I start organizing instead of publishing.

That is why I set up [Hermes Agent](https://github.com/NousResearch/hermes-agent).

## Why Hermes caught my attention

The idea that finally made Hermes interesting to me was simple: it should become more useful over time.

Most AI chats are useful but disposable. You open a new conversation, explain your context again, paste the same background again, correct the same assumptions again, and then lose most of that work when the session ends.

For quick questions, that is fine. For a long project, it is annoying. For a multi year attempt to move from contract work toward independent income, it is not enough.

What I wanted was something with memory, tools, and a stable role.

Hermes Agent seemed close to that. The pieces that stood out to me were:

- persistent memory across sessions;
- skills as reusable procedures;
- local file and project access;
- tool use for real work, not just advice;
- scheduled jobs and review loops;
- the ability to shape the agent with a strong identity and rules.

A useful technical reference here is [Akshay Pachaar's Hermes Agent masterclass](https://x.com/akshay_pachaar/status/2054564519280804028), which goes much deeper into the technical side: memory tiers, skills, SOUL.md, Curator, GEPA, profiles, Telegram bots, and multiple specialized agents.

This post is not trying to replace that kind of setup guide. If you want the technical masterclass, start there.

This post is about why I set Hermes up for myself, what role I gave it, and what I want to test in real use.

## I did not want another chatbot

The first decision was naming the thing and defining the job.

I called it Hermy.

That sounds small, but it matters. I did not want a generic assistant that politely answers any question. I wanted a specific operator with a specific job: help me reduce chaos and move toward independent income from indie products and content.

The first prompt I wrote for Hermy had four parts:

1. who I am;
2. what I am working on;
3. my goals and ambitions;
4. what the agent should focus on first.

The most important part was not biographical. It was strategic.

Hermy's job is to keep asking one question:

> What can I ship, publish, or validate next?

That question is useful because it cuts through a lot of fake progress.

Refactoring a side project can be useful. It can also be avoidance.

Organizing notes can be useful. It can also be avoidance.

Researching tools can be useful. It can also be avoidance.

For me, the bottleneck is usually not a lack of ideas or technical ability. It is turning existing work into public releases, audience growth, user feedback, and money.

So Hermy's role is intentionally biased. It should push toward smaller scopes, launches, TestFlight/beta feedback, landing pages, content drafts, monetization experiments, and public output.

## The safety rules matter

Hermes runs with access to local context. That is powerful, but it is also the part that deserves the most caution.

My setup includes private notes, personal files, project repositories, and contractor work context. I do not want an agent randomly sending messages, publishing content, deleting files, pushing code, or touching anything client facing without approval.

So I made the approval boundaries explicit.

Hermy can draft, summarize, organize, suggest, prepare checklists, create private notes, and inspect files when I ask.

But it must ask before anything public, destructive, financial, client facing, message sending, or related to remote repositories.

That line is important. I want the agent to be useful, not reckless.

This is also why I think the personal operator framing is better than the "AI employee" framing. An employee has permissions, responsibility, and real world consequences. My agent is not there yet. It is closer to an assistant with tools and memory, under supervision.

That is still useful.

## The real problem: I start more than I finish

When I wrote the setup prompt, I forced myself to be honest about the weak point.

I start many side projects. Very few are released publicly, and none of them are monetized so far.

This is not a rare problem for developers. Building is comfortable because it feels concrete. Marketing feels vague. Launching feels exposing. Pricing feels uncomfortable. Writing about the product feels like a distraction until you realize nobody knows it exists.

So Hermy's job is partly to be annoying in the right way.

When I propose a new idea, it should ask whether this beats the current priority or just adds chaos.

When I talk about a product update, it should ask about the launch or announcement plan.

When I polish something, it should ask whether the polish is blocking release or just delaying feedback.

That is the kind of assistant I need. Not one that says every idea is exciting. One that helps me finish.

## The first workflow: a focused LLM wiki

One of the first useful things I did with Hermy was build a focused LLM Wiki in Obsidian.

I did not want a huge life wiki. That sounds impressive, but for me it would probably become another place to hide from execution.

So the wiki has a narrow scope: indie products and content.

It contains project pages, content ideas, briefs, drafts, published post records, strategy notes, decisions, concepts, and source material. The point is not to collect everything. The point is to make better decisions about what to ship, publish, validate, or monetize next.

For example, instead of asking a fresh AI chat "what should I write next?", Hermy can query the wiki and look at existing content ideas, project priorities, product plans, source material, and previous decisions.

That already feels different from a normal chatbot conversation.

It is not magic. It is just persistent context with a useful structure. But persistent context is exactly what most of my scattered work was missing.

The wiki also makes the assistant less dependent on vibes. When Hermy recommends a next post or next project action, it can point back to actual notes and decisions.

## Why I chose Hermes instead of something else

I did look at alternatives.

[OpenClaw](https://github.com/openclaw/openclaw) was the obvious one to compare against. It looked powerful, especially as a personal assistant connected to messaging channels and integrations. But Hermes felt more thoughtful and organized to me. The memory, skills, identity layer, and review/curation ideas made it feel less like just another chat interface with tools and more like a system that could compound over time.

I also briefly looked at [Odysseus by PewDiePie](https://github.com/pewdiepie-archdaemon/odysseus), a self-hosted AI workspace. It looked interesting, especially as a local first workspace with chat, agents, documents, memory, and tools.

But it also felt early.

That does not mean bad. Just not what I needed right now.

My goal was not to compare every possible agent system. My goal was to start using one stable enough to support my actual workflow.

Hermes felt like the more practical choice for this first setup. It already had the pieces I cared about: memory, skills, tools, local operation, messaging, scheduled jobs, and enough community energy to make it worth learning.

At some point I may revisit alternatives. But I did not want the search for the perfect system to become another unfinished project.

So I picked Hermes and started.

## What I want Hermy to help with first

The first jobs are intentionally boring.

I want Hermy to help me:

- keep a clear inventory of active indie projects;
- choose which project is closest to release;
- turn product work into public content;
- create article briefs and drafts;
- run daily and weekly reviews;
- maintain the Indie & Content wiki;
- push me toward smaller scopes and real launches;
- think about marketing, positioning, distribution, and revenue earlier.

That last part matters.

For years, I treated marketing as something that happens after the product is ready. But for indie apps, that is too late. Positioning, audience, pricing, and distribution need to influence the product before launch.

This is one of the places where an assistant could help. Not by inventing generic marketing advice, but by repeatedly asking practical questions:

Who is this for?
Why would they care?
Where can I reach them?
What is the smallest useful version?
What would make someone pay?
What can I publish about this today?

Those questions are simple. I just do not ask them often enough when I am deep in code.

## What I am not expecting

I do not expect Hermes to solve my life.

I do not expect it to magically turn unfinished apps into revenue.

I do not expect it to be right all the time.

Actually, I expect some friction. Wrong assumptions. Too much structure. Tool issues. Suggestions that sound reasonable but miss the real constraint. That is normal.

The test is not whether Hermy is impressive in a demo.

The test is whether using it changes my behavior:

- Did I publish more?
- Did I release something sooner?
- Did I reduce scope instead of expanding it?
- Did I make clearer decisions?
- Did I stop losing context between sessions?
- Did I move any project closer to users or revenue?

That is what I want to measure over the next month.

## My current take

Right now, the most promising thing about Hermes is not autonomy. It is continuity.

A normal AI chat helps with a task.

A personal operator should help with a direction.

That is the difference I am trying to test.

For me, the direction is clear: fewer scattered ideas, more shipped products, more public writing, better launch habits, and eventually enough independent income to stop relying on contract work.

Hermy is now part of that system.

Not the system itself. Not the answer. Just a tool that can remember the direction, keep the context, and push me back toward the next useful action.

That is enough to be worth trying.

And the next useful action is simple: publish this, then keep using the system long enough to write an honest 30–60 day follow-up.
