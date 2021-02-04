// estas funciones son de ejemplo
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
//van a tomar los valores que se les asigne (parametros)
/* export const filterCharacters = (characters, filter, value) => {
  //Filter recibe una funcion highorderfunction
  const filteredCharacters = characters.filter((character) => {
    return character[filter] === value // true | false
  })
  return filteredCharacters
}
 */
//  export const filterByGender = (results,) => {
//    console.log(results)
//   //Filter recibe una funcion highorderfunction 
//   const filteredByGender = results.filter((result) => {
//     return result["gender"] === "Female" // true | false
  
//   })
//   return filteredByGender
// } 

//Filter Status
export const filterByStatus = function(results, status) { 
  const filteredStatus = results.filter(function(result) {
    return result.status === status;  
  });
  return filteredStatus;
};

//Filter Gender
//export const filterByGender = (results, gender) => results.filter(result => result.gender === gender);
export const filterByGender = function(results, gender) { 
  const filteredData = results.filter(function(result) {
    return result.gender === gender;  
  });
  return filteredData;
};

//Filter Species
export const filterBySpecies = function(results, species) { 
  const filteredSpecies = results.filter(function(result) {
    return result.species === species;  
  });
  return filteredSpecies;
};

