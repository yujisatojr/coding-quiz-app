export interface Question {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type QuestionsState = Question & { answers: string[] };

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty): Promise<QuestionsState[]> => {
  return [{
    category: "Trivia", 
    type: "multiple", 
    difficulty: "easy", 
    question: "What is an anonymous function?", 
    correct_answer: "A function without a name", 
    answers: [
      "A function that is returned from a function", 
      "A function with a name", 
      "A function that is passed into another function", 
      "A function without a name"
    ], 
    incorrect_answers: [
      "A function that is returned from a function", 
      "A function with a name", 
      "A function that is passed into another function"
    ]
  },
  {
    category: "Trivia", 
    type: "multiple", 
    difficulty: "easy", 
    question: "When a language has  first class functions, what does that mean?", 
    correct_answer: "It treats functions just like any other data type", 
    answers: [
      "It treats functions just like any other data type", 
      "Functions can be anonymous", 
      "There is a function called lambda ", 
      "A function ca return another function"
    ], 
    incorrect_answers: [
      "There is a function called lambda", 
      "Functions can be anonymous", 
      "A function ca return another function"
    ]
  },
  {
    category: "Trivia", 
    type: "multiple", 
    difficulty: "easy", 
    question: "What does variable-arity mean?", 
    correct_answer: "A function has a variable number of parameters", 
    answers: [
      "A function has a variable number of parameters", 
      "A function has a variable number of bodies", 
      "A function has a variable number of names ", 
      "A function is called a variable number of times"
    ], 
    incorrect_answers: [
      "A function has a variable number of bodies", 
      "A function has a variable number of names", 
      "A function is called a variable number of times"
    ]
  },
  {
    category: "Trivia", 
    type: "multiple", 
    difficulty: "easy", 
    question: "What is sequential binding (let*)?", 
    correct_answer: "Let will bind (or create) one variable at a time", 
    answers: [
      "Normal Order Evaluation", 
      "Let will evaluate the body in sequential order", 
      "Let will bind (or create) one variable at a time", 
      "Special Order Evaluation"
    ], 
    incorrect_answers: [
      "Normal Order Evaluation", 
      "Let will evaluate the body in sequential order", 
      "Special Order Evaluation"
    ]
  },
  {
    category: "Trivia", 
    type: "multiple", 
    difficulty: "easy", 
    question: "Why do we need a letrec?", 
    correct_answer: "It creates the variable name first so local functions can call themselves", 
    answers: [
      "It is used to recognize the local variables", 
      "It creates the variable name first so local functions can call themselves", 
      "It is syntactic sugar", 
      "It is used to recognize the global variables"
    ], 
    incorrect_answers: [
      "It is used to recognize the local variables", 
      "It is syntactic sugar", 
      "It is used to recognize the global variables"
    ]
  },
  {
    category: "Trivia", 
    type: "multiple", 
    difficulty: "easy", 
    question: "An Inductive Definition is a definition that", 
    correct_answer: "uses itself in the definition", 
    answers: [
      "A definition done with electricity", 
      "is like an IQ test", 
      "Has ... in it", 
      "uses itself in the definition"
    ], 
    incorrect_answers: [
      "A definition done with electricity", 
      "is like an IQ test", 
      "Has ... in it"
    ]
  },
  {
    category: "Trivia", 
    type: "multiple", 
    difficulty: "easy", 
    question: "A syntactic derivation is", 
    correct_answer: "a proof that something is a certain data type", 
    answers: [
      "a proof that something is a certain data type", 
      "An automatic program generator", 
      "a proof that something is NOT a certain data type ", 
      "A generator of a specific type"
    ], 
    incorrect_answers: [
      "An automatic program generator", 
      "a proof that something is NOT a certain data type", 
      "A generator of a specific type"
    ]
  },
  {
    category: "Trivia", 
    type: "multiple", 
    difficulty: "easy", 
    question: "What is mutual recursion?", 
    correct_answer: "When two or more functions call each other creating a loop", 
    answers: [
      "When two or more functions call each other creating a loop", 
      "A BNF that mutually defines to types", 
      "A function that recurses on itself more than once ", 
      "One function that does the job of two functions"
    ], 
    incorrect_answers: [
      "A BNF that mutually defines to types", 
      "A function that recurses on itself more than once", 
      "One function that does the job of two functions"
    ]
  },
  {
    category: "Trivia", 
    type: "multiple", 
    difficulty: "easy", 
    question: "An abstract syntax tree is", 
    correct_answer: "a data structure with all of the important information from a program", 
    answers: [
      "The BNF of a language", 
      "a data structure with all of the important information from a program", 
      "A list of important information from a BNF", 
      "Explains the concrete syntax of a language"
    ], 
    incorrect_answers: [
      "The BNF of a language", 
      "A list of important information from a BNF", 
      "Explains the concrete syntax of a language"
    ]
  },
  {
    category: "Trivia", 
    type: "multiple", 
    difficulty: "easy", 
    question: "Concrete syntax is", 
    correct_answer: "what a programmer types to write a program", 
    answers: [
      "The unimportant information in a program", 
      "just the ; or braces in a language", 
      "what a programmer types to write a program", 
      "The important information in a program"
    ], 
    incorrect_answers: [
      "The unimportant information in a program", 
      "just the ; or braces in a language", 
      "The important information in a program"
    ]
  }]
};