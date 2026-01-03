const fs = require("fs");
const path = require("path");
const { distance } = require("./mathHelpers");

// Get command line args
// node main.js 10 5 2 3
const args = process.argv.slice(2); // ["10","5","2","3"]

function processInput(userInput) {
  const [x1, y1, x2, y2] = userInput.map(Number);

  // Make sure dataPoints folder exists
  const folderPath = path.join(__dirname, "dataPoints");
  fs.mkdir(folderPath, { recursive: true }, (err) => {
    if (err) {
      console.error("Error creating folder:", err);
      return;
    }

    // File path
    const filePath = path.join(folderPath, "points.txt");

    // Write initial input to file
    fs.writeFile(filePath, `Your points: (${x1},${y1}), (${x2},${y2})\n`, (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }
      console.log("Content saved");

      // Compute distance
      const d = distance(x1, y1, x2, y2).toFixed(2);

      // Append distance to file
      fs.appendFile(
        filePath,
        `The distance between your two points: (${x1},${y1}), (${x2},${y2}) is ${d}\n`,
        (err) => {
          if (err) {
            console.error("Error appending file:", err);
          } else {
            console.log("Distance appended");
          }
        }
      );
    });
  });
}

processInput(args);
