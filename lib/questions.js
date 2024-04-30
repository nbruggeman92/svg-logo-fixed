// imports
const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./shapes");
const fs = require("fs");
const SVG = require("./svg");
const colors = require("colors");
const { writeFile } = require("fs/promises");

class Questions {
    run() {
        const questions = [
            {
                type: "input",
                name: "text",
                message: "Please enter your text (max 3 characters)"
            },
            {
                type: "input",
                name: "textColor",
                message: "Please choose a color for your text (pick either a color keyword or a hexadecimal number)"
            },
            {
                type: "list",
                name: "shape",
                message: "Please choose a shape from the following options:",
                choices: ["circle", "triangle", "square"]
            },
            {
                type: "input",
                name: "shapeColor",
                message: "Please choose a color for your shape (pick either a color keyword or a hexadecimal number)"
            },
        ]
        
        return inquirer.prompt(questions).then(({text, textColor, shape, shapeColor}) => {
            let newShape;
            if (shape === "circle") {
                newShape = new Circle();
            } else if (shape === "triangle") {
                newShape = new Triangle();
            } else if (shape === "square") {
                newShape = new Square();
            }

            newShape.setColor(shapeColor);

            const svg = new SVG();
            svg.setShape(newShape);
            svg.setText(text, textColor);

            return writeFile("./examples/logo.svg", svg.render())
        }).then(() => {
            console.log("Generated logo.svg")
        }).catch((err) => {
            console.log("No no no... please try again!", err)
        })
    }
}

module.exports = Questions;