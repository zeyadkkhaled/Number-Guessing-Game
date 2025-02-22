let min = 1;
let max = 100;

let randomNumber = Math.floor(Math.random() * max) + min;

let attempts = 0;
let guess ;
let ruunning = true;

while(ruunning){
    guess = window.prompt(`Enter a number between ${min} and ${max}`);
    guess = Number(guess);
    attempts++;
    if(isNaN(guess)){
        alert("Please enter a valid number");
        continue ;}

    if(guess === randomNumber){
        alert(`Congratulations! You guessed the number in ${attempts} attempts`);
        ruunning = false;
    }
    else if (guess !== randomNumber){
        attempts++;
        if(guess > randomNumber){
            alert("Too high");
        }
        else{
            alert("Too low");
        }
        if(attempts === 10){
            alert("You have reached the maximum number of attempts");
            ruunning = false;
        }
    }
}