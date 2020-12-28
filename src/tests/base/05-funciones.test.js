import { getUser, getUsuarioActivo} from "../../base/05-funciones"

describe('Pruebas 05-funciones', () => {

    test('getUser debe de retornar un objeto ', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);
    })

    test('getUsuarioActivo debe de retonar un objeto', () => {
        const nombre = 'Rodolfo';
        
        const usuarioTest ={
            uid: 'ABC567',
            username: nombre
        }

        const usuario = getUsuarioActivo(nombre);

        expect(usuario).toEqual(usuarioTest);
    })
    

})
