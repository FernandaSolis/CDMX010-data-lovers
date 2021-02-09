import { filterByGender, filterBySpecies, filterByStatus, orderData, search } from '../src/data.js'
import { setCard } from '../src/main.js'
const personajes = [
  {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "gender": "Male",
  },
  {
    "id": 6,
    "name": "Abadango Cluster Princess",
    "status": "Alive",
    "species": "Alien",
    "gender": "Female",
  },
  {
    "id": 46,
    "name": "Bill",
    "status": "unknown",
    "species": "Animal",
    "gender": "Male",
  },
];

describe('Funcion que devuelve estados de vida', () => {
  it('El filtro devuelve unknown', () => {
    expect(filterByStatus(personajes, "unknown")).toEqual([personajes[2]]);
  });
});
describe('Funcion que devuelve géneros', () => {
  it('El filtro devuelve femeninos', () => {
    expect(filterByGender(personajes, "Female")).toEqual([personajes[1]]);
  });
});
describe('Funcion que devuelve especies', () => {
  it('El filtro devuelve humanos', () => {
    expect(filterBySpecies(personajes, "Human")).toEqual([personajes[0]]);
  });
});
describe('Funcion que devuelve nombres', () => {
  it('El filtro devuelve busqueda de nombres', () => {
    expect(search(personajes, "Rick Sanchez")).toEqual([personajes[0]]);
  });
});
/* describe('Funcion que devuelve data ordenada', () => {
  it('El filtro devuelve orden alfabético', () => {
    expect(orderData(personajes.name)).toBe([personajes[0, 1, 2]]);
  });
});
describe('Funcion que devuelve data impresa', () => {
  it('Impresion de Cards', () => {
    expect(setCard(personajes.name)).toBe([personajes[0, 1, 2]]);
  });
}); */