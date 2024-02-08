const inquirer = require("inquirer");
const fs = require("fs");

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

inquirer.prompt(userQuestions).then((response) => {
    console.log(response);
    // const allItems = { userQuestions: { response }};
    
    const responseArray = [
        response.textContent,
        response.textColour,
        response.logoShape,
        response.logoColour
    ];

    console.log(...responseArray);

    var userSelectedItems = () => {
        console.log(response.textContent, response.textColour, response.logoShape, response.logoColour);
        return response.textContent, response.textColour, response.logoShape, response.logoColour;
    };

    // The spread operator for response doesn't work
    // The spread operator for userSelectedItems doesn't work
    // If replaced with response."something", then that individual user selection will be renderd to the newly generated logo.svg file
                                                // Neither of the fs.writeFile functions work.
    fs.writeFile("./generated_logo/user_logo.svg", JSON.stringify({ ...responseArray }), (err) => {
    // fs.writeFile("./user_generated_logo/logo.svg", userSelectedItems(...response), (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
    });
});
