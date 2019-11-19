#!/usr/bin/env node
import program from "commander";
import inquirer from "inquirer";
import rimraf from "rimraf";
import fs from "fs";

// Types
type AnswersType = { consent: String };

// Message if no path is passed
const NO_PATH_MESSAGE =
  "Please pass the path of the folder/file you want to delete as an argument.";

// CLI version
program.version(
  "0.0.1",
  "-v, --version",
  "outputs the current version of burn"
);

// CLI Options
program.option(
  "-r, --recursive",
  "recursively delete a folder and its contents"
);

/*
Parses the passed arguments and stores them in program.args (regular arguments passed) and program.opts() (options passed)
*/
program.parse(process.argv);

// Path constant

// Main function
(function() {
  const PATH = program.args[0];
  // Checks if path argument is passed or not
  if (program.args.length === 0) {
    return console.log(NO_PATH_MESSAGE);
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
          return rimraf.sync(PATH);
        } else if (answers.consent[0].toLowerCase() === "n") {
          return console.log("Folder not deleted.");
        }
      });
  } else
    return fs.unlink(PATH, error => {
      if (error) {
        return console.log(
          "Something went wrong. Please use -r if deleting a folder."
        );
      }
      return;
    });
})();
