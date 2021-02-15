
const playerSelectorScreen = document.getElementById('player-selector-screen');
const selectPlayerIcon = document.getElementById('select-player-icon');
const inputPlayerNameScreen = document.getElementById('input-player-name-screen');
const gameScreen = document.querySelector('.game-screen');

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
document.addEventListener('click', (e) => {
    
    const element = e.target;
    const parent = element.parentNode;
    const backgroundColor = element.previousElementSibling;

    if(element.className === 'p-icon'){
        document.removeEventListener('mouseover', addEffectOnBackground);
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

        parent.classList.add('scale-in-center');

        const playButton = document.getElementById('play-button');
        setTimeout(() => playButton.classList.add('heartbeat'), 1500);

        
        playButton.addEventListener('click', (e) => {
            inputPlayerNameScreen.classList.add('invisible');
            inputPlayerNameScreen.classList.remove('one-player-grid');
            let playerName = formatName(document.getElementById('user-name').value);
            const playerSrcImage = parent.lastElementChild.src;
        
            startGame(playerName, playerSrcImage);
        });
    }
});

function startGame(playerName, playerSrcImage){
    setTimeout(() => {
        gameScreen.classList.add('slide-in-top')
        gameScreen.classList.remove('invisible');

    }, 500);
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








