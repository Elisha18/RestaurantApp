import React, { Component } from 'react';
import Joi from "joi-browser";
import Input from './input';
import Select from './select';

class Form extends Component {
    state = { 
        data:{},
        errors:{}
    }

    validate=()=>{
        const {error}=Joi.validate(this.state.data,this.Schema,{abortEarly: false});
        if(!error) return null;

        const errors = {};
        for(let item of error.details) errors[item.path[0]] = item.message;
       
        return errors;
    }

    validateProperty=({name,value})=>{
        const obj={[name]:value};
        const schema = {[name]: this.Schema[name]};
        const {error}=Joi.validate(obj,schema);
        //console.log(error);

        if(!error) return null;
        return error ? error.details[0].message : null; 
    }

    handleSubmit= (e)=>{
        e.preventDefault();
        const errors = this.validate();
        this.setState({
            errors : errors || {}
        });
        if(errors) return;

        this.doSubmit();
    }

    handleChange = (e)=>{
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(e.currentTarget);
        if(errorMessage)
            errors[e.currentTarget.name] = errorMessage;
        else
            errors[e.currentTarget.name] = ""; 


        const data = {...this.state.data};
        data[e.currentTarget.name] = e.currentTarget.value;
        this.setState({
            data, errors 
        });
    }

    renderButton(label){
        return <button disabled={this.validate()} className="btn btn-primary">
                 {label}
               </button>          
    }

    renderInput(name,label,type = "text"){
        const {data,errors} = this.state;
       return( 
            <Input
                type = {type}
                value={data[name]}
                onChange = {this.handleChange}
                name={name}
                label = {label}
                errors = {errors[name]}
            />
       );
    }

    renderSelect(name,label,options){
        const {data,errors} = this.state;
        return(
            <Select 
                name={name}
                value = {data[name]}
                label = {label}
                options = {options}
                onChange = {this.handleChange}
                errors = {errors[name]}
            />
        )
    }

    
}
 
export default Form;