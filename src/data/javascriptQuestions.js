const javascriptQuestions = [
  {
    id: 1,
    question: "What is JavaScript?",
    answer:
      "JavaScript is a programming language used to add interactivity and dynamic behavior to web applications. It runs in browsers and can also run outside browsers using environments such as Node.js.",
    difficulty: "Beginner",
  },
  {
    id: 2,
    question: "What are the main features of JavaScript?",
    answer:
      "JavaScript is dynamically typed, supports first-class functions, objects, asynchronous programming, event-driven programming, and prototype-based inheritance.",
    difficulty: "Beginner",
  },
  {
    id: 3,
    question: "What are variables in JavaScript?",
    answer:
      "Variables are named references used to store values. JavaScript provides let, const, and var for declaring variables.",
    difficulty: "Beginner",
  },
  {
    id: 4,
    question: "What is the difference between var, let, and const?",
    answer:
      "var is function-scoped and can be redeclared. let and const are block-scoped. let can be reassigned, while const cannot be reassigned after initialization.",
    difficulty: "Beginner",
  },
  {
    id: 5,
    question: "What is block scope?",
    answer:
      "Block scope means a variable is accessible only within the block in which it was declared, such as inside braces used by if statements, loops, or functions.",
    difficulty: "Intermediate",
  },
  {
    id: 6,
    question: "What is function scope?",
    answer:
      "Function scope means a variable declared with var is accessible throughout the function in which it was declared.",
    difficulty: "Beginner",
  },
  {
    id: 7,
    question: "What are primitive data types in JavaScript?",
    answer:
      "Primitive types include string, number, bigint, boolean, undefined, null, and symbol.",
    difficulty: "Beginner",
  },
  {
    id: 8,
    question: "What is a non-primitive data type?",
    answer:
      "Objects are non-primitive values. Arrays and functions are also objects in JavaScript.",
    difficulty: "Beginner",
  },
  {
    id: 9,
    question: "What is the difference between null and undefined?",
    answer:
      "undefined usually means a value has not been assigned or is absent, while null is an explicitly assigned value representing the absence of an object value.",
    difficulty: "Beginner",
  },
  {
    id: 10,
    question: "What is NaN?",
    answer:
      "NaN stands for Not-a-Number and represents a value that is not a valid numeric result.",
    difficulty: "Beginner",
  },
  {
    id: 11,
    question: "What is the difference between == and ===?",
    answer:
      "== performs loose equality comparison and may perform type conversion. === performs strict equality comparison without type conversion.",
    difficulty: "Beginner",
  },
  {
    id: 12,
    question: "What is type coercion?",
    answer:
      "Type coercion is the automatic or explicit conversion of a value from one data type to another.",
    difficulty: "Intermediate",
  },
  {
    id: 13,
    question: "What is truthy and falsy in JavaScript?",
    answer:
      "Truthy values behave like true in boolean contexts. Falsy values include false, 0, -0, 0n, empty string, null, undefined, and NaN.",
    difficulty: "Beginner",
  },
  {
    id: 14,
    question: "What are template literals?",
    answer:
      "Template literals are strings written using backticks. They support interpolation using ${} and can span multiple lines.",
    difficulty: "Beginner",
  },
  {
    id: 15,
    question: "What are operators in JavaScript?",
    answer:
      "Operators perform actions on values. Common categories include arithmetic, assignment, comparison, logical, ternary, bitwise, and unary operators.",
    difficulty: "Beginner",
  },
  {
    id: 16,
    question: "What is the ternary operator?",
    answer:
      "The ternary operator is a compact conditional expression written as condition ? valueIfTrue : valueIfFalse.",
    difficulty: "Beginner",
  },
  {
    id: 17,
    question: "What is short-circuit evaluation?",
    answer:
      "Short-circuit evaluation stops evaluating a logical expression as soon as the final result is known.",
    difficulty: "Intermediate",
  },
  {
    id: 18,
    question: "What is optional chaining?",
    answer:
      "Optional chaining, written as ?., safely accesses nested properties and returns undefined instead of throwing an error when an intermediate value is null or undefined.",
    difficulty: "Intermediate",
  },
  {
    id: 19,
    question: "What is the nullish coalescing operator?",
    answer:
      "The ?? operator returns the right-hand value only when the left-hand value is null or undefined.",
    difficulty: "Intermediate",
  },
  {
    id: 20,
    question: "What is the difference between || and ??",
    answer:
      "|| uses the right-hand value for any falsy left-hand value, while ?? uses it only when the left-hand value is null or undefined.",
    difficulty: "Intermediate",
  },
  {
    id: 21,
    question: "What is a function?",
    answer:
      "A function is a reusable block of code that can accept inputs, perform operations, and optionally return a value.",
    difficulty: "Beginner",
  },
  {
    id: 22,
    question: "What is a function declaration?",
    answer:
      "A function declaration defines a named function using the function keyword.",
    difficulty: "Beginner",
  },
  {
    id: 23,
    question: "What is a function expression?",
    answer:
      "A function expression creates a function and assigns it to a variable or another expression.",
    difficulty: "Beginner",
  },
  {
    id: 24,
    question: "What is an arrow function?",
    answer:
      "An arrow function is a shorter function syntax introduced in ES6. It also has lexical this behavior.",
    difficulty: "Beginner",
  },
  {
    id: 25,
    question: "What is a callback function?",
    answer:
      "A callback is a function passed to another function to be executed later or when a particular operation completes.",
    difficulty: "Intermediate",
  },
  {
    id: 26,
    question: "What is a higher-order function?",
    answer:
      "A higher-order function is a function that takes another function as an argument, returns a function, or both.",
    difficulty: "Intermediate",
  },
  {
    id: 27,
    question: "What is a pure function?",
    answer:
      "A pure function produces the same output for the same inputs and does not cause observable side effects.",
    difficulty: "Intermediate",
  },
  {
    id: 28,
    question: "What are first-class functions?",
    answer:
      "Functions are first-class values in JavaScript, meaning they can be assigned to variables, passed as arguments, returned from functions, and stored in data structures.",
    difficulty: "Intermediate",
  },
  {
    id: 29,
    question: "What is an IIFE?",
    answer:
      "IIFE stands for Immediately Invoked Function Expression. It is a function expression that is executed immediately after it is defined.",
    difficulty: "Advanced",
  },
  {
    id: 30,
    question: "What is recursion?",
    answer:
      "Recursion is a technique where a function calls itself until it reaches a base condition.",
    difficulty: "Intermediate",
  },
  {
    id: 31,
    question: "What is an array?",
    answer:
      "An array is an ordered collection of values. JavaScript arrays can contain values of different types.",
    difficulty: "Beginner",
  },
  {
    id: 32,
    question: "What is the difference between map and forEach?",
    answer:
      "forEach executes a function for each element and does not create a new array from the callback result. map creates and returns a new array containing the callback results.",
    difficulty: "Beginner",
  },
  {
    id: 33,
    question: "What does filter do?",
    answer:
      "filter returns a new array containing elements that satisfy a condition.",
    difficulty: "Beginner",
  },
  {
    id: 34,
    question: "What does reduce do?",
    answer:
      "reduce processes array elements and combines them into a single accumulated result.",
    difficulty: "Intermediate",
  },
  {
    id: 35,
    question: "What does find do?",
    answer:
      "find returns the first array element that satisfies a condition. If none matches, it returns undefined.",
    difficulty: "Beginner",
  },
  {
    id: 36,
    question: "What does some do?",
    answer:
      "some returns true if at least one element satisfies the provided condition.",
    difficulty: "Beginner",
  },
  {
    id: 37,
    question: "What does every do?",
    answer:
      "every returns true only if all elements satisfy the provided condition.",
    difficulty: "Beginner",
  },
  {
    id: 38,
    question: "What is destructuring?",
    answer:
      "Destructuring is syntax that allows values from arrays or properties from objects to be assigned directly to variables.",
    difficulty: "Intermediate",
  },
  {
    id: 39,
    question: "What is the spread operator?",
    answer:
      "The spread operator (...) expands iterable values or object properties into another array, object, or function call.",
    difficulty: "Intermediate",
  },
  {
    id: 40,
    question: "What is the rest parameter?",
    answer:
      "The rest parameter (...) collects multiple function arguments into an array.",
    difficulty: "Intermediate",
  },
  {
    id: 41,
    question: "What is an object in JavaScript?",
    answer:
      "An object is a collection of properties, where each property has a key and a value.",
    difficulty: "Beginner",
  },
  {
    id: 42,
    question: "How can you access object properties?",
    answer:
      "Object properties can be accessed using dot notation or bracket notation.",
    difficulty: "Beginner",
  },
  {
    id: 43,
    question: "What is object destructuring?",
    answer:
      "Object destructuring extracts properties from an object and assigns them to variables.",
    difficulty: "Intermediate",
  },
  {
    id: 44,
    question: "What is the difference between shallow copy and deep copy?",
    answer:
      "A shallow copy duplicates the top-level structure while nested references may still be shared. A deep copy creates independent copies of nested data.",
    difficulty: "Advanced",
  },
  {
    id: 45,
    question: "What is Object.assign()?",
    answer:
      "Object.assign() copies enumerable own properties from one or more source objects into a target object.",
    difficulty: "Intermediate",
  },
  {
    id: 46,
    question:
      "What do Object.keys(), Object.values(), and Object.entries() do?",
    answer:
      "Object.keys() returns property names, Object.values() returns property values, and Object.entries() returns key-value pairs.",
    difficulty: "Intermediate",
  },
  {
    id: 47,
    question: "What is immutability?",
    answer:
      "Immutability means avoiding direct modification of existing data and instead creating new values when changes are needed.",
    difficulty: "Intermediate",
  },
  {
    id: 48,
    question: "Why is immutability important in React?",
    answer:
      "React commonly relies on detecting changes in state references. Creating new objects or arrays makes state changes easier to detect and reason about.",
    difficulty: "Intermediate",
  },
  {
    id: 49,
    question: "What is the difference between a property and a method?",
    answer:
      "A property stores data on an object, while a method is a function stored as an object property.",
    difficulty: "Beginner",
  },
  {
    id: 50,
    question: "What is JSON?",
    answer:
      "JSON stands for JavaScript Object Notation. It is a text format commonly used to exchange structured data.",
    difficulty: "Beginner",
  },
  {
    id: 51,
    question: "What is the DOM?",
    answer:
      "The DOM, or Document Object Model, represents an HTML document as a tree of objects that JavaScript can read and modify.",
    difficulty: "Beginner",
  },
  {
    id: 52,
    question: "How do you select an element from the DOM?",
    answer:
      "Common methods include getElementById(), querySelector(), and querySelectorAll().",
    difficulty: "Beginner",
  },
  {
    id: 53,
    question: "What is event handling?",
    answer:
      "Event handling is the process of responding to user or browser actions such as clicks, input, submission, and keyboard events.",
    difficulty: "Beginner",
  },
  {
    id: 54,
    question: "What is event bubbling?",
    answer:
      "Event bubbling occurs when an event starts at the target element and then propagates upward through its ancestors.",
    difficulty: "Intermediate",
  },
  {
    id: 55,
    question: "What is event capturing?",
    answer:
      "Event capturing is the phase where an event travels from the document or ancestor elements down toward the target element.",
    difficulty: "Advanced",
  },
  {
    id: 56,
    question: "What is event delegation?",
    answer:
      "Event delegation uses a parent element to handle events for its child elements, often by taking advantage of event bubbling.",
    difficulty: "Advanced",
  },
  {
    id: 57,
    question: "What is preventDefault()?",
    answer:
      "preventDefault() prevents the browser's default action for an event, such as preventing a form from submitting normally.",
    difficulty: "Beginner",
  },
  {
    id: 58,
    question: "What is stopPropagation()?",
    answer:
      "stopPropagation() prevents an event from continuing to propagate through the event flow.",
    difficulty: "Intermediate",
  },
  {
    id: 59,
    question: "What is innerHTML?",
    answer:
      "innerHTML gets or sets the HTML markup contained inside an element.",
    difficulty: "Beginner",
  },
  {
    id: 60,
    question: "What is the difference between textContent and innerHTML?",
    answer:
      "textContent works with text content, while innerHTML parses and returns or sets HTML markup.",
    difficulty: "Intermediate",
  },
  {
    id: 61,
    question: "What is synchronous JavaScript?",
    answer:
      "Synchronous JavaScript executes operations sequentially, generally waiting for one operation to finish before moving to the next.",
    difficulty: "Beginner",
  },
  {
    id: 62,
    question: "What is asynchronous JavaScript?",
    answer:
      "Asynchronous JavaScript allows certain operations, such as timers or network requests, to complete later without blocking the rest of the program.",
    difficulty: "Intermediate",
  },
  {
    id: 63,
    question: "What is a Promise?",
    answer:
      "A Promise represents the eventual completion or failure of an asynchronous operation and can be in pending, fulfilled, or rejected states.",
    difficulty: "Intermediate",
  },
  {
    id: 64,
    question: "What are async and await?",
    answer:
      "async marks a function as asynchronous, while await pauses execution inside that async function until a Promise settles.",
    difficulty: "Intermediate",
  },
  {
    id: 65,
    question:
      "What is the difference between Promise.all and Promise.allSettled?",
    answer:
      "Promise.all rejects as soon as one Promise rejects. Promise.allSettled waits for all Promises and reports the outcome of each one.",
    difficulty: "Advanced",
  },
  {
    id: 66,
    question: "What is setTimeout()?",
    answer: "setTimeout() schedules a function to run after a minimum delay.",
    difficulty: "Beginner",
  },
  {
    id: 67,
    question: "What is setInterval()?",
    answer:
      "setInterval() schedules a function to run repeatedly at a specified interval.",
    difficulty: "Beginner",
  },
  {
    id: 68,
    question: "What is the event loop?",
    answer:
      "The event loop coordinates asynchronous callbacks and other tasks with the JavaScript execution stack and queues.",
    difficulty: "Advanced",
  },
  {
    id: 69,
    question: "What is the call stack?",
    answer: "The call stack keeps track of currently executing function calls.",
    difficulty: "Intermediate",
  },
  {
    id: 70,
    question: "What is the microtask queue?",
    answer:
      "The microtask queue contains tasks such as Promise callbacks that are generally processed after the current stack completes and before the browser handles the next macrotask.",
    difficulty: "Advanced",
  },
  {
    id: 71,
    question: "What is a closure?",
    answer:
      "A closure occurs when a function retains access to variables from its lexical outer scope even after the outer function has finished executing.",
    difficulty: "Advanced",
  },
  {
    id: 72,
    question: "What is hoisting?",
    answer:
      "Hoisting describes how JavaScript processes declarations before execution. Function declarations are available throughout their scope, while let and const remain inaccessible before initialization due to the temporal dead zone.",
    difficulty: "Intermediate",
  },
  {
    id: 73,
    question: "What is the temporal dead zone?",
    answer:
      "The temporal dead zone is the period between entering a scope and the initialization of a let or const variable, during which accessing the variable causes a ReferenceError.",
    difficulty: "Advanced",
  },
  {
    id: 74,
    question: "What is this in JavaScript?",
    answer:
      "this refers to a value determined by how a function is called. Arrow functions do not create their own this and instead capture it lexically from the surrounding scope.",
    difficulty: "Advanced",
  },
  {
    id: 75,
    question:
      "What is the difference between regular functions and arrow functions?",
    answer:
      "Arrow functions have shorter syntax and lexical this behavior. Regular functions have their own this based on the call site and can also be used as constructors.",
    difficulty: "Advanced",
  },
];

export default javascriptQuestions;
