const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Text} = require("./library/shapes");

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
// .then((response) => JSON.stringify(response))
.then((response) => {
    // console.log(response);
    // const allItems = { userQuestions: { response }};
    
    const responseArray = [
        response.textContent,
        response.textColour,
        response.logoShape,
        response.logoColour
    ];

    const circle = new Circle (response.logoColour, response.logoShape);
    Circle.prototype.fill = function () {
        return `<circle r="80" cx="150" cy="105" style="fill:${response.logoColour};stroke:black;stroke-width:3;"/>`;
    };
    // console.log(circle.fill());

    const text = new Text (response.textColour, response.textContent);

    // console.log(circle);
    // console.log(...responseArray);
    // console.log(...response);

    var userSelectedItems = () => {
        console.log(response.textContent, response.textColour, response.logoShape, response.logoColour);
        return response.textContent, response.textColour, response.logoShape, response.logoColour;
    };

    // The spread operator for response doesn't work
    // The spread operator for userSelectedItems doesn't work
    // If replaced with response."something", then that individual user selection will be renderd to the newly generated logo.svg file
                                                // Neither of the fs.writeFile functions work.
    // fs.writeFile("./generated_logo/user_logo.svg", { ...response }, (err) => {
    // fs.writeFile("./generated_logo/user_logo.svg", JSON.stringify({ ...responseArray }), (err) => {
    fs.writeFile("./generated_logo/user_logo.svg", JSON.stringify(circle, text), (err) => {
    // fs.writeFile("./user_generated_logo/logo.svg", userSelectedItems(...response), (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
    });
    // console.log({ ...responseArray[2]});
})

// // .then((res) => fetch(`https://api.github.com/users/${res.username}`))
// //   // promises are chained to parse the request for the json data
// //   .then((res) => res.json())
// //   // json data is accepted as user and logged to the console
// //   .then((user) => console.log(user));

// // TODO: Add a comment describing what kind of function this is
// // It is called a constructor function, which takes in parameters and then...
// function BlogPost(authorName, title, text, createdOn) {
//   this.authorName = authorName;
//   this.title = title;
//   this.text = text;
//   this.createdOn = createdOn;
//   this.comments = [];
//   this.printMetaData = function () {
//     console.log(`Created by ${this.authorName} on ${this.createdOn}`);
//   };
// }

// // TODO: Add a comment describing the purpose of `.prototype` in this method declaration
// // Use the prototype to create only one function... Do this to save memory...
// // Any new BlogPost will reference this prototype
// // Creates a new function called addComment and pushes the parameter (comment) to the array comments in the BlogPost constructor
// BlogPost.prototype.addComment = function(comment) {
//   this.comments.push(comment);
// };

// const post = new BlogPost(
//   'John Doe',
//   'My Second Post',
//   'Cats are super cute!',
//   '12/16/2021'
// );

// // post references the new BlogPost constructor and .addComment is a callback to the function on the prototype
// post.addComment('Nice post, I like it!');

// // TODO: Add a comment describing what you expect to see printed in the console
// // You would expext to see post.addComment
// console.log(post.comments);
// console.log(post.printMetaData());

// // TODO: Add a comment describing what kind of function this is
// // It is called a constructor function, which takes in parameters and then...
// function BlogPost(authorName, title, text, createdOn) {
//     this.authorName = authorName;
//     this.title = title;
//     this.text = text;
//     this.createdOn = createdOn;
//     this.comments = [];
//     this.printMetaData = function () {
//       console.log(`Created by ${this.authorName} on ${this.createdOn}`);
//     };
//   }
  
//   // TODO: Add a comment describing the purpose of `.prototype` in this method declaration
//   // Use the prototype to create only one function... Do this to save memory...
//   // Any new BlogPost will reference this prototype
//   // Creates a new function called addComment and pushes the parameter (comment) to the array comments in the BlogPost constructor
//   BlogPost.prototype.addComment = function(comment) {
//     this.comments.push(comment);
//   };
  
//   const post = new BlogPost(
//     'John Doe',
//     'My Second Post',
//     'Cats are super cute!',
//     '12/16/2021'
//   );
  
//   // post references the new BlogPost constructor and .addComment is a callback to the function on the prototype
//   post.addComment('Nice post, I like it!');
  
//   // TODO: Add a comment describing what you expect to see printed in the console
//   // You would expext to see post.addComment
//   console.log(post.comments);
//   console.log(post.printMetaData());