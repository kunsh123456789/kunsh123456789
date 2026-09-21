import type { Question } from '../../types'

export const CHEMISTRY_QUESTIONS: Question[] = [
  {
    id: 'chem-1',
    unit: 'Atomic Structure',
    prompt: 'An atom of Carbon-14 has how many neutrons?',
    choices: ['6', '8', '14', '12'],
    correctIndex: 1,
    explanation:
      'Carbon has atomic number 6 (6 protons). Mass number 14 minus 6 protons = 8 neutrons.',
  },
  {
    id: 'chem-2',
    unit: 'Atomic Structure',
    prompt: 'Electrons in an atom occupy regions of highest probability called:',
    choices: ['Nuclei', 'Orbitals', 'Isotopes', 'Ions'],
    correctIndex: 1,
    explanation:
      'Orbitals are mathematical regions of space where there is a high probability of finding an electron.',
  },
  {
    id: 'chem-3',
    unit: 'Molecular & Ionic Bonding',
    prompt: 'A bond formed by the complete transfer of electrons from one atom to another is called:',
    choices: ['Covalent bond', 'Metallic bond', 'Ionic bond', 'Hydrogen bond'],
    correctIndex: 2,
    explanation:
      'Ionic bonds form when electrons transfer from a low-electronegativity atom (metal) to a high-electronegativity atom (nonmetal), creating oppositely charged ions that attract.',
  },
  {
    id: 'chem-4',
    unit: 'Molecular & Ionic Bonding',
    prompt: 'According to VSEPR theory, a molecule with 4 bonding pairs and 0 lone pairs on the central atom has what geometry?',
    choices: ['Trigonal planar', 'Tetrahedral', 'Bent', 'Linear'],
    correctIndex: 1,
    explanation:
      'Four electron domains with no lone pairs arrange themselves tetrahedrally to minimize repulsion (e.g., CH₄).',
  },
  {
    id: 'chem-5',
    unit: 'Intermolecular Forces',
    prompt: 'Water has an unusually high boiling point for its molar mass mainly because of:',
    choices: ['London dispersion forces', 'Ionic bonding', 'Hydrogen bonding', 'Metallic bonding'],
    correctIndex: 2,
    explanation:
      'Water molecules form strong hydrogen bonds (H bonded to highly electronegative O), requiring extra energy to separate molecules during boiling.',
  },
  {
    id: 'chem-6',
    unit: 'Chemical Reactions',
    prompt: 'In the reaction 2H₂ + O₂ → 2H₂O, how many moles of water form from 5 moles of H₂ (excess O₂)?',
    choices: ['2.5 mol', '5 mol', '10 mol', '2 mol'],
    correctIndex: 1,
    explanation: 'The mole ratio of H₂ to H₂O is 2:2 (1:1), so 5 mol H₂ produces 5 mol H₂O.',
  },
  {
    id: 'chem-7',
    unit: 'Kinetics',
    prompt: 'Increasing the temperature of a reaction generally increases the rate because:',
    choices: [
      'It decreases the activation energy',
      'More molecules collide with sufficient energy to react',
      'It shifts equilibrium completely to products',
      'It increases the concentration of reactants',
    ],
    correctIndex: 1,
    explanation:
      'Higher temperature increases average kinetic energy, so a greater fraction of collisions exceed the activation energy threshold, speeding up the reaction.',
  },
  {
    id: 'chem-8',
    unit: 'Kinetics',
    prompt: 'For a reaction with rate law Rate = k[A]², the reaction is said to be:',
    choices: ['Zero order in A', 'First order in A', 'Second order in A', 'Third order overall'],
    correctIndex: 2,
    explanation: 'The exponent on [A] in the rate law (2) gives the order with respect to A — second order.',
  },
  {
    id: 'chem-9',
    unit: 'Thermodynamics',
    prompt: 'A reaction with ΔH < 0 and ΔS > 0 is:',
    choices: [
      'Never spontaneous',
      'Spontaneous at all temperatures',
      'Spontaneous only at low temperatures',
      'Spontaneous only at high temperatures',
    ],
    correctIndex: 1,
    explanation:
      'Using ΔG = ΔH - TΔS: with ΔH negative and ΔS positive, ΔG is negative at every temperature, so the reaction is always spontaneous.',
  },
  {
    id: 'chem-10',
    unit: 'Equilibrium',
    prompt: 'According to Le Chatelier\'s principle, adding more reactant to a system at equilibrium will:',
    choices: [
      'Shift the equilibrium toward the reactants',
      'Shift the equilibrium toward the products',
      'Have no effect on the equilibrium',
      'Immediately stop the reaction',
    ],
    correctIndex: 1,
    explanation:
      'Adding reactant disturbs equilibrium; the system responds by consuming some of the extra reactant, shifting the reaction toward products.',
  },
  {
    id: 'chem-11',
    unit: 'Equilibrium',
    prompt: 'A large equilibrium constant (K >> 1) indicates that at equilibrium:',
    choices: [
      'Reactants are strongly favored',
      'Products are strongly favored',
      'The reaction hasn\'t started',
      'The reaction is at a steady 50/50 ratio',
    ],
    correctIndex: 1,
    explanation:
      'K is the ratio of product to reactant concentrations at equilibrium; a large K means products dominate.',
  },
  {
    id: 'chem-12',
    unit: 'Acids & Bases',
    prompt: 'A solution with pH = 3 is how many times more acidic than a solution with pH = 5?',
    choices: ['2 times', '20 times', '100 times', '1000 times'],
    correctIndex: 2,
    explanation:
      'pH is a log scale (base 10); a difference of 2 pH units means a 10² = 100-fold difference in H⁺ concentration.',
  },
  {
    id: 'chem-13',
    unit: 'Acids & Bases',
    prompt: 'A buffer solution resists changes in pH because it contains:',
    choices: [
      'Only a strong acid',
      'Only pure water',
      'A weak acid/base and its conjugate pair',
      'Only a strong base',
    ],
    correctIndex: 2,
    explanation:
      'Buffers pair a weak acid with its conjugate base (or weak base with conjugate acid), which can neutralize added H⁺ or OH⁻ without large pH swings.',
  },
  {
    id: 'chem-14',
    unit: 'Electrochemistry',
    prompt: 'In a galvanic (voltaic) cell, oxidation occurs at the:',
    choices: ['Cathode', 'Anode', 'Salt bridge', 'External wire'],
    correctIndex: 1,
    explanation:
      'By convention, oxidation (loss of electrons) always occurs at the anode in both galvanic and electrolytic cells.',
  },
  {
    id: 'chem-15',
    unit: 'Atomic Structure',
    prompt: 'Which quantum number describes the shape of an orbital?',
    choices: ['Principal (n)', 'Angular momentum (l)', 'Magnetic (mₗ)', 'Spin (mₛ)'],
    correctIndex: 1,
    explanation:
      'The angular momentum quantum number (l) determines the orbital\'s shape — s, p, d, or f.',
  },
]
