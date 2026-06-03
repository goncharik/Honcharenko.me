---
title: "The Skill Is in the Workflow, Not the Prompt"
date: 2026-06-02T15:37:21+02:00
draft: false # Set 'false' to publish
description: "AI really can make a task 10x faster but only once you've built the workflow around it. The most valuable engineering skill now isn't prompting, it's building and maintaining the tooling that makes the speedup show up on demand."
categories:
- Tools
tags: ["ai", "claude-code", "workflow", "automation", "productivity"]
---

{{< img src="header.png" alt="AI coding workflow rails: ticket, plan, implementation, review, commit, landing" size-method="Fit" size-format="1600x1600" class="img-wide" >}}

Hey everyone!

I've shipped fixes in twenty minutes that used to eat half a day. When the context is loaded and the tooling is in place, AI genuinely collapses the time a task takes. The 10x is not a lie, it's just conditional.

But I'm not shipping ten times more work, and I'd bet you aren't either. The honest number, measured across a real week, is closer to 2-3 times. That gap is between the speedup you see in a single task and the speedup you actually keep. And it has a simple cause: the 10x only shows up when the rails are already there, and building the rails costs you time you'll never see in a demo.

The important shift is not that engineers stop doing engineering work. It's that more of the work moves from typing code to designing the system that produces, checks, lands, and improves code.

## The 10x is conditional

A coding agent flies when the rails around the task are already in place: the context is loaded, the branch exists, the commit format is handled, the build and review steps are one command away. Under those conditions, yes, the work that mattered shrinks to minutes.

Remove any of those conditions and watch the multiplier collapse. You hit the wrong directory. You hand-format the commit message for the hundredth time. You juggle branches. You re-explain the same context you explained yesterday. Each one is a small tax, and they compound. The agent is still fast in the moment, but you're babysitting it through everything around the fast part, and your 10x quietly becomes a 1.5-2x with extra steps.

So if you want the per-task 10x *reliably*, not as a lucky demo but as your default - you have to build and maintain the rails that make it reliable. That building is real engineering work, and it's never free.

## A small example with a real bill

Here's one rail I built some time ago. My tasks all run the same loop: a Jira ticket, a plan, an isolated workspace to implement in, a manual check in Xcode, a commit in a strict format, and that work landed on whatever branch I'm currently on. I automated it into three Claude Code commands:

```
/wt:task   <jira-url> <context>   → plan it, I approve, it implements in a worktree
/wt:verify                         → opens the project in Xcode + shows the diff
/wt:land                           → commit in my format, rebase, fast-forward onto my branch
```

That's it. Run them in sequence and a chunk of my day that used to be manual, repetitive, and occasionally fumbled is now consistent and automatic.

The value is not that these commands are clever. The value is that they remove decisions I used to make over and over again: where to work, how to structure the plan, when to stop for review, how to format the commit, and how to land safely.

It also was not a five-minute job. My first design was wrong. I tried to cram the whole loop into one command and ignored the two points where I actually have to be present: reviewing the plan, and verifying the fix by running the app. Then the tool fought me: it couldn't switch into the worktree folder the way I'd assumed, so I had to go learn its native worktree support and rebuild the approach around how the tool actually works, not how I imagined it did. Add in getting the commit format right and the branch-landing logic safe, and it was an evening. An evening I spent being *slower*, so that future tasks would be *faster*.

That's the trade in miniature. The investment is worth it. It pays back in saved minutes and a whole class of mistakes that just stop happening. But it's an investment, with an upfront cost, and it comes out of the same hours the 10x was supposed to give me.

## The math the demo leaves out

Now zoom out and add it all up across a week. The per-task speedup is enormous. But a steady, non-trivial slice of my time goes into building these rails, fixing them, and extending them. For me, net throughput, counted honestly, lands around 2-3x.

And that's a great number. I'm not complaining, 2-3x sustained is an enormous edge. The point is just to be clear-eyed about where the other 7-8x went. It didn't disappear into nothing; it got reinvested into the machinery that makes the 10x repeatable. The engineers who actually compound their advantage with these tools aren't the ones with the cleverest prompts. They're the ones who treat workflow-building as part of the job and keep paying into it.

## It's never "done," and that's the point

The three-command setup above is deliberately basic. It's a starting point, not a finished system. As my needs grow it'll grow with them: project-specific variants, hooks into CI and Fastlane so the strict commit format actually feeds something downstream, cleanup steps I haven't needed yet. Some of it I'll rebuild from scratch when the underlying tool ships a feature that obsoletes my workaround, which happens constantly.

The next rail may be an automated review pass. Before a diff ever reaches my eyes, a second agent should review it against the plan and the codebase, flag the obvious stuff, and send it back to be fixed. The goal isn't to replace my judgment. It's to raise the floor on what lands on my desk, so my review starts from "is this the right approach?" instead of "did it leave a debug print in?"

And if that reviewer keeps improving, the honest possibility is that at some point I trust it enough to shrink the manual review gate drastically, or skip it outright on low-risk changes. That's a real shift: the workflow stops only *adding* steps and starts moving work from human to machine once the automation has earned it.

That ongoing maintenance is not a sign I did it wrong. It's the nature of the work now. The tools move fast enough that a workflow you write down and never revisit rots within months. So the tooling investment isn't a one-time setup cost you amortize to zero - it's a recurring line item. Which is exactly why the multiplier settles at 2-3x and stays there, instead of climbing toward the headline number as you'd hope.

## The bill is the job

When someone shows you a 10x demo, believe it, and then ask what they're not showing. The task really did get 10x faster. The engineer behind it is maybe 2-3x faster, because they're carrying the cost of the rails that make the 10x show up on demand.

If there's a single takeaway, it's this: budget for the tooling. Treat building and maintaining your AI workflow as first-class work, not a distraction from the "real" work. Now it's the thing that determines whether your real work is 2x or 10x.

The human work doesn't vanish. It moves up a level: from writing every line, to designing the system that produces, checks, lands, and improves the work; from reviewing every diff, to deciding which reviews you can safely stop doing.

Start small, like three commands that automate one loop you run all day. Then keep reinvesting, because the loop will change, the tools will change, and the bill will keep arriving. That bill *is* the job now. Pay it on purpose.
