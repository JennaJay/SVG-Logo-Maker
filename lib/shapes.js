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
            <circle cx="200" cy="100" r="100" fill="${this.shapeColor}"/>
            <text font-size="60" font-weight="bold" x="200" y="125" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}


class Square extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return ` 
         <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <rect x="0" y="0" width="200" height="200" fill="${this.shapeColor}"/>
            <text font-size="60" font-weight="bold" x="100" y="125" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

class Triangle extends Shapes {
    render() {
        return `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon height="300" width="300" points="0,200 300,200 150,0" fill="${this.shapeColor}"/>
        <text font-size="60" font-weight="bold" x="150" y="170" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

module.exports = {
    Circle,
    Square,
    Triangle,
}


