import { KJUR } from 'jsrsasign';

export function fakeJwtToken() {

    const header = { alg: 'HS256', typ: 'JWT' };
    const now = KJUR.jws.IntDate.get('now');
    const exp = KJUR.jws.IntDate.get('now + 1hour');

    const payload = {
        username: 'username',
        email: 'username@example.com',
        iat: now, 
        exp
    };

    const secretKey = 'secret';
    
    const token = KJUR.jws.JWS.sign('HS256',header,payload,secretKey);

    return token;
}