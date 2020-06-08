const socket = io()

const urlParams = new URLSearchParams(window.location.search)
const nickname = urlParams.get('nickname')

var turn = 0;
var game_started = 0;
var player = 0;
var trisTable = new Array();
trisTable[0] = new Array();
trisTable[1] = new Array();
trisTable[2] = new Array();
initTrisTable();

// Join game
socket.emit('join', {nickname})

socket.on('information', message => {
	// Add the new message on the screen
	document.getElementById('pareggio').style.display = "block";
	document.getElementById('pareggio').textContent = message;
});

socket.on('startGame', (startSignal) => {
	// Add the new message on the screen
	document.getElementById('pareggio').style.display = "block";
	document.getElementById('pareggio').textContent = startSignal.message;
	game_started = 1;
	player = startSignal.tplayer;
});

socket.on('updateTris', (cell) => {
	switch(cell){
		case 0:
			if(player == 1)
			{
				document.images[0].src = "./../images/o.png";
				trisTable[0][0] = "O";
			}else
			{
				document.images[0].src = "./../images/x.png";
				trisTable[0][0] = "X";
			}
			break;
		case 1:
			if(player == 1)
			{
				document.images[2].src = "./../images/o.png";
				trisTable[0][1] = "O";
			}else
			{
				document.images[2].src = "./../images/x.png";
				trisTable[0][1] = "X";
			}
			break;
		case 2:
			if(player == 1)
			{
				document.images[4].src = "./../images/o.png";
				trisTable[0][2] = "O";
			}else
			{
				document.images[4].src = "./../images/x.png";
				trisTable[0][2] = "X";
			}
			break;
		case 3:
			if(player == 1)
			{
				document.images[8].src = "./../images/o.png";
				trisTable[1][0] = "O";
			}else
			{
				document.images[8].src = "./../images/x.png";
				trisTable[1][0] = "X";
			}
			break;
		case 4:
			if(player == 1)
			{
				document.images[10].src = "./../images/o.png";
				trisTable[1][1] = "O";
			}else
			{
				document.images[10].src = "./../images/x.png";
				trisTable[1][1] = "X";
			}
			break;
		case 5:
			if(player == 1)
			{
				document.images[12].src = "./../images/o.png";
				trisTable[1][2] = "O";
			}else
			{
				document.images[12].src = "./../images/x.png";
				trisTable[1][2] = "X";
			}
			break;
		case 6:
			if(player == 1)
			{
				document.images[16].src = "./../images/o.png";
				trisTable[2][0] = "O";
			}else
			{
				document.images[16].src = "./../images/x.png";
				trisTable[2][0] = "X";
			}
			break;
		case 7:
			if(player == 1)
			{
				document.images[18].src = "./../images/o.png";
				trisTable[2][1] = "X";
			}else
			{
				document.images[18].src = "./../images/x.png";
				trisTable[2][1] = "X";
			}
			break;
		case 8:
			if(player == 1)
			{
				document.images[20].src = "./../images/o.png";
				trisTable[2][2] = "O";
			}else
			{
				document.images[20].src = "./../images/x.png";
				trisTable[2][2] = "X";
			}
			break;
		default:
			break;
		}
	turn++;
});


// maaging game animation (HTML)

function initTrisTable()
{
	for(var i=0; (i<3); i++)
	{
		for(var c=0; c<3; c++)
		{
			trisTable[i][c] = 'N';	
		}
	}
}

function newGame()
{
	game_started = 1;
	turn = 0
	document.images[0].src = "./../images/quadrato-bianco.jpg"
	document.images[2].src = "./../images/quadrato-bianco.jpg"
	document.images[4].src = "./../images/quadrato-bianco.jpg"
	document.images[8].src = "./../images/quadrato-bianco.jpg"
	document.images[10].src = "./../images/quadrato-bianco.jpg"
	document.images[12].src = "./../images/quadrato-bianco.jpg"
	document.images[16].src = "./../images/quadrato-bianco.jpg"
	document.images[18].src = "./../images/quadrato-bianco.jpg"
	document.images[20].src = "./../images/quadrato-bianco.jpg"
	initTrisTable();
	nascondiFinestraRisultato()
}

function nascondiFinestraRisultato()
{
	document.getElementById('pareggio').style.display = "none"
	document.getElementById('giocatore1').style.display = "none"
	document.getElementById('giocatore2').style.display = "none"
	document.getElementById('bottoneNuovaPartita').style.display = "none"
}

function makeMove(row, column)
{
	if(player == 1 & turn % 2 == 0)
	{
		if(game_started == 1){
			if(row==0 & column==0)
			{
				if(trisTable[0][0] == 'N')
				{
					document.images[0].src="./../images/x.png";
					trisTable[0][0] = "X";
					var move = {nickname: nickname, cell: 0};
					socket.emit('moveDone', move);
					turn++;
				}
			}	
				
			if(row==0 & column==2)
			{
				if(trisTable[0][1] == 'N')
				{
					document.images[2].src="./../images/x.png";
					trisTable[0][1] = "X";
					var move = {nickname: nickname, cell: 1};
					socket.emit('moveDone', move);
					turn++;
					
				}
			}
					
			if(row==0 & column==4)
			{
				if(trisTable[0][2] == 'N')
				{
					
					document.images[4].src="./../images/x.png";
					trisTable[0][2] = "X";
					var move = {nickname: nickname, cell: 2};
					socket.emit('moveDone', move);
					turn++;
				}
			}
			
			if(row==2 & column==0)
			{
				if(trisTable[1][0] == 'N')
				{
					document.images[8].src="./../images/x.png";
					trisTable[1][0] = "X";
					var move = {nickname: nickname, cell: 3};
					socket.emit('moveDone', move);
					turn++;
				}
			}
			
			if(row==2 & column==2)
			{
				if(trisTable[1][1] == 'N')
				{
					document.images[10].src="./../images/x.png";
					trisTable[1][1] = "X";
					var move = {nickname: nickname, cell: 4};
					socket.emit('moveDone', move);
					turn++;
				}
			}
			
			if(row==2 & column==4)
			{	
				if(trisTable[1][2] == 'N')
				{
					document.images[12].src="./../images/x.png";
					trisTable[1][2] = "X";
					var move = {nickname: nickname, cell: 5};
					socket.emit('moveDone', move);
					turn++;
				}
			}
			
			if(row==4 & column==0)
			{
				if(trisTable[2][0] == 'N')
				{	
					document.images[16].src="./../images/x.png";
					trisTable[2][0] = "X";
					var move = {nickname: nickname, cell: 6};
					socket.emit('moveDone', move);
					turn++;
				}
			}
			
			if(row==4 & column==2)
			{
				if(trisTable[2][1] == 'N')
				{
					document.images[18].src="./../images/x.png";
					trisTable[2][1] = "X";
					var move = {nickname: nickname, cell: 7};
					socket.emit('moveDone', move);
					turn++;
				}
			}
			
			if(row==4 & column==4)
			{
				if(trisTable[2][2] == 'N')
				{
					document.images[20].src="./../images/x.png";
					trisTable[2][2] = "X";
					var move = {nickname: nickname, cell: 8};
					socket.emit('moveDone', move);
					turn++;
				}
			}
		}
	}else if(player == 2 & turn % 2 != 0)
	{
		if(game_started == 1){
			if(row==0 & column==0)
			{
				if(trisTable[0][0] == 'N')
				{
					document.images[0].src="./../images/o.png";
					trisTable[0][0] = "O";
					var move = {nickname: nickname, cell: 0};
					socket.emit('moveDone', move);
					turn++;
				}
			}	
				
			if(row==0 & column==2)
			{
				if(trisTable[0][1] == 'N')
				{
					document.images[2].src="./../images/o.png";
					trisTable[0][1] = "O";
					var move = {nickname: nickname, cell: 1};
					socket.emit('moveDone', move);
					turn++;
				}
			}
					
			if(row==0 & column==4)
			{
				if(trisTable[0][2] == 'N')
				{
					document.images[4].src="./../images/o.png";
					trisTable[0][2] = "O";
					var move = {nickname: nickname, cell: 2};
					socket.emit('moveDone', move);
					turn++;
				}
			}
			
			if(row==2 & column==0)
			{
				if(trisTable[1][0] == 'N')
				{
					document.images[8].src="./../images/o.png";
					trisTable[1][0] = "O";
					var move = {nickname: nickname, cell: 3};
					socket.emit('moveDone', move);
					turn++;
				}
			}
			
			if(row==2 & column==2)
			{
				if(trisTable[1][1] == 'N')
				{
					document.images[10].src="./../images/o.png";
					trisTable[1][1] = "O";
					var move = {nickname: nickname, cell: 4};
					socket.emit('moveDone', move);
					turn++;
				}
			}
			
			if(row==2 & column==4)
			{	
				if(trisTable[1][2] == 'N')
				{
					document.images[12].src="./../images/o.png";
					trisTable[1][2] = "O";
					var move = {nickname: nickname, cell: 5};
					socket.emit('moveDone', move);
					turn++;
				}
			}
			
			if(row==4 & column==0)
			{
				if(trisTable[2][0] == 'N')
				{
					document.images[16].src="./../images/o.png";
					trisTable[2][0] = "O";
					var move = {nickname: nickname, cell: 6};
					socket.emit('moveDone', move);
					turn++;
				}
			}
			
			if(row==4 & column==2)
			{
				if(trisTable[2][1] == 'N')
				{
					document.images[18].src="./../images/o.png";
					trisTable[2][1] = "O";
					var move = {nickname: nickname, cell: 7};
					socket.emit('moveDone', move);
					turn++;
				}
			}
			
			if(row==4 & column==4)
			{
				if(trisTable[2][2] == 'N')
				{
					document.images[20].src="./../images/o.png"
					trisTable[2][2] = "O"
					var move = {nickname: nickname, cell: 8};
					socket.emit('moveDone', move);
					turn++;
				}
			}
		}	
	}
}

function mostraFinestraRisultato(vincitore)
{
	game_started = 0;
	if(vincitore == 0)
		document.getElementById('pareggio').style.display = "block";
	else
	{
		if(vincitore == 1)
			document.getElementById('giocatore1').style.display = "block";
		else
			document.getElementById('giocatore2').style.display = "block";
	}
	document.getElementById('bottoneNuovaPartita').style.display = "block";
}

function checkVictoryCondition()
{
	var winner = 0;
	
	// first row
	if ((trisTable[0][0] == "X") & (trisTable[0][1] == "X") & (trisTable[0][2] == "X"))
	{
		winner = 1;
	}
	
	if ((trisTable[0][0] == "O") & (trisTable[0][1] == "O") & (trisTable[0][2] == "O"))
	{
		winner = 2;
	}
	
	// second row
	if ((trisTable[1][0] == "X") & (trisTable[1][1] == "X") & (trisTable[1][2] == "X"))
	{
		winner = 1;
	}
	
	if ((trisTable[1][0] == "O") & (trisTable[1][1] == "O") & (trisTable[1][2] == "O"))
	{
		winner = 2;
	}
	
	// third row
	if ((trisTable[2][0] == "X") & (trisTable[2][1] == "X") & (trisTable[2][2] == "X"))
	{
		winner = 1;
	}
	
	if ((trisTable[2][0] == "O") & (trisTable[2][1] == "O") & (trisTable[2][2] == "O"))
	{
		winner = 2;
	}
	
	// first column
	if ((trisTable[0][0] == "X") & (trisTable[1][0] == "X") & (trisTable[2][0] == "X"))
	{
		winner = 1;
	}
	
	if ((trisTable[0][0] == "O") & (trisTable[1][0] == "O") & (trisTable[2][0] == "O"))
	{
		winner = 2;
	}
	
	// second column
	if ((trisTable[0][1] == "X") & (trisTable[1][1] == "X") & (trisTable[2][1] == "X"))
	{
		winner = 1;
	}
	
	if ((trisTable[0][1] == "O") & (trisTable[1][1] == "O") & (trisTable[2][1] == "O"))
	{
		winner = 2;
	}
	
	// third column
	if ((trisTable[0][2] == "X") & (trisTable[1][2] == "X") & (trisTable[2][2] == "X"))
	{
		winner = 1;
	}
	
	if ((trisTable[0][2] == "O") & (trisTable[1][2] == "O") & (trisTable[2][2] == "O"))
	{
		winner = 2;
	}
	
	// main diagonal
	if ((trisTable[0][0] == "X") & (trisTable[1][1] == "X") & (trisTable[2][2] == "X"))
	{
		winner = 1;
	}
	
	if ((trisTable[0][0] == "O") & (trisTable[1][1] == "O") & (trisTable[2][2] == "O"))
	{
		winner = 2;
	}
	
	// secondary diagonal
	if ((trisTable[0][2] == "X") & (trisTable[1][1] == "X") & (trisTable[2][0] == "X"))
	{
		winner = 1;
	}
	
	if ((trisTable[0][2] == "O") & (trisTable[1][1] == "O") & (trisTable[2][0] == "O"))
	{
		winner = 2;
	}
	
	return winner;
}

