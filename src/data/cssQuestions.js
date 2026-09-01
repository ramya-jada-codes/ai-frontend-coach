const cssQuestions = [
  {
    id: 1,
    question: "What is CSS?",
    answer:
      "CSS stands for Cascading Style Sheets. It is used to style and design HTML elements on web pages.",
    difficulty: "Beginner",
  },
  {
    id: 2,
    question: "What does CSS stand for?",
    answer: "CSS stands for Cascading Style Sheets.",
    difficulty: "Beginner",
  },
  {
    id: 3,
    question: "Why do we use CSS?",
    answer:
      "CSS is used to control the appearance, layout, colors, fonts, spacing, and responsiveness of web pages.",
    difficulty: "Beginner",
  },
  {
    id: 4,
    question: "What are the different ways to apply CSS?",
    answer:
      "CSS can be applied using inline CSS, internal CSS, and external CSS.",
    difficulty: "Beginner",
  },
  {
    id: 5,
    question: "What is inline CSS?",
    answer:
      "Inline CSS is written directly inside an HTML element using the style attribute.",
    difficulty: "Beginner",
  },
  {
    id: 6,
    question: "What is internal CSS?",
    answer:
      "Internal CSS is written inside a style element in the head section of an HTML document.",
    difficulty: "Beginner",
  },
  {
    id: 7,
    question: "What is external CSS?",
    answer:
      "External CSS is written in a separate CSS file and connected to an HTML document using the link element.",
    difficulty: "Beginner",
  },
  {
    id: 8,
    question: "What is a CSS selector?",
    answer:
      "A CSS selector is used to select HTML elements that we want to style.",
    difficulty: "Beginner",
  },
  {
    id: 9,
    question:
      "What is the difference between a class selector and an ID selector?",
    answer:
      "A class selector starts with a dot and can be used on multiple elements. An ID selector starts with a hash symbol and is intended to identify a unique element.",
    difficulty: "Beginner",
  },
  {
    id: 10,
    question: "What is the CSS box model?",
    answer:
      "The CSS box model describes an element as consisting of content, padding, border, and margin.",
    difficulty: "Beginner",
  },
  {
    id: 11,
    question: "What is the difference between margin and padding?",
    answer:
      "Margin creates space outside an element's border, while padding creates space between the content and the border.",
    difficulty: "Beginner",
  },
  {
    id: 12,
    question: "What is the difference between width and height?",
    answer:
      "Width controls the horizontal size of an element, while height controls its vertical size.",
    difficulty: "Beginner",
  },
  {
    id: 13,
    question: "What is the difference between block, inline, and inline-block?",
    answer:
      "Block elements normally start on a new line and can have width and height. Inline elements stay within the same line and generally ignore width and height. Inline-block elements stay inline but allow width and height.",
    difficulty: "Intermediate",
  },
  {
    id: 14,
    question: "What is the display property in CSS?",
    answer:
      "The display property controls how an element participates in layout, such as block, inline, inline-block, flex, grid, or none.",
    difficulty: "Beginner",
  },
  {
    id: 15,
    question: "What does display: none do?",
    answer:
      "display: none removes the element from the layout, so it does not occupy space on the page.",
    difficulty: "Beginner",
  },
  {
    id: 16,
    question: "What is the position property in CSS?",
    answer:
      "The position property controls how an element is positioned in the document, such as static, relative, absolute, fixed, or sticky.",
    difficulty: "Intermediate",
  },
  {
    id: 17,
    question:
      "What is the difference between relative and absolute positioning?",
    answer:
      "A relatively positioned element remains in the normal document flow and can be offset from its original position. An absolutely positioned element is removed from normal flow and is positioned relative to its containing block.",
    difficulty: "Intermediate",
  },
  {
    id: 18,
    question: "What is fixed positioning?",
    answer:
      "A fixed element is positioned relative to the viewport and normally remains in the same position when the page is scrolled.",
    difficulty: "Intermediate",
  },
  {
    id: 19,
    question: "What is sticky positioning?",
    answer:
      "A sticky element behaves like a relatively positioned element until a specified scroll position is reached, after which it sticks within its containing area.",
    difficulty: "Intermediate",
  },
  {
    id: 20,
    question: "What is z-index?",
    answer:
      "The z-index property controls the stacking order of positioned elements and some other elements that participate in stacking contexts.",
    difficulty: "Intermediate",
  },
  {
    id: 21,
    question: "What is Flexbox?",
    answer:
      "Flexbox is a CSS layout system designed to arrange elements in a row or column and control their alignment and spacing.",
    difficulty: "Beginner",
  },
  {
    id: 22,
    question: "What is the difference between flex-direction: row and column?",
    answer:
      "row places flex items along the horizontal main axis, while column places them along the vertical main axis.",
    difficulty: "Beginner",
  },
  {
    id: 23,
    question: "What is justify-content in Flexbox?",
    answer:
      "justify-content controls the alignment and distribution of flex items along the main axis.",
    difficulty: "Beginner",
  },
  {
    id: 24,
    question: "What is align-items in Flexbox?",
    answer:
      "align-items controls the alignment of flex items along the cross axis.",
    difficulty: "Beginner",
  },
  {
    id: 25,
    question: "What is flex-wrap?",
    answer:
      "The flex-wrap property determines whether flex items stay on one line or wrap onto multiple lines.",
    difficulty: "Beginner",
  },
  {
    id: 26,
    question: "What is CSS Grid?",
    answer:
      "CSS Grid is a two-dimensional layout system that allows developers to arrange elements into rows and columns.",
    difficulty: "Beginner",
  },
  {
    id: 27,
    question: "What is the difference between Flexbox and Grid?",
    answer:
      "Flexbox is primarily designed for one-dimensional layouts, while Grid is designed for two-dimensional layouts involving rows and columns.",
    difficulty: "Intermediate",
  },
  {
    id: 28,
    question: "What is grid-template-columns?",
    answer:
      "The grid-template-columns property defines the number and sizes of columns in a CSS Grid layout.",
    difficulty: "Intermediate",
  },
  {
    id: 29,
    question: "What is the gap property in CSS?",
    answer:
      "The gap property defines the spacing between rows and columns in layouts such as Flexbox and Grid.",
    difficulty: "Beginner",
  },
  {
    id: 30,
    question: "What are pseudo-classes in CSS?",
    answer:
      "Pseudo-classes select elements based on a particular state or condition. Examples include :hover, :focus, :active, and :first-child.",
    difficulty: "Intermediate",
  },
  {
    id: 31,
    question: "What are pseudo-elements in CSS?",
    answer:
      "Pseudo-elements allow developers to style a specific part of an element or insert generated content. Examples include ::before, ::after, ::first-letter, and ::first-line.",
    difficulty: "Intermediate",
  },
  {
    id: 32,
    question: "What is the difference between pseudo-class and pseudo-element?",
    answer:
      "A pseudo-class represents a state or condition of an element, while a pseudo-element represents a specific part of an element or generated content.",
    difficulty: "Intermediate",
  },
  {
    id: 33,
    question: "What is CSS specificity?",
    answer:
      "CSS specificity is the system browsers use to determine which CSS rule takes precedence when multiple rules target the same element.",
    difficulty: "Intermediate",
  },
  {
    id: 34,
    question: "Which has higher specificity: class or ID?",
    answer: "An ID selector has higher specificity than a class selector.",
    difficulty: "Beginner",
  },
  {
    id: 35,
    question: "What is !important in CSS?",
    answer:
      "!important gives a declaration high priority in the cascade, although other cascade rules can still affect the final result.",
    difficulty: "Intermediate",
  },
  {
    id: 36,
    question: "What is inheritance in CSS?",
    answer:
      "Inheritance allows certain CSS properties from a parent element to be passed to its descendants.",
    difficulty: "Intermediate",
  },
  {
    id: 37,
    question: "What is the difference between em and rem?",
    answer:
      "rem is relative to the root element's font size, while em is relative to the font size of the relevant element or its parent depending on the property.",
    difficulty: "Intermediate",
  },
  {
    id: 38,
    question: "What are CSS units?",
    answer:
      "CSS units define measurements. Common units include px, %, em, rem, vw, vh, and fr.",
    difficulty: "Beginner",
  },
  {
    id: 39,
    question: "What is the difference between px, %, em, and rem?",
    answer:
      "px is a CSS pixel unit, % is relative to a relevant reference value, em is relative to the element's font size for font-size and often the element's computed font size for other properties, and rem is relative to the root element's font size.",
    difficulty: "Intermediate",
  },
  {
    id: 40,
    question: "What are media queries?",
    answer:
      "Media queries allow CSS rules to be applied based on conditions such as viewport width, height, or device capabilities.",
    difficulty: "Beginner",
  },
  {
    id: 41,
    question: "What is responsive web design in CSS?",
    answer:
      "Responsive web design uses flexible layouts, media queries, relative units, and responsive images to make websites adapt to different screen sizes.",
    difficulty: "Beginner",
  },
  {
    id: 42,
    question: "What is the difference between min-width and max-width?",
    answer:
      "min-width sets a minimum width an element or media query condition can have, while max-width sets a maximum width.",
    difficulty: "Intermediate",
  },
  {
    id: 43,
    question: "What is the overflow property?",
    answer:
      "The overflow property controls what happens when content does not fit inside an element's box, such as visible, hidden, scroll, or auto.",
    difficulty: "Intermediate",
  },
  {
    id: 44,
    question:
      "What is the difference between visibility: hidden and display: none?",
    answer:
      "visibility: hidden hides an element while generally preserving its layout space. display: none removes the element from the layout.",
    difficulty: "Intermediate",
  },
  {
    id: 45,
    question: "What are CSS variables?",
    answer:
      "CSS variables, also called custom properties, allow reusable values to be defined and referenced throughout CSS.",
    difficulty: "Intermediate",
  },
  {
    id: 46,
    question: "How do you define and use a CSS variable?",
    answer:
      "A CSS variable can be defined using --name, such as --primary-color: blue, and used with the var() function, such as color: var(--primary-color).",
    difficulty: "Intermediate",
  },
  {
    id: 47,
    question: "What is the difference between transition and animation?",
    answer:
      "A transition smoothly changes a property between states, usually triggered by a change. An animation can run through multiple keyframes and can have its own timing and iteration settings.",
    difficulty: "Advanced",
  },
  {
    id: 48,
    question: "What are CSS keyframes?",
    answer:
      "The @keyframes rule defines the intermediate stages of a CSS animation.",
    difficulty: "Intermediate",
  },
  {
    id: 49,
    question: "What is the difference between opacity and rgba?",
    answer:
      "opacity controls the transparency of an entire element, including its contents. rgba() can control the alpha transparency of a specific color value.",
    difficulty: "Advanced",
  },
  {
    id: 50,
    question: "What is the difference between reset CSS and normalize CSS?",
    answer:
      "A CSS reset removes or reduces browser default styles to create a consistent starting point. Normalize CSS preserves useful defaults while making browser rendering more consistent.",
    difficulty: "Advanced",
  },
];

export default cssQuestions;
