var score = [0,1];

var team1={
    name: "Real Madrid",
    runs: [],
    score:0
}

var team2={
    name: "Huesca",
    runs: [],
    score:0
}
var toss;

window.onload = () =>{
    selectToss();
    updateButtonText();
    updateNames();
    updateScore();
}

var selectToss = () =>{
    toss = Math.round(Math.random())+1;
    console.log(toss);
}


var updateButtonText = () =>{
    var button = document.getElementById("strike-button");
    console.log(button);
    var result = document.getElementById("result");
    var btn1 = document.getElementById("btn1");
    result.style.visibility ="";
    
    
    if(team1.runs.length == 6 && team2.runs.length == 6){
        button.remove();
        btn1.textContent = "Try Again";
        result.textContent = team1.score === team2.score ? `Its a draw`: `${team1.score > team2.score? team1.name:team2.name} Wins`;
    }
    else{
        toss = toss === 1 ? 2 : 1;
    }


    button.textContent = `${toss%2 === 1 ? team1.name:team2.name} Strike`;
};

var updateNames = () =>{
    document.getElementById("team-1-name").textContent = team1.name;
    document.getElementById("team-2-name").textContent = team2.name;
}

var updateScore = () =>{
    document.getElementById("team-1-score").textContent = team1.score;
    document.getElementById("team-2-score").textContent = team2.score;
    updateRuns();
}

var handleStrikeButtonClick = () =>{
 var runs = score[Math.floor(Math.random()*score.length)];
 console.log(runs);

 runs = runs === 5?"W": runs;
 console.log(runs);

 if (toss ===1)
   {
    team1.runs.push(runs);
   team1.score= calculateScore(team1.runs);
    
   } 
   else{
    team2.runs.push(runs);
    team2.score = calculateScore(team2.runs);

   }

   updateButtonText();
   updateScore();
}

var calculateScore = (runs) =>{
console.log("Calculate score method");

return runs.map(num =>{
    
return num =='W'? 0: num;

}).reduce((total,num) => total + num

);

};
        
var updateRuns = () =>{
    var teamOneRunsElement = document.getElementById("team-1-round-runs").children;
    var teamTwoRunsElement = document.getElementById("team-2-round-runs").children;

    team1.runs.forEach((run,index)=>{
        run === 1 ? teamOneRunsElement[index].style.backgroundColor = "#135813" :teamOneRunsElement[index].style.backgroundColor = "#d00c0c";
    });
    team2.runs.forEach((run,index)=>{
        run === 1 ? teamTwoRunsElement[index].style.backgroundColor = "#135813" : teamTwoRunsElement[index].style.backgroundColor = "#d00c0c";

    });
}