"use strict"

let grantHealth = 10;
let userHealth = 40;
let wins = 0
let play = prompt("Would you like to play?")
let userName = prompt("What is your name?")

while (play === "yes") {
    userHealth -= Math.floor(Math.random()*2) + 1;
    grantHealth -= Math.floor(Math.random()*2) + 1;
    console.log(`${userName}'s health is ${userHealth}`)
    console.log(`The Mighty Grant's health is ${grantHealth}`)
    if (grantHealth <= 0) {
        wins += 1;
        grantHealth = 10;
    } else if (userHealth <= 0){
        console.log("L-O-S-E-R")
        break
        
    } else if (wins === 3) {
        console.log("You are a WINNER!")
        break   
    }
}