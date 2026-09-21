import type { Question } from '../../types'

export const BIOLOGY_QUESTIONS: Question[] = [
  {
    id: 'bio-1',
    unit: 'Chemistry of Life',
    prompt: 'Water is described as a "polar" molecule primarily because of:',
    choices: [
      'Its equal sharing of electrons between hydrogen and oxygen',
      'The unequal distribution of electron density created by oxygen\'s higher electronegativity',
      'Its ability to freeze at 0°C',
      'The presence of hydrogen bonds within a single molecule',
    ],
    correctIndex: 1,
    explanation:
      'Oxygen is more electronegative than hydrogen, so it pulls shared electrons closer, giving the O a partial negative charge and the H atoms a partial positive charge — this makes water polar.',
  },
  {
    id: 'bio-2',
    unit: 'Cell Structure',
    prompt: 'Which organelle is the primary site of ATP production in eukaryotic cells?',
    choices: ['Golgi apparatus', 'Mitochondrion', 'Ribosome', 'Lysosome'],
    correctIndex: 1,
    explanation:
      'Mitochondria carry out cellular respiration (including the electron transport chain), generating the majority of a cell\'s ATP.',
  },
  {
    id: 'bio-3',
    unit: 'Cellular Energetics',
    prompt: 'In cellular respiration, glycolysis takes place in the:',
    choices: ['Mitochondrial matrix', 'Cytoplasm', 'Inner mitochondrial membrane', 'Nucleus'],
    correctIndex: 1,
    explanation:
      'Glycolysis occurs in the cytoplasm (cytosol) and does not require oxygen, splitting glucose into two pyruvate molecules.',
  },
  {
    id: 'bio-4',
    unit: 'Cellular Energetics',
    prompt: 'During photosynthesis, the light-dependent reactions occur in the:',
    choices: ['Stroma', 'Thylakoid membrane', 'Outer chloroplast membrane', 'Cytoplasm'],
    correctIndex: 1,
    explanation:
      'Photosystems embedded in the thylakoid membrane capture light energy to produce ATP and NADPH for the Calvin cycle in the stroma.',
  },
  {
    id: 'bio-5',
    unit: 'Cell Communication & Division',
    prompt: 'A cell that has entered a permanent non-dividing state has exited the cell cycle into:',
    choices: ['S phase', 'G0 phase', 'Prophase', 'Telophase'],
    correctIndex: 1,
    explanation:
      'G0 is a resting phase outside the active cell cycle; many mature cells (like neurons) remain in G0 indefinitely.',
  },
  {
    id: 'bio-6',
    unit: 'Cell Communication & Division',
    prompt: 'Crossing over during meiosis I primarily contributes to genetic variation by:',
    choices: [
      'Doubling the chromosome number',
      'Exchanging segments between homologous chromosomes',
      'Destroying damaged DNA',
      'Fusing sister chromatids permanently',
    ],
    correctIndex: 1,
    explanation:
      'Crossing over swaps DNA segments between homologous chromosomes during prophase I, creating new allele combinations.',
  },
  {
    id: 'bio-7',
    unit: 'Heredity',
    prompt: 'In a dihybrid cross between two heterozygous (AaBb x AaBb) individuals, what fraction of offspring is expected to show both recessive traits?',
    choices: ['1/4', '1/8', '1/16', '9/16'],
    correctIndex: 2,
    explanation:
      'For independent genes, the probability of aabb is 1/4 (aa) × 1/4 (bb) = 1/16.',
  },
  {
    id: 'bio-8',
    unit: 'Gene Expression & Regulation',
    prompt: 'A mutation that changes a codon to a stop codon prematurely is called a:',
    choices: ['Silent mutation', 'Missense mutation', 'Nonsense mutation', 'Frameshift mutation'],
    correctIndex: 2,
    explanation:
      'Nonsense mutations create a premature stop codon, truncating the protein and usually destroying its function.',
  },
  {
    id: 'bio-9',
    unit: 'Gene Expression & Regulation',
    prompt: 'Operons like the lac operon allow bacteria to:',
    choices: [
      'Store genetic information redundantly',
      'Regulate multiple genes together in response to environmental signals',
      'Prevent all transcription permanently',
      'Undergo meiosis',
    ],
    correctIndex: 1,
    explanation:
      'Operons group functionally related genes under one promoter/operator so they can be switched on or off together, e.g. in response to lactose availability.',
  },
  {
    id: 'bio-10',
    unit: 'Natural Selection',
    prompt: 'Antibiotic resistance spreading through a bacterial population is a direct example of:',
    choices: ['Genetic drift', 'Natural selection', 'Gene flow', 'Non-random mating'],
    correctIndex: 1,
    explanation:
      'Bacteria with resistance alleles survive antibiotic exposure and reproduce more, increasing the resistance allele\'s frequency — classic natural selection.',
  },
  {
    id: 'bio-11',
    unit: 'Natural Selection',
    prompt: 'A population bottleneck primarily reduces genetic diversity through:',
    choices: [
      'Increased mutation rate',
      'A drastic, non-selective reduction in population size',
      'Directional selection for one trait',
      'Increased gene flow from immigrants',
    ],
    correctIndex: 1,
    explanation:
      'Bottlenecks randomly wipe out most of a population, so the survivors carry only a small, often unrepresentative sample of the original gene pool — an example of genetic drift.',
  },
  {
    id: 'bio-12',
    unit: 'Ecology',
    prompt: 'In a food chain, primary consumers are organisms that:',
    choices: [
      'Produce their own food via photosynthesis',
      'Eat producers directly',
      'Eat other consumers',
      'Decompose dead organic matter',
    ],
    correctIndex: 1,
    explanation:
      'Primary consumers (herbivores) feed directly on producers (plants/algae), occupying the second trophic level.',
  },
  {
    id: 'bio-13',
    unit: 'Ecology',
    prompt: 'The carrying capacity of an environment is best defined as:',
    choices: [
      'The maximum birth rate possible for a species',
      'The maximum population size an environment can sustain long-term',
      'The total biomass of producers only',
      'The rate of nutrient cycling',
    ],
    correctIndex: 1,
    explanation:
      'Carrying capacity (K) is the population size a given environment can support indefinitely given its resources.',
  },
  {
    id: 'bio-14',
    unit: 'Chemistry of Life',
    prompt: 'Enzymes speed up reactions by:',
    choices: [
      'Increasing the free energy change of the reaction',
      'Lowering the activation energy required',
      'Making reactions less exergonic',
      'Permanently changing the substrate structure',
    ],
    correctIndex: 1,
    explanation:
      'Enzymes are catalysts — they lower the activation energy barrier, letting reactions proceed faster without being consumed themselves.',
  },
  {
    id: 'bio-15',
    unit: 'Cell Structure',
    prompt: 'Which structure regulates what enters and exits a cell?',
    choices: ['Cell wall', 'Plasma membrane', 'Nucleolus', 'Cytoskeleton'],
    correctIndex: 1,
    explanation:
      'The selectively permeable plasma membrane controls the movement of substances into and out of the cell.',
  },
]
