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

- ancestry choices with availability flags for future playtest options
- combat, standard, and professional skill lists
- fixed core skills that start at 60 and stay outside the priority order
- the number of professional skills each character chooses
- repeatable professional skill families with named specialisations and custom entries
- the priority-array values used to assign final skill ratings
- skill-linked perks that unlock when skills reach 50+
- hidden future professional skills such as Combat Magic
- placeholder and custom perk text

Character drafts are saved in the browser with `localStorage`. The **Export PDF**
button opens the browser print dialog with an A4-optimized character sheet; choose
**Save as PDF** as the destination.
