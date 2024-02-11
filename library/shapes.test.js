const { Circle, Square, Triangle } = require("./shapes");

// Test for the Circle class
describe("Circle", () => {
    it("should render the relevant svg file content upon being selected by the user", () => {
        // Create a new instance of the class Circle
        const shape = new Circle();

        // You would expect the shapes render method to equal the return value,
        // in this case, the data that will be is relevant to the users selection.
        expect(shape.render()).toEqual( 
        `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">

        <circle r="80" cx="150" cy="105" style="fill:${this.logoColour};stroke:black;stroke-width:3;"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" style="fill:${this.textColour};stroke:black;stroke-width:1;">${this.textContent}</text>

        </svg>`);
    });
});

// Test for the Square class
describe("Square", () => {
    it("should render the relevant svg file content upon being selected by the user", () => {
        const shape = new Square();
        
        expect(shape.render()).toEqual(
        `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">

        <rect x="72" y="30" width="150" height="150" style="fill:${this.logoColour};stroke:black;stroke-width:3;"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" style="fill:${this.textColour};stroke:black;stroke-width:1;">${this.textContent}</text>
        
        </svg>`);
    });
});

// Test for the Triangle class
describe("Triangle", () => {
    it("should render the relevant svg file content upon being selected by the user", () => {
        const shape = new Triangle();
        
        expect(shape.render()).toEqual(
        `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">

        <polygon points=" 150,10 270,160, 30,160" style="fill:${this.logoColour};stroke:black;stroke-width:3;"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" style="fill:${this.textColour};stroke:black;stroke-width:1;">${this.textContent}</text>

        </svg>`);
    });
});