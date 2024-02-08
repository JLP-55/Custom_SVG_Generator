// // Class constructor
// class Shapes{
//     constructor() {
//         this.colour = "";
//     };
//     setColour(colour) {
//         this.colour = (colour);
//     }
// };

// class Circle extends Shapes{
//     constructor() {
//         this.colour
//     }
// }

//Constructor function
function Circle(colour, shape) {
    this.colour = colour;
    this.shape = shape;
    
    this.fill = function() {
        // console.log(`<circle r="80" cx="150" cy="105" style="fill:${this.colour};stroke:black;stroke-width:3;"/>`);
        return `<circle r="80" cx="150" cy="105" style="fill:${this.colour};stroke:black;stroke-width:3;"/>`;
    };
};

function Text(textColour, textContent) {
    this.textColour = textColour;
    this.textContent = textContent;
}

module.exports = {Circle, Text};

// // Example of constructor function inheritance
// function Animal(name, age, breed) {
//     this.name = name;
//     this.age = age;
//     this.breed = breed;
//     this.nap = function () {
//       console.log('Zzzzzzzzz');
//     };
//     this.getLives = function () {
//       return 1;
//     };
//   }
  
//   function Dog(name, age, breed, puppies) {
//     Animal.call(this, name, age, breed);
//     this.puppies = puppies;
//   }
  
//   Dog.prototype.bark = function () {
//     console.log('Woof!');
//   };

// // Example of class inheritance
// class ForumItem {
//     constructor(authorName, createdOn) {
//       this.authorName = authorName;
//       this.createdOn = createdOn;
//     }
  
//     printMetaData() {
//       console.log(`Created by ${this.authorName} on ${this.createdOn}`);
//     }
//   }
  
//   class BlogPost extends ForumItem {
//     constructor(authorName, title, createdOn) {
//         super(authorName, createdOn);
//       this.title = title;
//       this.comments = [];
//     }
  
//     addComment(comment) {
//       this.comments.push(comment);
//     }
//   }