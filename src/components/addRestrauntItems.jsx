import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import {getRestaurantById, saveExistingRestaurant} from '../services/restrauntService';


class AddRestaurantItems extends Form {
    state = { 
        errors:{},
        data:{name:'',type:'',description:''}
     }

     Schema = {
        _id:Joi.string(), 
        name : Joi.string().required().label("Name"),
        type: Joi.string().required().label("Restraunt Type"),
        description:Joi.string().required().label("Description")
     }

    async componentDidMount(){
        const restrauntId = this.props.match.params.id;
        if(restrauntId==="new") return;

        const {data:restaurant} = await getRestaurantById(restrauntId);
        console.log(restaurant);
        this.setState({
            data: this.mapToViewModel(restaurant)
        });
    }

    mapToViewModel(restaurant){
        return{
            _id:restaurant._id,
            name:restaurant.name,
            type:restaurant.type,
            description:restaurant.description
        }
    }

    doSubmit = async ()=>{
        await saveExistingRestaurant(this.state.data);
        window.location = "/menuPage"
    }

    render() { 
        return (  
            <div style={{marginTop:'4rem'}}>
               <h3 style={{textAlign:'center'}}>Restraunt Details</h3>
                <form onSubmit={this.handleSubmit} style={{marginBottom:'2rem'}}>
                    {this.renderInput("name","Name")}   
                    {this.renderInput("type","Type")}  
                    {this.renderInput("description","Description")}
                    {this.renderButton("Save")}
                </form>
            </div>
        );
    }
}
 
export default AddRestaurantItems;