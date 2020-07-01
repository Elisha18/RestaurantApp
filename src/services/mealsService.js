import http from "./httpService";
import config from '../config.json';

const endPoint = config.apiUrl + "/meals";

export function getMeals(){
    return http.get(endPoint);
}

export function addRestraunt(item){
    return http.post(endPoint,item);
}

export function saveMeal(item){
    return http.post(endPoint,item);
}