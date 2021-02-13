
// const gameScreen = document.querySelector('.container-game');
const selectPlayersScreen = document.querySelector('.container-select-players');
const selectPlayersIcon = document.querySelector('#select-player-icon');

// players en delay: 1 seg
setTimeout(() => selectPlayersScreen.style.display="grid", 1000);
// select icon en delay 1.2 seg
setTimeout(() => selectPlayersIcon.style.display="block", 1500);

document.addEventListener('mouseover', (e) => {
    const element = e.target;
    if(element.className === 'p-icon') element.previousElementSibling.style.backgroundColor = '#cbdffc';    
});
document.addEventListener('mouseout', (e) => {
    const element = e.target;
    if(element.className === 'p-icon') element.previousElementSibling.style.backgroundColor = '#ecf4ff';    
});








