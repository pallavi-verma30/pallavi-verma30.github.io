---
layout: post
title: "I built a bot to beat the bots"
subtitle: "I automated my job hunt to outrun an automated system. The hard part wasn't building it. It was keeping it honest."
date: 2026-06-08
tags: [AI, job hunting, building]
---

Somewhere in the last few years, job hunting quietly turned into one machine
talking to another. You send an application, and before a single human reads
it, an automated system scores it against the posting and decides whether you
exist. The rational response, since any one application is a long shot, is
volume: apply to as many as you can. But applying widely and tailoring each one
to the role pull in opposite directions, because tailoring is slow and the
payoff for any single submission is thin. So I did the obvious engineer thing.
If the gate was an automation, I would answer it with an automation.

The plan was simple on paper. A system that reads a job posting, checks it
against my actual background, and writes a resume tailored to that role, so I
could apply to more places without losing an evening to each one. Under the
hood it used the parts you'd expect, a language model to do the writing and
some glue to move things between steps. The interesting part, it turned out,
wasn't the writing at all. It was everything I had to do to stop the writing
from getting me into trouble.

Because the first thing I learned is that an AI asked to tailor a resume to a
job will tailor it a little too eagerly. Ask it to match a posting and it
matches the posting, confidently bending what I'd done until it fit the words on
the screen. It wasn't lying on purpose. It was being literal. It solved the
problem I had actually typed, make this resume fit this job, and quietly forgot
the problem underneath it: that I would have to sit in a room a week later and
defend every line to a human. The AI optimised for getting shortlisted. It had
no concept of getting found out.

Every posting, the same thing. I'd catch an overstatement, flag it, add a
correction, and the next job would produce a fresh one. I could have stopped
there, written one carefully worded prompt and babysat it forever. Instead I
built the correction in: rules that kept it anchored to things I had genuinely
done, and a pass that checked its own claims before handing them to me. Less
"please be honest," more scaffolding that made honesty the default, so it
didn't depend on me being sharp at 11pm.

Getting the jobs to the bot in the first place turned out to be the harder
fight. The big platforms block automated scraping, the email alerts I tried to
route around them were images pointing back to the same walls, and scraping
company sites directly reached some roles and missed a large chunk. I landed on
a semi-manual model, I find the listings, the bot does the eligibility check and
the tailoring, which is effective if not elegant, and taught me more about how
fenced-off the modern web has become than any tutorial would have.

---

And then, once it was working and honest, I noticed the thing I hadn't been
looking for. The resumes were true, but they weren't distinctive. They came out
in the same fluent, slightly weightless voice every AI writes in, the
"data-driven insights" and "operational excellence" and "cross-functional
collaboration" that I now can't unsee. Which is a problem, because recruiters
can't unsee it either. They read these by the hundred now, and a growing number
[say the generic AI voice is an instant tell](https://www.jobscan.co/blog/can-ats-detect-ai-resume/),
something they screen out rather than in. I had built a tool that fixed the lie
and walked straight into the cliché.

That's the part I keep coming back to. Fixing one failure mode only surfaced the
next. The AI never stopped doing exactly what I asked; it just never once did
what I meant. It will match a posting and forget the interview. It will write
truthfully and still write like a machine. The actual work was never the prompt.
It was holding on to the real goal, an application a human believes and I can
stand behind, and building the checks that keep a confident, fluent tool aimed
at that goal instead of the nearest convincing shortcut.

I still run it. I also still read every line before anything goes out, because
the one thing automating this taught me is that the moment you stop watching is
the moment it starts solving the wrong problem, beautifully.
