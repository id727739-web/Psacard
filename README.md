# Claude Mannequin · Ultracode Effects

Five hand-built pixel-art animations of the Claude **mannequin** — the little
poseable orange figure you see hammering away on the Ultracode card while a big
coding task plans itself.

Open `index.html` in any browser. No build step, no dependencies, no image
assets — every frame (mannequin, sparks, orbs, rocket, bugs) is drawn live on a
240×180 pixel canvas and scaled up crisp.

## The five loops

| # | Mode | What happens |
|---|------|--------------|
| 01 | **Ultracode / Forge** | Mannequin hammers a glowing workpiece, gold sparks fly on each strike. |
| 02 | **Ship it / Deploy** | Rides the deploy rocket up through a drifting starfield with a flame exhaust. |
| 03 | **Parallel** | Juggles three coloured task orbs in a continuous arc. |
| 04 | **Debug** | Mallet out, squashing pixel bugs that scuttle in from the edge. |
| 05 | **Overclock** | Charges a power-up aura, the screen shakes, lightning cracks at the peak. |

## Controls

- Click a mode in the list, or press keys **1**–**5**
- **Space** — play / pause
- **Replay** — restart the current loop with the mosaic reveal
- **Speed** slider — 0.4×–1.8×

## How it works

- A single poseable `mannequin()` routine draws the wooden-figure character from
  articulated ball-joints (head, spine, two-segment arms and legs). Every scene
  just feeds it different joint angles over time.
- Limbs are pixel capsules (discs stamped along each bone), so any pose stays
  authentically blocky.
- A lightweight particle pool handles sparks, exhaust, orbs and bug explosions.
- Respects `prefers-reduced-motion` (renders a single static pose instead of animating).
