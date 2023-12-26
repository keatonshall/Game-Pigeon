let board = [];
let userMove = -1; //Single move selected by User, -1 by default
let turn = "X";

function send(){
  if(userMove > -1){
    let newURL = window.location.href + userMove;
    console.log(newURL);
    if (navigator.share) {
      navigator.share({
          title: 'Tic-Tac-Toe',
          url: newURL,
        })
    }
  }

}


function select(cell){
  console.log(cell);
  if(!board[cell].locked){
    //Delete all unlocked cells
    for(let i = 0; i < 9; i++){
      if(!board[i].locked){
        board[i].piece = "";
      }
    }
    board[cell].piece = turn;
    userMove = cell; //Change user
    showState();
  }
}


function showState(){
  for(let i = 0; i < 9; i++){
    document.getElementById("b" + i).innerHTML = board[i].piece;
  }
}


function initializeFromURL(){
  let url = window.location.href;
  state = url.split("?")[1]; //Extract turn sequence
  //Initalize board for all empty;
  for(let i = 0; i < 9; i++){
    board.push({
      piece: "",
      locked: false
    });
  }

  for(let i = 0; i < state.length; i++){//Loop over turn sequence
    let move = Number(state.at(i));
    board[move].piece = turn;
    board[move].locked = true; //Lock after move is placed
    turn = switchTurn(turn);
  }
  showState();
}


function switchTurn(t){
  return (t == "X")? "O" : "X";
}
