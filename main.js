
// * VARIABLES GLOBALES * //
let questionsDeck = {
    set1 : [
        { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien."},
        { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso."},
        { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé."},
        { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida."},
        { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación."},
        { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad."},
        { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas."},
        { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento."},
        { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano."},
        { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba."},
        { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria."},
        { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo."},
        { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas."},
        { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia."},
        { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
        { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien."},
        { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft."},
        { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche."},
        { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor."},
        { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático."},
        { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984."},
        { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914."},
        { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa."},
        { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso."},
        { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética."},
        { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos."},
        { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional."}
    ], 

    set2: [
        { letter: "a", answer: "alfabeto", status: 0, question: "CON LA A. Conjunto de las letras de un idioma puestas en orden."},
        { letter: "b", answer: "babero", status: 0, question: "CON LA B. Tela que se pone a los bebés en el pecho para que no se manchen al comer."},
        { letter: "c", answer: "cabeza", status: 0, question: "CON LA C. Parte superior del cuerpo que está sobre el cuello."},
        { letter: "d", answer: "dormir", status: 0, question: "CON LA D. Forma de descanso que hacemos por las noches o en la siesta, con los ojos cerrados, sin darnos cuenta de nada."},
        { letter: "e", answer: "elefante", status: 0, question: "CON LA E. Mamífero que vive en África y Asia, y que tiene trompa y grandes orejas."},
        { letter: "f", answer: "fiebre", status: 0, question: "CON LA F. Aumento de la temperatura del cuerpo que tenemos cuando estamos enfermos."},
        { letter: "g", answer: "globo", status: 0, question: "CON LA G. Especie de pelota de goma, que se hincha con aire, y que a veces los niños llevan flotando atado con una cuerda."},
        { letter: "h", answer: "humo", status: 0, question: "CON LA H. Materia liviana resultante de hacer un fuego."},
        { letter: "i", answer: "iman", status: 0, question: "CON LA I. Objeto magnético que puede atraer al hierro y a otros metales."},
        { letter: "j", answer: "jirafa", status: 0, question: "CON LA J. Mamífero africano de patas y cuello larguísimos."},
        { letter: "k", answer: "kilo", status: 0, question: "CON LA K. Medida de peso que es igual que 1000 gramos."},
        { letter: "l", answer: "lagrima", status: 0, question: "CON LA L. Gota que nos cae de los ojos."},
        { letter: "m", answer: "muerto", status: 0, question: "CON LA M. Que ya no está vivo."},
        { letter: "n", answer: "nublado", status: 0, question: "CON LA N. Cielo lleno de nubes y sin sol."},
        { letter: "ñ", answer: "ñu", status: 0, question: "CON LA Ñ. Ave de América parecida al avestruz pero más pequeña."},
        { letter: "o", answer: "ojal", status: 0, question: "CON LA O. Agujero alargado que se hace en la ropa para abrochar un botón."},
        { letter: "p", answer: "paraguas", status: 0, question: "CON LA P. Instrumento que sirve para protegerse de la lluvia."},
        { letter: "q", answer: "quiosco", status: 0, question: "CON LA Q. Caseta en la que venden periódicos, revistas, tebeos, chuches,... y otras veces flores."},
        { letter: "r", answer: "railes", status: 0, question: "CON LA R. Especie de barras sobre las que se mueven los trenes en las vías."},
        { letter: "s", answer: "salir", status: 0, question: "CON LA S. Pasar de dentro a fuera."},
        { letter: "t", answer: "telaraña", status: 0, question: "CON LA T. Tela en forma de red que hacen las arañas."},
        { letter: "u", answer: "uniforme", status: 0, question: "CON LA U. Traje que algunas personas llevan en su trabajo, como por ejemplo los policías."},
        { letter: "v", answer: "ventilador", status: 0, question: "CON LA V. Aparato que gira y que sirve para dar aire."},
        { letter: "w", answer: "wendy", status: 0, question: "CON LA W. Personaje de cuento que era una niña amiga de Peter Pan."},
        { letter: "x", answer: "extranjero", status: 0, question: "CONTIENE LA X. Persona de otro país."},
        { letter: "y", answer: "yema", status: 0, question: "CON LA Y. Parte amarilla del huevo."},
        { letter: "z", answer: "zurdo", status: 0, question: "CON LA Z. Que tiene más habilidad con la mano izquierda que con la derecha."}
    ], 
    set3: [
        { letter: "a", answer: "alicia", status: 0, question: "CON LA A. Niña que fue al País de las Maravillas."},    
        { letter: "b", answer: "bambi", status: 0, question: "CON LA B. Cervatillo de película que se quedó sin su mamá."},
        { letter: "c", answer: "caperucita", status: 0, question: "CON LA C. Personaje de cuento que llevó una cesta a su abuelita."},    
        { letter: "d", answer: "donald", status: 0, question: "CON LA D. Pato amigo de Mickey Mouse."},
        { letter: "e", answer: "enorme", status: 0, question: "CON LA E. contrario de diminuto."},
        { letter: "f", answer: "feo", status: 0, question: "CON LA F. Contrario de bonito."},
        { letter: "g", answer: "guisante", status: 0, question: "CON LA G. Planta que tiene una semilla comestible, verde, redonda y pequeña."},
        { letter: "h", answer: "hortalizas", status: 0, question: "CON LA H. Vegetales que proceden de las huertas, como las zanahorias o los pimientos."},
        { letter: "i", answer: "insipida", status: 0, question: "CON LA I. Se dice de la comida que no sabe a nada."},
        { letter: "j", answer: "joven", status: 0, question: "CON LA J. Contrario de viejo."},
        { letter: "k", answer: "ketchup", status: 0, question: "CON LA K. Salsa hecha con tomate, vinagre, azúcar y especias."},
        { letter: "l", answer: "lechuga", status: 0, question: "CON LA L. Planta de hojas verdes que se cultiva en huertas y se come en ensalada."},
        { letter: "m", answer: "macedonia", status: 0, question: "CON LA M. Postre realizado con frutas cortadas en trocitos y en almíbar."},
        { letter: "n", answer: "nachos", status: 0, question: "CON LA N. Triángulos mejicanos de maíz frito que se comen como aperitivo mojándolos en salsa."},
        { letter: "ñ", answer: "ñam", status: 0, question: "CON LA Ñ. Onomatopeya de comer."},
        { letter: "o", answer: "oreja", status: 0, question: "CON LA O. Parte de la cabeza del cerdo que se come a la plancha o guisada."},
        { letter: "p", answer: "peter", status: 0, question: "CON LA P. Niño que nunca crecía y que vivía en el país de Nunca Jamás."},
        { letter: "q", answer: "quieto", status: 0, question: "CON LA Q. Que está inmóvil."},
        { letter: "r", answer: "resbalar", status: 0, question: "CON LA R. Escurrirse sobre una superficie."},
        { letter: "s", answer: "spiderman", status: 0, question: "CON LA S. Hombre araña."},
        { letter: "t", answer: "tranquilo", status: 0, question: "CON LA T. Opuesto de nervioso."},
        { letter: "u", answer: "urgencia", status: 0, question: "CON LA U. Sinónimo de emergencia."},
        { letter: "v", answer: "valiente", status: 0, question: "CON LA V. Contrario de cobarde."},
        { letter: "w", answer: "wagneriano", status: 0, question: "CON LA W. Partidario de la música de Wagner."},
        { letter: "x", answer: "exterior", status: 0, question: "CONTIENE LA X. Lo contrario de interior."},
        { letter: "y", answer: "yegua", status: 0, question: "CON LA Y. Hembra del caballo."},
        { letter: "z", answer: "zanahoria", status: 0, question: "CON LA Z. Planta que tiene una raíz comestible alargada de color anaranjado."}
    ],
}

let totalScore = { right: 0, wrong: 0 };
let cardIndex = 0;
let stillQuestions = true;

let bestUsers = [
    {name: 'Jack Palance', points: 3},
    {name: 'Mike Tyson', points: 2},
    {name: 'Joe Biden', points: 2},
    {name: 'Nansi Pelosi', points: 1},
    {name: 'Melania Trump', points: 1},
];

let newRandomSet = createRandomSetFrom(questionsDeck);
newRandomSet.length = 6;
let remainingQuestions = newRandomSet.length;
let currentCard = newRandomSet[cardIndex];
let playerName = null;
let timer = null;

const playerSelectorScreen = document.getElementById('player-selector-screen');
const selectPlayerIcon = document.getElementById('select-player-icon');
const title = document.querySelector('#logo-pasapalabra');
const inputPlayerNameScreen = document.getElementById('input-player-name-screen');
const playerIcons = document.querySelectorAll('.p-icon');
const gameScreen = document.querySelector('.game-screen');
const resultsScreen = document.querySelector('.results-screen');
const userName = document.getElementById('user-name');
const playButton = document.getElementById('play-button');
let playerSrcImage = null;

const questionContainer = document.getElementById('question-container');
const letterElement = document.getElementById('letter');
const questionElement = document.getElementById('question');
const inputButton = document.getElementById('input-button');
const inputWrapper = document.getElementById('input-wrapper');
const pasaButton = document.getElementById('pasa-btn');
const inputAnswer = document.querySelector('.text-input');
const cronoElement = document.querySelector('.timer');
const cronoElementBorder = document.querySelector('.timer-border');

const abortButton = document.getElementById('abort-icono')
// * fin VARIABLES GLOBALES * //


window.onload = init;

document.addEventListener('mouseover', addEffectOnBackground);
document.addEventListener('mouseout', removeEffectOnBackground);
playerIcons.forEach(icon => icon.addEventListener('click', showPlayerNameScreen));


playButton.addEventListener('click', () => {
    if(isValidPlayerName(userName.value)){
        playerName = formatName(userName.value);
        inputPlayerNameScreen.classList.add('invisible');
        inputPlayerNameScreen.classList.remove('one-player-grid');
        showGameScreen(playerName, playerSrcImage);
    }
    else {
        userName.focus();
        let usernameIcon = document.querySelector('#input-name-icon');
        usernameIcon.className = '';
        setTimeout(()=> usernameIcon.className = 'swing-in-top-fwd', 30);
    }
});

pasaButton.addEventListener('click', handlePasapalabra);
inputButton.addEventListener('click', handleAnswer);
abortButton.addEventListener('click', ()=>{

    if(!pasaButton.classList.contains('paused')){

        hideQuestionCardElements();
        inputAnswer.disabled = true;
        inputAnswer.value = '';
        
        setTimeout(()=> {
            let abortGame = confirm('¿Seguro que quieres abandonar la partida?');
            if(abortGame){

            slideOutGameElements();
            reloadGame();
            
            } else{
            showQuestionCardElements();
            inputAnswer.disabled = false;
            inputAnswer.focus();
            inputAnswer.value = '';
            }
        }, 100);
    }
});

const replayButton = document.getElementById('replay-btn');
const exitButton = document.getElementById('exit-btn');

exitButton.addEventListener('click', ()=> {
    resultsScreen.classList.add('invisible');
    reloadGame();
});

replayButton.addEventListener('click', ()=> {

    resultsScreen.classList.add('invisible');
    
    document.getElementById('player-container').innerHTML = `
        <p id="abc1">ABCDEFGHI</p>
        <p id="abc2">JKLMNÑOPQ</p>
        <p id="abc3">RSTUVWXYZ</p>
        <img class="player-icon" src="" alt="player icon">
        <p id="player-name"></p>`;
    
    resetGameVariables();

    pasaButton.addEventListener('click', handlePasapalabra);
    
    showGameScreen(playerName, playerSrcImage);

});

// *** FUNCIONES *** //

function init(){
    showPlayerSelectorScreen();
    setTimeout(showSelectPlayerIcon, 500);    
    setTimeout(showTitle, 500);    
}
function showPlayerSelectorScreen(){
    playerSelectorScreen.classList.remove('invisible');
}

function hidePlayerSelectorScreen(){
    document.removeEventListener('mouseover', addEffectOnBackground);
    playerIcons.forEach(icon => icon.removeEventListener('click', showPlayerNameScreen));
    selectPlayerIcon.classList.add('invisible');
    playerSelectorScreen.classList.add('invisible');
}

function showSelectPlayerIcon(){
    selectPlayerIcon.style.display = 'block';
}
function showTitle(){
    title.style.display = 'block';

}

function showPlayerNameScreen(e){
    
    const element = e.target;
    const backgroundColor = element.previousElementSibling;

    hidePlayerSelectorScreen();
    
    inputPlayerNameScreen.classList.remove('invisible');
    inputPlayerNameScreen.classList.add('one-player-grid');
    
    const playerAvatar = createPlayerAvatar(element, backgroundColor);
    playerSrcImage = playerAvatar.querySelector('img').src;
    inputPlayerNameScreen.insertBefore(playerAvatar, userName);
    userName.focus();
}

function createPlayerAvatar(imgElement, backgroundColor){
    
    const playerAvatar = document.createElement('div');
    playerAvatar.classList = 'player-box scale-in-center';
    playerAvatar.style.gridArea = 'auto';
    
    const avatarImg = document.createElement('img');
    avatarImg.classList = 'img-avatar';
    avatarImg.src = imgElement.src;
    
    const avatarBackground = document.createElement('div');
    avatarBackground.classList.add('bkg-avatar');
    avatarBackground.classList.add(`${backgroundColor.className}`);

    playerAvatar.append(avatarBackground);
    playerAvatar.append(avatarImg);

    return playerAvatar;
}

function checkAnswer(){

    if(inputAnswer.value.toLowerCase().trim() === currentCard.answer){
        //RIGHT
        changeLetterColor(currentCard.letter.toUpperCase(), 'green');
        inputAnswer.value = '';
        currentCard.status = 1
        remainingQuestions--;
        cardIndex++;
        currentCard = newRandomSet[cardIndex];
        totalScore.right++;
        
        
    } else {
        //WRONG
        changeLetterColor(currentCard.letter.toUpperCase(), 'red');
        inputAnswer.value = '';
        currentCard.status = -1;
        remainingQuestions--;
        cardIndex++;
        currentCard = newRandomSet[cardIndex];
        totalScore.wrong++;
    }
}

function showNextQuestion(){

    if(newRandomSet.every(card => card.status !== 0)){
        stillQuestions = false;
        return;
    }
    
    if(cardIndex >= newRandomSet.length){
        cardIndex = 0 // volver a empezar el rosco desde el principio
        currentCard = newRandomSet[cardIndex];

    }    
    while(currentCard.status !== 0){
        cardIndex++;
        currentCard = newRandomSet[cardIndex];
        if(!currentCard){
            cardIndex = 0;
            currentCard = newRandomSet[cardIndex];
        }
    }
    
    inputButton.removeEventListener('click', handleAnswer);

    letterElement.classList.add('jello-horizontal');
    letterElement.textContent = currentCard.letter.toUpperCase();
    questionElement.textContent = currentCard.question;
    
    setTimeout(()=> {
        letterElement.classList.remove('jello-horizontal');
        inputButton.addEventListener('click', handleAnswer);

    }, 200);

}

function isValidPlayerName(value){
    return value.match(/\w+/);   //username validation: chequea que al menos haya un caracter.
}

function throwParty(){
    confetti.speed = 2;
    confetti.frameInterval = 10;

    const screenSize = document.documentElement.clientWidth;
    let isSmallScreen = screenSize < 1300;
    
    if(isSmallScreen){
        confetti.start(7000,200);
    } else {
        confetti.start(7000,500);
    }
    const congratsMessage = document.createElement('h1');
    congratsMessage.textContent = '¡ ROSCO COMPLETADO !';
    questionContainer.append(congratsMessage);
    gameScreen.querySelector('#player-container').style.backgroundColor = '#87d60c';
}

function handleAnswer(){
    inputButton.removeEventListener('click', handleAnswer);
    checkAnswer();

    //ROSCO COMPLETADO : TODAS LAS RESPUESTAS SON CORRECTAS

    if(totalScore.right === newRandomSet.length){
        
        pasaButton.classList.add('invisible');
        inputWrapper.classList.add('invisible');
        abortButton.classList.add('invisible');

        hideQuestionCardElements();
        stopCountdown();
        setTimeout(throwParty, 400);
        setTimeout(()=> {
            slideOutGameElements();
            setTimeout(()=> {
                const congratsMessage = questionContainer.querySelector('h1');
                congratsMessage.remove();
                showResultsScreen({ totalScore, playerName, playerSrcImage }, bestUsers);
            }, 1200);
        },8000);
    
    } else{ 
    
        setTimeout(()=> {
            showNextQuestion();
            inputAnswer.focus();

            if(!stillQuestions){
                inputAnswer.blur();
                stopCountdown();
                pasaButton.removeEventListener('click', handlePasapalabra);
                slideOutGameElements();
                setTimeout(()=> {
                    showResultsScreen({ totalScore, playerName, playerSrcImage }, bestUsers);
                }, 1200);
            }
        }, 400);
    }
}

function showResultsScreen(resultObject, bestUsers){

    hideGameScreen();
    resultsScreen.classList.remove('invisible');

    document.body.style.alignItems = 'center'; 

    let { totalScore, playerName, playerSrcImage } = resultObject;
    updateRanking(totalScore.right, playerName, bestUsers);
    appendRankingSection(bestUsers); 

    const playerNameElement = document.getElementById('results-player-name');
    playerNameElement.textContent = playerName;

    const playerImage = document.querySelector('.result-screen-icon');
    playerImage.src = playerSrcImage;

    const rightAnswersElement = document.getElementById('ok-icono').nextElementSibling;
    rightAnswersElement.textContent = String(totalScore.right).padStart(2,'0');
    const wrongAnswersElement = document.getElementById('wrong-icono').nextElementSibling;
    wrongAnswersElement.textContent = String(totalScore.wrong).padStart(2,'0');
}

function createRandomSetFrom(mainDeck){

    const numOfSets = Object.keys(mainDeck).length;
    const numOfQuestionsPerSet = Object.values(mainDeck)[0].length;

    let mainDeckCopy = JSON.parse(JSON.stringify(mainDeck));
    let newRandomSet = [];

    for(let i = 0; i < numOfQuestionsPerSet; i++){
      let randomNum = Math.floor((Math.random() * numOfSets) + 1); 
      newRandomSet.push(mainDeckCopy[`set${randomNum}`][i]);
    } 
   
    return newRandomSet;
}

function showGameScreen(playerName, playerSrcImage){
    const playerIcon = document.querySelector('.player-icon');
    playerIcon.src = playerSrcImage;
    const playerNameField = document.getElementById('player-name');
    playerNameField.textContent = playerName;

    document.addEventListener('keydown', handlePressedKey);

    animateElements();
    showNextQuestion();
    
    setTimeout(()=> {
        timer = setInterval(()=> startCountDown(), 1000)
    }, 800);
}

function hideGameScreen(){
    gameScreen.classList.add('invisible');
}

function handlePressedKey(e){
    
    if(e.code === 'Space'){
        handlePasapalabra();
    }
    if(e.code === 'Enter' && !pasaButton.classList.contains('paused')){
        document.removeEventListener('keydown', handlePressedKey);
        handleAnswer();
    } 
    // setTimeout para bloquear teclado mientras la próxima pregunta aún no ha aparecido //
    setTimeout(()=> {
        document.addEventListener('keydown', handlePressedKey);
    }, 300)
}

function startCountDown(){
    if(cronoElement.textContent === '1'){
        cronoElement.textContent = '0'
        cronoElement.classList.add('timer-countdown');
        cronoElementBorder.classList.add('timer-border-countdown');
        stopCountdown();

        document.removeEventListener('keydown', handlePressedKey);

        pasaButton.classList.add('invisible');
        inputWrapper.classList.add('invisible');
             
        hideQuestionCardElements();

        setTimeout(()=> slideOutGameElements(), 1200);
        setTimeout(()=> {
            // document.body.style.alignItems = 'center'; 
            showResultsScreen({ totalScore, playerName, playerSrcImage }, bestUsers);
        }, 2000);
        
    } else if(cronoElement.textContent < 7){
        cronoElement.textContent = (Number(cronoElement.textContent) - 1);
        cronoElement.classList.add('timer-countdown');
        cronoElementBorder.classList.add('timer-border-countdown');
        setTimeout(()=> {
            cronoElementBorder.classList.remove('timer-border-countdown');
            cronoElement.classList.remove('timer-countdown');
        }, 500);

    } else {
    cronoElement.textContent = (Number(cronoElement.textContent) - 1);
    }
}

function stopCountdown(){
    clearInterval(timer);
}

function handlePasapalabra(){
    if(remainingQuestions !== 1){
        pasaButton.classList.toggle('paused');

        if(pasaButton.classList.contains('paused')){
            inputAnswer.blur();

            stopCountdown();
            pasaButton.innerHTML = '&#10074&#10074';
            hideQuestionCardElements();
            inputAnswer.disabled = true;
        }
        else {
            pasaButton.textContent = 'PASAPALABRA';
            timer = setInterval(()=> startCountDown(), 1000);
            showQuestionCardElements();
            inputAnswer.disabled = false;
            inputAnswer.value = '';
            inputAnswer.focus();

            cardIndex++;
            currentCard = newRandomSet[cardIndex];
            showNextQuestion();
            
            if(!stillQuestions){
                pasaButton.removeEventListener('click', handlePasapalabra);
            }
        }
    }
    inputAnswer.value = '';
    inputAnswer.focus();
    return;
    
}

function slideOutGameElements(){
    document.querySelector('.game-wrapper').classList.add('slide-in-top-reverse');        
}

function animateElements(){
    hideQuestionCardElements();
    inputWrapper.style.zIndex = -1;

    setTimeout(() => slideInGameElements(), 500);
    
    setTimeout(() => {
        showQuestionCardElements();
        inputWrapper.style.zIndex = 0;
        inputAnswer.focus();
    }, 1000);
}

function hideQuestionCardElements(){
    letterElement.style.color = 'transparent';
    questionElement.style.color = 'transparent';
    inputButton.style.display = 'none';
};

function showQuestionCardElements(){
    letterElement.style.color = 'rgba(26,59,90,0.9)';
    questionElement.style.color = '#2D2D2D';
    inputButton.style.display = 'block';

}

function addEffectOnBackground(e){
    const element = e.target;
    if(element.className === 'p-icon'){
        element.previousElementSibling.style.backgroundColor = '#cbdffc';
    }
}

function removeEffectOnBackground(e){
    const element = e.target;
    if(element.className === 'p-icon'){
        element.previousElementSibling.style.backgroundColor = '#ecf4ff';  
    }
}

function formatName(name){
    return name
        .trim().split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

function updateRanking (score, playerName, bestUsers){
    let lastRankingUser = bestUsers[4] //Usuario con la puntuación más baja en el ranking.
    let currentUserPoints = score;  
    if(currentUserPoints > lastRankingUser.points){
        bestUsers.splice(-1, 1, {name: playerName, points: currentUserPoints});
        bestUsers.sort((a,b) => b.points - a.points);
    }
}

function appendRankingSection(ranking){
    const rankingSection = document.getElementById('ranking');
    rankingSection.innerHTML = `<h1>RANKING DE PUNTUACIÓN</h1>`;
        
    for(let player of ranking){
        const listElement = document.createElement('div');
        listElement.classList.add('list');

        const userName = document.createElement('p');
        userName.classList.add('user');
        userName.textContent = player.name;

        const userPoints = document.createElement('p');
        userPoints.classList.add('user-points');
        userPoints.textContent = player.points;

        const icono = document.createElement('img');
        icono.id = 'ok-icono';
        icono.src = 'imagenes/icono_ok.svg';
        icono.alt = 'imagenes/right answer icon';

        listElement.append(userName);
        listElement.append(userPoints);
        listElement.append(icono);

        rankingSection.append(listElement);
    }
}

function slideInGameElements(){
    document.body.style.alignItems = 'unset'; // Para evitar deformación de tarjeta de preguntas. Tiene que haber otra solución en flex.
    gameScreen.classList.add('slide-in-top')
    gameScreen.classList.remove('invisible');
}

function changeLetterColor(letter, color){
    let abc1 = document.getElementById('abc1');
    let abc2 = document.getElementById('abc2');
    let abc3 = document.getElementById('abc3');

    const targetElement = abc1.textContent.includes(letter) ? abc1 : abc2.textContent.includes(letter) ? abc2 : abc3;

    const letterIndex = targetElement.innerHTML.indexOf(letter);
    const newSpan = `<span class='hightlited-${color}'>${letter}</span>`;
    const newInnerHtml = targetElement.innerHTML.slice(0,letterIndex) + newSpan + targetElement.innerHTML.slice(letterIndex + 1);
    
    return targetElement.innerHTML = newInnerHtml;
}

function reloadGame(){
    setTimeout(()=> location.reload(), 1000);
}

function resetGameVariables(){

    for(let set in questionsDeck){
        questionsDeck[set].forEach(card => card.status = 0);
    }
    gameScreen.querySelector('#player-container').style.backgroundColor = '#d8e5f9';
    document.addEventListener('keydown', handlePressedKey);    
    document.querySelector('.game-wrapper').classList.remove('slide-in-top-reverse');

    cronoElement.textContent = '120';
    cronoElement.classList.remove('timer-countdown');
    cronoElementBorder.classList.remove('timer-border-countdown');

    pasaButton.classList.remove('invisible');
    inputWrapper.classList.remove('invisible');
    abortButton.classList.remove('invisible');

    inputAnswer.textContent = '';
    inputAnswer.disabled = false; 

    totalScore = { right: 0, wrong: 0 };
    cardIndex = 0;
    stillQuestions = true;
    newRandomSet = createRandomSetFrom(questionsDeck);
    newRandomSet.length = 6;  
    remainingQuestions = newRandomSet.length;
    currentCard = newRandomSet[cardIndex];
    inputAnswer.value = '';
}









