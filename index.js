const inquirer = require("inquirer");
const fs = require("fs");
const {
    Circle,
    Triangle, 
    Square
} = require("./library/shapes");

const userQuestions = [
    {
        type: "input",
        name: "textContent",
        message: "Please enter up to three characters for your logo"
    },
    {
        type: "input",
        name: "textColour",
        message: "To select the colour of your text, please enter either:\n- A colour keyword\n- Hexadecimal number\n"
    },
    {
        type: "list",
        name: "logoShape",
        message: "Please select a shape for your logo",
        choices: [
            "Circle",
            "Square",
            "Triangle",
        ]
    },
    {
        type: "input",
        name: "logoColour",
        message: "To select the colour of your shape, please enter either:\n- A colour keyword\n- Hexadecimal number\n"
    },
]

inquirer.prompt(userQuestions)
    .then((response) => {

        // Conditional statement to only allow the user to enter up to three letters for their logo.
        if (response.textContent.length !== 3) {
            console.log("Please enter a a three letter logo");
            return;
        };

        let black = response.textColour.toLowerCase();
        console.log(black)

        // Conditional statement to check whether the user selected black text.
        // If so, the text border will be white, otherwise it will be black.
        if (black === "black") {
            strokeColour = "white";
        } else {
            strokeColour = "black";
        };
        console.log(strokeColour)

        // Declares the variable "shape" without assigning a value.
        let shape;
        
        // Reasign value of shape dependant on the users input.
        if (response.logoShape === "Circle") {
            // Here, shape will equal a new instance of the Circle class
            shape = new Circle(response.logoColour.toLowerCase(), response.textColour.toLowerCase(), response.textContent.toUpperCase(), strokeColour);
        } else if (response.logoShape === "Square") {
            shape = new Square(response.logoColour.toLowerCase(), response.textColour.toLowerCase(), response.textContent.toUpperCase(), strokeColour);
        } else {
            shape = new Triangle(response.logoColour.toLowerCase(), response.textColour.toLowerCase(), response.textContent.toUpperCase(), strokeColour);
        };

        //Write to the file.
        // The data will be the shapes render method.
        fs.writeFile("./generated_logo/logo.svg", shape.render(), (err) => {
            err ? console.log(err) : console.log("Generated logo.svg");
        });

    });