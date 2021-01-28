// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
//van a tomar los valores que se les asgine (parametros)
export const filterCharacters = (characters, filter, value) => {
  //Filter recibe una funcion highorderfunction
  const filteredCharacters = characters.filter((character) => {
    return character[filter] === value // true | false
  })

  return filteredCharacters
}