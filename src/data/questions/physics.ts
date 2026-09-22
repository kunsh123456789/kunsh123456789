import type { Question } from '../../types'

export const PHYSICS_QUESTIONS: Question[] = [
  // Kinematics
  {
    id: 'phys-k1',
    unit: 'Kinematics',
    prompt: 'A car accelerates uniformly from rest to 20 m/s in 4 seconds. What is its acceleration?',
    choices: ['2 m/s²', '5 m/s²', '8 m/s²', '80 m/s²'],
    correctIndex: 1,
    explanation: 'a = Δv/Δt = (20 - 0) / 4 = 5 m/s².',
  },
  {
    id: 'phys-k2',
    unit: 'Kinematics',
    prompt: 'On a position-vs-time graph, the slope of the line at any point represents the object\'s:',
    choices: ['Acceleration', 'Velocity', 'Displacement', 'Momentum'],
    correctIndex: 1,
    explanation: 'Velocity is the rate of change of position, so it equals the slope of a position-time graph.',
  },
  {
    id: 'phys-k3',
    unit: 'Kinematics',
    prompt: 'An object is dropped from rest and falls for 2 seconds (ignore air resistance, g = 10 m/s²). How far has it fallen?',
    choices: ['10 m', '20 m', '40 m', '5 m'],
    correctIndex: 1,
    explanation: 'Using d = ½gt² = ½(10)(2²) = ½(10)(4) = 20 m.',
  },
  {
    id: 'phys-k4',
    unit: 'Kinematics',
    prompt: 'Which of these is true about an object in projectile motion (ignoring air resistance)?',
    choices: [
      'Horizontal velocity stays constant while vertical velocity changes',
      'Both horizontal and vertical velocity stay constant',
      'Vertical velocity stays constant while horizontal velocity changes',
      'Both velocities are always zero at the peak',
    ],
    correctIndex: 0,
    explanation:
      'With no air resistance, horizontal velocity is unaffected by gravity and stays constant, while vertical velocity changes due to gravitational acceleration.',
  },

  // Newton's Laws & Forces
  {
    id: 'phys-f1',
    unit: "Newton's Laws & Forces",
    prompt: "Newton's First Law states that an object at rest or in motion will:",
    choices: [
      'Always eventually stop',
      'Stay at rest or in constant motion unless acted on by a net external force',
      'Accelerate unless a force is applied',
      'Speed up over time due to gravity alone',
    ],
    correctIndex: 1,
    explanation:
      "The Law of Inertia: an object's velocity won't change unless a net external force acts on it.",
  },
  {
    id: 'phys-f2',
    unit: "Newton's Laws & Forces",
    prompt: 'A 10 kg object experiences a net force of 30 N. What is its acceleration?',
    choices: ['0.33 m/s²', '3 m/s²', '30 m/s²', '300 m/s²'],
    correctIndex: 1,
    explanation: 'F = ma, so a = F/m = 30/10 = 3 m/s².',
  },
  {
    id: 'phys-f3',
    unit: "Newton's Laws & Forces",
    prompt: "According to Newton's Third Law, when you push on a wall, the wall:",
    choices: [
      'Pushes back on you with equal force in the opposite direction',
      'Pushes back with less force',
      'Exerts no force on you',
      'Absorbs your force completely',
    ],
    correctIndex: 0,
    explanation:
      'For every action there is an equal and opposite reaction — the wall pushes back on your hand with the same magnitude of force.',
  },
  {
    id: 'phys-f4',
    unit: "Newton's Laws & Forces",
    prompt: 'A box rests on a flat, horizontal table. In its free-body diagram, the normal force points:',
    choices: ['Downward, same direction as gravity', 'Upward, opposing gravity', 'Sideways', 'There is no normal force'],
    correctIndex: 1,
    explanation:
      'The normal force is the surface pushing back perpendicular to itself — upward on a flat table, balancing the box\'s weight.',
  },

  // Energy & Work
  {
    id: 'phys-e1',
    unit: 'Energy & Work',
    prompt: 'A force of 20 N moves a box 5 meters in the direction of the force. How much work is done?',
    choices: ['4 J', '25 J', '100 J', '0.25 J'],
    correctIndex: 2,
    explanation: 'W = F × d = 20 N × 5 m = 100 J (force and displacement are in the same direction, so cosθ = 1).',
  },
  {
    id: 'phys-e2',
    unit: 'Energy & Work',
    prompt: 'What is the kinetic energy of a 2 kg object moving at 3 m/s?',
    choices: ['3 J', '6 J', '9 J', '18 J'],
    correctIndex: 2,
    explanation: 'KE = ½mv² = ½(2)(3²) = ½(2)(9) = 9 J.',
  },
  {
    id: 'phys-e3',
    unit: 'Energy & Work',
    prompt: 'As a ball falls freely under gravity (ignoring air resistance), its total mechanical energy:',
    choices: [
      'Increases continuously',
      'Decreases continuously',
      'Stays constant, converting PE into KE',
      'Is zero the entire time',
    ],
    correctIndex: 2,
    explanation:
      'By conservation of energy, total mechanical energy (PE + KE) stays constant as potential energy converts into kinetic energy.',
  },
  {
    id: 'phys-e4',
    unit: 'Energy & Work',
    prompt: 'Power is best described as:',
    choices: ['Force times distance', 'The rate at which work is done', 'Mass times velocity', 'Energy stored in a spring'],
    correctIndex: 1,
    explanation: 'Power = Work / time — it measures how quickly energy is transferred or work is performed.',
  },

  // Momentum & Circular Motion
  {
    id: 'phys-m1',
    unit: 'Momentum & Circular Motion',
    prompt: 'What is the momentum of a 5 kg object moving at 4 m/s?',
    choices: ['1.25 kg·m/s', '9 kg·m/s', '20 kg·m/s', '80 kg·m/s'],
    correctIndex: 2,
    explanation: 'p = mv = 5 × 4 = 20 kg·m/s.',
  },
  {
    id: 'phys-m2',
    unit: 'Momentum & Circular Motion',
    prompt: 'In a closed system with no external forces, total momentum before a collision is:',
    choices: [
      'Always greater after the collision',
      'Always less after the collision',
      'Conserved — equal to total momentum after the collision',
      'Unrelated to momentum after the collision',
    ],
    correctIndex: 2,
    explanation: 'Conservation of momentum: total momentum of an isolated system stays constant before and after a collision.',
  },
  {
    id: 'phys-m3',
    unit: 'Momentum & Circular Motion',
    prompt: 'An object moving in a circle at constant speed experiences centripetal acceleration directed:',
    choices: ['Outward, away from the center', 'Toward the center of the circle', 'Tangent to the circle', 'In the direction of motion'],
    correctIndex: 1,
    explanation:
      'Centripetal acceleration always points toward the center of the circular path, which is what keeps the object turning.',
  },
  {
    id: 'phys-m4',
    unit: 'Momentum & Circular Motion',
    prompt: 'The impulse-momentum theorem states that impulse (J) equals:',
    choices: ['Force divided by time', 'The change in an object\'s momentum (Δp)', 'Mass times acceleration', 'Work divided by distance'],
    correctIndex: 1,
    explanation: 'J = Δp — impulse (force applied over a time interval) equals the resulting change in momentum.',
  },
]
