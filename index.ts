import { rm } from "shelljs";
import program from "commander";
import colors from "colors";
import inquirer from "inquirer";

// Types
type AnswersType = { consent: String };

// Message if no path is passed
const NO_PATH = colors.red(
  "Please pass the path of the folder/file you want to delete as an argument."
);

// CLI version
program.version(
  "0.0.1",
  "-v, --version",
  "outputs the current version of burn"
);

// CLI Options
program.option(
  "-r, --recursive",
  "recursively delete a folder and its content"
);

// Parses the passed arguments and stores them in program.args (regular arguments passed) and program.opts() (options passed)
program.parse(process.argv);

// Main function
(function() {
  // Checks if path argument is passed or not
  if (program.args.length === 0) {
    return console.log(NO_PATH);
  }

  if (program.recursive) {
    inquirer
      .prompt([
        {
          name: "consent",
          message:
            "This will delete the folder and all its contents. Are you sure you want to proceed(Y/n)?\n"
        }
      ])
      .then((answers: AnswersType) => {
        if (answers.consent[0].toLowerCase() === "y") {
          return rm("-rf", program.args[0]);
        } else if (answers.consent[0].toLowerCase() === "n") {
          return console.log("Folder not deleted.");
        }
      });
  } else return rm(program.args[0]);
})();
