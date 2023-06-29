//the array for the game itself
const marks = ["X" ];
const Moves = [0, 1, 2, 3, 4, 5, 6, 7, 8];

//factory function for player1 and player2
const Players = (name, marker) => {
    return { name, marker};
}

const Player1 = Players('player1', 'X');
const Player2 = Players('player2', 'O');

const buttons = document.querySelectorAll('.buttons');
const ClearBtn = document.querySelector('.ClearBtn');

//render the array contents to the DOM
function Render(){
    for(let i = 0; i < marks.length; i++){
        buttons[i].textContent = marks[i];
    }
}

buttons.forEach((buttonplace) => buttonplace.addEventListener('click', function() {
    marks.push(buttonplace.textContent = Player1.marker); 
    console.log(buttonplace);
    console.log(marks);
}))

//Clears Playeing Field
ClearBtn.addEventListener('click', () => {
    while (marks.length > 0) {
        marks.pop(); //pop() --> deletes everything inside a give (marks) array
    }
    buttons.forEach((buttons) => buttons.textContent = " ");
})

function PlayersTurn(){
    for(let i = 0; i < Moves.length; i++){
        if(i === 0 || i === 2 || i === 4 || i === 6 || i === 8){
            console.log(i);
            console.log('even numbers, so that would be Player1Marker = X');
        } else if(i === 1 || i === 3 || i === 5 || i === 7){
            console.log(i);
            console.log('odd numbers, so that would be Player2Marker = O');
        }
    }
}

//========= for the winning player! ========//
function GameOver(winningplayer){
    console.log("Congratulations, " + winningplayer + " you have won!");
}

GameOver(Player1.name);