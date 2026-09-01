const htmlQuestions = [
  {
    id: 1,
    question: "What is HTML?",
    answer:
      "HTML stands for HyperText Markup Language. It is the standard markup language used to structure content on web pages.",
    difficulty: "Beginner",
  },
  {
    id: 2,
    question: "What does HTML stand for?",
    answer: "HTML stands for HyperText Markup Language.",
    difficulty: "Beginner",
  },
  {
    id: 3,
    question: "What is the basic structure of an HTML document?",
    answer:
      "A basic HTML document contains the doctype declaration, html element, head element, and body element.",
    difficulty: "Beginner",
  },
  {
    id: 4,
    question: "What is <!DOCTYPE html>?",
    answer:
      "DOCTYPE tells the browser that the document uses HTML5 and helps the browser render the page in standards mode.",
    difficulty: "Beginner",
  },
  {
    id: 5,
    question: "What is the difference between the head and body elements?",
    answer:
      "The head contains metadata, the page title, stylesheets, and other information about the document. The body contains the visible page content.",
    difficulty: "Beginner",
  },
  {
    id: 6,
    question: "What are HTML elements?",
    answer:
      "HTML elements are building blocks of a web page. They are usually represented using an opening tag, content, and a closing tag.",
    difficulty: "Beginner",
  },
  {
    id: 7,
    question: "What are HTML tags?",
    answer:
      "HTML tags are keywords enclosed in angle brackets that define how content is structured. Examples include p, h1, div, and section.",
    difficulty: "Beginner",
  },
  {
    id: 8,
    question: "What is the difference between an element and a tag?",
    answer:
      "A tag is the markup used to define an element, while an element includes the complete structure, including its content and tags.",
    difficulty: "Beginner",
  },
  {
    id: 9,
    question: "What are attributes in HTML?",
    answer:
      "Attributes provide additional information about an HTML element. Examples include href, src, alt, id, and class.",
    difficulty: "Beginner",
  },
  {
    id: 10,
    question: "What is the difference between id and class?",
    answer:
      "An id is intended to identify a unique element, while a class can be used on multiple elements.",
    difficulty: "Beginner",
  },

  {
    id: 11,
    question: "What are semantic elements in HTML?",
    answer:
      "Semantic elements clearly describe the meaning and purpose of their content. Examples include header, nav, main, section, article, aside, and footer.",
    difficulty: "Beginner",
  },
  {
    id: 12,
    question: "Why are semantic HTML elements important?",
    answer:
      "They improve accessibility, make code easier to understand and maintain, and help search engines better understand the structure of a page.",
    difficulty: "Intermediate",
  },
  {
    id: 13,
    question: "What is the difference between div and span?",
    answer:
      "div is a generic block-level container, while span is a generic inline container.",
    difficulty: "Beginner",
  },
  {
    id: 14,
    question: "What are block-level elements?",
    answer:
      "Block-level elements normally start on a new line and take up the available width. Examples include div, p, h1, section, and header.",
    difficulty: "Beginner",
  },
  {
    id: 15,
    question: "What are inline elements?",
    answer:
      "Inline elements normally stay within the same line and take only the space they need. Examples include span, a, strong, and em.",
    difficulty: "Beginner",
  },
  {
    id: 16,
    question: "What is the purpose of the header element?",
    answer:
      "The header element represents introductory or navigational content for a page or section.",
    difficulty: "Beginner",
  },
  {
    id: 17,
    question: "What is the purpose of the nav element?",
    answer: "The nav element represents a section containing navigation links.",
    difficulty: "Beginner",
  },
  {
    id: 18,
    question: "What is the purpose of the main element?",
    answer: "The main element contains the primary content of the document.",
    difficulty: "Beginner",
  },
  {
    id: 19,
    question: "What is the purpose of the section element?",
    answer:
      "The section element represents a thematic grouping of related content, usually with a heading.",
    difficulty: "Intermediate",
  },
  {
    id: 20,
    question: "What is the purpose of the article element?",
    answer:
      "The article element represents a self-contained piece of content that can stand independently, such as a blog post or news article.",
    difficulty: "Intermediate",
  },

  {
    id: 21,
    question: "What is the purpose of the footer element?",
    answer:
      "The footer element represents footer information for a page or section, such as copyright information, contact details, or related links.",
    difficulty: "Beginner",
  },
  {
    id: 22,
    question: "What is the difference between strong and b?",
    answer:
      "The strong element indicates strong importance, while b is mainly used to draw attention to text without adding semantic importance.",
    difficulty: "Intermediate",
  },
  {
    id: 23,
    question: "What is the difference between em and i?",
    answer:
      "The em element represents emphasis, while i is generally used for text set apart from normal prose without implying emphasis.",
    difficulty: "Intermediate",
  },
  {
    id: 24,
    question: "What is the purpose of the alt attribute?",
    answer:
      "The alt attribute provides alternative text for an image. It improves accessibility and can be displayed when the image cannot load.",
    difficulty: "Beginner",
  },
  {
    id: 25,
    question: "What is the difference between href and src?",
    answer:
      "href specifies a reference or destination, commonly used with links and stylesheets. src specifies the source of embedded resources such as images and scripts.",
    difficulty: "Beginner",
  },
  {
    id: 26,
    question: "What is the anchor element in HTML?",
    answer:
      "The anchor element, written as a, is used to create hyperlinks to other pages, sections, files, or resources.",
    difficulty: "Beginner",
  },
  {
    id: 27,
    question: "What is the target attribute in an anchor tag?",
    answer:
      "The target attribute specifies where the linked document should open, such as in the same browsing context or a new tab.",
    difficulty: "Intermediate",
  },
  {
    id: 28,
    question: "What is an HTML form?",
    answer:
      "An HTML form is used to collect user input through controls such as input, textarea, select, and button.",
    difficulty: "Beginner",
  },
  {
    id: 29,
    question: "What is the difference between GET and POST in forms?",
    answer:
      "GET typically sends form data as part of the URL and is suitable for retrieving data. POST sends data in the request body and is commonly used when submitting or modifying data.",
    difficulty: "Intermediate",
  },
  {
    id: 30,
    question: "What is the purpose of the label element?",
    answer:
      "The label element provides a text label for a form control and improves usability and accessibility.",
    difficulty: "Beginner",
  },

  {
    id: 31,
    question: "What are different types of HTML input elements?",
    answer:
      "Common input types include text, password, email, number, date, checkbox, radio, file, submit, button, and range.",
    difficulty: "Beginner",
  },
  {
    id: 32,
    question: "What is the difference between checkbox and radio button?",
    answer:
      "Checkboxes allow users to select multiple options, while radio buttons are generally used when only one option from a group should be selected.",
    difficulty: "Beginner",
  },
  {
    id: 33,
    question: "What is the purpose of the placeholder attribute?",
    answer:
      "The placeholder attribute provides a short hint describing the expected value of an input.",
    difficulty: "Beginner",
  },
  {
    id: 34,
    question: "What is the required attribute?",
    answer:
      "The required attribute specifies that a form control must have a value before the form can be submitted.",
    difficulty: "Beginner",
  },
  {
    id: 35,
    question: "What is the difference between readonly and disabled?",
    answer:
      "A readonly control cannot be edited but can generally still be submitted. A disabled control cannot be interacted with and is generally not submitted with the form.",
    difficulty: "Intermediate",
  },
  {
    id: 36,
    question: "What are HTML lists?",
    answer:
      "HTML provides unordered lists using ul, ordered lists using ol, and description lists using dl.",
    difficulty: "Beginner",
  },
  {
    id: 37,
    question: "What is the difference between ul and ol?",
    answer:
      "ul creates an unordered list, usually displayed with bullets. ol creates an ordered list, usually displayed with numbers or letters.",
    difficulty: "Beginner",
  },
  {
    id: 38,
    question: "How do you create a table in HTML?",
    answer:
      "HTML tables use elements such as table, tr for rows, th for header cells, and td for data cells.",
    difficulty: "Beginner",
  },
  {
    id: 39,
    question: "What is the difference between th and td?",
    answer:
      "th represents a table header cell, while td represents a standard table data cell.",
    difficulty: "Beginner",
  },
  {
    id: 40,
    question: "What is the purpose of the caption element in a table?",
    answer:
      "The caption element provides a title or description for an HTML table.",
    difficulty: "Intermediate",
  },

  {
    id: 41,
    question: "What is the viewport meta tag?",
    answer:
      "The viewport meta tag controls the page's viewport settings and is important for responsive layouts on mobile devices.",
    difficulty: "Intermediate",
  },
  {
    id: 42,
    question: "What is responsive web design?",
    answer:
      "Responsive web design means creating websites that adapt their layout and content to different screen sizes and devices.",
    difficulty: "Beginner",
  },
  {
    id: 43,
    question: "How can HTML improve accessibility?",
    answer:
      "Using semantic elements, proper headings, labels for form controls, meaningful alt text, accessible links, and appropriate attributes helps improve accessibility.",
    difficulty: "Intermediate",
  },
  {
    id: 44,
    question: "What is ARIA in HTML?",
    answer:
      "ARIA, or Accessible Rich Internet Applications, provides attributes that can improve accessibility when native HTML semantics are not sufficient.",
    difficulty: "Advanced",
  },
  {
    id: 45,
    question: "What is the difference between localStorage and sessionStorage?",
    answer:
      "Both are browser storage mechanisms. localStorage persists until it is cleared, while sessionStorage generally lasts for the duration of the browser tab session.",
    difficulty: "Intermediate",
  },
  {
    id: 46,
    question: "What is the difference between cookies and web storage?",
    answer:
      "Cookies are small pieces of data that can be sent with HTTP requests, while localStorage and sessionStorage are primarily client-side storage mechanisms and are not automatically sent with every request.",
    difficulty: "Advanced",
  },
  {
    id: 47,
    question: "What are void elements in HTML?",
    answer:
      "Void elements do not have closing tags or child content. Examples include img, input, br, hr, meta, and link.",
    difficulty: "Intermediate",
  },
  {
    id: 48,
    question:
      "What is the difference between async and defer in script loading?",
    answer:
      "Both allow scripts to download without blocking HTML parsing. async executes as soon as the script is ready, while defer waits until HTML parsing is complete and preserves script order.",
    difficulty: "Advanced",
  },
  {
    id: 49,
    question:
      "Why should we use semantic HTML instead of using div for everything?",
    answer:
      "Semantic HTML communicates the purpose of content, improves accessibility and maintainability, and gives browsers and search engines better structural information.",
    difficulty: "Intermediate",
  },
  {
    id: 50,
    question: "What is the difference between HTML and HTML5?",
    answer:
      "HTML5 is a modern version of HTML that introduced semantic elements, native multimedia elements, improved form controls, canvas, and several browser APIs.",
    difficulty: "Intermediate",
  },
];

export default htmlQuestions;
