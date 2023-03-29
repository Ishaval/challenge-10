(async () => {
  const { default: inquirer } = await import("inquirer");
  const { default: fs } = await import("fs");
  const { Circle, Triangle, Square } = await import("./lib/shapes.js");

  async function getUserInput() {
    return inquirer.prompt([
      {
        type: "input",
        name: "text",
        message: "Enter up to three characters for the logo text:",
        validate: (input) => input.length <= 3,
      },
      {
        type: "input",
        name: "textColor",
        message: "Enter the text color (color keyword or hexadecimal):",
      },
      {
        type: "list",
        name: "shape",
        message: "Choose a shape:",
        choices: [
          { name: "Circle", value: Circle },
          { name: "Triangle", value: Triangle },
          { name: "Square", value: Square },
        ],
      },
      {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape color (color keyword or hexadecimal):",
      },
    ]);
  }

  function createLogo(shape, textColor, text) {
    const svgShape = shape.render();
    const svgText = `<text x="150" y="100" font-size="30" text-anchor="middle" fill="${textColor}">${text}</text>`;
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${svgShape}${svgText}</svg>`;
  }

  function saveLogoToFile(svgString) {
    fs.writeFileSync("logo.svg", svgString);
  }

  const { text, textColor, shape, shapeColor } = await getUserInput();
  const logo = createLogo(new shape(shapeColor), textColor, text);
  saveLogoToFile(logo);
  console.log("Generated logo.svg");
})();
