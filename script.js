//declaring variables
const AllTiles = document.querySelectorAll('.Tiles');
const CurrentPlayer = document.querySelector('.SwapPlayer');
const ClearBtn = document.querySelector('.ClearBtn');

let marks = ["", "", "", "", "", "", "", "", ""];
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//factory function for the player.name and player.marker
const Players = (name, marker) => {
    return { name, marker};
}
const Player1 = Players('Player 1', 'X');
const Player2 = Players('Player 2', 'O');

let PlayerTurnOne = true;
let PlayerTurnTwo = false;

//when clicking a specific tile --> swap the players and put player.mark down
const CellClicked = (() => {
    AllTiles.forEach((SpecificTile) => SpecificTile.addEventListener('click', SwapPlayer));
    AllTiles.forEach((SpecificTile) => SpecificTile.addEventListener('click', () =>{
        SpecificTile.disabled = true; 
        ClearBtn.addEventListener('click', () => {
            SpecificTile.disabled = false;
        })  
    }));
})();

//Renders evrything in the Array to the Dom
function Render(){
    for(let i = 0; i < marks.length; i++){
        AllTiles[i].textContent = marks[i];
    }
}

//Swaps the player.name and player.marker
function SwapPlayer(){
    const TileIndex = this.getAttribute("TileIndex");
    if(PlayerTurnOne === true || PlayerTurnTwo === false){
        PlayerTurnOne = false;
        PlayerTurnTwo = true;

        marks[TileIndex] = Player1.marker;
        CurrentPlayer.textContent = Player2.name;

        Render();
        Checkwinner();

    }else if(PlayerTurnOne === false || PlayerTurnTwo === true){
        PlayerTurnOne = true;
        PlayerTurnTwo = false;

        marks[TileIndex] = Player2.marker;
        CurrentPlayer.textContent = Player1.name;

        Render();
        Checkwinner();
    }
}

//Checks who Wins
function Checkwinner(){

}

//Restart button
const ClearField = (() => {
    ClearBtn.addEventListener('click', () => {
        marks = ["", "", "", "", "", "", "", "", ""];
        AllTiles.forEach((SpecificTile) => SpecificTile.textContent = "");
        CurrentPlayer.textContent = Player1.name;
        PlayerTurnOne = true;
        PlayerTurnTwo = false;
    })
})();