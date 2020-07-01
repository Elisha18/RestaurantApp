import React from 'react';
import {Link} from 'react-router-dom';

const RegisterForm = () => {
    return (
        <div style={{marginTop:'11rem',marginBottom:'8.5rem',textAlign:'center'}} className="col">
            <Link className="btn btn-primary" to={`/userRegisterForm`}>User Register</Link>
            <br/>
            <br/><br/>
            <Link className="btn btn-primary" to={`/restrauntRegisterForm`}>Restraunt Register</Link>
        </div>
      );
}
 
export default RegisterForm ;

