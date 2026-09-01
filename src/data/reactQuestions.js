const reactQuestions = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces, especially for single-page applications.",
    difficulty: "Beginner",
  },
  {
    id: 2,
    question: "Why is React used?",
    answer:
      "React is used to build reusable and interactive user interfaces using components.",
    difficulty: "Beginner",
  },
  {
    id: 3,
    question: "What are the main features of React?",
    answer:
      "React provides components, JSX, state, props, event handling, hooks, and efficient UI updates.",
    difficulty: "Beginner",
  },
  {
    id: 4,
    question: "What is a React component?",
    answer:
      "A component is a reusable piece of UI that can contain its own structure, logic, and behavior.",
    difficulty: "Beginner",
  },
  {
    id: 5,
    question: "What are the types of components in React?",
    answer:
      "React applications commonly use function components. Older React code may also contain class components.",
    difficulty: "Beginner",
  },
  {
    id: 6,
    question: "What is a function component?",
    answer:
      "A function component is a JavaScript function that returns React elements describing the UI.",
    difficulty: "Beginner",
  },
  {
    id: 7,
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension for JavaScript that allows us to write HTML-like markup inside JavaScript code.",
    difficulty: "Beginner",
  },
  {
    id: 8,
    question: "Why do we use JSX in React?",
    answer:
      "JSX makes it easier to describe the structure of the user interface close to the component logic.",
    difficulty: "Beginner",
  },
  {
    id: 9,
    question: "Is JSX HTML?",
    answer:
      "No. JSX looks similar to HTML, but it is syntax that is transformed into JavaScript and React elements.",
    difficulty: "Beginner",
  },
  {
    id: 10,
    question: "What is the difference between HTML and JSX?",
    answer:
      "JSX follows JavaScript syntax rules. For example, class is written as className and JavaScript expressions can be written inside curly braces.",
    difficulty: "Beginner",
  },

  {
    id: 11,
    question: "What are props in React?",
    answer:
      "Props are values passed from a parent component to a child component.",
    difficulty: "Beginner",
  },
  {
    id: 12,
    question: "Are props mutable?",
    answer:
      "Props should be treated as read-only by the component receiving them.",
    difficulty: "Beginner",
  },
  {
    id: 13,
    question: "What is state in React?",
    answer:
      "State is data managed by a component that can change over time and cause the component to render again.",
    difficulty: "Beginner",
  },
  {
    id: 14,
    question: "What is the difference between props and state?",
    answer:
      "Props are passed into a component by its parent, while state is managed by the component itself.",
    difficulty: "Beginner",
  },
  {
    id: 15,
    question: "What is useState?",
    answer:
      "useState is a React Hook that allows a function component to create and manage state.",
    difficulty: "Beginner",
  },
  {
    id: 16,
    question: "How do you use useState?",
    answer:
      "useState returns the current state value and a function used to update that state.",
    difficulty: "Beginner",
  },
  {
    id: 17,
    question: "What is useEffect?",
    answer:
      "useEffect is a React Hook used to synchronize a component with external systems and perform side effects.",
    difficulty: "Beginner",
  },
  {
    id: 18,
    question: "What are React Hooks?",
    answer:
      "Hooks are functions that allow function components to use React features such as state and effects.",
    difficulty: "Beginner",
  },
  {
    id: 19,
    question: "What are the rules of Hooks?",
    answer:
      "Hooks should be called at the top level of React function components or custom Hooks, not inside loops, conditions, or nested functions.",
    difficulty: "Intermediate",
  },
  {
    id: 20,
    question: "What is useRef?",
    answer:
      "useRef creates a mutable reference whose value persists between renders without causing a re-render when the value changes.",
    difficulty: "Intermediate",
  },

  {
    id: 21,
    question: "What is conditional rendering in React?",
    answer:
      "Conditional rendering means displaying different UI based on a condition.",
    difficulty: "Beginner",
  },
  {
    id: 22,
    question: "How do you use if statements in React?",
    answer:
      "You can use normal JavaScript if statements before returning JSX to decide what the component should render.",
    difficulty: "Beginner",
  },
  {
    id: 23,
    question: "How do you use the ternary operator in JSX?",
    answer:
      "The ternary operator can be used to render one of two UI options based on a condition.",
    difficulty: "Beginner",
  },
  {
    id: 24,
    question: "How do you render a list in React?",
    answer:
      "The map() method is commonly used to transform an array into a list of React elements.",
    difficulty: "Beginner",
  },
  {
    id: 25,
    question: "Why are keys important in React lists?",
    answer:
      "Keys help React identify which list items have changed, been added, or been removed.",
    difficulty: "Beginner",
  },
  {
    id: 26,
    question: "What is the key prop in React?",
    answer:
      "The key prop is a special value used by React to identify elements in a list.",
    difficulty: "Beginner",
  },
  {
    id: 27,
    question: "Can we use array index as a key?",
    answer:
      "An array index can be used when the list is static and items do not change order, but stable unique IDs are generally preferred.",
    difficulty: "Intermediate",
  },
  {
    id: 28,
    question: "What is event handling in React?",
    answer:
      "Event handling allows React components to respond to user actions such as clicks, typing, and form submissions.",
    difficulty: "Beginner",
  },
  {
    id: 29,
    question: "How do you handle a button click in React?",
    answer:
      "You can use the onClick prop and provide a function that should run when the button is clicked.",
    difficulty: "Beginner",
  },
  {
    id: 30,
    question: "What is the difference between onClick and onclick?",
    answer:
      "React uses camelCase event names such as onClick, while traditional HTML commonly uses lowercase onclick.",
    difficulty: "Beginner",
  },

  {
    id: 31,
    question: "What is a controlled component?",
    answer:
      "A controlled component is a form element whose value is controlled by React state.",
    difficulty: "Intermediate",
  },
  {
    id: 32,
    question: "What is an uncontrolled component?",
    answer:
      "An uncontrolled component stores its form value in the DOM rather than directly controlling it with React state.",
    difficulty: "Intermediate",
  },
  {
    id: 33,
    question: "What is a React form?",
    answer:
      "A React form is a user input form managed using React components, event handlers, and often state.",
    difficulty: "Beginner",
  },
  {
    id: 34,
    question: "How do you handle input fields in React?",
    answer: "Input fields can be handled using state and the onChange event.",
    difficulty: "Beginner",
  },
  {
    id: 35,
    question: "What is lifting state up?",
    answer:
      "Lifting state up means moving shared state to the closest common parent component so multiple child components can use it.",
    difficulty: "Intermediate",
  },
  {
    id: 36,
    question: "What is prop drilling?",
    answer:
      "Prop drilling occurs when props are passed through several components just to reach a deeply nested component.",
    difficulty: "Intermediate",
  },
  {
    id: 37,
    question: "How can prop drilling be avoided?",
    answer:
      "Depending on the situation, prop drilling can be reduced using component composition, Context, or state management libraries.",
    difficulty: "Intermediate",
  },
  {
    id: 38,
    question: "What is React Context?",
    answer:
      "Context allows data to be shared with components in a component tree without passing props through every level.",
    difficulty: "Intermediate",
  },
  {
    id: 39,
    question: "What is useContext?",
    answer:
      "useContext is a Hook that lets a component read and subscribe to a Context value.",
    difficulty: "Intermediate",
  },
  {
    id: 40,
    question: "What is a custom Hook?",
    answer:
      "A custom Hook is a JavaScript function that uses React Hooks to reuse stateful logic between components.",
    difficulty: "Intermediate",
  },

  {
    id: 41,
    question: "What is the Virtual DOM?",
    answer:
      "The Virtual DOM is a programming concept used by React to represent UI information in memory and efficiently update the actual DOM.",
    difficulty: "Intermediate",
  },
  {
    id: 42,
    question: "What is reconciliation in React?",
    answer:
      "Reconciliation is the process React uses to determine what changes are needed in the rendered UI.",
    difficulty: "Intermediate",
  },
  {
    id: 43,
    question: "What causes a React component to re-render?",
    answer:
      "A component can re-render when its state changes, when its parent re-renders, or when a consumed Context value changes.",
    difficulty: "Intermediate",
  },
  {
    id: 44,
    question: "Does changing a ref cause a re-render?",
    answer:
      "No. Updating the current value of a ref does not by itself cause a React component to re-render.",
    difficulty: "Intermediate",
  },
  {
    id: 45,
    question: "What is React.memo?",
    answer:
      "React.memo can skip re-rendering a component when its props have not changed, subject to React's rendering behavior.",
    difficulty: "Advanced",
  },
  {
    id: 46,
    question: "What is useMemo?",
    answer:
      "useMemo caches the result of a calculation between renders when its dependencies have not changed.",
    difficulty: "Advanced",
  },
  {
    id: 47,
    question: "What is useCallback?",
    answer:
      "useCallback caches a function definition between renders when its dependencies have not changed.",
    difficulty: "Advanced",
  },
  {
    id: 48,
    question: "What is the difference between useMemo and useCallback?",
    answer:
      "useMemo caches the result of a calculation, while useCallback caches a function definition.",
    difficulty: "Advanced",
  },
  {
    id: 49,
    question: "What is lazy loading in React?",
    answer:
      "Lazy loading allows part of an application to be loaded only when it is needed.",
    difficulty: "Intermediate",
  },
  {
    id: 50,
    question: "What is React.lazy?",
    answer:
      "React.lazy allows a component to be loaded dynamically using a Promise, commonly for code splitting.",
    difficulty: "Advanced",
  },

  {
    id: 51,
    question: "What is Suspense in React?",
    answer:
      "Suspense allows React to display fallback UI while certain content is not yet ready to be rendered.",
    difficulty: "Advanced",
  },
  {
    id: 52,
    question: "What is code splitting?",
    answer:
      "Code splitting divides JavaScript code into smaller chunks that can be loaded when needed instead of loading everything at once.",
    difficulty: "Advanced",
  },
  {
    id: 53,
    question: "What is React Router?",
    answer:
      "React Router is a routing library commonly used to create navigation and URL-based views in React applications.",
    difficulty: "Intermediate",
  },
  {
    id: 54,
    question: "What is routing in React?",
    answer:
      "Routing determines which UI should be displayed based on the current URL.",
    difficulty: "Beginner",
  },
  {
    id: 55,
    question: "What is a single-page application?",
    answer:
      "A single-page application is a web application that can update its UI without requiring a full page reload for every navigation.",
    difficulty: "Beginner",
  },
  {
    id: 56,
    question: "How do you fetch API data in React?",
    answer:
      "API data can be fetched using browser APIs such as fetch, often inside an Effect when the component needs to synchronize with an external data source.",
    difficulty: "Intermediate",
  },
  {
    id: 57,
    question: "What is fetch()?",
    answer:
      "fetch() is a browser API used to make network requests and returns a Promise.",
    difficulty: "Beginner",
  },
  {
    id: 58,
    question: "How do you handle loading state in React?",
    answer:
      "A loading state can be stored using useState and displayed conditionally while data is being loaded.",
    difficulty: "Beginner",
  },
  {
    id: 59,
    question: "How do you handle errors in API calls?",
    answer:
      "You can catch request errors and store an error state, then conditionally display an appropriate error message.",
    difficulty: "Intermediate",
  },
  {
    id: 60,
    question: "What is an error boundary?",
    answer:
      "An error boundary is a React mechanism that can catch rendering errors in a component tree and display fallback UI.",
    difficulty: "Advanced",
  },

  {
    id: 61,
    question: "What is component composition?",
    answer:
      "Component composition means building larger components by combining smaller reusable components.",
    difficulty: "Intermediate",
  },
  {
    id: 62,
    question: "What is children prop in React?",
    answer:
      "The children prop represents the content placed between the opening and closing tags of a component.",
    difficulty: "Beginner",
  },
  {
    id: 63,
    question: "What is a fragment in React?",
    answer:
      "A Fragment lets you group multiple elements without adding an extra DOM element.",
    difficulty: "Beginner",
  },
  {
    id: 64,
    question: "What is React.StrictMode?",
    answer:
      "StrictMode is a development-only feature that helps identify potential problems and unsafe patterns in a React application.",
    difficulty: "Intermediate",
  },
  {
    id: 65,
    question: "What is the purpose of package.json in a React project?",
    answer:
      "package.json stores project metadata, scripts, and dependencies used by the application.",
    difficulty: "Beginner",
  },
  {
    id: 66,
    question: "What is npm?",
    answer:
      "npm is a package manager commonly used to install JavaScript packages and run project scripts.",
    difficulty: "Beginner",
  },
  {
    id: 67,
    question: "What is Vite?",
    answer:
      "Vite is a modern frontend build tool and development server commonly used to create and build React applications.",
    difficulty: "Beginner",
  },
  {
    id: 68,
    question: "What is the difference between React and ReactDOM?",
    answer:
      "React provides the core React APIs for building components, while ReactDOM provides APIs for rendering React applications into the browser DOM.",
    difficulty: "Intermediate",
  },
  {
    id: 69,
    question: "What is createRoot()?",
    answer:
      "createRoot() creates a React root that can be used to render a React application into a browser DOM element.",
    difficulty: "Intermediate",
  },
  {
    id: 70,
    question: "What is Strict Mode used for during development?",
    answer:
      "Strict Mode helps developers identify potential problems by enabling additional development-time checks.",
    difficulty: "Intermediate",
  },

  {
    id: 71,
    question: "What is server-side rendering?",
    answer:
      "Server-side rendering means generating HTML for a page on the server before sending it to the browser.",
    difficulty: "Advanced",
  },
  {
    id: 72,
    question: "What is client-side rendering?",
    answer:
      "Client-side rendering means the browser uses JavaScript to build or update the user interface on the client.",
    difficulty: "Intermediate",
  },
  {
    id: 73,
    question: "What is hydration in React?",
    answer:
      "Hydration is the process of attaching React behavior to HTML that was already rendered on the server.",
    difficulty: "Advanced",
  },
  {
    id: 74,
    question: "What is state management in React?",
    answer:
      "State management is the process of storing, updating, and sharing application data between components.",
    difficulty: "Intermediate",
  },
  {
    id: 75,
    question: "What are the best practices for React development?",
    answer:
      "Common practices include creating reusable components, keeping components focused, using meaningful names, managing state carefully, using stable keys, avoiding unnecessary effects, and keeping code readable.",
    difficulty: "Advanced",
  },
];

export default reactQuestions;
