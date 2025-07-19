const start  = document.getElementById("startButton");

start.onclick = function() {
    
    document.getElementById('welcomeContainer').style.display = 'none';
    document.getElementById('modeChoiceContainer').style.display = 'flex';
}

let chosenLeague;

document.getElementById("premier").onclick = function(){chosenLeague = "premierLeague"}   
document.getElementById("laliga").onclick = function(){chosenLeague = "laLiga"}
document.getElementById("seriea").onclick = function(){chosenLeague = "serieA"}
document.getElementById("bundesliga").onclick = function(){chosenLeague = "bundesliga"}
document.getElementById("ligue1").onclick = function(){chosenLeague = "ligue1"}
document.getElementById("ligaPortugal").onclick = function(){chosenLeague = "ligaPortugal"} 
document.getElementById("superlig").onclick = function(){chosenLeague = "superlig"}
document.getElementById("misli").onclick = function(){chosenLeague = "azPremier"}; 

const matchSimulator = document.getElementById("matchSimulator");

matchSimulator.onclick = function() {
    document.getElementById("matchSimulatorContainer").style.display = "flex";
    document.getElementById('modeChoiceContainer').style.display = 'none';
}

const matchSimulatorBack = document.getElementById("matchSimulatorBack");

matchSimulatorBack.onclick = function() {
    document.getElementById("matchSimulatorContainer").style.display = "none";
    document.getElementById('modeChoiceContainer').style.display = 'flex';
}



