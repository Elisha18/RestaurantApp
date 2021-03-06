import React from 'react';

const Select = (props) => {
    const {name,options,label,errors, ...rest} = props;
    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name} {...rest} className="form-control">
                <option value=""/>
                {options.map(option=>{
                   return <option value={option._id} key={option._id}>{option.name}</option>
                })}
            </select>
            {errors && <div className="alert alert-danger">{errors}</div> }
        </div>
        
     );
}
 
export default Select;