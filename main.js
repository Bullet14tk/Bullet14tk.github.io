var list = ["we shall see!",
			"Yes!",
			"No",
			"Maybe",
			"Certainly",
			"Ask again later",
			"Doubtful",
			"Try again later",
			"As I see it, yes",
			"Signs point to yes!"];
function randomNumber() {
	return Math.floor (Math.random () * 10); 
}

//just testing
function testJs(){
	alert("test!");
}
//This function handles clicking of 8 ball imagage
function shake8Ball(){
	document.getElementById("magic8ball").src="Magic_eight_ball.png";
	//alert("We shall see!")


	document.getElementById("results").innerHTML=list[randomNumber()];
}

	//alert(randomNumber());


/*
below is code for Tic Tac Toe
*/

//handles X and O turns
function turn(location){
	document.getElementById(location). innerHTML="X";
}