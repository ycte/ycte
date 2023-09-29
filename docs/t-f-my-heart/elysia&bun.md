---
lang: zh-CN
title: 5. Elysia & Bun
---
# Elysia & Bun

```bash
ycte@ycte-virtual-machine:~/Documents$ bun create elysia app

$ bun install
bun install v1.0.3 (25e69c71)
  🔍 Resolving [1/2] Author identity unknown

*** Please tell me who you are.

Run

  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

to set your account's default identity.
Omit --global to set the identity only in this repository.

fatal: unable to auto-detect email address (got 'ycte@ycte-virtual-machine.(none)')

[48.00ms] git
 + bun-types@1.0.3
 + elysia@0.7.15

 10 packages installed [112.47s]

[112.48s] bun install


[114.95s] bun create elysia

Come hang out in bun's Discord: https://bun.sh/discord

-----

A local git repository was created for you and dependencies were installed automatically.

Created elysia project successfully

# To get started, run:

  cd app
  bun run src/index.ts

ycte@ycte-virtual-machine:~/Documents$ cd app
ycte@ycte-virtual-machine:~/Documents/app$ bun run src/index.ts
🦊 Elysia is running at localhost:3000
```