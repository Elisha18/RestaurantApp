import React from 'react';
import Joi from "joi-browser";
import Form from "./common/form";
import auth from '../services/authService';

class LoginForm extends Form {
    constructor(props){
        super(props);
        this.state = {
            data : {email:'', password:''},
            errors : {},
        };
    }

    Schema = {
        email: Joi.string().required().label("Email").email(),
        password: Joi.string().required().label("Password")
    };


    
    doSubmit = async ()=>{
        try {
            const {data} = this.state;
            await auth.login(data.email, data.password);
            window.location = "/menuPage";   // to make a full reload of the application in order to display the user name of the navbar
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
        // const {data,errors} = this.state;
        return ( 
            <div style={{marginTop:'4rem'}}>
                <h3 style={{textAlign:'center'}}>Restraunt/User Login</h3>
                <form onSubmit={this.handleSubmit} style={{marginBottom:'7.5rem'}}>
                    {this.renderInput("email","Email")}
                    {this.renderInput("password","Password","password")}
                    {this.renderButton("Login")}
                </form>
            </div>
            
        );
    }
}
 
export default LoginForm;