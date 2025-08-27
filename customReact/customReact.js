function customRander(Element, Parent) {
  //   const domElement = document.createElement(Element.type);
  //   domElement.innerHTML = Element.children;
  //   domElement.setAttribute('href', Element.props.href);
  //   domElement.setAttribute("target", Element.props.target);

  //   Parent.appendChild(domElement);

  const domElement = document.createElement(Element.type);
  domElement.innerHTML = Element.children;
  for (const prop in Element.props) {
    if (prop === "children") continue;

    domElement.setAttribute(prop, Element.props[prop]);

    Parent.appendChild(domElement);
  }
}

const reactElement = {
  type: "a",
  props: {
    href: "https://our-ai.netlify.app/",
    target: "_blank",
  },
  children: "Click me go to the free image genarator",
};

const mainContainer = document.querySelector("#root");

customRander(reactElement, mainContainer);

const DivElement = {
  type: "div",
  props: {
    class: "no",
  },
  children: "Click me go to the free image genarator",
};



customRander(DivElement, mainContainer);

console.log(Geolocation);
