# Claude Creature · Five Tricks

Five hand-built pixel-art animations of the little terracotta **Claude creature**
— the blocky guy with two black square eyes from the sticker — doing fun stuff.

Open `index.html` in any browser. No build step, no dependencies, no image
assets: every frame (the creature, its instruments, notes, sparks and floors) is
drawn live on a 240×180 pixel canvas and scaled up crisp.

## The five tricks

| # | Trick | What happens |
|---|-------|--------------|
| 01 | **Guitar solo** | Headbangs and shreds a pixel guitar while music notes drift up off the strings. |
| 02 | **Drum fill** | Alternating sticks on the toms, cymbal shimmering on the off-beat. |
| 03 | **Disco** | Shuffles across a colour-cycling dance floor under a spinning mirror ball. |
| 04 | **On the decks** | Headphones on, scratching a spinning record over a live EQ. |
| 05 | **Kickflip** | Rolls in, pops an ollie and flips the board on a loop. |

## Controls

- Click a trick in the list, or press keys **1**–**5**
- **Space** — play / pause
- **Replay** — restart the current loop with the mosaic reveal
- **Speed** slider — 0.4×–1.8×

## How it works

- One `creature()` routine draws the character from simple pixel blocks: rounded
  body (`#da7757`), the two iconic black square eyes (with blink / happy `^^`
  states), stubby legs and side arms. Each scene feeds it a pose, a squash/bounce
  and hand positions.
- Instruments and props (guitar, drum kit, turntable, skateboard, disco floor)
  are drawn with plain pixel rectangles and discs — chunky diagonals via
  stair-stepping, spins via `sin`/`cos`, so everything stays grid-crisp.
- A small particle pool handles sparks and floating music notes.
- Respects `prefers-reduced-motion` (renders one static pose instead of animating).
