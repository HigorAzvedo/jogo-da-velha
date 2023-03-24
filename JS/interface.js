document.addEventListener('DOMContentLoaded', () =>{

    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })


})

let winner = document.getElementById("winner")


function handleClick(event){

    let square = event.target;
    let position = square.id;

    if(handleMove(position)){

        if(playerTime == 0){
            playerTime = `\u{26AB} `
        }else{
            playerTime = `\u{274C} `   
        }
        winner.innerHTML = `O Vencedor foi: ${playerTime}`
        
    };
    updateSquare(position);
}

function updateSquare(position){
    let square = document.getElementById(position.toString())
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`    
}


