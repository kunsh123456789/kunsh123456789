export type SubjectId =
  | 'biology'
  | 'calculus'
  | 'usHistory'
  | 'computerScience'
  | 'chemistry'
  | 'physics'

export interface Question {
  id: string
  unit: string
  prompt: string
  choices: string[]
  correctIndex: number
  explanation: string
}

export interface Monster {
  name: string
  emoji: string
  hp: number
}

export type Direction = 'up' | 'down' | 'left' | 'right'

export interface FbdCategory {
  label: string
  units: string[]
}

export type BattleStyle = 'quiz' | 'fbd'

export interface Subject {
  id: SubjectId
  name: string
  shortName: string
  fullApName: string
  emoji: string
  color: string
  glow: string
  zoneName: string
  zoneDescription: string
  mapPosition: { x: number; y: number }
  monsters: Monster[]
  battleStyle: BattleStyle
  fbdCategories?: Record<Direction, FbdCategory>
}

export type Gender = 'male' | 'female' | 'nonbinary'
export type HeightOption = 'short' | 'average' | 'tall'
export type HairStyle = 'bald' | 'short' | 'long' | 'ponytail' | 'curly' | 'mohawk'

export interface Appearance {
  gender: Gender
  height: HeightOption
  skinTone: string
  hairStyle: HairStyle
  hairColor: string
  outfitColor: string
}

export interface SubjectMastery {
  answered: number
  correct: number
  bestStreak: number
  battlesWon: number
}

export interface Player {
  name: string
  appearance: Appearance
  level: number
  xp: number
  xpToNext: number
  hp: number
  maxHp: number
  attack: number
  gold: number
  position: { x: number; y: number }
  mastery: Record<SubjectId, SubjectMastery>
}

export type BattleQuestionResult = 'correct' | 'incorrect' | null
export type BattlePhase = 'select' | 'question'

export interface BattleState {
  subjectId: SubjectId
  monster: Monster
  monsterHp: number
  monsterMaxHp: number
  phase: BattlePhase
  currentQuestion: Question | null
  usedQuestionIds: string[]
  lastDirection: Direction | null
  streak: number
  selectedChoice: number | null
  result: BattleQuestionResult
  playerHpStart: number
  goldEarned: number
  xpEarned: number
}

export type Screen =
  | 'title'
  | 'intro'
  | 'create'
  | 'overworld'
  | 'battle'
  | 'victory'
  | 'defeat'
