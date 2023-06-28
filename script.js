//make an array that renders array contents to the screen!

const marks = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];

const buttons = document.getElementsByClassName('buttons');

function Render(){
    for(let i = 0; i < marks.length; i++){
        buttons[i].innerHTML = marks[i];
    }
}

Render();