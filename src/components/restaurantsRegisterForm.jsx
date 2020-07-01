import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import * as userService from '../services/userService';
import auth from '../services/authService';

class UserRegisterForm extends Form {
    state = { 
        data:{name:'',email:'',password:'',role:'Admin'},
        errors:{}
    }

    Schema = {
        name : Joi.string().required().label("Name"),
        email : Joi.string().required().label("Email").email({ minDomainAtoms: 2 }),
        password : Joi.string().required().label("Password").min(5),
        role: Joi.string().required().label("Role")
    }

    doSubmit=async ()=>{
        try {
           const response =  await userService.register(this.state.data);
            auth.loginWithJwt(response.headers["x-auth-token"]);
           window.location = "/menuPage";
        } catch (ex) {
            if(ex.response && ex.response.status === 400){
                const errors = {...this.state.errors};
                errors.email = ex.response.data;
                this.setState({
                    errors
                });
            }
        }
        
    }

    render() { 
        return ( 
            <div className="col" style={{marginTop:'4rem'}}>
                <h3 style={{textAlign:'center'}}>Registration Form For Restraunt Managers</h3>
                <form onSubmit={this.handleSubmit} style={{marginBottom:'2rem'}}>
                    {this.renderInput("email","Email")}   
                    {this.renderInput("password","Password","password")}  
                    {this.renderInput("name","Name")}
                    {this.renderInput("role","Role",)}
                    {this.renderButton("Register")}
                </form>
            </div>
        );
    }
}
 
export default UserRegisterForm;