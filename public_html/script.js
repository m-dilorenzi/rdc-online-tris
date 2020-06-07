var turno = 0;
var partita_in_corso = 1;
var matrice = new Array();
matrice[0] = new Array();
matrice[1] = new Array();
matrice[2] = new Array();
initMatrice();

const socket = io();

const urlParams = new URLSearchParams(window.location.search);
const nickname = urlParams.get('nickname');


// Join game
socket.emit('join', {nickname});

function initMatrice()
{
	for(var i=0; (i<3); i++)
	{
		for(var c=0; c<3; c++)
		{
			matrice[i][c] = 'N';	
		}
	}
}

function nuovaPartita()
{
	partita_in_corso = 1;
	turno = 0
	document.images[0].src = "./../images/quadrato-bianco.jpg"
	document.images[2].src = "./../images/quadrato-bianco.jpg"
	document.images[4].src = "./../images/quadrato-bianco.jpg"
	document.images[8].src = "./../images/quadrato-bianco.jpg"
	document.images[10].src = "./../images/quadrato-bianco.jpg"
	document.images[12].src = "./../images/quadrato-bianco.jpg"
	document.images[16].src = "./../images/quadrato-bianco.jpg"
	document.images[18].src = "./../images/quadrato-bianco.jpg"
	document.images[20].src = "./../images/quadrato-bianco.jpg"
	initMatrice();
	nascondiFinestraRisultato()
}

function nascondiFinestraRisultato()
{
	document.getElementById('pareggio').style.display = "none"
	document.getElementById('giocatore1').style.display = "none"
	document.getElementById('giocatore2').style.display = "none"
	document.getElementById('bottoneNuovaPartita').style.display = "none"
}

function assegna(riga,colonna)
{
	if(partita_in_corso == 1){
		if(riga==0 & colonna==0)
		{
			if(matrice[0][0] == 'N')
			{
				if(turno%2==0)
				{
					document.images[0].src="./../images/x.png"
					matrice[0][0] = "X"
				}
				else
				{
					document.images[0].src="./../images/o.png"
					matrice[0][0] = "O"
				}
				turno=turno+1
			}
		}	
			
		if(riga==0 & colonna==2)
		{
			if(matrice[0][1] == 'N')
			{
				if(turno%2==0)
				{
					document.images[2].src="./../images/x.png"
					matrice[0][1] = "X"
				}
				else
				{
					document.images[2].src="./../images/o.png"
					matrice[0][1] = "O"
				}
				turno=turno+1
			}
		}
				
		if(riga==0 & colonna==4)
		{
			if(matrice[0][2] == 'N')
			{
				if(turno%2==0)
				{
					document.images[4].src="./../images/x.png"
					matrice[0][2] = "X"
				}
				else
				{
					document.images[4].src="./../images/o.png"
					matrice[0][2] = "O"
				}
				turno=turno+1
			}
		}
		
		if(riga==2 & colonna==0)
		{
			if(matrice[1][0] == 'N')
			{
				if(turno%2==0)
				{
					document.images[8].src="./../images/x.png"
					matrice[1][0] = "X"
				}
				else
				{
					document.images[8].src="./../images/o.png"
					matrice[1][0] = "O"
				}
				turno=turno+1
			}
		}
		
		if(riga==2 & colonna==2)
		{
			if(matrice[1][1] == 'N')
			{
				if(turno%2==0)
				{
					document.images[10].src="./../images/x.png"
					matrice[1][1] = "X"
				}
				else
				{
					document.images[10].src="./../images/o.png"
					matrice[1][1] = "O"
				}
				turno=turno+1
			}
		}
		
		if(riga==2 & colonna==4)
		{	
			if(matrice[1][2] == 'N')
			{
				if(turno%2==0)
				{
					document.images[12].src="./../images/x.png"
					matrice[1][2] = "X"
				}
				else
				{
					document.images[12].src="./../images/o.png"
					matrice[1][2] = "O"
				}
				turno=turno+1
			}
		}
		
		if(riga==4 & colonna==0)
		{
			if(matrice[2][0] == 'N')
			{
				if(turno%2==0)
				{
					document.images[16].src="./../images/x.png"
					matrice[2][0] = "X"
				}
				else
				{
					document.images[16].src="./../images/o.png"
					matrice[2][0] = "O"
				}
				turno=turno+1
			}
		}
		
		if(riga==4 & colonna==2)
		{
			if(matrice[2][1] == 'N')
			{
				if(turno%2==0)
				{
					document.images[18].src="./../images/x.png"
					matrice[2][1] = "X"
				}
				else
				{
					document.images[18].src="./../images/o.png"
					matrice[2][1] = "O"
				}
				turno=turno+1
			}
		}
		
		if(riga==4 & colonna==4)
		{
			if(matrice[2][2] == 'N')
			{
				if(turno%2==0)
				{
					document.images[20].src="./../images/x.png"
					matrice[2][2] = "X"
				}
				else
				{
					document.images[20].src="./../images/o.png"
					matrice[2][2] = "O"
				}
				turno=turno+1
			}
		}
		
		var vincitore = controlloPartita()
		if(vincitore == 0 & turno == 9)
		{
			//alert("Pareggio")
			mostraFinestraRisultato(0);
		}
		if(vincitore != 0)
		{
			//alert("Vincitore giocatore "+vincitore)
			mostraFinestraRisultato(vincitore);
		}	
	}
}

function mostraFinestraRisultato(vincitore)
{
	partita_in_corso = 0;
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

function controlloPartita()
{
	var vincitore = 0;
	
	// PRIMA RIGA
	if ((matrice[0][0] == "X") & (matrice[0][1] == "X") & (matrice[0][2] == "X"))
	{
		vincitore = 1;
	}
	
	if ((matrice[0][0] == "O") & (matrice[0][1] == "O") & (matrice[0][2] == "O"))
	{
		vincitore = 2;
	}
	
	// SECONDA RIGA
	if ((matrice[1][0] == "X") & (matrice[1][1] == "X") & (matrice[1][2] == "X"))
	{
		vincitore = 1;
	}
	
	if ((matrice[1][0] == "O") & (matrice[1][1] == "O") & (matrice[1][2] == "O"))
	{
		vincitore = 2;
	}
	
	// TERZA RIGA
	if ((matrice[2][0] == "X") & (matrice[2][1] == "X") & (matrice[2][2] == "X"))
	{
		vincitore = 1;
	}
	
	if ((matrice[2][0] == "O") & (matrice[2][1] == "O") & (matrice[2][2] == "O"))
	{
		vincitore = 2;
	}
	
	// PRIMA COLONNA
	if ((matrice[0][0] == "X") & (matrice[1][0] == "X") & (matrice[2][0] == "X"))
	{
		vincitore = 1;
	}
	
	if ((matrice[0][0] == "O") & (matrice[1][0] == "O") & (matrice[2][0] == "O"))
	{
		vincitore = 2;
	}
	
	// SECONDA COLONNA
	if ((matrice[0][1] == "X") & (matrice[1][1] == "X") & (matrice[2][1] == "X"))
	{
		vincitore = 1;
	}
	
	if ((matrice[0][1] == "O") & (matrice[1][1] == "O") & (matrice[2][1] == "O"))
	{
		vincitore = 2;
	}
	
	// TERZA COLONNA
	if ((matrice[0][2] == "X") & (matrice[1][2] == "X") & (matrice[2][2] == "X"))
	{
		vincitore = 1;
	}
	
	if ((matrice[0][2] == "O") & (matrice[1][2] == "O") & (matrice[2][2] == "O"))
	{
		vincitore = 2;
	}
	
	// DIAGONALE PRINCIPALE
	if ((matrice[0][0] == "X") & (matrice[1][1] == "X") & (matrice[2][2] == "X"))
	{
		vincitore = 1;
	}
	
	if ((matrice[0][0] == "O") & (matrice[1][1] == "O") & (matrice[2][2] == "O"))
	{
		vincitore = 2;
	}
	
	// DIAGONALE SECONDARIA
	if ((matrice[0][2] == "X") & (matrice[1][1] == "X") & (matrice[2][0] == "X"))
	{
		vincitore = 1;
	}
	
	if ((matrice[0][2] == "O") & (matrice[1][1] == "O") & (matrice[2][0] == "O"))
	{
		vincitore = 2;
	}
	
	return vincitore
}

