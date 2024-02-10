function Text(textColour, textContent) {
    this.textColour = textColour;
    this.textContent = textContent;

    this.textFill = function() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" style="fill:${this.textColour};stroke:black;stroke-width:1;">${this.textContent}</text>`;
    }
};

module.exports = Text;

