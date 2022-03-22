const submitButton = document.querySelector('.submit');
const cardScores = document.querySelector('.card__scores');
const mainSection = document.querySelector('.main');
const thanksSection = document.querySelector('.thanks');
let isScoredSelected = false;
const number = document.querySelector('.number');
let currentElement = null;

cardScores.addEventListener('click', (e) => {
    currentElement = e.target;
    const classes = e.target.classList;
    
    for (let i = 0; i < classes.length; i++){
        if (classes[i] === 'card__circle--score')
        isScoredSelected = true;
        else if(isScoredSelected && classes[i] === 'click')
        isScoredSelected = false;
    }
 
    for(let i = 0; i < cardScores.children.length;i++){
        cardScores.children[i].classList.remove('click')
    }

    if (isScoredSelected && !e.target.classList.contains('click')){
        e.target.classList.add('click');
    }
    
});

submitButton.addEventListener('click', (e) =>{
    e.preventDefault();

    if(isScoredSelected){
        mainSection.classList.add('hidden')
        thanksSection.classList.remove('hidden')
        number.textContent = currentElement.textContent;

    }
});