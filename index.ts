#! /usr/bin/env node
import inquirer from "inquirer";
let list = [];
let condition = true;
while (condition) {
    let todo = await inquirer.prompt([
        {
            name: "add",
            type: "input",
            message: "What would you like to add in your todo list?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "What would you like to add more?",
            default: "true"
        }
    ])

    list.push(todo.add);
    if (list.toString().length !== 0) {
        console.log(list.join("\n"))
    }
    condition = todo.addMore;

}




