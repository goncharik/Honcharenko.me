---
title: "How I Setup a New Mac for iOS Development (2025 Edition)"
date: 2025-05-07T17:42:18+01:00
draft: true # Set 'false' to publish
description: ""
categories:
- Tools
tags:
- Tools
- iOS
- Android
- Development
- Mac
---

Hey everyone!

New Mac, new setup! Let's go! I've recently got a new MacBook Pro and decided to setup a new dev environment from scratch. Moving to a fresh machine is always a good excuse to reevaluate tools and drop the ones collecting dust. Here's my 2025 iOS focused dev setup.

## 1. Initial macOS Setup and Preferences

When setting up a new MacBook, I start with the basics: signing in with my Apple ID to sync essential data through iCloud, ensuring my files, contacts, and preferences are immediately accessible. Since I appreciate a minimalistic workspace, I clear everything from the Dock, disable the option to display recently used applications, move the Dock to the left side of the screen, and set it to auto-hide to maximize available screen space. Additionally, I configure hot corners. Using one corner for quickly jotting down notes and another for instantly locking or turning off the screen.

## 2. Browser Setup: Why Arc?

When it comes to web browsing, I’ve settled on [Arc](https://arc.net/) as my daily driver. Despite being in [maintenance mode](https://www.theverge.com/2024/10/24/24279020/browser-company-ai-browser-arc), Arc remains one of the most thoughtfully designed browsers I’ve used. Its sidebar-based navigation, split views, and ability to organize tabs into spaces make it incredibly powerful for managing different work contexts.

That said, I did explore alternatives like the [Zen browser](https://zen-browser.app/). Zen is a compelling open-source browser with a clean interface and impressive speed. However, one major drawback keeps me from switching: the [iCloud Passwords extension doesn’t work with Zen for now](https://github.com/zen-browser/desktop/issues/7210). Because Zen is open source, and neither Apple nor the Zen developers seem interested in resolving this incompatibility, I find myself frequently switching back and forth between the Passwords app and the browser just to log in. It’s a small annoyance, but it adds friction I don’t want in my daily workflow.

So for now, I’m sticking with Arc. Even without active feature development, it still offers one of the best user experiences for macOS users who care about performance, interface, and seamless navigation.

## 3. Terminal and Shell Setup

In the past, I was a big fan of [iTerm2](https://iterm2.com/) due to its rich feature set. However, after [a recent security vulnerability](https://news.ycombinator.com/item?id=42579472), I began exploring alternatives. Recently, I switched to [Ghostty](https://ghostty.dev/), a fast and native terminal emulator for macOS and Linux. Ghostty offers GPU acceleration, a modern UI, and is implemented in the Zig programming language ([Ghostty on The Register](https://www.theregister.com/2025/01/08/ghostty_1/?utm_source=chatgpt.com)).

To manage packages and installations, I use [Homebrew](https://brew.sh/), which simplifies the process of installing and updating software on macOS. For quick text and config edits, my go-to editor is [Zed](https://zed.dev/), a lightweight and responsive code editor.

For my shell environment, I prefer [Zsh](https://www.zsh.org/) enhanced with [Oh My Zsh](https://ohmyz.sh/), which provides a robust framework for managing Zsh configurations. I utilize the [Powerlevel10k](https://github.com/romkatv/powerlevel10k) theme for a sleek and informative prompt, and incorporate [powerline-shell](https://github.com/b-ryan/powerline-shell) for additional visual enhancements.

Managing multiple Ruby versions is streamlined with [RVM](https://rvm.io/), allowing me to switch between different Ruby environments effortlessly. To further avoid the infamous gem versioning and dependency hell, I also rely on [Bundler](https://bundler.io/) for managing Ruby gems per project. It ensures that each project uses exactly the gem versions it needs, as defined in its Gemfile.lock. This makes it much easier to maintain consistent development and deployment environments.

For those interested in my specific configurations, aliases, and extensions, feel free to explore my [dotfiles repository](https://github.com/goncharik/dotfiles) on GitHub.

## 4. Xcode Installation and Configuration

Installing Xcode from the App Store has several drawbacks. It restricts you to only the latest stable version of Xcode, which might not be compatible with some ongoing projects. Additionally, if you need to test your applications with upcoming versions of Xcode or develop features that utilize APIs from future iOS releases, the App Store doesn't offer preview or beta versions. Another significant inconvenience is that Xcode from the App Store may automatically update, causing your project to suddenly become incompatible and forcing you to either revert to an older version, costing you valuable time, or prematurely migrate your project. Moreover, I've noticed that downloading and installing Xcode directly from the App Store often takes considerably longer compared to direct downloads from the Apple Developer Portal.

To effectively manage different Xcode versions, I use the [Xcodes app](https://github.com/XcodesOrg/XcodesApp) which conveniently handles installation, management, and switching between multiple Xcode versions.

A couple of extra CLI tools worth installing:

- `brew install xcode-build-server` - enables SourceKit-LSP outside Xcode (jump to definition, find references, call tree analysis, etc. in Cursor/VSCode)
- `brew install xcbeautify` - a fast, Swift-based alternative to xcpretty for readable xcodebuild output

## 5. Productivity, Utilities, and Debugging Tools

Most of my development time is now spent in [Cursor](https://www.cursor.sh/), an AI-powered IDE that has completely transformed my workflow. While I mentioned earlier that I use Zed for quick text and config edits, Cursor is where the real development happens. In fact, I rarely open Xcode anymore even for iOS development. Since Cursor is a fork of VSCode, it also comes with access to a vast ecosystem of useful extensions, making it highly customizable and adaptable to different development workflows. Cursor has become such a central part of my toolchain that I’m planning a dedicated blog post on how I use it to build mobile apps.

For Git operations, I primarily use either command line or [GitUp](https://gitup.co/) for a visual and intuitive Git GUI that’s fast and reliable. I’ve also spent time with [Fork](https://git-fork.com/), and I really like its minimalist interface. It’s another solid option for anyone who prefers a lightweight Git UI client.

One of the biggest productivity boosters in my setup is [Raycast](https://www.raycast.com/). It’s like a command interface for everything on your Mac. Some of my most-used features include:

- Built-in calculator
- Clipboard manager
- Window manager
- App-specific hotkeys
- Extensions for web search (Perplexity, DuckDuckGo, GitHub)
- Running custom scripts directly from Raycast

For notes and documentation, I rely heavily on [Obsidian](https://obsidian.md/) for structured writing and linking thoughts. For quick jots, I still use Apple Notes. It’s fast and synced across all devices, which makes it convenient.

To manage menu bar clutter, I used to use [Dozer](https://github.com/Mortennn/Dozer). It might not be as advanced as some other tools in this space, but it’s open-source, minimalistic, and gets the job done. Unfortunately it's discontinued and was removed from Homebrew in the end of 2024. So I decided to try [Ice](https://github.com/jordanbaird/Ice). It's in active development and already looks solid. 

If you're using a MacBook, [AlDente](https://apphousekitchen.com/) is worth installing. It helps extend battery health by letting you control the charge limits.

### Debugging and Testing Tools

For network request debugging, I use [Proxyman](https://proxyman.io/). It’s my go-to tool for inspecting HTTP/HTTPS traffic in real time and is particularly useful when dealing with complex backend integrations.

As for API testing, I’ve settled on [Bruno](https://www.usebruno.com/). It’s a great alternative to tools like Postman, and it fits well into my workflow. Previously, I used [HTTPie](https://httpie.io/) and the REST Client plugin in VSCode, both of which are solid.

## 6. Additional Recommended Apps

When it comes to communication apps, I have [Telegram](https://telegram.org/), [Slack](https://slack.com/), [Zoom](https://zoom.us/), and [Discord](https://discord.com/). Recently, I came across [Legcord](https://github.com/legcord/legcord), a lightweight alternative desktop client for Discord. I haven't tried it yet, but I'm curious to see if it can improve the often resource-heavy experience of the official app, especially when it decides to run long updates at the most inconvenient times, which can be quite annoying.

For emails, I stick with the default Mail app on macOS. It’s simple, integrated, and gets the job done without any distractions.

For calendar management, I use [Notion Calendar](https://www.notion.so/calendar). One of the standout features is its pre-meeting notifications that pop up one minute before the call, offering a direct button to join. This is an excellent way to avoid missing or being late to meetings.

During deep work sessions, I turn on [Endel](https://endel.io/) to generate background soundscapes. Unlike music with lyrics, Endel’s ambient noise helps me stay focused without disrupting my thought process.

My personal task manager of choice is [Things 3](https://culturedcode.com/things/). I've been a fan since version 3 launched. It’s beautifully designed, efficient, and, _best of all_, requires only a one-time purchase. No subscriptions, which is rare these days and something I deeply appreciate.

I also keep [Android Studio](https://developer.android.com/studio) installed for the occasional cross-platform or Android-specific work and testing.

There are plenty of other apps and utilities I use more occasionally, but this post is already quite long, so I’ll leave those for another time.

## Wrapping Up

That's my setup for 2025! It's not a definitive checklist — just what works for me right now. Tools change, preferences evolve.

Got your own must-have apps or tips? I'd love to hear them — [ping me on X](https://x.com/honcharenko_eu) or drop a comment wherever you found this.

Happy coding!