---
title: "How I Use AI to Add Localizations to Mobile Apps in Minutes"
date: 2025-05-06T07:03:55+02:00
draft: false # Set 'false' to publish
description: ""
categories:
- Localization
tags:
- Localization
- Spreadsheets
- iOS
- Android
- AI
- SwiftGen
- Pet Projects
---

Hey again!

In my [previous post](/posts/simplifying-mobile-app-localization-with-google-sheets/), I shared my script, [google-sheets-l10n-exporter](https://github.com/goncharik/google-sheets-l10n-exporter), designed to simplify generating localization files for iOS and Android directly from a Google Sheet. It was born out of the need to escape the tedious manual syncing of `.strings`, `.stringsdict`, `.xml`, and now `.xcstrings` files.

Today, I want to dive deeper and show you exactly how I use this setup for my own pet projects, adding a layer of AI for translation and SwiftGen for type safety on iOS. This workflow keeps things fast, cheap, and surprisingly robust for smaller-scale apps.

![go deeper image meme](https://i.kym-cdn.com/photos/images/newsfeed/000/384/176/d2f.jpg)
### The Foundation: Google Sheet

As outlined before, the Google Sheet is the heart of the operation. It holds the keys and translations. But I add one small tweak for my personal workflow:

- **Column A: Notes:** The very first column isn't for a key or a language; it's for Notes. This is super handy for adding context about a specific string – maybe where it's used, character limits, or a reminder for future me (or a hypothetical future translator). It helps clarify ambiguity, especially when revisiting translations later or feeding them to an AI.
- The rest of the sheet follows the structure needed by the exporter: iOS Key, Android Key, en (English), de (German), etc.

### Adding AI to the Mix: Fast Translations

Pet projects usually don't have thousands of strings. Often, it's under 500, which is manageable for quick AI translation, especially when you can verify some of the output. Here’s my process:

1. **Base Languages & Proofreading:** My primary language is English (en). I want to support Ukrainian (uk) and Russian (ru) as well, languages I know well.
    - I copy the English strings from the en column.
    - I paste them into an AI chat tool (like ChatGPT, Claude, Gemini, etc.).
    - I prompt something like: _"Translate the following English text into Ukrainian. Keep the meaning and context suitable for a mobile app."_ (Repeat for Russian).
    - **Crucially:** Since I understand Ukrainian and Russian, I thoroughly proofread the AI's output. AI is great, but it can miss nuances, use slightly wrong terminology, or misunderstand the context (that Notes column can sometimes help guide it!). I correct any mistakes directly.
2. **Expanding to Other Languages (Using Multilingual Context)**
	- Once `en`, `uk`, and `ru` are ready and verified, I use them **together** to expand into additional languages like German (`de`), French (`fr`), Spanish (`es`), Czech (`cs`), Polish (`pl`), Chinese (`zh-Hans`), etc.
	- **Pro tip:** I start a **new chat per target language** for better context retention.
	- I paste all three language columns (English, Ukrainian, Russian) into the chat and prompt the AI with something like:  _"Translate the following app UI text into German. Use the English as the base and consider the Ukrainian and Russian translations as additional context to preserve meaning and tone."_
	- This cross-lingual triangulation helps the AI better resolve meaning, especially for idiomatic expressions or ambiguous labels.
	- Since I don’t speak these languages fluently, I do a light review (check for length, obvious formatting issues, or terms that look off) before pasting the results into the sheet.
3. **Back to the Sheet:** I paste the translations into their respective language columns.

### Generating the Files

This is where the magic from the previous post comes in:

1. Open the Google Sheet.
2. Go to the Custom Export menu (added by the script).
3. Run the export function.
4. Copy generated translations, all neatly organized by language.
5. Paste these translations into the localization files of the project.
6. PROFIT!

### The iOS Bonus: Type Safety with SwiftGen

Manually typing string keys like "welcome_message_title" in code is error-prone. A typo means the wrong string (or no string) appears at runtime, and the compiler won't warn you. This is where [SwiftGen](https://github.com/SwiftGen/SwiftGen)  shines on iOS.

- **What it does:** SwiftGen is a tool that scans your project's resources (like localization files) and generates Swift code providing type-safe access to them.

- **How I use it:** After exporting the localization files using my script and placing them in the Xcode project (specifically the .xcstrings file for modern projects, or .strings files), I run SwiftGen from command line.

- **The Result:** SwiftGen creates a file (often called Strings.swift or similar, based on your configuration) containing an enum or struct, typically named L10n. Instead of NSLocalizedString("welcome_message_title", comment: ""), I can simply write L10n.welcomeMessageTitle.

**Benefits of using SwiftGen here:**

1. **Compile-Time Checks:** If you mistype a key (L10n.welcomeMessageTitel), the compiler throws an error. No more runtime surprises!
2. **Autocomplete:** Xcode helps you find the right key.
3. **Refactoring:** Renaming a key in your generated Swift code can help find all its usages.

### Why This Workflow Rocks for Pet Projects

- **Cost-Effective:** Google Sheets is free, the exporter script is free, AI tools often have generous free tiers suitable for <500 strings, and SwiftGen is open-source.
- **Fast:** AI handles the bulk translation work quickly. The script generates files in seconds.
- **Single Source of Truth:** The Google Sheet remains the central place for all text.
- **Leverages Existing Tools:** Uses familiar spreadsheet interfaces.
- **Combines AI Speed with Human Oversight:** Allows for crucial proofreading for languages you know.
- **Reduces Errors:** SwiftGen adds a layer of compile-time safety on iOS.

**Google Sheets + Exporter Script + AI + SwiftGen** combo has taken the pain out of localization in my personal apps.

Of course, for large-scale commercial projects with high linguistic quality demands, professional translators and dedicated localization platforms might be necessary. But for the indie dev or the pet project enthusiast, this workflow hits a sweet spot of efficiency, cost, and quality.

Give it a try and let me know how it works for you!

👉 [google-sheets-l10n-exporter on GitHub](https://github.com/goncharik/google-sheets-l10n-exporter)

**Happy coding!**
