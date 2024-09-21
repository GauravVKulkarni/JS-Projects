let player = 0;
let machine = 0;
let output = 0;
let playerChoice = 0;
let machineChoice = 0;

while (input != -1) {
    playerChoice = prompt("1. Rock\n2. Paper\n3. Scissors\nChoose an option: ");
    machineChoice = Math.floor(Math.random() * 3 + 1);

    if (playerChoice == 1 && machineChoice == 3) {
        player++;
        console.log(`You : Rock , Machine : Scissors , Result : You win!`);
    }
    else if (playerChoice == 2 && machineChoice == 1) {
        player++;
        console.log(`You : Paper , Machine : Rock , Result : You win!`);
    }
    else if (playerChoice == 3 && machineChoice == 2) {
        player++;
        console.log(`You : Scissors , Machine : Paper , Result : You win!`);
    }
    else if (playerChoice == 1 && machineChoice == 2) {
        machine++;
        console.log(`You : Rock , Machine : Paper , Result : You lose!`);
    }
    else if (playerChoice == 2 && machineChoice == 3) {
        machine++;
        console.log(`You : Paper , Machine : Scissors , Result : You lose!`);
    }
    else if (playerChoice == 3 && machineChoice == 1) {
        machine++;
        console.log(`You : Scissors , Machine : Rock , Result : You lose!`);
    }
    else if (playerChoice == machineChoice) {
        console.log(`Result : Draw!`);
    }
}