import type { Question } from '../../types'

export const CALCULUS_QUESTIONS: Question[] = [
  {
    id: 'calc-1',
    unit: 'Limits & Continuity',
    prompt: 'What is lim(x→2) (x² - 4) / (x - 2)?',
    choices: ['0', '2', '4', 'Undefined'],
    correctIndex: 2,
    explanation:
      'Factor: (x²-4)/(x-2) = (x-2)(x+2)/(x-2) = x+2 for x≠2. As x→2, this approaches 4.',
  },
  {
    id: 'calc-2',
    unit: 'Limits & Continuity',
    prompt: 'A function is continuous at x = c if:',
    choices: [
      'The function is defined only near x = c',
      'lim(x→c) f(x) exists but does not need to equal f(c)',
      'lim(x→c) f(x) exists and equals f(c)',
      'f\'(c) exists',
    ],
    correctIndex: 2,
    explanation:
      'Continuity at a point requires the limit to exist AND equal the function\'s value at that point.',
  },
  {
    id: 'calc-3',
    unit: 'Differentiation: Definition & Basics',
    prompt: 'What is the derivative of f(x) = 3x⁴ - 5x + 7?',
    choices: ['12x³ - 5', '12x³ + 7', '3x³ - 5', '12x³ - 5x'],
    correctIndex: 0,
    explanation: 'Using the power rule: d/dx[3x⁴]=12x³, d/dx[-5x]=-5, d/dx[7]=0.',
  },
  {
    id: 'calc-4',
    unit: 'Differentiation: Composite Functions',
    prompt: 'Using the chain rule, what is d/dx[sin(x²)]?',
    choices: ['cos(x²)', '2x·cos(x²)', 'cos(2x)', '2x·sin(x²)'],
    correctIndex: 1,
    explanation:
      'Chain rule: derivative of outer function cos(x²) times derivative of inner function (2x) gives 2x·cos(x²).',
  },
  {
    id: 'calc-5',
    unit: 'Differentiation: Composite Functions',
    prompt: 'What is the derivative of f(x) = (3x + 1)(x² - 2) using the product rule?',
    choices: [
      '3x² - 2',
      '3(x² - 2) + (3x + 1)(2x)',
      '(3x+1)(2x)',
      '3(2x)',
    ],
    correctIndex: 1,
    explanation:
      'Product rule: f\'(x) = u\'v + uv\' where u=3x+1, v=x²-2. So f\'(x) = 3(x²-2) + (3x+1)(2x).',
  },
  {
    id: 'calc-6',
    unit: 'Applications of Derivatives',
    prompt: 'A particle\'s position is s(t) = t³ - 6t² + 9t. At what time(s) is the particle at rest (velocity = 0)?',
    choices: ['t = 0 only', 't = 1 and t = 3', 't = 2 only', 't = 0 and t = 9'],
    correctIndex: 1,
    explanation:
      'v(t) = s\'(t) = 3t² - 12t + 9 = 3(t² - 4t + 3) = 3(t-1)(t-3), so velocity is zero at t=1 and t=3.',
  },
  {
    id: 'calc-7',
    unit: 'Applications of Derivatives',
    prompt: 'A critical point of a differentiable function occurs where:',
    choices: [
      'f(x) = 0',
      'f\'(x) = 0 or f\'(x) is undefined',
      'f\'\'(x) = 0',
      'The function has a vertical asymptote',
    ],
    correctIndex: 1,
    explanation:
      'Critical points are locations in the domain where the derivative is zero or does not exist — candidates for local extrema.',
  },
  {
    id: 'calc-8',
    unit: 'Applications of Derivatives',
    prompt: 'If f\'\'(x) > 0 on an interval, the graph of f is:',
    choices: ['Decreasing', 'Concave up', 'Concave down', 'Linear'],
    correctIndex: 1,
    explanation:
      'A positive second derivative means the slope is increasing, so the curve bends upward — concave up.',
  },
  {
    id: 'calc-9',
    unit: 'Integration: Basics',
    prompt: 'What is ∫(4x³ + 2x) dx?',
    choices: ['x⁴ + x² + C', '4x⁴ + 2x² + C', 'x⁴ + 2x² + C', '12x² + 2 + C'],
    correctIndex: 0,
    explanation: 'Reverse power rule: ∫4x³dx = x⁴, ∫2x dx = x², plus constant of integration C.',
  },
  {
    id: 'calc-10',
    unit: 'Integration: Fundamental Theorem',
    prompt: 'The Fundamental Theorem of Calculus connects:',
    choices: [
      'Limits and continuity',
      'Derivatives and integrals',
      'Sequences and series',
      'Related rates and optimization',
    ],
    correctIndex: 1,
    explanation:
      'The FTC shows that differentiation and integration are inverse processes, letting us evaluate definite integrals using antiderivatives.',
  },
  {
    id: 'calc-11',
    unit: 'Integration: Definite Integrals',
    prompt: 'What is ∫₀² (3x²) dx?',
    choices: ['4', '6', '8', '12'],
    correctIndex: 2,
    explanation: 'Antiderivative is x³. Evaluate: (2)³ - (0)³ = 8.',
  },
  {
    id: 'calc-12',
    unit: 'Applications of Integration',
    prompt: 'The definite integral of a velocity function v(t) from t=a to t=b represents:',
    choices: [
      'Instantaneous speed at time b',
      'Total displacement from a to b',
      'The particle\'s acceleration',
      'The maximum velocity reached',
    ],
    correctIndex: 1,
    explanation:
      'Integrating velocity over time gives net displacement (change in position) over that interval.',
  },
  {
    id: 'calc-13',
    unit: 'Differential Equations',
    prompt: 'The differential equation dy/dx = ky models:',
    choices: [
      'Linear growth',
      'Exponential growth or decay',
      'Quadratic motion',
      'Constant functions only',
    ],
    correctIndex: 1,
    explanation:
      'dy/dx = ky has general solution y = Ce^(kt), the classic exponential growth/decay model.',
  },
  {
    id: 'calc-14',
    unit: 'Limits & Continuity',
    prompt: 'What is lim(x→∞) (5x² + 3) / (2x² - 1)?',
    choices: ['0', '5/2', '∞', '1'],
    correctIndex: 1,
    explanation:
      'When numerator and denominator have the same degree, the limit at infinity equals the ratio of leading coefficients: 5/2.',
  },
  {
    id: 'calc-15',
    unit: 'Applications of Derivatives',
    prompt: 'The Mean Value Theorem guarantees that for a function continuous on [a,b] and differentiable on (a,b), there exists a point c where:',
    choices: [
      'f(c) = 0',
      'f\'(c) equals the average rate of change over [a,b]',
      'f\'\'(c) = 0',
      'f(c) is the maximum value',
    ],
    correctIndex: 1,
    explanation:
      'MVT states f\'(c) = (f(b)-f(a))/(b-a) for some c in (a,b) — the instantaneous rate matches the average rate somewhere in the interval.',
  },
]
