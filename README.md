# Node.js Distance Calculator

This project is a command-line utility that calculates the Euclidean distance between two coordinate points using Node.js. It processes command-line arguments and saves the input data and calculation results to a local file.

## Features

* **Command Line Interface**: Accepts coordinate inputs directly from the terminal.
* **Modular Design**: Logic is separated into a dedicated helper module (`mathHelpers.js`).
* **File System Operations**: Automatically creates an output directory and appends results to a text file.

## Usage

### Prerequisites
* Node.js installed on your machine.

### Running the Script
To use the calculator, run `main.js` with four numeric arguments representing the coordinates of two points: $(x_1, y_1)$ and $(x_2, y_2)$.

**Syntax:**
```bash
node main.js <x1> <y1> <x2> <y2>
