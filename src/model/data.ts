const data = [
  {
    id: 1,
    question: "What is the result of `typeof([])` in JavaScript?",
    options: ["string", "object", "array", "undefined"],
    isSolved: false,
    ans: 2, // Correct Answer: object
    explanation: "The typeof([]) expression in JavaScript returns 'object' because an array is a type of object in JavaScript.",
  },
  {
    id: 2,
    question: "In ReactJS, what lifecycle method is used for making API calls or performing side effects after the component has been rendered?",
    options: ["componentDidMount", "componentWillUnmount", "componentWillUpdate", "render"],
    isSolved: false,
    ans: 1, // Correct Answer: componentDidMount
    explanation: "componentDidMount is a lifecycle method in React that is called after the component has been rendered to the DOM. It is commonly used for tasks such as data fetching.",
  },
  {
    id: 3,
    question: "Which C++ keyword is used to dynamically allocate memory?",
    options: ["new", "malloc", "allocate", "create"],
    isSolved: false,
    ans: 0, // Correct Answer: new
    explanation: "In C++, the new keyword is used to dynamically allocate memory for an object or data structure on the heap.",
  },
  {
    id: 4,
    question: "What is the purpose of the super() function in Python?",
    options: [
      "To invoke the superclass constructor",
      "To create an instance of the superclass",
      "To access superclass attributes",
      "To define a new superclass",
    ],
    isSolved: false,
    ans: 0, // Correct Answer: To invoke the superclass constructor
    explanation: "The super() function in Python is used to call methods of the superclass, and in this case, it is often used to invoke the superclass constructor.",
  },
  {
    id: 5,
    question: "How do you declare a variable in JavaScript?",
    options: ["var x;", "let x;", "const x;", "All of the above"],
    isSolved: false,
    ans: 3, // Correct Answer: All of the above
    explanation: "In JavaScript, variables can be declared using var, let, or const. All three options are valid ways to declare variables.",
  },
  {
    id: 6,
    question: "What is JSX in the context of ReactJS?",
    options: ["JavaScript XML", "Java Syntax Extension", "React's own scripting language", "JavaScript XML Syntax"],
    isSolved: false,
    ans: 0, // Correct Answer: JavaScript XML
    explanation: "JSX stands for JavaScript XML. It is a syntax extension for JavaScript recommended by React for describing what the UI should look like.",
  },
  {
    id: 7,
    question: "What is the difference between '++i' and 'i++' in C++?",
    options: ["No difference", "++i is pre-increment, i++ is post-increment", "++i is post-increment, i++ is pre-increment", "++i and i++ cannot be used in C++"],
    isSolved: false,
    ans: 1, // Correct Answer: ++i is pre-increment, i++ is post-increment
    explanation: "In C++, ++i is pre-increment, meaning the value is incremented before the current value is used, and i++ is post-increment, meaning the current value is used before being incremented.",
  },
  {
    id: 8,
    question: "How do you comment multiple lines in Python?",
    options: ["/* ... */", "// ... //", "''' ... '''", "## ... ##"],
    isSolved: false,
    ans: 2, // Correct Answer: ''' ... '''
    explanation: "In Python, multiline comments are often enclosed with triple single or double quotes (`''' ... '''` or `\"\"\" ... \"\"\"`).",
  },
];



export default data;