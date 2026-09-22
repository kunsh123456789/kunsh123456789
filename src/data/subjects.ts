import type { Subject } from '../types'

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
    battleStyle: 'quiz',
    monsters: [
      { name: 'Mitosis Mite', emoji: '🦠', hp: 30, archetype: 'blob' },
      { name: 'Photosynthesis Treant', emoji: '🌳', hp: 40, archetype: 'golem' },
      { name: 'Evolution Wyrm', emoji: '🐉', hp: 55, archetype: 'winged' },
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
    battleStyle: 'quiz',
    monsters: [
      { name: 'Limit Golem', emoji: '🗿', hp: 32, archetype: 'golem' },
      { name: 'Tangent Gargoyle', emoji: '🦇', hp: 42, archetype: 'winged' },
      { name: 'Integral Dragon', emoji: '🐲', hp: 58, archetype: 'winged' },
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
    battleStyle: 'quiz',
    monsters: [
      { name: 'Mole Rat', emoji: '🐀', hp: 28, archetype: 'blob' },
      { name: 'Bonding Beast', emoji: '👾', hp: 40, archetype: 'golem' },
      { name: 'Equilibrium Elemental', emoji: '🔥', hp: 54, archetype: 'spirit' },
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
    battleStyle: 'quiz',
    monsters: [
      { name: 'Colonial Sentry', emoji: '🛡️', hp: 30, archetype: 'golem' },
      { name: 'Revolution Redcoat', emoji: '🎖️', hp: 42, archetype: 'golem' },
      { name: 'Gilded Age Titan', emoji: '🏛️', hp: 56, archetype: 'golem' },
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
    battleStyle: 'quiz',
    monsters: [
      { name: 'Null Pointer Ghost', emoji: '👻', hp: 30, archetype: 'spirit' },
      { name: 'Infinite Loop Hydra', emoji: '🐙', hp: 44, archetype: 'winged' },
      { name: 'Stack Overflow Kraken', emoji: '🦑', hp: 58, archetype: 'winged' },
    ],
  },
  {
    id: 'physics',
    name: 'Physics',
    shortName: 'PHYS',
    fullApName: 'AP Physics 1',
    emoji: '🧲',
    color: '#ef4444',
    glow: 'rgba(239,68,68,0.55)',
    zoneName: "Newton's Proving Grounds",
    zoneDescription: 'Forces, motion, and energy collide on this battle-scarred field.',
    mapPosition: { x: 6, y: 7 },
    battleStyle: 'fbd',
    monsters: [
      { name: 'Friction Fiend', emoji: '🌀', hp: 32, archetype: 'blob' },
      { name: 'Gravity Golem', emoji: '🪨', hp: 44, archetype: 'golem' },
      { name: 'Momentum Menace', emoji: '💥', hp: 58, archetype: 'winged' },
    ],
    fbdCategories: {
      up: { label: 'Kinematics', units: ['Kinematics'] },
      down: { label: "Forces & Newton's Laws", units: ["Newton's Laws & Forces"] },
      left: { label: 'Energy & Work', units: ['Energy & Work'] },
      right: { label: 'Momentum & Circular Motion', units: ['Momentum & Circular Motion'] },
    },
  },
]

export function getSubject(id: string): Subject | undefined {
  return SUBJECTS.find((s) => s.id === id)
}
