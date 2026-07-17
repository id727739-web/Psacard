# Claude Creature · Nine Tricks

Nine hand-built pixel-art animations of the little terracotta **Claude creature**
— the blocky guy with two black square eyes from the sticker.

Open `index.html` in any browser. No build step, no dependencies, no image
assets: every frame (the creature, its instruments, notes, sparks and floors) is
drawn live on a 240×160 pixel canvas and scaled up crisp.

## The nine tricks

| # | Trick | What happens |
|---|-------|--------------|
| 01 | **Guitar solo** | Headbangs and windmill-strums a pixel guitar, sparks and notes off the strings, amp on stage. |
| 02 | **Drum fill** | Kick drum pulse, alternating sticks on the toms, hi-hat and a crash every bar. |
| 03 | **Disco** | Travolta points on the beat under a mirror ball, colour-cycling dance floor. |
| 04 | **On the decks** | Headphones on, scratching a spinning record over a live EQ skyline. |
| 05 | **Kickflip** | Full trick cycle — crouch, ollie, board flip, dusty landing. |
| 06 | **Breakdance** | Two beats of toprock, then four clean backspins on the floor. |
| 07 | **Coffee break** | Lifts the mug, sips with closed eyes, sparkles on the happy sigh. |
| 08 | **Coding** | Hammers a laptop, code characters rain up, green ✓ flash when it ships. |
| 09 | **Rocket ride** | Rides a wobbling rocket through the starfield, waving. |

## Controls

- Click a trick in the list, or press keys **1**–**9**
- **Space** — play / pause · **Replay** — restart · **Speed** slider — 0.4×–1.8×
- **⬇ GIF** — downloads the current trick as a **transparent, perfectly looping
  GIF of just the creature** (480×320, 20 fps) that you can drag and drop
  anywhere. Pre-rendered copies of all nine live in [`gifs/`](gifs/).

## How it works

- One `creature()` routine draws the character from pixel blocks: outlined
  rounded body (`#da7757`), the two black square eyes (open / blink / shut /
  happy `^^`, optional blush), stubby legs and side nubs. Scenes feed it poses,
  squash and hand positions.
- All periodic motion runs at integer or half-integer Hz, so every scene loops
  cleanly at its 2 s or 4 s period — that's what makes the GIF exports seamless.
- The GIF exporter is self-contained: it re-renders the scene in "subject only"
  mode (no background) onto a transparent buffer, then encodes GIF89a with its
  own LZW compressor — no libraries.
- A small particle pool handles sparks, steam, dust, floating notes and code
  glyphs. If a script error ever occurs, it's surfaced on the stage card
  instead of failing silently.
