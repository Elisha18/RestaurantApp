import React from 'react';

const Input = (props) => {

    return ( 
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            <input 
                // ref={this.username} //reference for this input element
                value={props.value} 
                id={props.name} 
                type={props.type} 
                className="form-control"
                name={props.name}  //name should be same as defined in 'account' object in state.
                onChange = {props.onChange}
            />
            {props.errors && <div className="alert alert-danger">{props.errors}</div>}

            
        </div>
     );
}
 
export default Input;