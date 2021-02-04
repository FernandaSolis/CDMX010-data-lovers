// estas funciones son de ejemplo
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
//van a tomar los valores que se les asgine (parametros)
/* export const filterCharacters = (characters, filter, value) => {
  //Filter recibe una funcion highorderfunction
  const filteredCharacters = characters.filter((character) => {
    return character[filter] === value // true | false
  })

  return filteredCharacters
}
 */
//Filter Estado de vida
/* export const filterByStatus = () => {
  return 'Hola';

};
console.log (filterByStatus); */


//  export const filterByGender = (results,) => {
//    console.log(results)
//   //Filter recibe una funcion highorderfunction 
//   const filteredByGender = results.filter((result) => {
//     return result["gender"] === "Female" // true | false
  
//   })
//   return filteredByGender
// } 

//export const filterByGender = (results, gender) => results.filter(result => result.gender === gender);

export const filterByGender = function(results, gender) { 
  const filteredData = results.filter(function(result) {
    return result.gender === gender;  
  });
  return filteredData;
};


/* export const filteredByGender = () => {
  //Filter recibe una funcion highorderfunction
  const femaleGender= results => results.gender == "female";
  const filteredByGender = results.filter(femaleGender)
  return filteredByGender
}
  console.log(filteredByGender) */

