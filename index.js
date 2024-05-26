#! /usr/bin/env node

import inquirer from "inquirer";


console.log("Zakat Calculation:");

let amount = await inquirer.prompt([
  {
    name: "GoldAmount",
    type: "input",
    message: "Amount of gold you have in grams "
  },
  {
    name: "goldprice",
    type: "input",
    message: "Price of gold nowadays per gram"
  },
  {
    name: "SilverAmount",
    type: "input",
    message: "Amount of Silver you have in grams "
  },
  {
    name: "silverprice",
    type: "input",
    message: "Price of silver nowadays per gram "
  }
]);

let paidamountG = 0;
let paidamountS = 0;

if (amount.GoldAmount >= 87.48) {
  paidamountG = (amount.GoldAmount / 100 * 2.5) * amount.goldprice;
  console.log("You have to pay zakat " + Math.floor(paidamountG) + " on gold");
} else {
  console.log("You are not eligible to pay zakat on gold");
}

if (amount.SilverAmount >= 612.36) {
  paidamountS = (amount.SilverAmount / 100 * 2.5) * amount.silverprice; 
  console.log("You have to pay zakat " + Math.floor(paidamountS) + " on silver");
} else {
  console.log("You are not eligible to pay zakat on silver");
}

let totalamount = paidamountG + paidamountS;
console.log("Total zakat is " + totalamount);