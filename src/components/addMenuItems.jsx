import React, { Component } from 'react';
import { getRestaurantById } from '../services/restrauntService';
import Form from './common/form';
import Joi from 'joi-browser';
import { saveMeal } from '../services/mealsService';

class AddMenuItems extends Form {
    state = { 
        data : {
            name:'',
            price:'',
            description:'',
            category:'Veg/Non-veg',
        },
        errors:{},
        restaurant:[]
    }

    async componentDidMount(){
        const resId = this.props.match.params.id; 
        const {data:restaurant} = await getRestaurantById(resId);
        console.log(restaurant);
        this.setState({
            restaurant:[this.mapToViewModelRestraunt(restaurant)]
        });
        console.log(this.state.restaurant);
        


        
    }

    mapToViewModelRestraunt(restraunt){
        return{
            name:restraunt.name,
            type:restraunt.type,
            description:restraunt.description
        }
    }

    // mapToViewModelMeal(meal){
    //     return {
    //         name:meal.name,
    //         price:meal.price,
    //         description:meal.description,
    //         category:meal.category,
    //         restaurant:this.state.restaurant
    //     }

    // }

    doSubmit=async ()=>{
        console.log(this.state.data);
        const restaurant = [...this.state.restaurant]
        let meal = {...this.state.data,restaurant};
        console.log(meal);
        await saveMeal(meal);
        window.location = "/menuPage";
    }

    Schema = {
        _id:Joi.string(), 
        name : Joi.string().required().label("Name"),
        price: Joi.number().required().label("Price"),
        description:Joi.string().required().label("Description"),
        category: Joi.string().required().label("Category"),
    }

    render() { 
        return (
            <div style={{marginTop:'4rem'}} className="col">
            <h3 style={{textAlign:'center'}}>Add Meal Details</h3>
             <form onSubmit={this.handleSubmit} style={{marginBottom:'2rem'}}>
                 {this.renderInput("name","Name")}   
                 {this.renderInput("price","Price")}  
                 {this.renderInput("description","Description")}
                 {this.renderInput("category","Category")}
                 {this.renderButton("Save")}
             </form>
         </div>
          );
    }
}
 
export default AddMenuItems;