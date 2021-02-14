
// const gameScreen = document.querySelector('.game-screen');
const playerSelectorScreen = document.getElementById('player-selector-screen');
const selectPlayerIcon = document.getElementById('select-player-icon');

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

document.addEventListener('mouseover', darkenBackgroundColor);
document.addEventListener('mouseout', lightenBackgroundColor);
document.addEventListener('click', (e) => {
    
    const element = e.target;
    const parent = element.parentNode.parentNode;
    const players = Array.from(parent.children).slice(0,-1);
    if(element.className === 'p-icon'){
        document.removeEventListener('mouseover', darkenBackgroundColor);
        selectPlayerIcon.style.display = 'none';
        for(player of players){
            if(player.id !== element.parentNode.id){
                player.style.display = "none";
                playerSelectorScreen.classList.remove('multi-player-grid');
                playerSelectorScreen.classList.add('one-player-grid');
            }
        }
        element.parentNode.style.gridArea = 'auto';
        element.previousElementSibling.style.width = '200%';
        element.previousElementSibling.style.height = '93%';
        element.previousElementSibling.style.left = '-50%'
        element.style.marginTop = '20px';
        element.style.cursor = 'auto';
    }
    
});


function darkenBackgroundColor(e){
    const element = e.target;
    if(element.className === 'p-icon') element.previousElementSibling.style.backgroundColor = '#cbdffc';    
}
function lightenBackgroundColor(e){
    const element = e.target;
    if(element.className === 'p-icon') element.previousElementSibling.style.backgroundColor = '#ecf4ff';    
}








