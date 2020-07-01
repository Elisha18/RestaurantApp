import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import auth from '../../services/authService';
import _ from 'lodash';

class Table extends Component {
    state={
        user:{},
        id:''
    };

    componentDidMount(){
        const user = auth.getCurrentUser();
        this.setState({
            user: user || {}
        });
        console.log(this.state.user)
    }

    handleClick=(itemId)=>{
        const {user} = this.state;
        
        if(!user){
            window.location = "/login";
        }

        
        // window.location=`/orders`;
    }

    render(){
    const {data} = this.props;
    const {user} = this.state;

    return ( 
        <table className="table" style={{marginTop:'2rem'}}>
            <thead>
                <tr>
                    <th>MEALS</th>
                    <th>PRICE</th>
                    <th>CATEGORY</th>
                    <th>RESTRAUNT</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.map(item=>(
                    <tr key={item._id}>
                        <td>{_.get(item,"name","[Name Unknown]")}</td>                                                     
                        <td>{item.price}</td> 
                        <td>{item.category}</td>
                        <td><Link to={`/restraunt/${_.get(item,"restaurant[0]._id")}`}>{_.get(item,"restaurant[0].name")}</Link></td>
                        {!user || user.role=="User" &&
                        <td><Link className="btn btn-primary" onClick={()=>this.handleClick(item._id)}>Add to Cart</Link></td>
                        }
                        {user && user.role=="Admin" &&
                        <td><Link className="btn btn-success" to={`/addMenuPage/${_.get(item,"restaurant[0]._id")}`}>Add Meal</Link></td>
                        }
                        
                    </tr>
                ))}  
            </tbody>
        </table>
     );
}
}
 
export default Table;