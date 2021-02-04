import dataRM from './data/rickandmorty.js';
/* import { alphabet } from './data.js';

import { filterByGender, filterByStatus } from './data.js'*/
import { filterByGender } from './data.js'
/* import {filterByStatus} from './data.js' */

document.addEventListener('DOMContentLoaded',function(){
    buildCard(dataRM.results)
    
})
let characterCard=document.querySelector('.character')

 //Imprime Card de personajes
 function buildCard(data){
    
    data.forEach(character => {
        let {image,name,id}=character;

        let setCard=document.createElement('div')
            setCard.innerHTML=`
            <div class="characterCard">
                <div class="imageCharacter">
                    <img src = "${image}"/> </div>
                <div class="info">
                    <h1 class="name">${name}</h1>
                    <p class="number"> # ${id} </p>
                    <button id=${id}>ver detalles</button>
                </div>
            </div> 
        ` 
        characterCard.appendChild(setCard) 
    });

}



const radioFemale = document.getElementById('female');
radioFemale.addEventListener('click', (event) => {
    /* const gender = document.getElementById('female').value; */
    const gender = event.target.value;     
    const filteredCharacters = filterByGender(dataRM.results, gender) 
    characterCard.innerHTML=''
    buildCard(filteredCharacters)
})

/* document.querySelector('#type').addEventListener('click', () => {
    radio=document.querySelector('#type').value;
    buildSelect(radio);
}); */

/* const selector = document.getElementById('selector')

selector.addEventListener('change', (event) => {
    const gender = event.target.value
    const filteredCharacters = filterByGender(dataRM.results, gender)

    buildCard(filteredCharacters)
})

//Filter Estado de vida


/*
selector2.addEventListener('change', (event) => {
    const status = event.target.value
    const filteredCharacters = filterByStatus(dataRM.results, status)

    buildCard(filteredCharacters)
})
 */

//  console.log(filterByGender(dataRM.results, 'Female'))


//  filterByStatus()