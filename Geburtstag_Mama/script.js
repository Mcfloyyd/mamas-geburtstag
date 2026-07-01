const startScreen = document.getElementById("startScreen");
const captchaScreen = document.getElementById("captchaScreen");
const quizScreen = document.getElementById("quizScreen");

const startButton = document.getElementById("startButton");
const captchaText = document.getElementById("captchaText");
const captchaBox = document.getElementById("captchaBox");
const captchaNext = document.getElementById("captchaNext");
const quizStart = document.getElementById("quizStart");

let step = 0;

// -------------------------
// Start
// -------------------------

startButton.addEventListener("click", () => {

    startScreen.classList.add("hidden");
    captchaScreen.classList.remove("hidden");

    showStep();

});

// -------------------------
// Schritte anzeigen
// -------------------------

function showStep() {

    captchaBox.innerHTML = "";
    captchaNext.classList.add("hidden");

    switch(step){

        case 0:
            stepName();
            break;

        case 1:
            stepMath();
            break;

        case 2:
            stepLove();
            break;

        case 3:
            stepClicks();
            break;

        case 4:
            stepReady();
            break;

    }

}

// -------------------------
// Name
// -------------------------

function stepName(){

    captchaText.innerHTML = "Bitte geben Sie Ihren Namen ein.";

    const input = document.createElement("input");

    const button = document.createElement("button");
    button.innerText = "Weiter";

    button.onclick = () => {

        if(input.value.trim() === ""){
            alert("Bitte einen Namen eingeben.");
            return;
        }

        step++;
        showStep();

    };

    captchaBox.appendChild(input);
    captchaBox.appendChild(button);

}

// -------------------------
// Mathe
// -------------------------

function stepMath(){

    captchaText.innerHTML = "Was ist 2 + 2 × 2 ?";

    const input = document.createElement("input");

    const button = document.createElement("button");
    button.innerText = "Prüfen";

    button.onclick = () => {

        if(input.value.trim() === "6"){

            step++;
            showStep();

        }else{

            alert("Falsch 😈");

        }

    };

    captchaBox.appendChild(input);
    captchaBox.appendChild(button);

}

// -------------------------
// Liebe
// -------------------------

function stepLove(){

    captchaText.innerHTML =
    "Wie sehr lieben Sie den Ersteller dieser Website? (0-10)";

    const input = document.createElement("input");

    const button = document.createElement("button");
    button.innerText = "Weiter";

    button.onclick = () => {

        if(Number(input.value) >= 8){

            step++;
            showStep();

        }else{

            alert("Diese Antwort erscheint unrealistisch. 😄");

        }

    };

    captchaBox.appendChild(input);
    captchaBox.appendChild(button);

}

// -------------------------
// 7 Klicks
// -------------------------

function stepClicks(){

    captchaText.innerHTML =
    "Bitte klicken Sie den Button genau 7 Mal.";

    let clicks = 0;

    const button = document.createElement("button");
    button.innerText = "0 / 7";

    button.onclick = () => {

        clicks++;

        button.innerText = clicks + " / 7";

        if(clicks === 7){

            step++;
            showStep();

        }

    };

    captchaBox.appendChild(button);

}

// -------------------------
// Letzte Aufgabe
// -------------------------

function stepReady(){

    captchaText.innerHTML = "Sind Sie bereit für Ihr Geschenk?";

    const yes = document.createElement("button");
    yes.innerText = "Ja 😄";

    const no = document.createElement("button");
    no.innerText = "Auf keinen Fall";

    no.style.marginLeft = "15px";

    let attempts = 0;

    yes.onclick = () => {

        attempts++;

        switch(attempts){

            case 1:
                captchaText.innerHTML = "😈 Fast...";
                break;

            case 2:
                captchaText.innerHTML = "😈 Zu langsam!";
                break;

            case 3:
                captchaText.innerHTML = "🤏 Ich werde kleiner!";
                yes.style.transform = "scale(0.75)";
                break;

            case 4:
                captchaText.innerHTML = "💡 Vielleicht solltest du den anderen Button probieren...";
                yes.style.transform = "scale(0.6)";
                break;

            default:
                captchaText.innerHTML = "😂 Gib's auf.";
                yes.style.transform = "scale(0.5)";
        }

        // Neue Position
        yes.style.position = "absolute";

        const maxX = captchaBox.clientWidth - yes.offsetWidth;
        const maxY = 100;

        yes.style.left = Math.random() * maxX + "px";
        yes.style.top = Math.random() * maxY + "px";

    };

    no.onclick = () => {

        captchaText.innerHTML =
        "✅ Mensch erkannt.<br>" +
        "✅ Humor erkannt.<br>" +
        "🎉 Sicherheitsprüfung bestanden!";

        captchaNext.classList.remove("hidden");

    };

    captchaBox.appendChild(yes);
    captchaBox.appendChild(no);

}
// -------------------------
// Weiter
// -------------------------

captchaNext.onclick = () => {

    captchaScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    startQuiz();

};

