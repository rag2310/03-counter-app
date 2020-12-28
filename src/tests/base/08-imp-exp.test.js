import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en el archivo 08-imp-exp', () => {

    test('debe de retornar un heroe por id', () => {

        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);

    })

    test('debe de retornar un undefined si heroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);

    })

    test('debe de retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';

        const heroeDCData = heroes.filter(h => h.owner === owner);

        const heroeDC = getHeroesByOwner(owner);

        expect(heroeDCData).toEqual(heroeDC);
    })

    test('debe de retornar un arreglo con los heroes de Marvel', () => {
        const owner = 'Marvel';

        const heroeMarvel = getHeroesByOwner(owner);

        expect(heroeMarvel.length).toBe(2);
    })


})
