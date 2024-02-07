const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt ([
    {
        type: "input",
        name: "text-content",
        message: "Please enter up to three characters for your logo"
    },
    {
        type: "input",
        name: "text-colour",
        message: "What colour should your logos text be?"
    },
    {
        type: "list",
        name: "logo-shape",
        message: "Please select a shape for your logo",
        choices: [
            "Circle",
            "Triangle",
            "Square",
        ]
    },
    {
        type: "input",
        name: "logo-colour",
        message: "What colour should your logos shape be?"
    },
])
.then(writeFile());

function writeFile () {
    console.log("hello");
}
