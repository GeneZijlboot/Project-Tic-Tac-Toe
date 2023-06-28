//the array for the game itself
const marks = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];

//declaring variables 
const buttons = document.querySelectorAll('.buttons');
const ClearBtn = document.querySelector('.ClearBtn');

//factory function for Player1 and Player2
const Players = (name, marker) => {
    const logem = () => console.log(name, marker); //console.logs the outputs of PLayer 1 and 2
    return { name, marker, logem};
}

const Player1 = Players('player1', 'X');
const Player2 = Players('player2', 'O');
Player1.logem();
Player2.logem();

buttons.forEach((buttons) => buttons.addEventListener('click', function() {
    Render();
}))

//this functions render the array contents to the webpage
function Render(){
    for(let i = 0; i < marks.length; i++){
        buttons[i].textContent = marks[i];
    }
}

//Clears Playeing Field
ClearBtn.addEventListener('click', () => {
    while (marks.length > 0) {
        marks.pop(); //makes the array empty
    }
    buttons.forEach((buttons) => buttons.textContent = " ");
})