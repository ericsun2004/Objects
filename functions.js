
let infoBox = document.getElementById("infoBox");

infoBox.innerHTML += "Hello person, <br> I am an African Striped Polecat. I am a cousin of the skunk family. Please provide me with the necesities of life. Your goal is to make me not die.";

infoBox.innerHTML += "<br><br> By feeding me the follwing substances, you can affect my tiredness, hunger, loneliness, and happiness. Respectively. ";

let polecatStats = {
	tired: 3,
	hungry: 3,
	lonely: 3,
	happy: 3,
	trust: 0
}

let conditions = ["killed", "doubleplus", "plus", "neutrally ", "un", "plusun", "killed"];

let attributes  = ["tired", "hungry", "lonely", "happy"];

function currentCon ({tired, hungry, lonely, happy}){
	return [tired, hungry, lonely, happy];
}

console.log (currentCon(polecatStats));

function chanceTrust(polecatStats) {
	let trust = polecatStats.trust;
	let num = Math.random();
	if (num< 0.3 * trust) {
		return ("accepted");	
	}
	else {
		return ("denied");
	}
}

function printStats() {

	let text = "<br><br> I am ";
	for (let i = 0; i < 3; i++) {
		text += conditions[((currentCon(polecatStats))[i])] + attributes[i] + ", ";
		console.log(((currentCon(polecatStats))[i]));
		if (((currentCon(polecatStats))[i]) == (6)|((currentCon(polecatStats))[i]) == (0)){
			text = "<br><br>I am dead.";
			infoBox.innerHTML += text;
			setInterval(error, 1);
			throw new Error("Oh no! You are so irresponsible! Something went badly wrong!");
		}		
	}
	text += "and " + conditions[((currentCon(polecatStats))[3])] + attributes[3] + ".";
	if (((currentCon(polecatStats))[3]) == (6)|((currentCon(polecatStats))[3]) == (0)){
		text = "<br><br>I am dead.";
		infoBox.innerHTML += text;
		setInterval(error, 1);
		throw new Error("Oh no! You are so irresponsible! Something went badly wrong!");
	}
	infoBox.innerHTML += text;

}

function tireChange() {
	infoBox.innerHTML += "<br><br> You have decided to feed the polecat some molecules of caffeine, to alleviate its tiredness. ";
	let relation = chanceTrust(polecatStats);

	if (relation == "accepted") {
		polecatStats.tired = (currentCon(polecatStats))[0] + 1;
		infoBox.innerHTML += "<br><br> Tiredness - 1 ";
		printStats();		
	}
	else if (relation == "denied") { 
		infoBox.innerHTML += "<br> <br> I detest and reject your caffeine. Feed the me food to earn my trust.";
		printStats();
	} 
}

function loneChange() {
	infoBox.innerHTML += "<br><br> You have decided to feed the polecat some antidepressants, to alleviate its loneliness. ";
	let relation = chanceTrust(polecatStats);

	if (relation == "accepted") {
		polecatStats.lonely = (currentCon(polecatStats))[2] + 1;
		infoBox.innerHTML += "<br><br> loneliness - 1 ";
		printStats();		
	}
	else if (relation == "denied") { 
		infoBox.innerHTML += "<br> <br> I detest and reject your antidepressants. Feed the me food to earn my trust.";
		printStats();
	} 
}

function happyChange() {
	infoBox.innerHTML += "<br><br> You have decided to feed the polecat some diamorphine, to increase its happiness. ";
	let relation = chanceTrust(polecatStats);

	if (relation == "accepted") {
		polecatStats.happy = (currentCon(polecatStats))[3] - 1;
		infoBox.innerHTML += "<br><br> happiness + 1 ";
		printStats();		
	}
	else if (relation == "denied") { 
		infoBox.innerHTML += "<br> <br> I detest and reject your diamorphine. Feed the me food to earn my trust.";
		printStats();
	} 
}

function hungerChange() {
	infoBox.innerHTML += "<br><br> You have decided to feed the polecat some glucose, to decrease its hunger. ";
	polecatStats.hungry = (currentCon(polecatStats))[1] + 1;
	(polecatStats.trust)++;	
	infoBox.innerHTML += "<br><br> hunger - 1 ";
	printStats();		
}

function makeHungry() {	
	polecatStats.hungry = (currentCon(polecatStats))[1] - 1;
	printStats();
}

function error() {
	infoBox.innerHTML += "You Killed me.";
}

setInterval(makeHungry, 10000);

printStats();
