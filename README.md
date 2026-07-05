# PuRe Playtest Character Builder

A dependency-free, data-driven character creation website for a homebrew TTRPG.

Live playtest: https://kybars.github.io/pure-playtest/

## Run it

Open `index.html` in a browser, or serve the folder with any static web server:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Customize the game

Edit the `GAME` object at the top of `app.js` to replace:

- born/origin lifepaths and explicit branching career prerequisites
- an in-app route guide with Born-path openings and career requirements
- ancestry choices with availability flags for future playtest options
- 25 standard and 25 professional skills
- 300 skill points per lifepath with tiered advancement costs
- features and feature costs

Character drafts are saved in the browser with `localStorage`. The **Export PDF**
button opens the browser print dialog with an A4-optimized character sheet; choose
**Save as PDF** as the destination.
