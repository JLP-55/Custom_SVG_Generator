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
    console.log(response.textContent);
    console.log(response.textColour);
    console.log(response.logoShape);
    console.log(response.logoColour);

    writeFile();
});

function writeFile () {
    console.log("hello");
}
