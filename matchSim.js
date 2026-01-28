const premierLeagueTeams = [
    {name: "Liverpool", gen: 65, logo: '<img src="assets/premierTeams/Liverpool_FC.svg.png" alt="Liverpool" />'},
    {name: "Tottenham", gen: 77, logo: '<img src="assets/premierTeams/Tottenham_Hotspur.svg.png" alt="Tottenham" />'},
    {name: "Manchester City", gen: 95 , logo: '<img src="assets/premierTeams/Manchester_City_FC_badge.svg.png" />'},
    {name: "Manchester United", gen: 87 , logo: '<img src="assets/premierTeams/Manusvg.png" />'},
    {name: "Arsenal", gen: 90 , logo: '<img src="assets/premierTeams/Arsenal.png" />'},
    {name: "Aston Villa", gen: 85, logo: '<img src="assets/premierTeams/Astonvilla.png" />' },
    {name: "Bournemouth", gen: 78, logo: '<img src="assets/premierTeams/bourne.png" />' },
    {name: "Brentford", gen: 76, logo: '<img src="assets/premierTeams/brentford.png" />' },
    {name: "Brigthon", gen: 84, logo: '<img src="assets/premierTeams/Brighton.png" />' },
    {name: "Burnley", gen: 68, logo: '<img src="assets/premierTeams/Burnley.png" />' },
    {name: "Chelsea", gen: 88, logo: '<img src="assets/premierTeams/Chelsea.png" />' },
    {name: "Crystal Palace", gen: 80, logo: '<img src="assets/premierTeams/Crystal.png" />' },
    {name: "Everton", gen: 72, logo: '<img src="assets/premierTeams/Everton.png" />' },
    {name: "Fulham", gen: 77, logo: '<img src="assets/premierTeams/Fulham.png" />' },
    {name: "Leeds United", gen: 70, logo: '<img src="assets/premierTeams/Leeds.png" />' },
    {name: "Newcastle United", gen: 85, logo: '<img src="assets/premierTeams/Newcastle.png" />' },
    {name: "Sunderland", gen: 65, logo: '<img src="assets/premierTeams/Sunderland.png" />' },
    {name: "Westham United", gen: 79, logo: '<img src="assets/premierTeams/Westham.png" />' },
    {name: "Wolverhampton", gen: 76, logo: '<img src="assets/premierTeams/Wolverhampton.png" />' },
]

const laligaTeams = [
    {name: "Barcelona", gen: 91, logo: '<img src="assets/laligaTeams/barcelona.png" />'},
    {name: "Real Madrid", gen: 93, logo: '<img src="assets/laligaTeams/realmadrid.png" />'},
    {name: "Atlético Madrid", gen: 88, logo: '<img src="assets/laligaTeams/atleticomadrid.png" />'},
    {name: "Real Sociedad", gen: 84, logo: '<img src="assets/laligaTeams/realsociedad.png" />'},
    {name: "Athletic Bilbao", gen: 83, logo: '<img src="assets/laligaTeams/athleticbilbao.png" />'},
    {name: "Villarreal", gen: 83, logo: '<img src="assets/laligaTeams/villareal.png" />'},
    {name: "Real Betis", gen: 81, logo: '<img src="assets/laligaTeams/realbetis.png" />'},
    {name: "Girona", gen: 82, logo: '<img src="assets/laligaTeams/girona.png" />'},
    {name: "Valencia", gen: 78, logo: '<img src="assets/laligaTeams/valencia.gif" />'},
    {name: "Sevilla", gen: 73, logo: '<img src="assets/laligaTeams/sevilla.png" />'},
    {name: "Celta Vigo", gen: 77, logo: '<img src="assets/laligaTeams/celtavigo.png" />'},
    {name: "Osasuna", gen: 76, logo: '<img src="assets/laligaTeams/osasuna.png" />'},
    {name: "Getafe", gen: 72, logo: '<img src="assets/laligaTeams/getafe.png" />'},
    {name: "Mallorca", gen: 74, logo: '<img src="assets/laligaTeams/mallorca.gif" />'},
    {name: "Rayo Vallecano", gen: 70, logo: '<img src="assets/laligaTeams/rayovallecano.png" />'},
    {name: "Alavés", gen: 71, logo: '<img src="assets/laligaTeams/alaves.png" />'},
    {name: "Espanyol", gen: 75, logo: '<img src="assets/laligaTeams/espanyol.png" />'},
    {name: "Levante", gen: 67, logo: '<img src="assets/laligaTeams/levante.png" />'},
    {name: "Elche", gen: 69, logo: '<img src="assets/laligaTeams/elche.png" />'},
    {name: "Real Oviedo", gen: 66, logo: '<img src="assets/laligaTeams/realoviedo.png" />'}
];

const serieaTeams = [
    {name: "Inter Milan", gen: 90, logo: '<img src="assets/serieaTeams/intermilan.png" />'}, // done
    {name: "Napoli", gen: 89, logo: '<img src="assets/serieaTeams/napoli.png" />'}, //done
    {name: "AC Milan", gen: 89, logo: '<img src="assets/serieaTeams/acmilan.png" />'}, //done
    {name: "Juventus", gen: 87, logo: '<img src="assets/serieaTeams/juventus.png" />'}, //done
    {name: "Atalanta", gen: 86, logo: '<img src="assets/serieaTeams/atalanta.png" />'},
    {name: "Roma", gen: 85, logo: '<img src="assets/serieaTeams/roma.png" />'}, //done
    {name: "Lazio", gen: 83, logo: '<img src="assets/serieaTeams/lazio.png" />'}, //done
    {name: "Bologna", gen: 82, logo: '<img src="assets/serieaTeams/bologna.png" />'}, //done
    {name: "Fiorentina", gen: 81, logo: '<img src="assets/serieaTeams/fiorentina.png" />'}, //done
    {name: "Torino", gen: 77, logo: '<img src="assets/serieaTeams/torino.png" />'}, //done
    {name: "Monza", gen: 76, logo: '<img src="assets/serieaTeams/monza.png" />'}, //done
    {name: "Genoa", gen: 75, logo: '<img src="assets/serieaTeams/genoa.png" />'}, //done
    {name: "Udinese", gen: 74, logo: '<img src="assets/serieaTeams/udinese.png" />'}, //done
    {name: "Cagliari", gen: 70, logo: '<img src="assets/serieaTeams/cagliari.png" />'}, //done
    {name: "Sassuolo", gen: 72, logo: '<img src="assets/serieaTeams/sassuolo.png" />'}, //done
    {name: "Verona", gen: 69, logo: '<img src="assets/serieaTeams/verona.png" />'}, //done
    {name: "Lecce", gen: 71, logo: '<img src="assets/serieaTeams/lecce.png" />'}, //done
    {name: "Empoli", gen: 68, logo: '<img src="assets/serieaTeams/empoli.png" />'}, //done
    {name: "Frosinone", gen: 66, logo: '<img src="assets/serieaTeams/frosinone.png" />'}, //done
    {name: "Salernitana", gen: 65, logo: '<img src="assets/serieaTeams/salernitana.png" />'}
];

const bundesligaTeams = [
    {name: "Bayer Leverkusen", gen: 82, logo: '<img src="assets/bundesligaTeams/bayerleverkusen.png" />'}, //done
    {name: "Bayern Munich", gen: 91, logo: '<img src="assets/bundesligaTeams/bayernmunich.png" />'}, //done
    {name: "VfB Stuttgart", gen: 81, logo: '<img src="assets/bundesligaTeams/stuttgart.png" />'}, //done
    {name: "RB Leipzig", gen: 86, logo: '<img src="assets/bundesligaTeams/rbleipzig.png" />'},  //done
    {name: "Borussia Dortmund", gen: 88, logo: '<img src="assets/bundesligaTeams/borussiadortmund.png" />'}, //done
    {name: "Eintracht Frankfurt", gen: 82, logo: '<img src="assets/bundesligaTeams/eintrachtfrankfurt.png" />'}, //done
    {name: "SC Freiburg", gen: 79, logo: '<img src="assets/bundesligaTeams/freiburg.png" />'}, //done
    {name: "TSG Hoffenheim", gen: 78, logo: '<img src="assets/bundesligaTeams/hoffenheim.png" />'}, //done
    {name: "FC Augsburg", gen: 76, logo: '<img src="assets/bundesligaTeams/augsburg.png" />'}, //done
    {name: "VfL Wolfsburg", gen: 80, logo: '<img src="assets/bundesligaTeams/wolfsburg.png" />'}, //done
    {name: "Borussia Mönchengladbach", gen: 78, logo: '<img src="assets/bundesligaTeams/gladbach.png" />'}, //done
    {name: "Werder Bremen", gen: 74, logo: '<img src="assets/bundesligaTeams/bremen.png" />'}, //done
    {name: "1. FC Heidenheim", gen: 73, logo: '<img src="assets/bundesligaTeams/heidenheim.png" />'}, //done
    {name: "1. FC Union Berlin", gen: 75, logo: '<img src="assets/bundesligaTeams/unionberlin.png" />'},
    {name: "VfL Bochum", gen: 72, logo: '<img src="assets/bundesligaTeams/bochum.png" />'}, //done
    {name: "1. FSV Mainz 05", gen: 74, logo: '<img src="assets/bundesligaTeams/mainz.png" />'}, //done
    {name: "FC St. Pauli", gen: 71, logo: '<img src="assets/bundesligaTeams/stpauli.png" />'}, //done
    {name: "FC Holstein Kiel", gen: 70, logo: '<img src="assets/bundesligaTeams/kiel.png" />'} //done
];

const ligue1Teams = [
    {name: "Paris Saint-Germain", gen: 92, logo: '<img src="assets/ligue1Teams/psg.png" />'}, //done
    {name: "AS Monaco", gen: 84, logo: '<img src="assets/ligue1Teams/monaco.png" />'}, //done
    {name: "Olympique Lyonnais", gen: 83, logo: '<img src="assets/ligue1Teams/lyon.png" />'}, //done
    {name: "LOSC Lille", gen: 82, logo: '<img src="assets/ligue1Teams/lille.png" />'}, //done
    {name: "Stade Rennais", gen: 81, logo: '<img src="assets/ligue1Teams/rennes.png" />'}, //done
    {name: "Olympique de Marseille", gen: 83, logo: '<img src="assets/ligue1Teams/marseille.png" />'}, //done
    {name: "RC Lens", gen: 80, logo: '<img src="assets/ligue1Teams/lens.png" />'}, //done
    {name: "OGC Nice", gen: 82, logo: '<img src="assets/ligue1Teams/nice.png" />'}, //done
    {name: "Montpellier HSC", gen: 77, logo: '<img src="assets/ligue1Teams/montpellier.png" />'}, //done
    {name: "Stade de Reims", gen: 76, logo: '<img src="assets/ligue1Teams/reims.png" />'}, //done
    {name: "FC Nantes", gen: 75, logo: '<img src="assets/ligue1Teams/nantes.png" />'}, //done
    {name: "Toulouse FC", gen: 74, logo: '<img src="assets/ligue1Teams/toulouse.png" />'}, //done
    {name: "Le Havre AC", gen: 73, logo: '<img src="assets/ligue1Teams/lehavre.png" />'}, //done
    {name: "Strasbourg", gen: 75, logo: '<img src="assets/ligue1Teams/strasbourg.png" />'}, //done
    {name: "Stade Brestois", gen: 79, logo: '<img src="assets/ligue1Teams/brest.png" />'},// done
    {name: "FC Lorient", gen: 72, logo: '<img src="assets/ligue1Teams/lorient.png" />'}, //done
    {name: "AJ Auxerre", gen: 71, logo: '<img src="assets/ligue1Teams/auxerre.png" />'}, //done
    {name: "Angers SCO", gen: 70, logo: '<img src="assets/ligue1Teams/angers.png" />'} //done
];

const ligaPortugalTeams = [
{name: "Benfica", gen: 81, logo: '<img src="assets/ligaportugalTeams/benfica.png" />'},
{name: "Porto", gen: 83, logo: '<img src="assets/ligaportugalTeams/porto.png" />'},
{name: "Sporting CP", gen: 83, logo: '<img src="assets/ligaportugalTeams/sporting.png" />'},
{name: "Braga", gen: 78, logo: '<img src="assets/ligaportugalTeams/braga.png" />'},
{name: "Vitória SC", gen: 74, logo: '<img src="assets/ligaportugalTeams/vitoriaguimaraes.png" />'},
{name: "Boavista", gen: 71, logo: '<img src="assets/ligaportugalTeams/boavista.png" />'},
{name: "Famalicão", gen: 71, logo: '<img src="assets/ligaportugalTeams/famalicao.png" />'},
{name: "Estoril Praia", gen: 72, logo: '<img src="assets/ligaportugalTeams/estoril.png" />'},
{name: "Arouca", gen: 71, logo: '<img src="assets/ligaportugalTeams/arouca.png" />'},
{name: "Rio Ave", gen: 73, logo: '<img src="assets/ligaportugalTeams/rioave.png" />'},
{name: "Moreirense", gen: 71, logo: '<img src="assets/ligaportugalTeams/moreirense.png" />'},
{name: "Gil Vicente", gen: 70, logo: '<img src="assets/ligaportugalTeams/gilvicente.png" />'},
{name: "Casa Pia", gen: 69, logo: '<img src="assets/ligaportugalTeams/casapia.png" />'},
{name: "Portimonense", gen: 69, logo: '<img src="assets/ligaportugalTeams/portimonense.png" />'},
{name: "Estrela da Amadora", gen: 68, logo: '<img src="assets/ligaportugalTeams/estrelaamadora.png" />'},
{name: "Farense", gen: 67, logo: '<img src="assets/ligaportugalTeams/farense.png" />'},
{name: "Nacional", gen: 66, logo: '<img src="assets/ligaportugalTeams/nacional.png" />'},
{name: "Marítimo", gen: 65, logo: '<img src="assets/ligaportugalTeams/maritimo.png" />'}
];

const superLigTeams = [
    {name: "Galatasaray", gen: 84, logo: '<img src="assets/superLig/galatasaray.png" alt="Galatasaray" />'},//done
    {name: "Fenerbahce", gen: 83, logo: '<img src="assets/superLig/fenerbahce.png" alt="Fenerbahce" />'},//done
    {name: "Besiktas", gen: 80, logo: '<img src="assets/superLig/besiktas.png" alt="Besiktas" />'},//done
    {name: "Trabzonspor", gen: 78, logo: '<img src="assets/superLig/trabzonspor.png" alt="Trabzonspor" />'},//done
    {name: "Basaksehir", gen: 76, logo: '<img src="assets/superLig/basaksehir.png" alt="Basaksehir" />'},//done
    {name: "Rizespor", gen: 75, logo: '<img src="assets/superLig/rizespor.png" alt="Rizespor" />'},//done
    {name: "Sivasspor", gen: 75, logo: '<img src="assets/superLig/sivasspor.png" alt="Sivasspor" />'}, //done
    {name: "Alanyaspor", gen: 74, logo: '<img src="assets/superLig/alanyaspor.png" alt="Alanyaspor" />'}, //done
    {name: "Antalyaspor", gen: 74, logo: '<img src="assets/superLig/antalyaspor.png" alt="Antalyaspor" />'}, //done
    {name: "Konyaspor", gen: 74, logo: '<img src="assets/superLig/konyaspor.png" alt="Konyaspor" />'}, //done
    {name: "Kayserispor", gen: 73, logo: '<img src="assets/superLig/kayserispor.png" alt="Kayserispor" />'},
    {name: "Adana Demirspor", gen: 66, logo: '<img src="assets/superLig/adanademirspor.png" alt="Adana Demirspor" />'}, //done
    {name: "Gaziantep", gen: 73, logo: '<img src="assets/superLig/gaziantep.png" alt="Gaziantep" />'}, //done
    {name: "Hatayspor", gen: 65, logo: '<img src="assets/superLig/hatayspor.png" alt="Hatayspor" />'},//done
    {name: "Kasimpasa", gen: 71, logo: '<img src="assets/superLig/kasimpasa.png" alt="Kasimpasa" />'},//done
    {name: "Samsunspor", gen: 70, logo: '<img src="assets/superLig/samsunspor.png" alt="Samsunspor" />'},//done
    {name: "Ankaragucu", gen: 70, logo: '<img src="assets/superLig/ankaragucu.png" alt="Ankaragucu" />'},//done
    {name: "Karagumruk", gen: 69, logo: '<img src="assets/superLig/karagumruk.png" alt="Karagumruk" />'}, //done
    {name: "Pendikspor", gen: 68, logo: '<img src="assets/superLig/pendikspor.png" alt="Pendikspor" />'}, //done
    {name: "Bodrumspor", gen: 69, logo: '<img src="assets/superLig/bodrumspor.png" alt="Bodrumspor" />'} //done
]

const azerbaijaniPremierLeagueTeams = [
    {name: "Qarabağ", gen: 78, logo: '<img src="assets/azerbaijan/qarabag.png" alt="Qarabağ" />'}, //done
    {name: "Neftçi", gen: 71, logo: '<img src="assets/azerbaijan/neftci.png" alt="Neftçi" />'},//done
    {name: "Zirə", gen: 69, logo: '<img src="assets/azerbaijan/zire.png" alt="Zirə" />'},//done
    {name: "Sabah", gen: 68, logo: '<img src="assets/azerbaijan/sabah.png" alt="Sabah" />'},//done
    {name: "Sumqayıt", gen: 66, logo: '<img src="assets/azerbaijan/sumqayit.png" alt="Sumqayıt" />'},
    {name: "Səbail", gen: 65, logo: '<img src="assets/azerbaijan/sebail.png" alt="Səbail" />'},
    {name: "Turan-Tovuz", gen: 64, logo: '<img src="assets/azerbaijan/turan.png" alt="Turan-Tovuz" />'},
    {name: "Kəpəz", gen: 63, logo: '<img src="assets/azerbaijan/kepez.png" alt="Kəpəz" />'},
    {name: "Araz-Naxçıvan", gen: 62, logo: '<img src="assets/azerbaijan/araz.png" alt="Araz-Naxçıvan" />'},
    {name: "Qəbələ", gen: 65, logo: '<img src="assets/azerbaijan/qebele.png" alt="Qəbələ" />'}
]

// Match simulator team selection
let team1 = document.getElementById("matchSimulatorTeam1");
let team2 = document.getElementById("matchSimulatorTeam2");
let currentlySelectedTeam = null;
let gen1;
let gen2;
let name1;
let name2;

team1.onclick = function() {
    document.getElementById("leagueChoiceContainer").style.display = "flex";
    currentlySelectedTeam = "team1";
}
team2.onclick = function() {
    document.getElementById("leagueChoiceContainer").style.display = "flex";
    currentlySelectedTeam = "team2";
}

//Premier League team selection
document.getElementById("premier").onclick = function () {
  const container = document.getElementById("LeagueTeams");
  container.innerHTML = "";

  document.getElementById("leagueChoiceContainer").style.display = "none";
  document.getElementById("ChoiceContainer").style.display = "flex";

  premierLeagueTeams.forEach((item) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = item.logo;

     div.onclick = function () {
      document.getElementById("ChoiceContainer").style.display = "none"
             if (currentlySelectedTeam === "team1") {
                 team1.innerHTML = item.logo;
                  gen1 = item.gen
                  name1 = item.name;
                 document.getElementById("matchSimulatorResult1").innerHTML = item.logo;
             } else if (currentlySelectedTeam === "team2") {
                 team2.innerHTML =  item.logo;
                  gen2 = item.gen
                  name2 = item.name;
                 document.getElementById("matchSimulatorResult2").innerHTML = item.logo;
             }     
    };
    container.appendChild(div);
  });
};

//Laliga team selection
document.getElementById("laliga").onclick = function () {
  const container = document.getElementById("LeagueTeams");
  container.innerHTML = "";

  document.getElementById("leagueChoiceContainer").style.display = "none";
  document.getElementById("ChoiceContainer").style.display = "flex";

  laligaTeams.forEach((item) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = item.logo;

     div.onclick = function () {
      document.getElementById("ChoiceContainer").style.display = "none"
             if (currentlySelectedTeam === "team1") {
                 team1.innerHTML = item.logo;
                  gen1 = item.gen
                  name1 = item.name;
                 document.getElementById("matchSimulatorResult1").innerHTML = item.logo;
             } else if (currentlySelectedTeam === "team2") {
                 team2.innerHTML =  item.logo;
                  gen2 = item.gen
                  name2 = item.name;
                 document.getElementById("matchSimulatorResult2").innerHTML = item.logo;
             }     
    };
    container.appendChild(div);
  });
};


//Seriea team selection
document.getElementById("seriea").onclick = function () {
  const container = document.getElementById("LeagueTeams");
  container.innerHTML = "";

  document.getElementById("leagueChoiceContainer").style.display = "none";
  document.getElementById("ChoiceContainer").style.display = "flex";

  serieaTeams.forEach((item) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = item.logo;

     div.onclick = function () {
      document.getElementById("ChoiceContainer").style.display = "none"
             if (currentlySelectedTeam === "team1") {
                 team1.innerHTML = item.logo;
                  gen1 = item.gen
                  name1 = item.name;
                 document.getElementById("matchSimulatorResult1").innerHTML = item.logo;
             } else if (currentlySelectedTeam === "team2") {
                 team2.innerHTML =  item.logo;
                  gen2 = item.gen
                  name2 = item.name;
                 document.getElementById("matchSimulatorResult2").innerHTML = item.logo;
             }     
    };
    container.appendChild(div);
  });
};

//Bundesliga team selection
document.getElementById("bundesliga").onclick = function () {
  const container = document.getElementById("LeagueTeams");
  container.innerHTML = "";

  document.getElementById("leagueChoiceContainer").style.display = "none";
  document.getElementById("ChoiceContainer").style.display = "flex";

  bundesligaTeams.forEach((item) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = item.logo;

     div.onclick = function () {
      document.getElementById("ChoiceContainer").style.display = "none"
             if (currentlySelectedTeam === "team1") {
                 team1.innerHTML = item.logo;
                  gen1 = item.gen
                  name1 = item.name;
                 document.getElementById("matchSimulatorResult1").innerHTML = item.logo;
             } else if (currentlySelectedTeam === "team2") {
                 team2.innerHTML =  item.logo;
                  gen2 = item.gen
                  name2 = item.name;
                 document.getElementById("matchSimulatorResult2").innerHTML = item.logo;
             }     
    };
    container.appendChild(div);
  });
};

// Ligue1 Team Selection
document.getElementById("ligue1").onclick = function () {
  const container = document.getElementById("LeagueTeams");
  container.innerHTML = "";

  document.getElementById("leagueChoiceContainer").style.display = "none";
  document.getElementById("ChoiceContainer").style.display = "flex";

  ligue1Teams.forEach((item) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = item.logo;

     div.onclick = function () {
      document.getElementById("ChoiceContainer").style.display = "none"
             if (currentlySelectedTeam === "team1") {
                 team1.innerHTML = item.logo;
                  gen1 = item.gen
                  name1 = item.name;
                 document.getElementById("matchSimulatorResult1").innerHTML = item.logo;
             } else if (currentlySelectedTeam === "team2") {
                 team2.innerHTML =  item.logo;
                  gen2 = item.gen
                  name2 = item.name;
                 document.getElementById("matchSimulatorResult2").innerHTML = item.logo;
             }     
    };
    container.appendChild(div);
  });
};

//Liga Portugal Team Selection
document.getElementById("ligaPortugal").onclick = function () {
  const container = document.getElementById("LeagueTeams");
  container.innerHTML = "";

  document.getElementById("leagueChoiceContainer").style.display = "none";
  document.getElementById("ChoiceContainer").style.display = "flex";

  ligaPortugalTeams.forEach((item) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = item.logo;

     div.onclick = function () {
      document.getElementById("ChoiceContainer").style.display = "none"
             if (currentlySelectedTeam === "team1") {
                 team1.innerHTML = item.logo;
                  gen1 = item.gen
                  name1 = item.name;
                 document.getElementById("matchSimulatorResult1").innerHTML = item.logo;
             } else if (currentlySelectedTeam === "team2") {
                 team2.innerHTML =  item.logo;
                  gen2 = item.gen
                  name2 = item.name;
                 document.getElementById("matchSimulatorResult2").innerHTML = item.logo;
             }     
    };
    container.appendChild(div);
  });
};

// Superlig Team Selection
document.getElementById("superlig").onclick = function () {
  const container = document.getElementById("LeagueTeams");
  container.innerHTML = "";

  document.getElementById("leagueChoiceContainer").style.display = "none";
  document.getElementById("ChoiceContainer").style.display = "flex";

  superLigTeams.forEach((item) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = item.logo;

     div.onclick = function () {
      document.getElementById("ChoiceContainer").style.display = "none"
             if (currentlySelectedTeam === "team1") {
                 team1.innerHTML = item.logo;
                  gen1 = item.gen
                  name1 = item.name;
                 document.getElementById("matchSimulatorResult1").innerHTML = item.logo;
             } else if (currentlySelectedTeam === "team2") {
                 team2.innerHTML =  item.logo;
                  gen2 = item.gen
                  name2 = item.name;
                 document.getElementById("matchSimulatorResult2").innerHTML = item.logo;
             }     
    };
    container.appendChild(div);
  });
};

document.getElementById("misli").onclick = function () {
  const container = document.getElementById("LeagueTeams");
  container.innerHTML = "";

  document.getElementById("leagueChoiceContainer").style.display = "none";
  document.getElementById("ChoiceContainer").style.display = "flex";

  azerbaijaniPremierLeagueTeams.forEach((item) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = item.logo;

     div.onclick = function () {
      document.getElementById("ChoiceContainer").style.display = "none"
             if (currentlySelectedTeam === "team1") {
                 team1.innerHTML = item.logo;
                  gen1 = item.gen
                  name1 = item.name;
                 document.getElementById("matchSimulatorResult1").innerHTML = item.logo;
             } else if (currentlySelectedTeam === "team2") {
                 team2.innerHTML =  item.logo;
                  gen2 = item.gen
                  name2 = item.name;
                 document.getElementById("matchSimulatorResult2").innerHTML = item.logo;
             }     
    };
    container.appendChild(div);
  });
};



// Simulation start/results
let result;
let score;
document.getElementById("matchSimulatorStart").onclick = function(){
   if (gen1 === undefined || gen2 === undefined) {
        document.getElementById("matchSimulatorStart").style.animation = "shake 0.5s";
        setTimeout(() => {
            document.getElementById("matchSimulatorStart").style.animation = "";
        }, 500)}
    else {
        document.getElementById("matchSimulatorContainer").style.display = "none";
        document.getElementById("resultContainer").style.display = "flex";
    }

    let distinction = Math.abs(gen1 - gen2);
    let probabilityArray;
    let final;
    let prob1;
    let prob2;
    let draw;
    

    switch (distinction){
        case 0:
            probabilityArray = [1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 0,
                                1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1,
                                2, 0, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0,
                                2, 1, 0, 2, 1, 2, 0, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2,
                                0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 0, 1, 2, 1, 0];
            result = probabilityArray[Math.floor(Math.random() * 99)];
            break;
        case 1:
            probabilityArray = [1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1]
            result = probabilityArray[Math.floor(Math.random() * 100)];
            prob1 = probabilityArray.filter(item => item === 1).length;
            prob2 = probabilityArray.filter(item => item === 2).length;
            draw = probabilityArray.filter(item => item === 0).length;
            break;
        case 2:
            probabilityArray = [1, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0]
            result = probabilityArray[Math.floor(Math.random() * 100)];
            prob1 = probabilityArray.filter(item => item === 1).length;
            prob2 = probabilityArray.filter(item => item === 2).length;
            draw = probabilityArray.filter(item => item === 0).length;
            break;
        case 3:
            probabilityArray = [1, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2]
            result = probabilityArray[Math.floor(Math.random() * 100)];
            prob1 = probabilityArray.filter(item => item === 1).length;
            prob2 = probabilityArray.filter(item => item === 2).length;
            draw = probabilityArray.filter(item => item === 0).length;
            break;
        case 4: 
            probabilityArray = [1, 2, 1, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 1]
            result = probabilityArray[Math.floor(Math.random() * 100)];
            prob1 = probabilityArray.filter(item => item === 1).length;
            prob2 = probabilityArray.filter(item => item === 2).length;
            draw = probabilityArray.filter(item => item === 0).length;
            break;
        case 5:
            probabilityArray = [1, 2, 1, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1]
            result = probabilityArray[Math.floor(Math.random() * 100)];
            prob1 = probabilityArray.filter(item => item === 1).length;
            prob2 = probabilityArray.filter(item => item === 2).length;
            draw = probabilityArray.filter(item => item === 0).length;
            break;
        case 6:
            probabilityArray = [1, 2, 1, 2, 1, 2, 0, 1, 2, 1, 2, 0, 1, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1]
            result = probabilityArray[Math.floor(Math.random() * 100)];
            prob1 = probabilityArray.filter(item => item === 1).length;
            prob2 = probabilityArray.filter(item => item === 2).length;
            draw = probabilityArray.filter(item => item === 0).length;
            break;
        case 7:
            probabilityArray = [1, 2, 1, 2, 1, 2, 1, 0, 2, 1, 2, 1, 0, 2, 1, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 1, 0]
            result = probabilityArray[Math.floor(Math.random() * 100)];
            prob1 = probabilityArray.filter(item => item === 1).length;
            prob2 = probabilityArray.filter(item => item === 2).length;
            draw = probabilityArray.filter(item => item === 0).length;
            break;
        case 8:
            probabilityArray = [1, 2, 1, 2, 1, 2, 1, 2, 0, 1, 2, 1, 2, 0, 1, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 2]
            result = probabilityArray[Math.floor(Math.random() * 100)];
            prob1 = probabilityArray.filter(item => item === 1).length;
            prob2 = probabilityArray.filter(item => item === 2).length;
            draw = probabilityArray.filter(item => item === 0).length;
            break;
        case 9:
            probabilityArray = [1, 2, 1, 2, 1, 2, 1, 2, 1, 0, 2, 1, 2, 1, 0, 2, 1, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 2, 1, 2, 1]
            result = probabilityArray[Math.floor(Math.random() * 100)];
            prob1 = probabilityArray.filter(item => item === 1).length;
            prob2 = probabilityArray.filter(item => item === 2).length;
            draw = probabilityArray.filter(item => item === 0).length;
            break;
        case 10:
            probabilityArray = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0, 1, 2, 1, 2, 1, 0, 2, 1, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 1, 2, 1, 2, 1, 2]
            result = probabilityArray[Math.floor(Math.random() * 100)];
            prob1 = probabilityArray.filter(item => item === 1).length;
            prob2 = probabilityArray.filter(item => item === 2).length;
            draw = probabilityArray.filter(item => item === 0).length;
            break;
        case 11:
            probabilityArray = [1,1,2,1,1,2,1,1,2,0,1,2,1,1,2,0,1,2,1,1,0,2,1,1,2,0,1,2,1,1,0,2,1,1,2,0,1,2,1,1,0,2,1,1,2,0,1,2,1,1,0,2,1,1,2,0,1,2,1,1,0,2,1,1,2,0,1,2,1,1,0,2,1,1,2,0,1,2,1,1,0,2,1,1,2,0,1,2,1,1,0,2,1,1,2,1,1,2,1,1]
            result = probabilityArray[Math.floor(Math.random() * 100)];
            prob1 = probabilityArray.filter(item => item === 1).length;
            prob2 = probabilityArray.filter(item => item === 2).length;
            draw = probabilityArray.filter(item => item === 0).length;
            break;
        case 12:
            probabilityArray = [1,1,2,1,1,2,1,1,2,1,0,1,2,1,1,2,0,1,2,1,1,2,0,1,2,1,1,0,2,1,1,2,0,1,2,1,1,0,2,1,1,2,0,1,2,1,1,0,2,1,1,2,0,1,2,1,1,0,2,1,1,2,0,1,2,1,1,0,2,1,1,2,0,1,2,1,1,0,2,1,1,2,0,1,2,1,1,0,2,1,1,2,1,1,2,1,1,2,1,1]
            result = probabilityArray[Math.floor(Math.random() * 100)];
            prob1 = probabilityArray.filter(item => item === 1).length;
            prob2 = probabilityArray.filter(item => item === 2).length;
            draw = probabilityArray.filter(item => item === 0).length;
            break;
        case 13:
            probabilityArray = [1,1,1,2,1,1,2,1,1,2,1,0,1,2,1,1,2,1,0,1,2,1,1,2,0,1,2,1,1,2,0,1,2,1,1,0,2,1,1,2,0,1,2,1,1,0,2,1,1,2,0,1,2,1,1,0,2,1,1,2,0,1,2,1,1,0,2,1,1,2,0,1,2,1,1,0,2,1,1,2,0,1,2,1,1,2,1,1,2,1,1,2,1,1,2,1,1,2,1,1]
            result = probabilityArray[Math.floor(Math.random() * 100)];
            prob1 = probabilityArray.filter(item => item === 1).length;
            prob2 = probabilityArray.filter(item => item === 2).length;
            draw = probabilityArray.filter(item => item === 0).length;
            break;
        case 14:
            probabilityArray = [1,1,1,2,1,1,2,1,1,2,1,1,0,1,2,1,1,2,1,0,1,2,1,1,2,1,0,1,2,1,1,2,0,1,2,1,1,2,0,1,2,1,1,0,2,1,1,2,0,1,2,1,1,0,2,1,1,2,0,1,2,1,1,0,2,1,1,2,0,1,2,1,1,0,2,1,1,2,0,1,2,1,1,2,1,1,2,1,1,2,1,1,2,1,1,2,1,1,2,1]
            result = probabilityArray[Math.floor(Math.random() * 100)];
            prob1 = probabilityArray.filter(item => item === 1).length;
            prob2 = probabilityArray.filter(item => item === 2).length;
            draw = probabilityArray.filter(item => item === 0).length;
            break;
        case 15:
            probabilityArray = [1,1,1,2,1,1,2,1,1,2,1,1,2,1,0,1,2,1,1,2,1,0,1,2,1,1,2,1,0,1,2,1,1,2,0,1,2,1,1,2,0,1,2,1,1,0,2,1,1,2,0,1,2,1,1,0,2,1,1,2,0,1,2,1,1,0,2,1,1,2,0,1,2,1,1,0,2,1,1,2,1,1,2,1,1,2,1,1,2,1,1,2,1,1,2,1,1,2,1,1]
            result = probabilityArray[Math.floor(Math.random() * 100)];
            prob1 = probabilityArray.filter(item => item === 1).length;
            prob2 = probabilityArray.filter(item => item === 2).length;
            draw = probabilityArray.filter(item => item === 0).length;
            break;
        case 16:
            probabilityArray = [1, 1, 1, 2, 1, 1, 1, 0, 1, 2, 1, 1, 0, 1, 2, 1, 1, 1, 0, 2, 1, 1, 0, 1, 2, 1, 1, 1, 0, 2, 1, 1, 0, 1, 2, 1, 1, 1, 0, 2, 1, 1, 0, 1, 2, 1, 1, 1, 0, 2, 1, 1, 0, 1, 2, 1, 1, 1, 0, 2, 1, 1, 0, 1, 2, 1, 1, 1, 0, 2, 1, 1, 0, 1, 2, 1, 1, 1, 0, 2, 1, 1, 0, 1, 2, 1, 1, 1, 0, 2, 1, 1, 0, 1, 2, 1, 1, 1, 0, 1]
            result = probabilityArray[Math.floor(Math.random() * 100)];
            prob1 = probabilityArray.filter(item => item === 1).length;
            prob2 = probabilityArray.filter(item => item === 2).length;
            draw = probabilityArray.filter(item => item === 0).length;
            break;
        case 17:
            probabilityArray = [1, 1, 1, 2, 1, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 1]
            result = probabilityArray[Math.floor(Math.random() * 100)];
            prob1 = probabilityArray.filter(item => item === 1).length;
            prob2 = probabilityArray.filter(item => item === 2).length;
            draw = probabilityArray.filter(item => item === 0).length;
            break;
        case 18:
            probabilityArray = [1, 1, 1, 1, 2, 1, 1, 1, 0, 1, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 1]
            result = probabilityArray[Math.floor(Math.random() * 100)];
            prob1 = probabilityArray.filter(item => item === 1).length;
            prob2 = probabilityArray.filter(item => item === 2).length;
            draw = probabilityArray.filter(item => item === 0).length;
            break;  
        case 19:
            probabilityArray = [1, 1, 1, 1, 2, 1, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1]
            result = probabilityArray[Math.floor(Math.random() * 100)];
            prob1 = probabilityArray.filter(item => item === 1).length;
            prob2 = probabilityArray.filter(item => item === 2).length;
            draw = probabilityArray.filter(item => item === 0).length;
            break;
        case 20:
            probabilityArray = [1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1]
            result = probabilityArray[Math.floor(Math.random() * 100)];
            prob1 = probabilityArray.filter(item => item === 1).length;
            prob2 = probabilityArray.filter(item => item === 2).length;
            draw = probabilityArray.filter(item => item === 0).length;
            break;
        case 21:
            probabilityArray = [1,1,1,1,1,2,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1]
            result = probabilityArray[Math.floor(Math.random() * 100)];
            prob1 = probabilityArray.filter(item => item === 1).length;
            prob2 = probabilityArray.filter(item => item === 2).length;
            draw = probabilityArray.filter(item => item === 0).length;
            break;
        case 22:
            probabilityArray = [1,1,1,1,1,1,2,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,1]
            result = probabilityArray[Math.floor(Math.random() * 100)];
            prob1 = probabilityArray.filter(item => item === 1).length;
            prob2 = probabilityArray.filter(item => item === 2).length;
            draw = probabilityArray.filter(item => item === 0).length;
            break;
        case 23:
            probabilityArray = [1,1,1,1,1,1,2,1,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,1,1,1,1]
            result = probabilityArray[Math.floor(Math.random() * 100)];
            prob1 = probabilityArray.filter(item => item === 1).length;
            prob2 = probabilityArray.filter(item => item === 2).length;
            draw = probabilityArray.filter(item => item === 0).length;
            break;
        case 24: 
            probabilityArray = [1,1,1,1,1,1,1,2,1,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
            result = probabilityArray[Math.floor(Math.random() * 100)];
            prob1 = probabilityArray.filter(item => item === 1).length;
            prob2 = probabilityArray.filter(item => item === 2).length;
            draw = probabilityArray.filter(item => item === 0).length;
            break;
        case 25: 
            probabilityArray = [1,1,1,1,1,1,1,2,1,1,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,0,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
            result = probabilityArray[Math.floor(Math.random() * 100)];
            prob1 = probabilityArray.filter(item => item === 1).length;
            prob2 = probabilityArray.filter(item => item === 2).length;
            draw = probabilityArray.filter(item => item === 0).length;
            break;
        case 26: 
            probabilityArray = [1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
            result = probabilityArray[Math.floor(Math.random() * 100)];
            prob1 = probabilityArray.filter(item => item === 1).length;
            prob2 = probabilityArray.filter(item => item === 2).length;
            draw = probabilityArray.filter(item => item === 0).length;
            break;
        case 27:
            probabilityArray = [1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,0,2,1,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
            result = probabilityArray[Math.floor(Math.random() * 100)];
            prob1 = probabilityArray.filter(item => item === 1).length;
            prob2 = probabilityArray.filter(item => item === 2).length;
            draw = probabilityArray.filter(item => item === 0).length;
            break;
        case 28:
            probabilityArray = [1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,0,2,1,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,1,0,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
            result = probabilityArray[Math.floor(Math.random() * 100)];
            prob1 = probabilityArray.filter(item => item === 1).length;
            prob2 = probabilityArray.filter(item => item === 2).length;
            draw = probabilityArray.filter(item => item === 0).length;
            break;
        case 29:
            probabilityArray = [1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,0,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
            result = probabilityArray[Math.floor(Math.random() * 100)];
            prob1 = probabilityArray.filter(item => item === 1).length;
            prob2 = probabilityArray.filter(item => item === 2).length;
            draw = probabilityArray.filter(item => item === 0).length;
            break;
        case 30: 
            probabilityArray = [1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
            result = probabilityArray[Math.floor(Math.random() * 100)];
            prob1 = probabilityArray.filter(item => item === 1).length;
            prob2 = probabilityArray.filter(item => item === 2).length;
            draw = probabilityArray.filter(item => item === 0).length;
            break;
        default:
            console.log("working on it...");
    };  

    if (gen2 > gen1) { 
        if (result === 1){
            result = 2;
        }
        else if (result === 2){
            result = 1;
        }
    };

    const winScores =  [
                            "1-0", "2-0", "2-1", "3-0", "3-1", "3-2", "4-0",  
                            "1-0", "2-0", "2-1", "3-0", "3-1", "1-0", "2-0",
                            "2-1", "3-0", "1-0", "2-0", "3-1", "4-0", "2-1",
                            "1-0", "2-0", "3-0", "3-1", "2-1", "1-0", "4-1",
                            "2-0", "3-0", "2-1", "1-0", "3-1", "2-0", "3-2",
                            "1-0", "2-0", "2-1", "3-0", "1-0", "2-0", "4-0",
                            "2-1", "3-0", "1-0", "2-0", "3-1", "2-1", "5-0",
                            "1-0", "2-0", "3-0", "2-1", "1-0", "3-1", "2-0",
                            "2-1", "3-0", "1-0", "4-0", "2-0", "3-1", "2-1",
                            "1-0", "2-0", "3-0", "2-1", "1-0", "3-1", "2-0",
                            "2-1", "3-0", "1-0", "2-0", "4-1", "3-1", "2-1",
                            "1-0", "2-0", "3-0", "2-1", "1-0", "3-1", "2-0",
                            "2-1", "3-0", "1-0", "2-0", "3-1", "2-1", "1-0",
                            "2-0", "3-0", "2-1", "1-0", "3-1", "2-0", "4-0"
                        ]
    
    const loseScores = [
                            "0-1", "0-2", "1-2", "0-3", "1-3", "2-3", "0-4",  
                            "0-1", "0-2", "1-2", "0-3", "1-3", "0-1", "0-2",
                            "1-2", "0-3", "0-1", "0-2", "1-3", "0-4", "1-2",
                            "0-1", "0-2", "0-3", "1-3", "1-2", "0-1", "0-4",
                            "0-2", "0-3", "1-2", "0-1", "1-3", "0-2", "2-3",
                            "0-1", "0-2", "1-2", "0-3", "0-1", "0-2", "0-4",
                            "1-2", "0-3", "0-1", "0-2", "1-3", "1-2", "0-5",
                            "0-1", "0-2", "0-3", "1-2", "0-1", "1-3", "0-2",
                            "1-2", "0-3", "0-1", "0-4", "0-2", "1-3", "1-2",
                            "0-1", "0-2", "0-3", "1-2", "0-1", "1-3", "0-2",
                            "1-2", "0-3", "0-1", "0-2", "1-4", "1-3", "1-2",
                            "0-1", "0-2", "0-3", "1-2", "0-1", "1-3", "0-2",
                            "1-2", "0-3", "0-1", "0-2", "1-3", "1-2", "0-1",
                            "0-2", "0-3", "1-2", "0-1", "1-3", "0-2", "0-4"
                        ]

    const drawScores = [
                            "0-0", "1-1", "2-2", "0-0", "1-1", "0-0", "1-1", 
                            "0-0", "1-1", "2-2", "0-0", "1-1", "3-3", "0-0",
                            "1-1", "2-2", "0-0", "1-1", "0-0", "1-1", "2-2",
                            "0-0", "1-1", "0-0", "1-1", "2-2", "0-0", "4-4",
                            "1-1", "0-0", "1-1", "2-2", "0-0", "1-1", "0-0",
                            "1-1", "2-2", "0-0", "1-1", "3-3", "0-0", "1-1",
                            "2-2", "0-0", "1-1", "0-0", "1-1", "2-2", "0-0",
                            "1-1", "0-0", "2-2", "1-1", "0-0", "1-1", "0-0",
                            "1-1", "2-2", "0-0", "1-1", "0-0", "1-1", "2-2",
                            "0-0", "1-1", "0-0", "1-1", "2-2", "0-0", "1-1",
                            "0-0", "1-1", "2-2", "0-0", "1-1", "0-0", "1-1",
                            "2-2", "0-0", "1-1", "0-0", "1-1", "2-2", "0-0",
                            "1-1", "0-0", "2-2", "1-1", "0-0", "1-1", "0-0",
                            "1-1", "2-2", "0-0", "1-1", "0-0", "1-1", "2-2"
                        ]
    if (result === 0) {
        score = drawScores[Math.floor(Math.random() * 98)];
        final = `${name1} and ${name2} decided to share the points.`;
    }
    else if (result === 1) {
        score = winScores[Math.floor(Math.random() * 98)];
        final = `${name1} won the match against ${name2}.`;
    }
    else if (result === 2) {
        score = loseScores[Math.floor(Math.random() * 98)];
        final = `${name2} won the match against ${name1}.`;
    };
    
    document.getElementById("scoreBoard").textContent = score;
    document.getElementById("finalText").textContent = final;
    document.getElementById("win1").style.width = `${prob1}%`;
    document.getElementById("win2").style.width = `${prob2}%`;
    document.getElementById("draw").style.width = `${draw}%`;
    console.log(result, score, gen1, gen2, name1, name2);
}

document.getElementById("matchSimulatorPlayAgain").onclick = function() {
    document.getElementById("matchSimulatorContainer").style.display = "flex";
    document.getElementById("resultContainer").style.display = "none";
    team1.innerHTML = "Select Team";
    team2.innerHTML = "Select Team";
    gen1 = undefined;
    gen2 = undefined;
    name1 = undefined;
    name2 = undefined;
}
document.getElementById("matchSimulatorMainMenu").onclick = function() {
    document.getElementById("matchSimulatorContainer").style.display = "none";
    document.getElementById("resultContainer").style.display = "none";
    document.getElementById('modeChoiceContainer').style.display = 'flex';
    team1.innerHTML = "Select Team";
    team2.innerHTML = "Select Team";
    gen1 = undefined;
    gen2 = undefined;
    name1 = undefined;
    name2 = undefined;
}






