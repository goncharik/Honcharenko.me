---
title: "Simplifying Mobile App Localization with Google Sheets"
date: 2025-04-14T13:03:22+02:00
draft: false
description: ""
categories:
- Localization
tags:
- Localization
- Spreadsheets
- iOS
- Android
- Open source
---

Hey everyone!

Tired of copy-pasting translations between iOS and Android? Me too.

If you're a mobile dev juggling both platforms, you know the drill: updating `.strings`, `.stringsdict`, `.xml` files, handling plurals across both systems... it's tedious.

I ran into this pain point a lot. I checked out some tools, but most were too complex, pricey, or both. I just wanted something simple that used what I already had: Google Sheets. Most translation teams or clients are comfortable with spreadsheets anyway, right?

Now, I should give credit where it's due – I was definitely inspired by an older script called [localizable-sheet-script](https://github.com/cobeisfresh/localizable-sheet-script) by COBE (props to them!). It was a great starting point! However, it hasn't seen updates in quite a while, and mobile development moves fast. I needed something that handled modern formats like Apple's `.xcstrings` and had more robust plural support baked in.

So, I decided to build on that idea and create my own updated version: [google-sheets-l10n-exporter](https://github.com/goncharik/google-sheets-l10n-exporter).

### What it does:

- You set up a Google Sheet with columns for iOS keys, Android keys, and language columns (like English, German, Spanish).
- Run the custom script via the “Custom Export” menu.
- Done! You get localization files for both platforms, ready to drop into your project.

It exports:

- **Android:** strings.xml with plurals and string arrays ([] in key).
- **iOS (Legacy):** Localizable.strings and Localizable.stringsdict.
- **iOS (Modern):** Localizable.xcstrings — a single JSON file for all strings and plurals, perfect for Xcode 15+ projects.

### Why it’s worth using:

- It’s free and uses tools you already have.
- Your sheet becomes the single source of truth.
- No subscription platforms.
- Clean plural support using key##{quantity} style.
- Configurable columns and language codes.

If you've wrestled with outdated scripts or manual syncing, give this a try. It's been a huge time-saver for me.

You can find all the setup instructions and the sheet format details [on GitHub in the README.md](https://github.com/goncharik/google-sheets-l10n-exporter).

Hope it smooths out your localization workflow! Feel free to open any issues or PRs on GitHub and let me know if you use it or improve it.

Cheers!
