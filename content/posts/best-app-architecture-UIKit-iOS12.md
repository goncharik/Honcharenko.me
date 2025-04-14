---
title: "The Best App Architecture for UIKit and iOS12 support: MVVM+C"
date: 2023-09-07T07:03:22+02:00
draft: false
description: ""
categories:
- Architecture
tags:
- Architecture
- MVVM
- UIKit
- iOS12
---


## Introduction

In the fast-paced world of mobile app development, one thing stands as a fundamental pillar of success: app architecture. It's the unsung hero behind the scenes that ensures your app runs smoothly, scales gracefully, and remains maintainable over time.

As iOS is getting more and more mature operating system, there are more and more good app architecture approaches appears that utilise new features of the OS. 

But today I want to talk about the case when you have some legacy app or the app that should support some old iOS versions like iOS 12 or even 10. In this case you are limited to use UIKit only instead of SwiftUI. But you have to have at least some modern flavor in you architecture so when legacy iOS support will drop you will have ability to easily adapt and integrate new features and advantages of modern iOS versions

So, why is this important? Well, UIKit is the framework that underpins the user interface of iOS apps, and iOS 12, while not the newest kid on the block, still boasts a significant user base in some countries.

From my experience the best app architecture in this case will be MVVM+C. And lets see what is it and why I think so.

## Demystifying MVVM+C

When it comes to iOS app architecture, few acronyms have generated as much buzz as MVVM+C.

MVVM+C stands for Model-View-ViewModel-Coordinator. Each component plays a distinct and vital role in shaping the architecture of your iOS app.

**Model**: At the core of MVVM+C is the Model. This represents the data and the business logic of your application. It encapsulates how your app's data is structured and manipulated, ensuring that it remains independent of the user interface. By decoupling the data layer from the presentation layer, the Model fosters reusability and maintainability.

**View**: The View in MVVM+C corresponds to the user interface elements of your app. These are the visible components that users interact with, such as buttons, text fields, and views. Unlike traditional MVC (Model-View-Controller), where the View often has a direct connection to the Controller, MVVM+C isolates the View, making it responsible solely for displaying information and responding to user input.

**ViewModel**: The ViewModel serves as the intermediary between the Model and the View. It transforms the data from the Model into a format that the View can easily render. It also handles user input and communicates with the Model when necessary. This separation of concerns ensures that the View remains lightweight and free from business logic, enhancing testability and reusability.

**Coordinator**: The Coordinator is the orchestrator of app navigation and flow. It manages the navigation stack and controls the transitions between different screens or ViewControllers. In MVVM+C, the Coordinator's role is to keep the navigation logic separate from the View and ViewModel, resulting in a more organized and scalable app structure.

## Why MVVM+C

Now that we've demystified the acronym, let's explore why MVVM+C is quite popular in the iOS development landscape.

**Clear Separation of Concerns**: MVVM+C enforces a strict separation of concerns, making it easier to maintain and test individual components of your app. This clarity in structure reduces the likelihood of spaghetti code and enhances code maintainability.

**Enhanced Testability**: With business logic encapsulated in the ViewModel, testing becomes a breeze. You can write unit tests for ViewModel functions independently, ensuring that your app's critical functionality remains robust and bug-free.

**Adaptability to Modern and Legacy Platforms**: MVVM+C is flexible enough to adapt to the evolving iOS ecosystem. Whether you're building a cutting-edge app for the latest iOS version or need to support legacy iOS 12 users, MVVM+C's modular structure makes it easier to manage compatibility.

## Benefits of Adopting MVVM+C for Your iOS App

Now that you're acquainted with the components and principles of MVVM+C, let's delve into the tangible benefits it offers when integrated into your iOS app.

**Improved Code Organization**: MVVM+C promotes a structured and organized codebase. Each component has a defined role, making it easier for developers to understand and collaborate on the project. This organization enhances long-term maintainability.

**Enhanced Collaboration**: The separation of concerns in MVVM+C allows different team members to focus on specific aspects of the app without stepping on each other's toes. Designers can work on the View, while developers concentrate on the ViewModel and Model, fostering collaboration and productivity.

**Streamlined Debugging**: When issues arise, pinpointing the problem becomes more straightforward with MVVM+C. Since each component has a dedicated responsibility, isolating the source of bugs is more efficient, reducing debugging time.

**Scalability**: As your app grows, MVVM+C's modular structure accommodates scalability seamlessly. Adding new features or making changes to existing ones becomes less risky, thanks to the architecture's maintainability.

In summary, adopting MVVM+C for your iOS app brings clear advantages in terms of code organization, collaboration, debugging, and scalability. Its ability to adapt to modern and legacy platforms makes it a compelling choice for developers looking to craft high-quality iOS applications. With the MVVM+C framework in your arsenal, you're better equipped to navigate the complex world of iOS app development with confidence and precision.

In future articles I'll review some tools and libraries that help in implementing MVVM+C in your projects and show some practical examples of how MVVM+C may look like in real life project and how it may be evolved for new technologies that we have with newer iOS versions such as Combine, SwiftUI, Swift Concurrency (async/await)
