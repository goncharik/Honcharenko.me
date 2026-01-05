---
title: "Kotlin Multiplatform: Evolving Vision, Compose Sidestep"
date: 2025-11-17T11:53:10+01:00
draft: false
description: ""
categories:
- KMP
tags:
- Kotlin
- iOS
- Android
- KMP
---

![multiplatform](../../images/multiplatform.png)

Hey everyone!

I’ve been revisiting Kotlin Multiplatform lately, and I wanted to share some thoughts based on my experiments.

When I first started experimenting with Kotlin Multiplatform for about 4 years ago, it already had a strong vision: share your business logic across platforms while keeping UIs native and true to each device’s ecosystem. I really liked that pragmatic balance. It respected platform conventions and prioritized user experience over developer convenience.

Today, after returning to KMP with the now production-ready Compose Multiplatform for iOS, I can say the technology has matured impressively. It’s far better than it was in 2021 both in terms of stability and ecosystem support. But after building and experimenting with it again, I’ve come to a nuanced conclusion: while KMP itself is in great shape, Compose Multiplatform isn’t something I’d recommend for every project.

So here’s how it all started for me.

## The Original Promise

When I first explored KMP around 2021, the idea was compelling: write your networking, data models, and business logic once, then build platform-specific UIs using SwiftUI and Jetpack Compose. That balance between shared logic and native experience made perfect sense to me.

We even tried to adopt it in one of our projects, but back then, the ecosystem just wasn’t ready. Some crucial Android dependencies in our shared logic didn’t support KMP, so our proof of concept never made it to production. Still, it felt like the right direction.

So here’s what happened when I tried KMP again.

## Returning to KMP in 2025

Recently, I decided to give KMP another try and built a [demo application](https://github.com/goncharik/ReposBrowser-kmp) to see what changed. This time, things went much smoother - libraries worked across platforms, tooling felt stable, and the Kotlin ecosystem clearly matured.

Initially, I wanted to use **Compose Multiplatform** for the entire app. On Android, it was a great experience. Compose feels fast, modern, and perfectly integrated. But on iOS, the UI immediately felt off. Not broken, but _alien_ in subtle ways that iOS users would instantly sense.

I ended up taking a hybrid approach: most of the UI was written in Compose, but I used SwiftUI for the tab bar and navigation bar to match iOS 26’s new Liquid Glass design language. That mix turned out to be complicated. Trying to blend Material components from Compose with Apple’s native styles just didn’t work well. The further I went, the more I realized that even if you can make Material look like iOS, it’ll break again the next time Apple changes its design direction.

Here’s where Compose Multiplatform actually fits well.

## Where Compose Multiplatform Fits

Despite those struggles, I don’t think Compose Multiplatform is a mistake. It’s a logical and understandable evolution of KMP. A way to meet teams that want full cross-platform development. It’s not what I would use for consumer-facing apps, but I completely see its value in certain contexts.

For example:

- **Enterprise and internal tools**, where speed and maintainability matter more than perfect native feel.
- **Products built around a unified brand system**, like Google apps that use Material across platforms.
- **Prototypes or MVPs**, where shared UI can accelerate delivery and help validate ideas quickly.

In those cases, Compose Multiplatform can absolutely make sense.

## **Where Native Still Wins**

But for public-facing iOS apps, I’d still stick with native UI. SwiftUI and Jetpack Compose share similar declarative paradigms, so once you know one, learning the other is natural. The payoff is huge - you get apps that feel right on each platform.

From my own testing, Compose Multiplatform performs fine on iOS when done right. The issue isn’t performance - it’s feel. The animations, gestures, and subtle system integrations just aren’t the same. With design systems evolving fast (like Liquid Glass in iOS 26), this gap only becomes more noticeable.

## **Where KMP Truly Shines**

At this point, I’m convinced: **KMP is best used for sharing business logic** — networking, database layers, and state management. It’s stable, production-ready, and the developer experience is great. For UI, native remains the best choice when user experience matters.

My current preferred setup looks like this:

- **KMP** for business logic, networking, and models.
- **SwiftUI** for iOS UI.
- **Jetpack Compose** for Android UI.

That combination gives me clean architecture, shared logic, and still delivers apps that feel fully native.

## **The Balanced Perspective**

Compose Multiplatform isn’t a wrong turn but it’s just not the road I’d take for most consumer products. But for enterprise apps or internal tools, it’s a very capable solution. The important thing is to understand what trade-offs you’re making.

KMP today is in a great place. The technology finally matches the vision we all saw years ago. We just need to use each part (shared logic and shared UI) where it makes the most sense.

---

_**What are your thoughts on balancing cross-platform efficiency with native user experience? I'd love to hear your approach. [Ping me on X](**[**https://x.com/honcharenko_eu**](https://x.com/honcharenko_eu)**) or anywhere else you can find me, I’m always happy to chat!**_
