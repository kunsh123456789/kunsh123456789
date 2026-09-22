import type { Question, SubjectId } from '../../types'
import { BIOLOGY_QUESTIONS } from './biology'
import { CALCULUS_QUESTIONS } from './calculus'
import { CHEMISTRY_QUESTIONS } from './chemistry'
import { COMPUTER_SCIENCE_QUESTIONS } from './computerScience'
import { PHYSICS_QUESTIONS } from './physics'
import { US_HISTORY_QUESTIONS } from './usHistory'

export const QUESTION_BANKS: Record<SubjectId, Question[]> = {
  biology: BIOLOGY_QUESTIONS,
  calculus: CALCULUS_QUESTIONS,
  chemistry: CHEMISTRY_QUESTIONS,
  usHistory: US_HISTORY_QUESTIONS,
  computerScience: COMPUTER_SCIENCE_QUESTIONS,
  physics: PHYSICS_QUESTIONS,
}

export function shuffle<T>(items: T[]): T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export function drawQuestions(subjectId: SubjectId, count: number): Question[] {
  return shuffle(QUESTION_BANKS[subjectId]).slice(0, count)
}

export function drawOneQuestion(
  subjectId: SubjectId,
  excludeIds: string[],
  units?: string[],
): Question {
  const bank = QUESTION_BANKS[subjectId]
  const scoped = units ? bank.filter((q) => units.includes(q.unit)) : bank
  const fresh = scoped.filter((q) => !excludeIds.includes(q.id))
  const pool = fresh.length > 0 ? fresh : scoped.length > 0 ? scoped : bank
  return pool[Math.floor(Math.random() * pool.length)]
}
