//the array for the game itself
const marks = [];
let PlayerTurnOne = true;
let PlayerTurnTwo = false;
//factory function for player1 and player2
const Players = (name, marker) => {
    return { name, marker};
}

const Player1 = Players('player1', 'X');
const Player2 = Players('player2', 'O');

const AllTiles = document.querySelectorAll('.Tiles');
const ClearBtn = document.querySelector('.ClearBtn');
const SwapPlayer = document.querySelector('.SwapPlayer');

//render the array contents to the DOM
function Render(){
    for(let i = 0; i < marks.length; i++){
        AllTiles[i].textContent = marks[i];
    }
}

AllTiles.forEach((SpecificTile) => SpecificTile.addEventListener('click', function() {
    if(PlayerTurnOne === true || PlayerTurnTwo === false){
        PlayerTurnOne = false;
        PlayerTurnTwo = true;
        console.log('PlayerTurnOne = ' + PlayerTurnOne);
        console.log('PlayerTurnTwo = ' + PlayerTurnTwo);
        marks.push(SpecificTile.textContent = Player1.marker);
        SwapPlayer.textContent = "Player 2";

    } else if( PlayerTurnOne === false || PlayerTurnTwo === true){
        PlayerTurnOne = true;
        PlayerTurnTwo = false;
        console.log('PlayerTurnOne = ' + PlayerTurnOne);
        console.log('PlayerTurnTwo = ' + PlayerTurnTwo);
        marks.push(SpecificTile.textContent = Player2.marker);
        SwapPlayer.textContent = "Player 1";
    }
}))

//Clears Playeing Field
ClearBtn.addEventListener('click', () => {
    while (marks.length > 0) {
        marks.pop(); //pop() --> deletes everything inside a give (marks) array
    }
    AllTiles.forEach((SpecificTile) => SpecificTile.textContent = "");
    SwapPlayer.textContent = "Player 1";
    PlayerTurnOne = true;
    PlayerTurnTwo = false;
})
