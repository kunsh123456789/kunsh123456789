import type { Appearance, Gender, HairStyle, HeightOption } from '../types'

export const SKIN_TONES = ['#ffe0bd', '#f1c27d', '#e0ac69', '#c68642', '#8d5524', '#5a3825']

export const HAIR_COLORS = ['#1c1c1c', '#3b2314', '#7a4a1e', '#b8860b', '#d94f4f', '#e8e8e8', '#6b3fa0']

export const OUTFIT_COLORS = ['#2563eb', '#dc2626', '#16a34a', '#a855f7', '#f97316', '#0891b2', '#1f2937']

export const GENDER_OPTIONS: { id: Gender; label: string }[] = [
  { id: 'female', label: 'Female' },
  { id: 'male', label: 'Male' },
  { id: 'nonbinary', label: 'Nonbinary' },
]

export const HEIGHT_OPTIONS: { id: HeightOption; label: string }[] = [
  { id: 'short', label: 'Short' },
  { id: 'average', label: 'Average' },
  { id: 'tall', label: 'Tall' },
]

export const HAIR_STYLES: { id: HairStyle; label: string }[] = [
  { id: 'bald', label: 'Bald' },
  { id: 'short', label: 'Short' },
  { id: 'long', label: 'Long' },
  { id: 'ponytail', label: 'Ponytail' },
  { id: 'curly', label: 'Curly' },
  { id: 'mohawk', label: 'Mohawk' },
]

export const DEFAULT_APPEARANCE: Appearance = {
  gender: 'nonbinary',
  height: 'average',
  skinTone: SKIN_TONES[1],
  hairStyle: 'short',
  hairColor: HAIR_COLORS[0],
  outfitColor: OUTFIT_COLORS[0],
}
