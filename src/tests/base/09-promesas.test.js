import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => {

    test('getHeroeByIdAsync debe retornar un heroe async', (done) => {

        const id = 1;
        getHeroeByIdAsync(id).then(h => {
            expect(h).toBe(heroes[0]);
            done();
        });
    });

    test('debe de obtener un error si el herore por id no existe', (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .catch(e => {
                expect(e).toBe('No se pudo encontrar el héroe');
                done();
            })

    });

})
