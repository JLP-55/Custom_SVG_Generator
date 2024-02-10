const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Triangle, Square} = require("./library/shapes");
// const {Shapes, allShapes} = require("./library/shapes");
// const text = require("./library/text");
// const path = require("path");

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
.then((response) => JSON.stringify(response))
.then((response) => {

    console.log(response.toLowerCase());

    const shape = new Shapes(response.logoColour);
    // allShapes();
    console.log(shape);

    // const allItems = { userQuestions: { response }};
    
    // const responseArray = [
    //     response.textContent,
    //     response.textColour,
    //     response.logoShape,
    //     response.logoColour
    // ];

    // const circle = new Circle (response.logoColour, response.logoShape);
    // Circle.prototype.fill = function () {
    //     return `<circle r="80" cx="150" cy="105" style="fill:${response.logoColour};stroke:black;stroke-width:3;"/>`;
    // };
    // console.log(circle.fill());

    // const text = new Text (response.textColour, response.textContent);

    // console.log(circle);
    // console.log(...responseArray);
    // console.log(...response);

    // var userSelectedItems = () => {
    //     console.log(response.textContent, response.textColour, response.logoShape, response.logoColour);
    //     return response.textContent, response.textColour, response.logoShape, response.logoColour;
    // };

    // The spread operator for response doesn't work
    // The spread operator for userSelectedItems doesn't work
    // If replaced with response."something", then that individual user selection will be renderd to the newly generated logo.svg file
                                                // Neither of the fs.writeFile functions work.
    // fs.writeFile("./generated_logo/user_logo.svg", { ...response }, (err) => {
    // fs.writeFile("./generated_logo/user_logo.svg", JSON.stringify({ ...responseArray }), (err) => {
    // fs.writeFile("./generated_logo/user_logo.svg", JSON.stringify(circle, text), (err) => {
    // fs.writeFile("./user_generated_logo/logo.svg", userSelectedItems(...response), (err) => {
        // err ? console.log(err) : console.log("Generated logo.svg");
    // });
    // console.log({ ...responseArray[2]});
})