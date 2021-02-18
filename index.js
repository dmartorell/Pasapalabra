
const playerSelectorScreen = document.getElementById('player-selector-screen');
const selectPlayerIcon = document.getElementById('select-player-icon');
const inputPlayerNameScreen = document.getElementById('input-player-name-screen');
const gameScreen = document.querySelector('.game-screen');
const resultsScreen = document.getElementById('results-screen');

// players en delay: 1 seg
setTimeout(() => {
    playerSelectorScreen.classList.remove('invisible');
    playerSelectorScreen.classList.add('multi-player-grid');
}, 1000);
// select icon en delay 1.2 seg
setTimeout(() => {
    selectPlayerIcon.classList.remove('invisible');
    selectPlayerIcon.classList.add('heartbeat');
}, 1000);
setTimeout(() => selectPlayerIcon.style.display="block", 1600);

document.addEventListener('mouseover', addEffectOnBackground);
document.addEventListener('mouseout', removeEffectOnBackground);
document.addEventListener('click', renderPlayerNameScreen);

function clearScreen(){
    document.body.style.alignItems = 'center'; 
    document.querySelector('.game-wrapper').classList.add('slide-in-top-reverse');        
}

function renderResultsScreen(score, playerName, playerSrcImage){
// pasar ranking...){///// 1 OBJ COMO PARAM
    playerSelectorScreen.classList.add('invisible');
    inputPlayerNameScreen.classList.add('invisible');
    gameScreen.classList.add('invisible');
    resultsScreen.classList.remove('invisible');
    console.log({score});
    console.log({playerName});
    console.log({playerSrcImage});
}


function renderPlayerNameScreen(e){

    const element = e.target;
    const parent = element.parentNode;
    const backgroundColor = element.previousElementSibling;

    if(element.className === 'p-icon'){
        document.removeEventListener('mouseover', addEffectOnBackground);
        document.removeEventListener('click', renderPlayerNameScreen);

        selectPlayerIcon.classList.add('invisible');
        playerSelectorScreen.classList.remove('multi-player-grid');
        playerSelectorScreen.classList.add('invisible');
        
        inputPlayerNameScreen.firstElementChild.append(parent);
        
        inputPlayerNameScreen.classList.remove('invisible');
        inputPlayerNameScreen.classList.add('one-player-grid');

        parent.style.gridArea = 'auto';
        backgroundColor.style.width = '200%';
        backgroundColor.style.height = '93%';
        backgroundColor.style.left = '-50%'
        element.style.marginTop = '20px';
        element.style.cursor = 'auto';
        element.classList.remove('swing-in-top-fwd')

        parent.classList.add('scale-in-center');

        const userName = document.getElementById('user-name');
        userName.focus();
        const playButton = document.getElementById('play-button');
        setTimeout(() => playButton.classList.add('heartbeat'), 1500);

        playButton.addEventListener('click', () => {
            let playerName = userName.value;
            if(playerName.match(/\w+/)){   //username validation: evitar 'strings de solo espacios en blanco
                inputPlayerNameScreen.classList.add('invisible');
                inputPlayerNameScreen.classList.remove('one-player-grid');
                const playerSrcImage = parent.lastElementChild.src;
                playerName = formatName(playerName);
        
                startGame(playerName, playerSrcImage);
            }
        });
    }
}


function startGame(playerName, playerSrcImage){
    const questionsDeck = {
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
            { letter: "a", answer: "alfabeto", status: 0, question: "CON LA A. Conjunto de las letras de un idioma puestas en orden"},
            { letter: "b", answer: "babero", status: 0, question: "CON LA B. Tela que se pone a los bebés en el pecho para que no se manchen al comer"},
            { letter: "c", answer: "cabeza", status: 0, question: "CON LA C. Parte superior del cuerpo que está sobre el cuello"},
            { letter: "d", answer: "dormir", status: 0, question: "CON LA D. Forma de descanso que hacemos por las noches o en la siesta, con los ojos cerrados, sin darnos cuenta de nada"},
            { letter: "e", answer: "elefante", status: 0, question: "CON LA E. Mamífero que vive en África y Asia, y que tiene trompa y grandes orejas."},
            { letter: "f", answer: "fiebre", status: 0, question: "CON LA F. Aumento de la temperatura del cuerpo que tenemos cuando estamos enfermos"},
            { letter: "g", answer: "globo", status: 0, question: "CON LA G. Especie de pelota de goma, que se hincha con aire, y que a veces los niños llevan flotando atado con una cuerda"},
            { letter: "h", answer: "humo", status: 0, question: "CON LA H. Materia liviana resultante de hacer un fuego"},
            { letter: "i", answer: "iman", status: 0, question: "CON LA I. Objeto magnético que puede atraer al hierro y a otros metales"},
            { letter: "j", answer: "jirafa", status: 0, question: "CON LA J. Mamífero africano de patas y cuello larguísimos"},
            { letter: "k", answer: "kilo", status: 0, question: "CON LA K. Medida de peso que es igual que 1000 gramos"},
            { letter: "l", answer: "lagrima", status: 0, question: "CON LA L. Gota que nos cae de los ojos"},
            { letter: "m", answer: "muerto", status: 0, question: "CON LA M. Que ya no está vivo"},
            { letter: "n", answer: "nublado", status: 0, question: "CON LA N. Cielo lleno de nubes y sin sol"},
            { letter: "ñ", answer: "ñu", status: 0, question: "CON LA Ñ. Ave de América parecida al avestruz pero más pequeña"},
            { letter: "o", answer: "ojal", status: 0, question: "CON LA O. Agujero alargado que se hace en la ropa para abrochar un botón"},
            { letter: "p", answer: "paraguas", status: 0, question: "CON LA P. Instrumento que sirve para protegerse de la lluvia"},
            { letter: "q", answer: "quiosco", status: 0, question: "CON LA Q. Caseta en la que venden periódicos, revistas, tebeos, chuches,... y otras veces flores"},
            { letter: "r", answer: "railes", status: 0, question: "CON LA R. Especie de barras sobre las que se mueven los trenes en las vías"},
            { letter: "s", answer: "salir", status: 0, question: "CON LA S. Pasar de dentro a fuera"},
            { letter: "t", answer: "telaraña", status: 0, question: "CON LA T. Tela en forma de red que hacen las arañas"},
            { letter: "u", answer: "uniforme", status: 0, question: "CON LA U. Traje que algunas personas llevan en su trabajo, como por ejemplo los policías"},
            { letter: "v", answer: "ventilador", status: 0, question: "CON LA V. Aparato que gira y que sirve para dar aire"},
            { letter: "w", answer: "wendy", status: 0, question: "CON LA W. Personaje de cuento que era una niña amiga de Peter Pan"},
            { letter: "x", answer: "extranjero", status: 0, question: "CONTIENE LA X. Persona de otro país"},
            { letter: "y", answer: "yema", status: 0, question: "CON LA Y. Parte amarilla del huevo."},
            { letter: "z", answer: "zurdo", status: 0, question: "CON LA Z. Que tiene más habilidad con la mano izquierda que con la derecha."}
        ], 
        set3: [
            { letter: "a", answer: "alicia", status: 0, question: "CON LA A. Niña que fue al País de las Maravillas"},    
            { letter: "b", answer: "bambi", status: 0, question: "CON LA B. Cervatillo de película que se quedó sin su mamá"},
            { letter: "c", answer: "caperucita", status: 0, question: "CON LA C. Personaje de cuento que llevó una cesta a su abuelita"},    
            { letter: "d", answer: "donald", status: 0, question: "CON LA D. Pato amigo de Mickey Mouse"},
            { letter: "e", answer: "enorme", status: 0, question: "CON LA E. contrario de diminuto"},
            { letter: "f", answer: "feo", status: 0, question: "CON LA F. Contrario de bonito"},
            { letter: "g", answer: "guisante", status: 0, question: "CON LA G. Planta que tiene una semilla comestible, verde, redonda y pequeña"},
            { letter: "h", answer: "hortalizas", status: 0, question: "CON LA H. Vegetales que proceden de las huertas, como las zanahorias o los pimientos"},
            { letter: "i", answer: "insipida", status: 0, question: "CON LA I. Se dice de la comida que no sabe a nada"},
            { letter: "j", answer: "joven", status: 0, question: "CON LA J. Contrario de viejo"},
            { letter: "k", answer: "ketchup", status: 0, question: "CON LA K. Salsa hecha con tomate, vinagre, azúcar y especias"},
            { letter: "l", answer: "lechuga", status: 0, question: "CON LA L. Planta de hojas verdes que se cultiva en huertas y se come en ensalada"},
            { letter: "m", answer: "macedonia", status: 0, question: "CON LA M. Postre realizado con frutas cortadas en trocitos y en almíbar"},
            { letter: "n", answer: "nachos", status: 0, question: "CON LA N. Triángulos mejicanos de maíz frito que se comen como aperitivo mojándolos en salsa"},
            { letter: "ñ", answer: "ñam", status: 0, question: "CON LA Ñ. Onomatopeya de comer"},
            { letter: "o", answer: "oreja", status: 0, question: "CON LA O. Parte de la cabeza del cerdo que se come a la plancha o guisada"},
            { letter: "p", answer: "peter", status: 0, question: "CON LA P. Niño que nunca crecía y que vivía en el país de Nunca Jamás"},
            { letter: "q", answer: "quieto", status: 0, question: "CON LA Q. Que está inmóvil"},
            { letter: "r", answer: "resbalar", status: 0, question: "CON LA R. Escurrirse sobre una superficie"},
            { letter: "s", answer: "spiderman", status: 0, question: "CON LA S. Hombre araña"},
            { letter: "t", answer: "tranquilo", status: 0, question: "CON LA T. Opuesto de nervioso"},
            { letter: "u", answer: "urgencia", status: 0, question: "CON LA U. Sinónimo de emergencia"},
            { letter: "v", answer: "valiente", status: 0, question: "CON LA V. Contrario de cobarde"},
            { letter: "w", answer: "wagneriano", status: 0, question: "CON LA W. Partidario de la música de Wagner"},
            { letter: "x", answer: "exterior", status: 0, question: "CONTIENE LA X. Lo contrario de interior"},
            { letter: "y", answer: "yegua", status: 0, question: "CON LA Y. Hembra del caballo"},
            { letter: "z", answer: "zanahoria", status: 0, question: "CON LA Z. Planta que tiene una raíz comestible alargada de color anaranjado"}
        ],
    }
    const numOfSets = Object.keys(questionsDeck).length;
    const numOfQuestionsPerSet = Object.values(questionsDeck)[0].length;
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
    newRandomSet.length = 14;
    let currentCard = newRandomSet[cardIndex];

    ////////////////

    const playerNameField = document.getElementById('player-name');
    playerNameField.textContent = playerName;
    const playerIcon = document.querySelector('.player-icon');
    playerIcon.src = playerSrcImage;

    setTimeout(() => {

        // TODO: aprovechar para dar instrucciones de teclado en este espacio en blanco
        
        document.body.style.alignItems = 'unset'; // Para evitar deformación de tarjeta de preguntas. Tiene que haber otra solución en flex.
        gameScreen.classList.add('slide-in-top')
        gameScreen.classList.remove('invisible');
    }, 500);

    const letterElement = document.getElementById('letter');
    const questionElement = document.getElementById('question');
    const inputButton = document.getElementById('input-button');
    const inputWrapper = document.getElementById('input-wrapper');
    const pasaButton = document.getElementById('pasa-btn');
    const inputAnswer = document.querySelector('.text-input');

    setTimeout(() => {
        letterElement.style.color = 'rgba(26,59,90,0.9)';
        questionElement.style.color = '#2D2D2D';
        inputWrapper.style.zIndex = 0;

        inputAnswer.focus();

        // Empiezan las preguntas

        renderNextQuestion();

        pasaButton.addEventListener('click', pasapalabra)
        inputButton.addEventListener('click', checkAnswer)     
        
    }, 1000);


    //////////////////////  HELPER FUNCIONES DENTRO DE GAME  //////////////////
    function pasapalabra(){
        cardIndex++;
        currentCard = newRandomSet[cardIndex];
        inputAnswer.value = '';
        renderNextQuestion();
        if(!stillQuestions){
            pasaButton.removeEventListener('click', pasapalabra)
        }
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

    function checkAnswer(){
        if(inputAnswer.value.toLowerCase() === currentCard.answer){
            //RIGHT
            changeLetterColor(currentCard.letter.toUpperCase(), 'green');
            inputAnswer.value = '';
            currentCard.status = 1
            cardIndex++;
            currentCard = newRandomSet[cardIndex];
            totalScore.right++;
            
            
        } else {
            //WRONG
            changeLetterColor(currentCard.letter.toUpperCase(), 'red');
            inputAnswer.value = '';
            currentCard.status = -1;
            cardIndex++;
            currentCard = newRandomSet[cardIndex];
            totalScore.wrong++;

        }
        setTimeout(()=> {
            renderNextQuestion();
            inputAnswer.focus();
            if(!stillQuestions){
                inputAnswer.blur();
                inputButton.removeEventListener('click', checkAnswer);
                pasaButton.removeEventListener('click', pasapalabra);
                clearScreen();
                setTimeout(()=> {
                    renderResultsScreen(totalScore,playerName, playerSrcImage);
                }, 1200);
            }
        }, 400) // pausa entre encendido de letra y próxima pregunta

    }

    function renderNextQuestion(){

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

        letterElement.classList.add('jello-horizontal');
        letterElement.textContent = currentCard.letter.toUpperCase();
        questionElement.textContent = currentCard.question;
        
        setTimeout(()=> {
            letterElement.classList.remove('jello-horizontal');
        }, 200);

    }
    
    function createRandomSetFrom(mainDeck){
        let mainDeckCopy = JSON.parse(JSON.stringify(mainDeck));
        let newRandomSet = [];
    
        for(let i = 0; i < numOfQuestionsPerSet; i++){
          let randomNum = Math.floor((Math.random() * numOfSets) + 1); 
          newRandomSet.push(mainDeckCopy[`set${randomNum}`][i]);
        } 
       
        return newRandomSet;
    }
}



function addEffectOnBackground(e){
    const element = e.target;
    if(element.className === 'p-icon'){
        const element = e.target;
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








