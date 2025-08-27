import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";

// function MyApp() {
//   return (
//     <div>
//       <h1>Custom App</h1>
//     </div>
//   );
// }

const ReactElement = {
  type: "a",
  props: {
    href: "https://our-ai.netlify.app/",
    target: "_blank",
  },
  children: "Click me go to the free image genarator",
};

const AnotherElement = (
  <a href="https://our-ai.netlify.app/">our ai | free Ai</a>
);

const AnotherUser = 'aa'

const reactElement = React.createElement(
  "a",
  {
    href: "https://our-ai.netlify.app/",
    target: "_blank",
  },
  "our ai",
  AnotherUser
);

createRoot(document.getElementById("root")).render(
 reactElement
);
