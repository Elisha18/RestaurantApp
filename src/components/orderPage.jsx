import React, { Component } from 'react';
import auth from '../services/authService';
import {getOrder} from '../services/orderService';
import _ from 'lodash';

class ViewOrderPage extends Component {
    state = { 
        data:[],
     }

    async componentDidMount(){
        const user = auth.getCurrentUser();

        const {data:order} = await getOrder();
        // console.log(order.user);
        const id = _.get(order,"[3].user._id")
        
        // const data = order.user.filter(u=>u._id===user._id);
        console.log(id);
        this.setState({
            data:order
        })
    }

    render() { 
        const {data} = this.state;
        return ( 
            <div className="col" style={{marginTop:'4rem'}}>
            <table className="table">
                <thead>
                    <th>Restaurant Name</th>
                    <th>Item Ordered</th>
                    <th>Price</th>
                    <th>Category</th>
                </thead>
                <tbody>
                    {data.map(item=>(
                        <tr key={item._id}>
                            <td>{_.get(item,"restaurant.name")}</td>
                            <td>{_.get(item,"meal[0].name")}</td>
                            <td>{_.get(item,"meal[0].price")}</td>
                            <td>{_.get(item,"meal[0].category")}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
         );
    }
}
 
export default ViewOrderPage;