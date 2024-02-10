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
        message: "What colour should your logos text be?"
    },
    {
        type: "list",
        name: "logoShape",
        message: "Please select a shape for your logo",
        choices: [
            "Circle",
            "Triangle",
            "Square",
        ]
    },
    {
        type: "input",
        name: "logoColour",
        message: "What colour should your logos shape be?"
    },
]

inquirer.prompt(userQuestions)
    .then((response) => {

        let black = response.textColour.toLowerCase();
    
        // Conditional statement to check whether the user selected black text.
        // If so, the text border will be white, otherwise it will be black.
        if (black === "black") {
            strokeColour = "white";
        } else {
            strokeColour = "black";
        };

        // Declares the variable "shape" without assigning a value.
        let shape;
        
        // Reasign value of shape dependant on the users input.
        if (response.logoShape === "Circle") {
            // Here, shape will equal a new instance of the Circle class
            shape = new Circle(response.logoColour, response.textColour.toLowerCase(), response.textContent);
        } else if (response.logoShape === "Square") {
            shape = new Square(response.logoColour, response.textColour.toLowerCase(), response.textContent);
        } else {
            shape = new Triangle(response.logoColour, response.textColour.toLowerCase(), response.textContent);
        };

        //Write to the file.
        fs.writeFile("./generated_logo/logo.svg", shape.render(), (err) => {
            err ? console.log(err) : console.log("Generated logo.svg");
        });

    });