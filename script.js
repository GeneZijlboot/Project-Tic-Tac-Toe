//the array for the game itself
let marks = ["", "", "", "", "", "", "", "", ""];
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
    const TileIndex = this.getAttribute("TileIndex");
    //deciding whos turn it is, and switch it after clicking
    if(PlayerTurnOne === true || PlayerTurnTwo === false){
        PlayerTurnOne = false;
        PlayerTurnTwo = true;

        marks[TileIndex] = Player1.marker;
        console.log(marks);
        Render();

        //swap players visuals
        SwapPlayer.textContent = "Player 2";

        //disable tile after clicking
        SpecificTile.disabled = true;

        //after clicking clear button, tiles are available again
        ClearBtn.addEventListener('click', () => {
            SpecificTile.disabled = false;
        })
    //deciding whos turn it is, and switch it after clicking
    } else if( PlayerTurnOne === false || PlayerTurnTwo === true){
        PlayerTurnOne = true;
        PlayerTurnTwo = false;

        marks[TileIndex] = Player2.marker;
        console.log(marks);
        Render();

        //swap players visuals
        SwapPlayer.textContent = "Player 1";

        //disable tile after clicking
        SpecificTile.disabled = true;

        //after clicking clear button, tiles are available again
        ClearBtn.addEventListener('click', () => {
            SpecificTile.disabled = false;
        })
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
    AllTiles.disabled = false;
})