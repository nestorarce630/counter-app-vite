import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Pruebas en 05-funciones', () => { 

    test('getUser debe de retornar un objecto', () => { 
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser()
        console.log(user)

        expect(testUser).toStrictEqual(user);
    })

    test('getUsuarioActivo debe de retornar un objecto', () => { 
           
        const name = 'Pedro'
        
        const testActiveUser = {
            uid: 'ABC567',
            username: name
        }
        
        const ActiveUser = getUsuarioActivo(name)
        console.log(ActiveUser)

        expect(testActiveUser).toStrictEqual(ActiveUser);

    })
});
