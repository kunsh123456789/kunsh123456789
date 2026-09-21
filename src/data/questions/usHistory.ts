import type { Question } from '../../types'

export const US_HISTORY_QUESTIONS: Question[] = [
  {
    id: 'hist-1',
    unit: 'Colonial Era',
    prompt: 'The system where colonies supplied raw materials to the mother country in exchange for manufactured goods was called:',
    choices: ['Manifest Destiny', 'Mercantilism', 'Federalism', 'Nullification'],
    correctIndex: 1,
    explanation:
      'Mercantilism held that colonies existed to enrich the mother country, supplying raw materials and buying finished goods in return.',
  },
  {
    id: 'hist-2',
    unit: 'Colonial Era',
    prompt: 'The Great Awakening of the 1730s-40s primarily impacted colonial society by:',
    choices: [
      'Ending slavery in the North',
      'Sparking religious revival and challenging traditional authority',
      'Uniting the colonies under one government',
      'Establishing the first colonial legislature',
    ],
    correctIndex: 1,
    explanation:
      'The Great Awakening spread emotional, personal religious revivalism, which indirectly encouraged people to question established authority — religious and eventually political.',
  },
  {
    id: 'hist-3',
    unit: 'American Revolution',
    prompt: 'The phrase "No taxation without representation" was a colonial objection to acts like the:',
    choices: ['Homestead Act', 'Stamp Act', 'Missouri Compromise', 'Compromise of 1850'],
    correctIndex: 1,
    explanation:
      'The 1765 Stamp Act taxed colonists directly without their consent in Parliament, fueling the "no taxation without representation" argument.',
  },
  {
    id: 'hist-4',
    unit: 'American Revolution',
    prompt: 'The Declaration of Independence (1776) was heavily influenced by which philosopher\'s ideas on natural rights and government by consent?',
    choices: ['Karl Marx', 'John Locke', 'Thomas Hobbes', 'Adam Smith'],
    correctIndex: 1,
    explanation:
      'John Locke\'s ideas about natural rights (life, liberty, property) and government deriving power from the consent of the governed directly shaped Jefferson\'s language.',
  },
  {
    id: 'hist-5',
    unit: 'The Constitution',
    prompt: 'The Great Compromise (Connecticut Compromise) at the Constitutional Convention resolved disagreement over:',
    choices: [
      'Whether to abolish slavery',
      'How states would be represented in Congress',
      'Whether to have a president',
      'How to fund the Revolutionary War',
    ],
    correctIndex: 1,
    explanation:
      'The Great Compromise created a bicameral Congress: equal representation in the Senate, proportional representation in the House, balancing large and small state interests.',
  },
  {
    id: 'hist-6',
    unit: 'The Constitution',
    prompt: 'The Bill of Rights was added to the Constitution primarily to:',
    choices: [
      'Establish the electoral college',
      'Address Anti-Federalist concerns about protecting individual liberties',
      'Create the Supreme Court',
      'Abolish the Three-Fifths Compromise',
    ],
    correctIndex: 1,
    explanation:
      'Anti-Federalists feared a strong central government would trample individual rights; the first 10 amendments were promised to secure ratification.',
  },
  {
    id: 'hist-7',
    unit: 'Early Republic',
    prompt: 'The Louisiana Purchase (1803) under President Jefferson raised constitutional questions because:',
    choices: [
      'It required Congress to declare war',
      'The Constitution did not explicitly authorize acquiring new territory',
      'It freed all enslaved people in the territory',
      'It violated the Bill of Rights',
    ],
    correctIndex: 1,
    explanation:
      'Jefferson, a strict constructionist, worried the Constitution didn\'t explicitly grant the power to purchase foreign land, yet proceeded with the deal anyway.',
  },
  {
    id: 'hist-8',
    unit: 'Antebellum & Slavery',
    prompt: 'The Missouri Compromise of 1820 attempted to maintain balance in the Senate by:',
    choices: [
      'Banning slavery everywhere',
      'Admitting Missouri as a slave state and Maine as a free state',
      'Ending the Atlantic slave trade',
      'Creating popular sovereignty in all territories',
    ],
    correctIndex: 1,
    explanation:
      'The compromise paired Missouri\'s admission as a slave state with Maine\'s as a free state, and banned slavery north of the 36°30\' line in the Louisiana Territory.',
  },
  {
    id: 'hist-9',
    unit: 'Civil War & Reconstruction',
    prompt: 'The Emancipation Proclamation (1863) legally freed enslaved people in:',
    choices: [
      'All states, including the border states',
      'Confederate states still in rebellion',
      'Only Washington, D.C.',
      'The Union army only',
    ],
    correctIndex: 1,
    explanation:
      'The Proclamation applied only to states in rebellion against the Union — it did not free enslaved people in loyal border states.',
  },
  {
    id: 'hist-10',
    unit: 'Civil War & Reconstruction',
    prompt: 'Which Reconstruction-era amendment granted formerly enslaved men the right to vote?',
    choices: ['13th Amendment', '14th Amendment', '15th Amendment', '19th Amendment'],
    correctIndex: 2,
    explanation:
      'The 15th Amendment (1870) prohibited denying the right to vote based on race, color, or previous condition of servitude.',
  },
  {
    id: 'hist-11',
    unit: 'Gilded Age',
    prompt: 'During the Gilded Age, "robber barons" like Carnegie and Rockefeller built massive fortunes primarily through:',
    choices: [
      'Small family farms',
      'Industrial monopolies in steel, oil, and railroads',
      'Government welfare programs',
      'Colonial trade with Europe',
    ],
    correctIndex: 1,
    explanation:
      'Industrialists consolidated entire industries (steel, oil, rail) into massive trusts and monopolies, generating enormous personal wealth.',
  },
  {
    id: 'hist-12',
    unit: 'Progressive Era',
    prompt: 'Progressive Era reformers pushed for policies like trust-busting and factory regulation mainly in response to:',
    choices: [
      'The end of the Cold War',
      'Problems caused by rapid industrialization and urbanization',
      'The Louisiana Purchase',
      'The Missouri Compromise',
    ],
    correctIndex: 1,
    explanation:
      'Progressives responded to corruption, unsafe working conditions, and monopolistic power that emerged from rapid industrial growth.',
  },
  {
    id: 'hist-13',
    unit: '20th Century Wars',
    prompt: 'The U.S. entry into World War I in 1917 was triggered in part by:',
    choices: [
      'The bombing of Pearl Harbor',
      'Unrestricted German submarine warfare and the Zimmermann Telegram',
      'The assassination of Archduke Franz Ferdinand alone',
      'The Treaty of Versailles',
    ],
    correctIndex: 1,
    explanation:
      'Germany\'s resumption of unrestricted submarine warfare and the intercepted Zimmermann Telegram (proposing a German-Mexican alliance) pushed the U.S. toward war.',
  },
  {
    id: 'hist-14',
    unit: 'Cold War',
    prompt: 'The policy of "containment" during the Cold War referred to U.S. efforts to:',
    choices: [
      'Expand communism worldwide',
      'Prevent the spread of communism beyond its existing borders',
      'Reunite with the Soviet Union',
      'Withdraw entirely from world affairs',
    ],
    correctIndex: 1,
    explanation:
      'Containment, outlined in the Truman Doctrine, aimed to stop the spread of Soviet communism into new countries without direct war with the USSR.',
  },
  {
    id: 'hist-15',
    unit: 'Modern Era',
    prompt: 'The Civil Rights Act of 1964 primarily accomplished:',
    choices: [
      'Granting women the right to vote',
      'Outlawing discrimination based on race, color, religion, sex, or national origin',
      'Ending the Vietnam War',
      'Establishing Social Security',
    ],
    correctIndex: 1,
    explanation:
      'The Civil Rights Act of 1964 banned discrimination in public accommodations, employment, and by federally funded programs.',
  },
]
