//declaring variables
const AllTiles = document.querySelectorAll('.Tiles');
const CurrentPlayer = document.querySelector('.SwapPlayer');
const ClearBtn = document.querySelector('.ClearBtn');
const Wintxt = document.querySelector('.Player')

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
let player = Player1.name;

//when clicking a specific tile --> swap the players and put player.mark down
const CellClicked = (() => {
    AllTiles.forEach((SpecificTile) => SpecificTile.addEventListener('click', SwapPlayer));
    AllTiles.forEach((SpecificTile) => SpecificTile.addEventListener('click', () =>{
        SpecificTile.disabled = true; 
        ClearBtn.addEventListener('click', () => {
            SpecificTile.disabled = false;
        })  
    }));
    CheckWinner();
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
    if(player == Player1.name){
        player = Player2.name
        marks[TileIndex] = Player1.marker;
        CurrentPlayer.textContent = Player2.name;
        Render();
        CheckWinner();

    }else if(player == Player2.name){
        player = Player1.name
        marks[TileIndex] = Player2.marker;
        CurrentPlayer.textContent = Player1.name;
        Render();
        CheckWinner();
    }
}

//Restart button
const ClearField = (() => {
    ClearBtn.addEventListener('click', () => {
        AllTiles.forEach((SpecificTile) => SpecificTile.disabled = false);
        marks = ["", "", "", "", "", "", "", "", ""];
        AllTiles.forEach((SpecificTile) => SpecificTile.textContent = "");
        Wintxt.textContent = `${Player1.name}, make your move.`;
        PlayerTurnOne = true;
        PlayerTurnTwo = false;
    })
})();

//Checks who Wins
function CheckWinner(e){
    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = marks[condition[0]];
        const cellB = marks[condition[1]];
        const cellC = marks[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            AllTiles.forEach((SpecificTile) => SpecificTile.disabled = true);
            player = player == Player2.name ? Player1.name : Player2.name;
            Wintxt.textContent = `${player} wins!`;
            break;
        }
    }

    if(!marks.includes("")){
        Wintxt.textContent = `Draw!`;
    }
}