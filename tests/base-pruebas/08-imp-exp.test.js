import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => { 

    test('getHeroeById debe retornar un heroe por ID', () => {
         
        const id = 1;
        const hero = getHeroeById(id);
       
        expect(hero).toEqual({id: 1, name:'Batman', owner: 'DC'});
    });

    test('getHeroeById debe retornar un heroe por ID', () => {
         
        const id = 100;
        const hero = getHeroeById(id);
       
        expect(hero).toBeFalsy();
    });

    //Tarea:

    test('getHeroesByOwner debe regresar heroes de DC', () => {
         
        const owner = 'DC';
        const hero = getHeroesByOwner(owner);
       
        expect(hero.length).toEqual(3)
    });

    test('getHeroesByOwner debe regresar heroes de Marvel', () => {
         
        const owner = 'Marvel';
        const hero = getHeroesByOwner(owner);
       
        expect(hero.length).toEqual(2)

    });
});