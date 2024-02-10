// Create a parent class.
class Shape {
    constructor(logoColour, textColour, textContent, strokeColour) {
        this.logoColour = logoColour;
        this.textColour= textColour;
        this.textContent =  textContent;
        this.strokeColour = strokeColour;
    };
};

// Create child classes to inherit from the parent.
class Circle extends Shape {
    render() {
        
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">

        <circle r="80" cx="150" cy="105" style="fill:${this.logoColour};stroke:black;stroke-width:3;"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" style="fill:${this.textColour};stroke:${strokeColour};stroke-width:1;">${this.textContent}</text>

        </svg>`
    };
};


class Square extends Shape {
    render() {
        
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">

        <rect x="72" y="30" width="150" height="150" style="fill:${this.logoColour};stroke:black;stroke-width:3;"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" style="fill:${this.textColour};stroke:${strokeColour};stroke-width:1;">${this.textContent}</text>
        
        </svg>`
    };
};

class Triangle extends Shape {
    render() {
        
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">

        <polygon points=" 150,10 270,160, 30,160" style="fill:${this.logoColour};stroke:black;stroke-width:3;"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" style="fill:${this.textColour};stroke:${strokeColour};stroke-width:1;">${this.textContent}</text>

        </svg>`
    };
};


module.exports = { Circle, Square, Triangle };