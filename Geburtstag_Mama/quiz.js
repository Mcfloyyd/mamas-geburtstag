// =====================================================
//                  QUIZ DATEN
// =====================================================

const quizFragen = [

    {
        frage: "Wer ist der jüngste aus der Familie?",

        antworten: [
            "Nils (13 Jahre)",
            "Rocky (5 Jahre)",
            "Lisa (10 Jahre)",
            "Mama (45 Jahre)"
        ],

        richtig: 2
    },

    {
        frage: "Was wünschst du dir?",

        antworten: [
            "Liebe Kinder",
            "Alles zusammen",
            "Das Papa wieder da ist",
            "Ein bequemes Bett"
        ],

        richtig: 1
    },

    {
        frage: "Wer ist dein Lieblieblingskind?",

        antworten: [
            "Lisa, Rocky & Fienchen",
            "Rocky, Lisa, Fienchen, Nils & Jan",
            "Ich natürlich",
            "Diese Frage darf ich nicht beantworten!!!"
        ],

        richtig: 1
    },

    {
        frage: "Welcher Spruch hat sich am meisten bei dir etabliert?",

        antworten: [
            "Absolut Nichts",
            "O k",
            "Hasenfenster/Mauseloch",
            "Och Gorke / Och Nille"
        ],

        richtig: 2
    },

    {
        frage: "Wie alt wirst du heute?",

        antworten: [
            "Das weiß ich doch nicht mehr",
            "Für immer jung und schön",
            "Leider 45",
            "43"
        ],

        richtig: 2
    }

];

// =====================================================
//               QUIZ EINSTELLUNGEN
// =====================================================

const quizBelohnung = 1;

let aktuelleFrage = 0;
let richtigeAntworten = 0;

// =====================================================
//               QUIZ STARTEN
// =====================================================

function startQuiz(){

    aktuelleFrage = 0;
    richtigeAntworten = 0;

    zeigeFrage();

}

// =====================================================
//          AKTUELLE FRAGE ANZEIGEN
// =====================================================

function zeigeFrage(){

    const container = document.getElementById("quizContainer");

    const frage = quizFragen[aktuelleFrage];

    const fortschritt =
        ((aktuelleFrage + 1) / quizFragen.length) * 100;

    container.innerHTML = `

        <h2>Quiz</h2>

        <p><strong>Frage ${aktuelleFrage + 1} von ${quizFragen.length}</strong></p>

        <div style="
            width:100%;
            height:20px;
            background:#ddd;
            border-radius:10px;
            overflow:hidden;
            margin-bottom:25px;
        ">

            <div style="
                width:${fortschritt}%;
                height:100%;
                background:#4CAF50;
            "></div>

        </div>

        <h3>${frage.frage}</h3>

        <div id="antworten"></div>

        <p id="quizMeldung"
           style="
                min-height:25px;
                font-weight:bold;
                margin-top:20px;
           ">
        </p>

    `;

    const antwortenDiv = document.getElementById("antworten");

    frage.antworten.forEach((antwort, index)=>{

        const button = document.createElement("button");

        button.innerText = antwort;

        button.style.display = "block";
        button.style.width = "100%";
        button.style.margin = "10px 0";

        button.onclick = ()=>{

            pruefeAntwort(index);

        };

        antwortenDiv.appendChild(button);

    });

}
// =====================================================
//          ANTWORT ÜBERPRÜFEN
// =====================================================

function pruefeAntwort(index){

    const buttons = document.querySelectorAll("#antworten button");
    const meldung = document.getElementById("quizMeldung");

    // Richtige Antwort

    if(index === quizFragen[aktuelleFrage].richtig){

    const buttons = document.querySelectorAll("#antworten button");
    const meldung = document.getElementById("quizMeldung");

    buttons[index].style.background = "#4CAF50";
    buttons[index].style.color = "white";

    meldung.innerHTML = "✅ Richtig!";

    richtigeAntworten++;

    buttons.forEach(button => {

        button.disabled = true;

    });

    setTimeout(() => {

        aktuelleFrage++;

        if(aktuelleFrage >= quizFragen.length){

            quizBeendet();

        }else{

            zeigeFrage();

        }

    },1000);

}
    // Falsche Antwort
   else{

    const buttons = document.querySelectorAll("#antworten button");
    const meldung = document.getElementById("quizMeldung");

    buttons[index].style.background = "#d9534f";
    buttons[index].style.color = "white";
    buttons[index].disabled = true;

    meldung.innerHTML = "❌ Leider falsch. Versuch es nochmal!";

}

// =====================================================
//              QUIZ BEENDET
// =====================================================

function quizBeendet(){

    const container = document.getElementById("quizContainer");

    container.innerHTML = `

        <div style="animation: erscheinen .8s;">

            <h2 style="color:#4CAF50;font-size:40px;">
                🎉 Geschafft! 🎉
            </h2>

            <p style="font-size:22px;">
                Herzlichen Glückwunsch!
            </p>

            <p>
                Du hast alle Fragen richtig beantwortet.
            </p>

            <div style="
                font-size:100px;
                margin:35px 0;
                color:#ff4d6d;
                font-weight:bold;
                animation:pulse 1s infinite;
            ">
                1
            </div>

            <p style="font-size:20px;">
                ⭐ Das ist die erste Zahl für dein Zahlenschloss ⭐
            </p>

            <p style="color:#777;">
                Merke sie dir gut...
            </p>

            <button id="weiterSpiel1">
                Weiter zu Spiel 1 →
            </button>

        </div>

    `;

    document.getElementById("weiterSpiel1").onclick = () => {

        zeigeChallenge(0);

    };

}

// =====================================================
//          QUIZ ZURÜCKSETZEN
// =====================================================

function resetQuiz(){

    aktuelleFrage = 0;
    richtigeAntworten = 0;

}
}