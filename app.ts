#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log("Welcome to my Typescript Quiz App");

console.log("You are required to get minimum of 5 points to win");

let points = 0;

//Question 1
let question1 = await inquirer.prompt([
  {
    name: "one",
    message: "Typescript is a Superset of?",
    type: "list",
    choices: ["Python", "Javascript", "C++", "Python"],
  },
]);

if (question1.one == "Javascript") {
  console.log(chalk.green.bold.bgGreenBright("Your answer is correct"));
  points++;
} else {
  console.log(chalk.red.bold.bgRedBright("Incorrect answer"));
}

//Question 2
let question2 = await inquirer.prompt([
  {
    name: "two",
    message: "Which command is used to install TypeScript via npm?",
    type: "list",
    choices: [
      "npm install -g typescript",
      "npm install typescript",
      "npm install tsc",
      "npm install ts-node",
    ],
  },
]);

if (question2.two == "npm install -g typescript") {
  console.log(chalk.green.bold.bgGreenBright("Your answer is correct"));
  points++;
} else {
  console.log(chalk.red.bold.bgRedBright("Incorrect answer"));
}

//Question 3
let question3 = await inquirer.prompt([
  {
    name: "three",
    message: "How do you define a variable in TypeScript?",
    type: "list",
    choices: [
      "let variable: type;",
      "var variable = type;",
      "const variable = type;",
      "variable: type;",
    ],
  },
]);

if (question3.three == "let variable: type;") {
  console.log(chalk.green.bold.bgGreenBright("Your answer is correct"));
  points++;
} else {
  console.log(chalk.red.bold.bgRedBright("Incorrect answer"));
}

//Question 4
let question4 = await inquirer.prompt([
  {
    name: "four",
    message: "Which type is not a valid TypeScript type?",
    type: "list",
    choices: ["number", "string", "boolean", "char"],
  },
]);

if (question4.four == "char") {
  console.log(chalk.green.bold.bgGreenBright("Your answer is correct"));
  points++;
} else {
  console.log(chalk.red.bold.bgRedBright("Incorrect answer"));
}

//Question 5
let question5 = await inquirer.prompt([
  {
    name: "five",
    message: "What is the file extension for TypeScript files?",
    type: "list",
    choices: [".js", ".ts", ".jsx", ".tsx"],
  },
]);

if (question5.five == ".ts") {
  console.log(chalk.green.bold.bgGreenBright("Your answer is correct"));
  points++;
} else {
  console.log(chalk.red.bold.bgRedBright("Incorrect answer"));
}

//Question 6
let question6 = await inquirer.prompt([
  {
    name: "six",
    message: "How do you compile a TypeScript file named app.ts?",
    type: "list",
    choices: [
      "typescript app.ts",
      "compile app.ts",
      "ts-node app.ts",
      "tsc app.ts",
    ],
  },
]);

if (question6.six == "tsc app.ts") {
  console.log(chalk.green.bold.bgGreenBright("Your answer is correct"));
  points++;
} else {
  console.log(chalk.red.bold.bgRedBright("Incorrect answer"));
}

if (points >= 5) {
  console.log(chalk.bgBlackBright.white("Congratulations you won"));
  console.log(chalk.greenBright(`You have got ${points} points`));
} else {
  console.log("You loss");
  console.log(`You have got ${points} points`);
}
