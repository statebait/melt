"use strict";
// const { rm } = require("shelljs");
// const program = require("commander");
// const colors = require("colors");
// const inquirer = require("inquirer");
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var shelljs_1 = require("shelljs");
var commander_1 = __importDefault(require("commander"));
var colors_1 = __importDefault(require("colors"));
var inquirer_1 = __importDefault(require("inquirer"));
// Message if no path is passed
var NO_PATH = colors_1.default.red("Please pass the path of the folder/file you want to delete as an argument.");
// CLI version
commander_1.default.version("0.0.1", "-v, --version", "outputs the current version of burn");
// CLI Options
commander_1.default.option("-r, --recursive", "recursively delete a folder and its content");
// Parses the passed arguments and stores them in program.args (regular arguments passed) and program.opts() (options passed)
commander_1.default.parse(process.argv);
// Main function
(function () {
    // Checks if path argument is passed or not
    if (commander_1.default.args.length === 0) {
        return console.log(NO_PATH);
    }
    if (commander_1.default.recursive) {
        inquirer_1.default
            .prompt([
            {
                name: "consent",
                message: "This will delete the folder and all its contents. Are you sure you want to proceed(Y/n)?\n"
            }
        ])
            .then(function (answers) {
            if (answers.consent[0].toLowerCase() === "y") {
                return shelljs_1.rm("-rf", commander_1.default.args[0]);
            }
            else if (answers.consent[0].toLowerCase() === "n") {
                return console.log("Folder not deleted.");
            }
        });
    }
    else
        return shelljs_1.rm(commander_1.default.args[0]);
})();
