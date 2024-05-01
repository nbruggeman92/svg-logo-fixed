// imports
const { Circle, Square, Triangle } = require("./shapes.js");

describe("Circle", () => {
    it("renders circle element correctly", () => {
        const logo = '<circle cx="150" cy ="105" r="80" fill=""/>';
        const circle = new Circle();
        const svg = circle.render();
        expect(svg).toBe(logo);
    })

    it("correctly displays chosen fill color", () => {
        const logo = '<circle cx="150" cy ="105" r="80" fill="yellow"/>';
        const circle = new Circle();
        circle.setColor("yellow");
        const svg = circle.render();
        expect(svg).toBe(logo);
    })
})

describe("Triangle", () => {
    it("renders triangle element correctly", () => {
        const logo = '<polygon points="150, 18, 244, 182, 56, 182" fill=""/>';
        const triangle = new Triangle();
        const svg = triangle.render();
        expect(svg).toBe(logo);
    })

    it("correctly displays chosen fill color", () => {
        const logo = '<polygon points="150, 18, 244, 182, 56, 182" fill="purple"/>';
        const triangle = new Triangle();
        triangle.setColor("purple");
        const svg = triangle.render();
        expect(svg).toBe(logo);
    })
})

describe("Square", () => {
    it("renders square element correctly", () => {
        const logo = '<rect x="80" y="35" width="140" height="140" fill=""/>';
        const square = new Square();
        const svg = square.render();
        expect(svg).toBe(logo);
    })

    it("correctly displays chosen fill color", () => {
        const logo = '<rect x="80" y="35" width="140" height="140" fill="green"/>';
        const square = new Square();
        square.setColor("green");
        const svg = square.render();
        expect(svg).toBe(logo);
    })

})