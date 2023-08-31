(function () {
  const pathD = { minus: "M0 5h10", plus: "M0 5h10 M5 0v10" };

  const block = document.querySelector("#block");

  buttonDataArr.forEach((data) => {
    const button = document.createElement("div");
    button.setAttribute("role", "button");
    button.setAttribute("class", "button");

    for (const rule in data.css) {
      button.style[rule] = data.css[rule];
    }

    button.style["backgroundColor"] = `var(${
      data.isGreen ? "--green)" : "--blue)"
    }`;

    const div = document.createElement("div");
    div.innerText = data.content;
    button.appendChild(div);

    const svgPlus = createSVG(pathD.plus),
      svgMinus = createSVG(pathD.minus);

    svgPlus.classList.add("plus");
    svgMinus.classList.add("minus");

    button.appendChild(svgPlus);
    button.appendChild(svgMinus);

    button.addEventListener("click", handleClick);
    block.appendChild(button);
  });

  function createSVG(pathDArg) {
    const svgNS = "http://www.w3.org/2000/svg";

    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttributeNS(null, "width", "10");
    svg.setAttributeNS(null, "height", "10");
    svg.setAttributeNS(null, "viewBox", "0 0 10 10");

    const path = document.createElementNS(svgNS, "path");
    path.setAttributeNS(null, "stroke", "white");
    path.setAttributeNS(null, "stroke-width", "2");
    path.setAttributeNS(null, "d", pathDArg);

    svg.appendChild(path);

    return svg;
  }

  function handleClick(e) {
    const isActive = e.target.classList.contains("buttonActive");
    if (isActive) {
      e.target.classList.remove("buttonActive");
    } else {
      e.target.classList.add("buttonActive");
    }
  }
})();
