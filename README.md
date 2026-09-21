# Apademia — AP Quest RPG

A browser RPG, inspired by games like Prodigy, that teaches AP class content
through exploration and battle. Walk your hero around an overworld map,
enter one of five AP "kingdoms," and fight themed monsters by answering
real AP-style practice questions. Correct answers deal damage; wrong
answers let the monster strike back.

## Subjects

- 🧬 AP Biology — Verdant Genome Forest
- 📐 AP Calculus AB — Derivative Peaks
- ⚗️ AP Chemistry — Bunsen Burner Bog
- 📜 AP US History — Founding Fathers Keep
- 💻 AP Computer Science A — Recursion Caverns

Each subject has its own question bank covering multiple units, with an
explanation shown after every answer.

## Core loop

1. Create a hero and pick a class (Logic Mage, Study Warrior, Research
   Ranger, or Archivist Scholar — each with different HP/attack/reward
   bonuses).
2. Walk around the overworld (arrow keys / WASD, or the on-screen D-pad)
   and step into a subject's zone to trigger a battle.
3. Answer multiple-choice questions to damage the monster; wrong answers
   cost you HP. Win to earn gold and XP; level up for more HP and attack.
4. Progress (level, gold, per-subject accuracy/streaks/wins) is saved to
   `localStorage` automatically.

## Development

```bash
npm install
npm run dev      # start the dev server
npm run build     # type-check and build for production
npm run lint      # run oxlint
```

Built with React, TypeScript, Vite, Tailwind CSS, and Zustand.
