import http from './httpService';
import config from '../config.json';

export function getRestaurant(){
   return http.get(config.apiUrl + "/restraunt");
}

export function getRestaurantById(RestaurantId){
   return http.get(config.apiUrl+ "/restraunt/"+RestaurantId);
}

export function saveExistingRestaurant(Restaurant){
   if(Restaurant._id){
      const body = {...Restaurant};
      delete body._id;
      return http.put(config.apiUrl+"/restraunt/"+Restaurant._id,body);
   }

   return http.post(config.apiUrl+"/restraunt",Restaurant);
}