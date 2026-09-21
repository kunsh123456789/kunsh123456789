import type { Question } from '../../types'

export const COMPUTER_SCIENCE_QUESTIONS: Question[] = [
  {
    id: 'cs-1',
    unit: 'Primitive Types',
    prompt: 'In Java, what is the result of the expression 7 / 2 (both operands are int)?',
    choices: ['3.5', '3', '4', 'Error'],
    correctIndex: 1,
    explanation:
      'Integer division in Java truncates the decimal portion, so 7 / 2 evaluates to 3, not 3.5.',
  },
  {
    id: 'cs-2',
    unit: 'Primitive Types',
    prompt: 'Which data type would best store the value true or false?',
    choices: ['int', 'String', 'boolean', 'double'],
    correctIndex: 2,
    explanation: 'boolean is the primitive type in Java for representing true/false values.',
  },
  {
    id: 'cs-3',
    unit: 'Boolean Expressions & Conditionals',
    prompt: 'What does the expression (5 > 3) && (2 > 4) evaluate to?',
    choices: ['true', 'false', '1', 'Error'],
    correctIndex: 1,
    explanation:
      '&& requires BOTH sides to be true. (5 > 3) is true, but (2 > 4) is false, so the whole expression is false.',
  },
  {
    id: 'cs-4',
    unit: 'Boolean Expressions & Conditionals',
    prompt: 'In an if/else if/else chain, how many of the branches can execute for a single pass?',
    choices: ['All of them', 'Exactly two', 'At most one', 'Zero always'],
    correctIndex: 2,
    explanation:
      'Only the first branch whose condition is true executes; the rest are skipped — so at most one branch runs.',
  },
  {
    id: 'cs-5',
    unit: 'Iteration',
    prompt: 'How many times does this loop print "Hi"?\nfor (int i = 0; i < 5; i++) { System.out.println("Hi"); }',
    choices: ['4', '5', '6', 'Infinite'],
    correctIndex: 1,
    explanation: 'i starts at 0 and runs while i < 5 (0,1,2,3,4) — that is 5 iterations.',
  },
  {
    id: 'cs-6',
    unit: 'Iteration',
    prompt: 'What is the key difference between a while loop and a do-while loop?',
    choices: [
      'A do-while loop never checks a condition',
      'A do-while loop always executes its body at least once before checking the condition',
      'A while loop can only run once',
      'There is no difference',
    ],
    correctIndex: 1,
    explanation:
      'do-while checks the condition AFTER executing the loop body, guaranteeing at least one execution regardless of the condition.',
  },
  {
    id: 'cs-7',
    unit: 'Classes & Objects',
    prompt: 'What is the purpose of a constructor in a Java class?',
    choices: [
      'To destroy an object',
      'To initialize a newly created object\'s state',
      'To import other classes',
      'To compile the program',
    ],
    correctIndex: 1,
    explanation:
      'A constructor runs when an object is instantiated with "new", setting up initial instance variable values.',
  },
  {
    id: 'cs-8',
    unit: 'Classes & Objects',
    prompt: 'Marking an instance variable as "private" means:',
    choices: [
      'It can only be accessed within its own class (encapsulation)',
      'It can be accessed from any class',
      'It cannot be given a value',
      'It is automatically static',
    ],
    correctIndex: 0,
    explanation:
      'private restricts access to only the class it was declared in, supporting encapsulation — access is typically provided through public getter/setter methods.',
  },
  {
    id: 'cs-9',
    unit: 'Arrays',
    prompt: 'Given int[] arr = {10, 20, 30, 40}; what is arr[2]?',
    choices: ['10', '20', '30', '40'],
    correctIndex: 2,
    explanation: 'Arrays are zero-indexed, so arr[0]=10, arr[1]=20, arr[2]=30, arr[3]=40.',
  },
  {
    id: 'cs-10',
    unit: 'Arrays',
    prompt: 'What exception is thrown when you access arr[5] on an array of length 5?',
    choices: [
      'NullPointerException',
      'ArrayIndexOutOfBoundsException',
      'ClassCastException',
      'NumberFormatException',
    ],
    correctIndex: 1,
    explanation:
      'Valid indices for a length-5 array are 0-4. Accessing index 5 throws ArrayIndexOutOfBoundsException.',
  },
  {
    id: 'cs-11',
    unit: 'ArrayList',
    prompt: 'What is a key advantage of an ArrayList over a regular array?',
    choices: [
      'ArrayLists can only store primitives',
      'ArrayLists can dynamically grow and shrink in size',
      'ArrayLists are always faster to access by index',
      'Arrays cannot store objects',
    ],
    correctIndex: 1,
    explanation:
      'Unlike fixed-size arrays, an ArrayList automatically resizes as elements are added or removed.',
  },
  {
    id: 'cs-12',
    unit: '2D Arrays',
    prompt: 'In a 2D array declared as int[][] grid = new int[3][4], how many total elements does it hold?',
    choices: ['3', '4', '7', '12'],
    correctIndex: 3,
    explanation: 'A 2D array with 3 rows and 4 columns holds 3 × 4 = 12 total elements.',
  },
  {
    id: 'cs-13',
    unit: 'Inheritance',
    prompt: 'When a subclass extends a superclass, the subclass:',
    choices: [
      'Loses all superclass methods',
      'Inherits accessible fields and methods from the superclass',
      'Must redefine every superclass method',
      'Cannot have its own methods',
    ],
    correctIndex: 1,
    explanation:
      'Subclasses inherit accessible (non-private) fields and methods from their superclass and can add or override behavior.',
  },
  {
    id: 'cs-14',
    unit: 'Inheritance',
    prompt: 'Method overriding allows a subclass to:',
    choices: [
      'Provide a new implementation of a method already defined in its superclass',
      'Change the name of an inherited method',
      'Delete a superclass method entirely',
      'Access private superclass variables directly',
    ],
    correctIndex: 0,
    explanation:
      'Overriding lets a subclass redefine a superclass method\'s behavior while keeping the same signature.',
  },
  {
    id: 'cs-15',
    unit: 'Recursion',
    prompt: 'What does the following recursive method return for factorial(4)?\nint factorial(int n) { if (n <= 1) return 1; return n * factorial(n - 1); }',
    choices: ['4', '10', '24', '16'],
    correctIndex: 2,
    explanation: 'factorial(4) = 4 × 3 × 2 × 1 = 24.',
  },
]
