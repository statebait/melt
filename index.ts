#!/usr/bin/env node
import program from "commander";
import inquirer from "inquirer";
import shell from "shelljs";
import fs from "fs";

// Types
type AnswersType = { consent: string };

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
program
  .option("-r, --recursive", "recursively delete a folder and its contents")
  .option("-p, --prompt", "Set 'Are you sure' prompt to on or off");

/*
Parses the passed arguments and stores them in program.args (regular arguments passed) and program.opts() (options passed)
*/
program.parse(process.argv);

// Main function
(function () {
  // Path constant
  const MAIN_ARG: string = program.args[0];
  // Path to the config file; .meltrc.json
  const pathToConfig: string =
    __dirname.slice(0, __dirname.length - 6) + "/.meltrc.json";

  // Checks if path argument is passed or not
  if (program.args.length === 0) {
    return console.log(NO_PATH_MESSAGE);
  }

  if (program.prompt) {
    let temp: boolean;
    if (MAIN_ARG.toLowerCase() === "off") {
      temp = false;
    } else if (MAIN_ARG.toLowerCase() === "on") {
      temp = true;
    } else {
      return console.log("Incorrect argument passed.");
    }
    fs.writeFileSync(pathToConfig, JSON.stringify({ prompt: temp }));
    return console.log(`Prompt set to ${MAIN_ARG.toLowerCase()}.`);
  }

  if (program.recursive) {
    let promptFlag: boolean = true;
    if (fs.existsSync(pathToConfig)) {
      const data = fs.readFileSync(pathToConfig);
      const { prompt } = JSON.parse(data.toString());
      promptFlag = prompt;
    }
    if (promptFlag) {
      inquirer
        .prompt([
          {
            name: "consent",
            message:
              "This will delete the folder and all its contents. Are you sure you want to proceed(Y/n)?\n",
          },
        ])
        .then((answers: AnswersType) => {
          if (answers.consent[0].toLowerCase() === "y") {
            return shell.rm("-rf", MAIN_ARG);
          } else if (answers.consent[0].toLowerCase() === "n") {
            return console.log("Folder not deleted.");
          }
        });
    } else {
      return shell.rm("-rf", MAIN_ARG);
    }
  } else {
    return shell.rm(MAIN_ARG);
  }
})();
