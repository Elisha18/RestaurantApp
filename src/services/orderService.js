import http from "./httpService";
import config from '../config.json';

const endPoint = config.apiUrl+"/order";

export function getOrder(){
    return http.get(endPoint);
}

export function getRestraunt(){
    return http.get(endPoint+"/restaurant",)
}