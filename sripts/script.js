const submitButton = document.querySelector('.submit');
const cardScores = document.querySelector('.card__scores');
const mainSection = document.querySelector('.main');
const thanksSection = document.querySelector('.thanks');
let isScoredSelected = false;


cardScores.addEventListener('click', (e) => {
    console.log(e.target)

    //Obtener classes del elemento clickeado
    const classes = e.target.classList;
    
    //Si el elemento es un card__circle hay un elemento seleccionado
    for (let i = 0; i < classes.length; i++){
        if (classes[i] === 'card__circle--score')
        isScoredSelected = true;
        else if(isScoredSelected && classes[i] === 'click')
        isScoredSelected = false;
    }

    //si se selecciona un elemento borra click de todos los elementos
    
    for(let i = 0; i < cardScores.children.length;i++){
        // cardScores[i].classList.remove('click')
        cardScores.children[i].classList.remove('click')
    }

    //Si es elemento valido y no tiene clase click agregala

    if (isScoredSelected && !e.target.classList.contains('click')){
        e.target.classList.add('click');
    }
    
});

submitButton.addEventListener('click', (e) =>{
    e.preventDefault();

    if(isScoredSelected){
        console.log('Is working')
        mainSection.classList.add('hidden')
        thanksSection.classList.remove('hidden')
    }

    console.log('not working')
});