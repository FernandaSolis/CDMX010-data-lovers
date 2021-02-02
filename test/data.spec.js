import {buidlCard} from '../src/main.js';
import {example, anotherExample} from '../src/data.js'


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});

/* 
describe('test para revisar que builCard efectivamente sea una funcion', () => {
  it('es una funcion', () => {
    expect(typeof buidlCard).toBe('undefined');
  });

  it('returns `buildCard`', () => {
    expect(buidlCard()).toBe('character');
  });
});  */