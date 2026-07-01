// =======================================
//        CHALLENGES
// =======================================

const challenges = [

    {
        titel: "🎯 Challenge 1",

        beschreibung:
        "Zeichne einen perfekten Kreis.\n\nErreiche mindestens 95 %.",

        link: "https://neal.fun/perfect-circle/",

        zahl: 1
    },

    {
        titel: "🎯 Challenge 2",

        beschreibung:
        "Eine Gesamtbewertung von 45 Punkten erreichen",

        link: "https://dialed.gg/",

        zahl: 0
    },

    {
        titel: "🎯 Challenge 3",

        beschreibung:
        "Erreiche eine Punktzahl von 500",

        link: "https://www.chronophoto.app/",

        zahl: 5
    }

];

let aktuelleChallenge = 0;

function zeigeChallenge(index){

    aktuelleChallenge = index;

    const quizScreen = document.getElementById("quizScreen");

    quizScreen.innerHTML = `

        <div id="challengeContainer">

            <h2>${challenges[index].titel}</h2>

            <p style="white-space:pre-line;">
                ${challenges[index].beschreibung}
            </p>

            <button id="startChallenge">
                Challenge starten
            </button>

        </div>

    `;

    document
    .getElementById("startChallenge")
    .onclick = ()=>{

        window.open(challenges[index].link,"_blank");

        frageNachChallenge();

    };

}

function frageNachChallenge(){

    const container =
    document.getElementById("challengeContainer");

    container.innerHTML = `

        <h2>🏁 Challenge beendet?</h2>

        <p>
        Hast du mindestens das geforderte Ziel erreicht?
        </p>

        <button id="ja">
            Ja 😄
        </button>

        <button id="nein">
            Nein 😅
        </button>

    `;

    document.getElementById("nein").onclick=()=>{

        alert("Dann versuch es nochmal 😈");

    };

    document.getElementById("ja").onclick=()=>{

        zeigeZahl();

    };

}

function zeigeZahl(){

    const container =
    document.getElementById("challengeContainer");

    container.innerHTML = `

        <h2>🎉 Super!</h2>

        <p>Die nächste Zahl lautet</p>

        <h1 style="
        font-size:90px;
        color:#ff4d6d;
        ">
            ${challenges[aktuelleChallenge].zahl}
        </h1>

        <button id="weiter">
            Weiter
        </button>

    `;

    document.getElementById("weiter").onclick = () => {

    aktuelleChallenge++;

    if (aktuelleChallenge < challenges.length) {

        zeigeChallenge(aktuelleChallenge);

    } else {

        zeigeFinale();

    }

};

}

function zeigeFinale(){

    const container = document.getElementById("challengeContainer");

    container.innerHTML = `

    <h2>🎉 Mission erfolgreich abgeschlossen! 🎉</h2>

    <p>
        Du hast jede Herausforderung gemeistert.
    </p>

    <h1 style="
        color:#ff4d6d;
        font-size:70px;
        margin:30px 0;
    ">
        1105
    </h1>

    <p>
        Das ist der Code für dein Zahlenschloss.
    </p>

    <hr style="
        margin:35px 0;
        border:none;
        border-top:1px solid #ddd;
    ">

    <p style="
        font-size:20px;
        line-height:1.6;
    ">
        ❤️<br><br>

        Danke, dass du immer für mich da bist.<br>
        Danke für alles, was du jeden Tag für unsere Familie tust.<br><br>

        Ich wünsche dir von Herzen alles Liebe und Gute zum Geburtstag.<br><br>

        Hab einen wunderschönen Tag! 🎂
    </p>

<p style="
    margin-top:40px;
    color:#888;
    font-size:14px;
">
Mit Liebe erstellt von deinem Jan ❤️
</p>

    `;

}

