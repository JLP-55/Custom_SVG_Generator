//Constructor functions
function Shapes(colour) {
    this.colour = colour;
};

function Circle(shape) {
    Shapes.call(this, colour, shape);
    this.shape = shape;
    
    this.fill = function() {
        return `<circle r="80" cx="150" cy="105" style="fill:${this.colour};stroke:black;stroke-width:3;"/>`;
    };
};

function Triangle(shape) {
    Shapes.call(this, colour, shape);
    this.shape = shape;
    
    this.fill = function() {
        return `<polygon points=" 150,10 270,155, 30,155" style="fill:${this.colour};stroke:black;stroke-width:3;"/>`;
    };
};

function Square(shape) {
    Shapes.call(this, colour, shape);
    this.shape = shape;
    
    this.fill = function() {
        return `<rect x="72" y="30" width="150" height="150" style="fill:${this.colour};stroke:black;stroke-width:3;"/>`;
    };
};

module.exports = {Circle, Triangle, Square};


// class Shapes {
//     constructor(colour) {
//         this.colour = colour;
//     };

//     circle() {
//         return `<circle r="80" cx="150" cy="105" style="fill:${this.colour};stroke:black;stroke-width:3;"/>`;
//     };

//     triangle() {
//         return `<polygon points=" 150,10 270,155, 30,155" style="fill:${this.colour};stroke:black;stroke-width:3;"/>`;
//     };

//     square() {
//         return `<rect x="72" y="30" width="150" height="150" style="fill:${this.colour};stroke:black;stroke-width:3;"/>`;
//     };
// };

// function allShapes() {
//     if (response.logoShape === "Cirlce") {
//         const circle = new Shapes(response.logoShape);
//         circle.circle();
//     } else if (response.logoShape === "Triangle") {
//         const triangle = new Shapes(response.logoShape);
//         triangle.triangle();
//     } else if (response.logoShape === "Square") {
//         const square = new Shapes(response.logoShape);
//         square.square();
//     };
// };

// module.exports = {Shapes, allShapes};