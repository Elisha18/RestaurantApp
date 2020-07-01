import http from "./httpService";
import config from '../config.json';

const endPoint = config.apiUrl + "/user";

// export function getUsers(){
//     return http.get(endPoint);
// }

export function register(user){
    return http.post(endPoint,{
        email: user.email,
        password: user.password,
        name: user.name,
        role: user.role
    });
}