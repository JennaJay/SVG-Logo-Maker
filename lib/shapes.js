class Shapes {
   constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
   }
}

class Circle extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <circle cx="150" cy="100" r="75" fill="${this.shapeColor}"/>
            <text font-size="14" x="150" y="100" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}


class Square extends Shapes {
    render() {
        return `<rect x="50" y="50" width="200" height="200" fill=${this.shapeColor}/>`
    }
}

class Triangle extends Shapes {
    render() {
        return `<polygon points="150,50 50,150 250,150" fill=${this.shapeColor}/>`
    }
}

module.exports = {
    Circle,
    Square,
    Triangle,
}
// getText() {
//     return `<text x="50%" y="50%" dominate-baseline="middle" text-anchor="middle"`
// }

