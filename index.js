const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt ([
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
])
.then((response) => {
    console.log(response);
    
    // The spread operator for response doesn't work
    // If replaced with response."something", then that individual user selection will be renderd to the newly generated logo.svg file
    fs.writeFile("./user_generated_logo/logo.svg", { ...response }, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
    });
});