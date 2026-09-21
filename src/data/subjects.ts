import type { AvatarClass, Subject } from '../types'

export const MAP_WIDTH = 13
export const MAP_HEIGHT = 9
export const HUB_POSITION = { x: 6, y: 4 }

export const SUBJECTS: Subject[] = [
  {
    id: 'biology',
    name: 'Biology',
    shortName: 'BIO',
    fullApName: 'AP Biology',
    emoji: '🧬',
    color: '#22c55e',
    glow: 'rgba(34,197,94,0.55)',
    zoneName: 'Verdant Genome Forest',
    zoneDescription: 'Cells, evolution, and ecosystems lurk between the trees.',
    mapPosition: { x: 2, y: 2 },
    monsters: [
      { name: 'Mitosis Mite', emoji: '🦠', hp: 30 },
      { name: 'Photosynthesis Treant', emoji: '🌳', hp: 40 },
      { name: 'Evolution Wyrm', emoji: '🐉', hp: 55 },
    ],
  },
  {
    id: 'calculus',
    name: 'Calculus',
    shortName: 'CALC',
    fullApName: 'AP Calculus AB',
    emoji: '📐',
    color: '#3b82f6',
    glow: 'rgba(59,130,246,0.55)',
    zoneName: 'Derivative Peaks',
    zoneDescription: 'A jagged summit where limits and slopes rule the air.',
    mapPosition: { x: 10, y: 2 },
    monsters: [
      { name: 'Limit Golem', emoji: '🗿', hp: 32 },
      { name: 'Tangent Gargoyle', emoji: '🦇', hp: 42 },
      { name: 'Integral Dragon', emoji: '🐲', hp: 58 },
    ],
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    shortName: 'CHEM',
    fullApName: 'AP Chemistry',
    emoji: '⚗️',
    color: '#f97316',
    glow: 'rgba(249,115,22,0.55)',
    zoneName: 'Bunsen Burner Bog',
    zoneDescription: 'Bubbling reactions and volatile compounds swirl in the mist.',
    mapPosition: { x: 6, y: 1 },
    monsters: [
      { name: 'Mole Rat', emoji: '🐀', hp: 28 },
      { name: 'Bonding Beast', emoji: '👾', hp: 40 },
      { name: 'Equilibrium Elemental', emoji: '🔥', hp: 54 },
    ],
  },
  {
    id: 'usHistory',
    name: 'US History',
    shortName: 'HIST',
    fullApName: 'AP US History',
    emoji: '📜',
    color: '#a855f7',
    glow: 'rgba(168,85,247,0.55)',
    zoneName: 'Founding Fathers Keep',
    zoneDescription: 'A grand castle where centuries of American history are guarded.',
    mapPosition: { x: 2, y: 6 },
    monsters: [
      { name: 'Colonial Sentry', emoji: '🛡️', hp: 30 },
      { name: 'Revolution Redcoat', emoji: '🎖️', hp: 42 },
      { name: 'Gilded Age Titan', emoji: '🏛️', hp: 56 },
    ],
  },
  {
    id: 'computerScience',
    name: 'Computer Science',
    shortName: 'CS',
    fullApName: 'AP Computer Science A',
    emoji: '💻',
    color: '#06b6d4',
    glow: 'rgba(6,182,212,0.55)',
    zoneName: 'Recursion Caverns',
    zoneDescription: 'Loops within loops echo through these glowing tunnels.',
    mapPosition: { x: 10, y: 6 },
    monsters: [
      { name: 'Null Pointer Ghost', emoji: '👻', hp: 30 },
      { name: 'Infinite Loop Hydra', emoji: '🐙', hp: 44 },
      { name: 'Stack Overflow Kraken', emoji: '🦑', hp: 58 },
    ],
  },
]

export const AVATAR_CLASSES: AvatarClass[] = [
  {
    id: 'mage',
    name: 'Logic Mage',
    emoji: '🧙',
    description: 'Channels arcane formulas into devastating spell-damage.',
    bonusHp: 0,
    bonusAttack: 3,
  },
  {
    id: 'warrior',
    name: 'Study Warrior',
    emoji: '⚔️',
    description: 'Tanky and relentless — built to outlast tough exams.',
    bonusHp: 15,
    bonusAttack: 0,
  },
  {
    id: 'ranger',
    name: 'Research Ranger',
    emoji: '🏹',
    description: 'Balanced and quick, thrives on streaks of correct answers.',
    bonusHp: 5,
    bonusAttack: 1,
  },
  {
    id: 'scholar',
    name: 'Archivist Scholar',
    emoji: '📚',
    description: 'Earns bonus gold and XP from every correct answer.',
    bonusHp: 5,
    bonusAttack: 1,
  },
]

export function getSubject(id: string): Subject | undefined {
  return SUBJECTS.find((s) => s.id === id)
}
