//import dataRM from './rickandmorty.js';

import dataRM from './data/rickandmorty.js';
//import { filterByGender, filterByStatus } from './data.js'

document.addEventListener('DOMContentLoaded',function(){
    buildCard(dataRM.results)
})
let characterCard=document.querySelector('.character')

/* const selector = document.getElementById('selector')

selector.addEventListener('change', (event) => {
    const gender = event.target.value
    const filteredCharacters = filterByGender(dataRM.results, gender)

    buildCard(filteredCharacters)
})

selector2.addEventListener('change', (event) => {
    const status = event.target.value
    const filteredCharacters = filterByStatus(dataRM.results, status)

    buildCard(filteredCharacters)
})
 */
function buildCard(data){
    
    data.forEach(characters => {
        let imageCharacter=document.createElement('img')
        imageCharacter.src=`${characters.image}`
        characterCard.appendChild(imageCharacter)

        let titleName=document.createElement('h1')//<p></p>
        titleName.textContent=`${characters.name}` //aqui usar inner html con los  <p>id nombre</p>
        characterCard.appendChild(titleName) //<div class="character"> <p>nombre</p> </div>

        let parrafoId=document.createElement('p')
        parrafoId.textContent=`${characters.id}`
        characterCard.appendChild(parrafoId)


    });

}

