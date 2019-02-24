var rpsArray = ["r", "p", "s"];
var whoArray = ["computer-chose-", "player-chose-", "both-chose-"]
var wins = 0;
var losses = 0;
var ties = 0;

function rpsScript(id) {
    var userGuess = id;
    var computerGuess = rpsArray[Math.floor(Math.random() * rpsArray.length)];

    if (wins > 0 || losses > 0 || ties > 0) {
        for (let index = 0; index < rpsArray.length; index++) {
            document.getElementById(rpsArray[index] + "-card").classList.remove("bg-success", "bg-danger", "bg-secondary", "text-white");
            document.getElementById("computer-chose-" + rpsArray[index]).classList.add("text-hide")
            document.getElementById("player-chose-" + rpsArray[index]).classList.add("text-hide")
            document.getElementById("both-chose-" + rpsArray[index]).classList.add("text-hide")
        }
    }

    if ((userGuess === "r" && computerGuess === "s") || 
    (userGuess === "p" && computerGuess === "r") || 
    (userGuess === "s" && computerGuess === "p")) {
        wins++
        document.getElementById("timesPlayerWon").innerHTML = wins;
        // sets color results
        document.getElementById(userGuess + "-card").classList.add("bg-success", "text-white");
        document.getElementById(computerGuess + "-card").classList.add("bg-danger", "text-white");
        // sets result texts in cards
        document.getElementById("player-chose-" + userGuess).classList.remove("text-hide");
        document.getElementById("computer-chose-" + computerGuess).classList.remove("text-hide");
    } else if(userGuess === computerGuess) {
        ties++
        // set color results
        document.getElementById("timesTied").innerHTML = ties;
        document.getElementById(userGuess + "-card").classList.add("bg-secondary", "text-white");
        // set result text in cards
        document.getElementById("both-chose-" + userGuess).classList.remove("text-hide");

    } else {
        losses++
        document.getElementById("timesComputerWon").innerHTML = losses;
        // set color results
        document.getElementById(computerGuess + "-card").classList.add("bg-success", "text-white");
        document.getElementById(userGuess + "-card").classList.add("bg-danger", "text-white");
        // set text results
        document.getElementById("player-chose-" + userGuess).classList.remove("text-hide");
        document.getElementById("computer-chose-" + computerGuess).classList.remove("text-hide");
    }
}

