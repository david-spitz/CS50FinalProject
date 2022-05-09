// initialize game data
var gamedata = {
    code: 0,
    codeperclick: 1,
    totalCPS: 0,
    CPCcost: 10,
    codepersec: 0,
    CPScost: 100,
    pcost: 1000,
    pCPS: 0,
    compcost: 10000,
    compCPS: 0,
    corpcost: 100000,
    corpCPS: 0,
    times2cost: 100000
}
function cheat() {
    gamedata.code += 10000000
}

// adds code per click to current amount of code
function writecode() {
    gamedata.code += gamedata.codeperclick
    document.getElementById("linesofcode").innerHTML = gamedata.code.toLocaleString("en-US") + " Lines of Code"
}

// increases code per second and adds code per second to current code every second
function codeperclick() {

    if (gamedata.code >= gamedata.CPCcost) {
        gamedata.code -= gamedata.CPCcost
        gamedata.codeperclick += 1
        gamedata.CPCcost += gamedata.codeperclick * 8
        document.getElementById("totalCPS").innerHTML = "Code per Second: " + gamedata.totalCPS.toLocaleString("en-US")
        document.getElementById("codeperclick").innerHTML = "Increase code per click.<br/> Current: " + gamedata.codeperclick.toLocaleString("en-US") + " Cost: " + gamedata.CPCcost.toLocaleString("en-US")
        document.getElementById("linesofcode").innerHTML = gamedata.code.toLocaleString("en-US") + " Lines of Code"
    }

    // once 5 upgrades bought, next upgrade is shown
    if (gamedata.codeperclick >= 5) {
        var autocode = document.getElementById("autocode");
        autocode.style.display = "block";
    }
}

// increases code per second and adds code per second to current code every second
function autocode() {
    if (gamedata.code >= gamedata.CPScost) {
        gamedata.code -= gamedata.CPScost
        gamedata.codepersec += 1
        gamedata.CPScost += gamedata.codepersec * 80
        gamedata.totalCPS = gamedata.codepersec + gamedata.pCPS + gamedata.compCPS + gamedata.corpCPS
        document.getElementById("totalCPS").innerHTML = "Code per Second: " + gamedata.totalCPS.toLocaleString("en-US")
        document.getElementById("autocode").innerHTML = "Automate writing.<br/> Current: " + gamedata.codepersec.toLocaleString("en-US") + "/sec Cost: " + gamedata.CPScost.toLocaleString("en-US")
        document.getElementById("linesofcode").innerHTML = gamedata.code.toLocaleString("en-US") + " Lines of Code"
    }

    // once 5 upgrades bought, next upgrade is shown
    if (gamedata.codepersec >= 5) {
        var program = document.getElementById("program");
        program.style.display = "block";
    }
}

// increases code per second and adds code per second to current code every second
function program() {
    if (gamedata.code >= gamedata.pcost) {
        gamedata.code -= gamedata.pcost
        gamedata.pCPS += 10
        gamedata.pcost += gamedata.pCPS * 80
        gamedata.totalCPS = gamedata.codepersec + gamedata.pCPS + gamedata.compCPS + gamedata.corpCPS
        document.getElementById("totalCPS").innerHTML = "Code per Second: " + gamedata.totalCPS.toLocaleString("en-US")
        document.getElementById("program").innerHTML = "Hire a programmer to write code for you.<br/> Current: " + gamedata.pCPS.toLocaleString("en-US") + "/sec Cost: " + gamedata.pcost.toLocaleString("en-US")
        document.getElementById("linesofcode").innerHTML = gamedata.code.toLocaleString("en-US") + " Lines of Code"
    }

    // once 5 upgrades bought, next upgrade is shown
    if (gamedata.pCPS >= 50) {
        var company = document.getElementById("company");
        company.style.display = "block";
    }
}

// increases code per second and adds code per second to current code every second
function company() {
    if (gamedata.code >= gamedata.compcost) {
        gamedata.code -= gamedata.compcost
        gamedata.compCPS += 100
        gamedata.compcost += gamedata.compCPS * 80
        gamedata.totalCPS = gamedata.codepersec + gamedata.pCPS + gamedata.compCPS + gamedata.corpCPS
        document.getElementById("totalCPS").innerHTML = "Code per Second: " + gamedata.totalCPS.toLocaleString("en-US")
        document.getElementById("company").innerHTML = "Start a company.<br/> Current: " + gamedata.compCPS.toLocaleString("en-US") + "/sec Cost: " + gamedata.compcost.toLocaleString("en-US")
        document.getElementById("linesofcode").innerHTML = gamedata.code.toLocaleString("en-US") + " Lines of Code"
    }

    // once 5 upgrades bought, next upgrade is shown
    if (gamedata.compCPS >= 500) {
        var corp = document.getElementById("corp");
        corp.style.display = "block";
    }
}

// increases code per second and adds code per second to current code every second
function corp() {
    if (gamedata.code >= gamedata.corpcost) {
        gamedata.code -= gamedata.corpcost
        gamedata.corpCPS += 1000
        gamedata.corpcost += gamedata.corpCPS * 80
        gamedata.totalCPS = gamedata.codepersec + gamedata.pCPS + gamedata.compCPS + gamedata.corpCPS
        document.getElementById("totalCPS").innerHTML = "Code per Second: " + gamedata.totalCPS.toLocaleString("en-US")
        document.getElementById("corp").innerHTML = "Found a coding corporation.<br/> Current: " + gamedata.corpCPS.toLocaleString("en-US") + "/sec Cost: " + gamedata.corpcost.toLocaleString("en-US")
        document.getElementById("linesofcode").innerHTML = gamedata.code.toLocaleString("en-US") + " Lines of Code"
    }

    // once 5 upgrades bought, next x2 upgrade shown
    if (gamedata.corpCPS >= 5000) {
        var upgrades = document.getElementById("upgrades");
        upgrades.style.display = "block";

        var times2 = document.getElementById("times2");
        times2.style.display = "block";
    }
}

// multiplies code per second times 2
function times2() {
    if (gamedata.code >= gamedata.times2cost) {
        gamedata.code -= gamedata.times2cost
        gamedata.totalCPS *= 2
        gamedata.times2cost *= 15
        document.getElementById("times2").innerHTML = "Code per Second x2<br/> Cost: " + gamedata.times2cost.toLocaleString("en-US")
        document.getElementById("totalCPS").innerHTML = "Code per Second: " + gamedata.totalCPS.toLocaleString("en-US")
    }
}

// set up interval to add code per second to current code every second
setInterval(function() {
    gamedata.code += gamedata.totalCPS
    document.getElementById("linesofcode").innerHTML = gamedata.code.toLocaleString("en-US") + " Lines of Code"
}, 1000)

// set up save game function with all data
function savegame() {
    var gamesave = {
        code: gamedata.code,
        codeperclick: gamedata.codeperclick,
        totalCPS: gamedata.totalCPS,
        CPCcost: gamedata.CPCcost,
        codepersec: gamedata.codepersec,
        CPScost: gamedata.CPScost,
        pcost: gamedata.pcost,
        pCPS: gamedata.pCPS,
        compcost: gamedata.compcost,
        compCPS: gamedata.compCPS,
        corpcost: gamedata.corpcost,
        corpCPS: gamedata.corpCPS,
        times2cost: gamedata.times2cost
    }
    // save to local storage
    localStorage.setItem("gamesave", JSON.stringify(gamesave));
}

// get save from local storage and updates game data
function loadgame() {
    var save = JSON.parse(localStorage.getItem("gamesave"));

    gamedata.code = save.code;
    document.getElementById("linesofcode").innerHTML = gamedata.code.toLocaleString("en-US") + " Lines of Code"

    gamedata.codeperclick = save.codeperclick
    document.getElementById("codeperclick").innerHTML = "Increase code per click.<br/> Current: " + gamedata.codeperclick.toLocaleString("en-US") + " Cost: " + gamedata.CPCcost.toLocaleString("en-US")

    gamedata.totalCPS = save.totalCPS
    document.getElementById("totalCPS").innerHTML = "Code per Second: " + gamedata.totalCPS.toLocaleString("en-US")

    gamedata.CPCcost = save.CPCcost
    document.getElementById("codeperclick").innerHTML = "Increase code per click.<br/> Current: " + gamedata.codeperclick.toLocaleString("en-US") + " Cost: " + gamedata.CPCcost.toLocaleString("en-US")

    gamedata.codepersec = save.codepersec
    document.getElementById("autocode").innerHTML = "Automate writing.<br/> Current: " + gamedata.codepersec.toLocaleString("en-US") + "/sec Cost: " + gamedata.CPScost.toLocaleString("en-US")

    gamedata.CPScost = save.CPScost
    document.getElementById("autocode").innerHTML = "Automate writing.<br/> Current: " + gamedata.codepersec.toLocaleString("en-US") + "/sec Cost: " + gamedata.CPScost.toLocaleString("en-US")

    gamedata.pcost = save.pcost
    document.getElementById("program").innerHTML = "Hire a programmer to write code for you.<br/> Current: " + gamedata.pCPS.toLocaleString("en-US") + "/sec Cost: " + gamedata.pcost.toLocaleString("en-US")

    gamedata.pCPS = save.pCPS
    document.getElementById("program").innerHTML = "Hire a programmer to write code for you.<br/> Current: " + gamedata.pCPS.toLocaleString("en-US") + "/sec Cost: " + gamedata.pcost.toLocaleString("en-US")

    gamedata.compcost = save.compcost
    document.getElementById("company").innerHTML = "Start a company.<br/> Current: " + gamedata.compCPS.toLocaleString("en-US") + "/sec Cost: " + gamedata.compcost.toLocaleString("en-US")

    gamedata.compCPS = save.compCPS
    document.getElementById("company").innerHTML = "Start a company.<br/> Current: " + gamedata.compCPS.toLocaleString("en-US") + "/sec Cost: " + gamedata.compcost.toLocaleString("en-US")

    gamedata.corpcost = save.corpcost
    document.getElementById("corp").innerHTML = "Found a coding corporation.<br/> Current: " + gamedata.corpCPS.toLocaleString("en-US") + "/sec Cost: " + gamedata.corpcost.toLocaleString("en-US")

    gamedata.corpCPS = save.corpCPS
    document.getElementById("corp").innerHTML = "Found a coding corporation.<br/> Current: " + gamedata.corpCPS.toLocaleString("en-US") + "/sec Cost: " + gamedata.corpcost.toLocaleString("en-US")

    gamedata.times2cost = save.times2cost
    document.getElementById("times2").innerHTML = "Code per Second x2<br/> Cost: " + gamedata.times2cost.toLocaleString("en-US")

    if (gamedata.codeperclick >= 5) {
        var autocode = document.getElementById("autocode");
        autocode.style.display = "block";
    }

    if (gamedata.codepersec >= 5) {
        var program = document.getElementById("program");
        program.style.display = "block";
    }

    if (gamedata.pCPS >= 50) {
        var company = document.getElementById("company");
        company.style.display = "block";
    }

    if (gamedata.compCPS >= 500) {
        var upgrades = document.getElementById("upgrades");
        upgrades.style.display = "block";

        var times2 = document.getElementById("times2");
        times2.style.display = "block";
    }

    if (gamedata.compCPS >= 500) {
        var corp = document.getElementById("corp");
        corp.style.display = "block";
    }
}

// when window loads, load game and play music
window.onload = function() {
    loadgame();
    playmusic();
}

// play music and typing sounds
function playmusic() {
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("typingsounds").play();
        var typing = document.getElementById("typingsounds");
        typing.volume = 0.2;

        document.getElementById("lofi").play();
    })
}

// set interval to save every 30 seconds
setInterval(function() {
    savegame();
}, 30000);

// Xizi0n
// https://github.com/javascriptacademy-stash/digital-rain
const canvas = document.getElementById("matrix");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥク";
const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";

const alphabet = katakana + latin + numbers;

const fontSize = 16;
const columns = canvas.width/fontSize;

const drops = [];

for( let x = 0; x < columns; x++ ) {
	drops[x] = 1;
}

const draw = () => {
	context.fillStyle = "rgba(0, 0, 0, 0.05)";
	context.fillRect(0, 0, canvas.width, canvas.height);

	context.fillStyle = "#0F0";
	context.font = fontSize + "px monospace";

	for(let i = 0; i < drops.length; i++)
	{
		const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
		context.fillText(text, i*fontSize, drops[i]*fontSize);

		if(drops[i]*fontSize > canvas.height && Math.random() > 0.975){
			drops[i] = 0;
        }
		drops[i]++;
	}
};

setInterval(draw, 30);