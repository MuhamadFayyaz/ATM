#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 100000; // creating a variable or Current balance
let myPin = 12345; // pin code 
console.log(" AA  TTTTTT M   M ");
console.log("A  A   TT   MM MM ");
console.log("AAAA   TT   M M M ");
console.log("A  A   TT   M   M ");
console.log("A  A   TT   M   M ");
console.log("\n ********** WELCOME YOU TO MY ATM ***********\n ");
console.log("**** PLEASE USE PINCODE 12345 FOR ACCESS ****\n");
// create a question to ask pincode
const atm = await inquirer.prompt([
    {
        name: "pincode",
        type: "number",
        message: "ENTER  PIN CODE TO ACCESS ATM ACCOUNT",
    }
]);
// nested conditional statements 
if (atm.pincode === myPin) {
    console.log(" \n**** PINCODE IS CORRECT ****\n ");
    // asking for options
    let selection = await inquirer.prompt([
        {
            name: "operation",
            message: "PLEASE SELECT THE OPTION\n",
            type: "list",
            choices: ["WITHDRAW", "ChECKINBALANCE", "FASTCASH"],
        }
    ]);
    console.log(`\nOPERATION ${selection.operation} IS SELECTED \n`);
    if (selection.operation === "WITHDRAW") {
        let cash = await inquirer.prompt([{
                name: "amount",
                type: "number",
                message: "ENTER YOUR AMOUNT",
            }]);
        if (cash.amount > myBalance) {
            console.log("\n***INSUFFICENT BALANCE***\n");
        }
        else {
            console.log(`\n WITHDRAW ${cash.amount} SUCCESSFULLY\n`);
            console.log(`REMAINING BALANCE IS ... ${myBalance - cash.amount}`);
        }
    }
    else if (selection.operation === "FASTCASH") {
        let money = await inquirer.prompt([{
                name: "dollar",
                type: "list",
                message: "SELECT THE AMOUNT",
                choices: ["5000", "10000", "20000", "50000"]
            }]);
        console.log(`\n FASTCASH WITHDRAW  ${money.dollar} SUCCESSFULLY\n `);
        console.log(`YOUR REMAINING BALANCE IS ... ${myBalance - money.dollar}`);
    }
    else {
        console.log(`YOUR BALANCE IS.... ${myBalance}`);
    }
}
else {
    console.log(" **** PINCODE IS INCORRECT **** ");
}
