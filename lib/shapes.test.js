const { Circle, Triangle, Square } = require("./shapes");

describe("Shapes render() method", () => {
  test("Circle", () => {
    const circle = new Circle("blue");
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
  });

  test("Triangle", () => {
    const triangle = new Triangle("blue");
    expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
  });

  test("Square", () => {
    const square = new Square("blue");
    expect(square.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="blue" />');
  });
});
