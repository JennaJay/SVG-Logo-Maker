const {Circle, Square, Triangle} = require('./shapes')

describe('Circle', () => {
    it('renders shape correctly', () => {
    const shape = new Circle();
    shape.setColor('pink');
    expect(shape.render()).toEqual(`<circle cx="200" cy="100" r="100" fill="pink"/>`);
    });
});
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');




// const shape = new Square();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');