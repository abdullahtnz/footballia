
const start  = document.getElementById("startButton");
start.onclick = function() { 
    document.getElementById('welcomeContainer').style.display = 'none';
    document.getElementById('modeChoiceContainer').style.display = 'flex';
}

const matchSimulator = document.getElementById("matchSimulator");
matchSimulator.onclick = function() {
    document.getElementById("matchSimulatorContainer").style.display = "flex";
    document.getElementById('modeChoiceContainer').style.display = 'none';
    team1.innerHTML = "Select Team";
    team2.innerHTML = "Select Team";
}

const matchSimulatorBack = document.getElementById("matchSimulatorBack");
matchSimulatorBack.onclick = function() {
    document.getElementById("matchSimulatorContainer").style.display = "none";
    document.getElementById('modeChoiceContainer').style.display = 'flex';
    
}

let a = 6
console.log(a)
let b = a*5
console.log(b)
// these are for commit purposes.



// const startLine = document.getElementById("startLine")
// startLine.onclick = function(){
//     document.getElementById('modeChoiceContainer').style.display = 'none';
//     document.getElementById("startLineContainer").style.display = "flex"
// }









//
//document.getElementById("seriea").onclick = function(){chosenLeague = "serieA"}
//document.getElementById("bundesliga").onclick = function(){chosenLeague = "bundesliga"}
//document.getElementById("ligue1").onclick = function(){chosenLeague = "ligue1"}
//document.getElementById("ligaPortugal").onclick = function(){chosenLeague = "ligaPortugal"} 
//document.getElementById("superlig").onclick = function(){chosenLeague = "superlig"}
//document.getElementById("misli").onclick = function(){chosenLeague = "azPremier"};


// const startLine = document.getElementById("startLine")
// startLine.onclick = function(){
//     document.getElementById('modeChoiceContainer').style.display = 'none';
//     document.getElementById("startLineContainer").style.display = "flex"
// }









//
//document.getElementById("seriea").onclick = function(){chosenLeague = "serieA"}
//document.getElementById("bundesliga").onclick = function(){chosenLeague = "bundesliga"}
//document.getElementById("ligue1").onclick = function(){chosenLeague = "ligue1"}
//document.getElementById("ligaPortugal").onclick = function(){chosenLeague = "ligaPortugal"} 
//document.getElementById("superlig").onclick = function(){chosenLeague = "superlig"}
//document.getElementById("misli").onclick = function(){chosenLeague = "azPremier"};

