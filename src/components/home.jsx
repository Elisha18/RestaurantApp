import React, { Component } from 'react';
import card1 from './css/image/card_1.jpg';
import card2 from './css/image/card_2.jpg';
import card3 from './css/image/card_3.jpg';
import {Link} from 'react-router-dom';
import './css/home.css'
class Home extends Component {

    handleClick=()=>{
        this.props.history.push("/menuPage");
    }

    render() { 
        return ( 
            <div>
            <h3 style={{marginTop:"4rem",textAlign:'center'}}>Register to start exploring!!</h3>
            
            <div className="home-container">
            <div className="row">
                {/* Card-1 layout */}
                <div className="col-4">
                <div className="card" style={{width:'18rem'}}>
                <img className="card-img-top" style={{width:'286px',height:'180px'}} src={card1} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="#" className="btn btn-primary" onClick={this.handleClick}>Explore Now</Link>
                </div>
                </div>
                </div>

                {/* card-2 layout  */}
                <div className="col-4">
                <div className="card" style={{width:'18rem'}}>
                <img className="card-img-top" style={{width:'286px',height:'180px'}} src={card2} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="#" className="btn btn-primary" onClick={this.handleClick}>Explore Now</Link>
                </div>
                </div>
                </div>

                {/* card-2 layout  */}
                <div className="col-3">
                <div className="card" style={{width:'18rem'}}>
                <img className="card-img-top" style={{width:'286px',height:'180px'}} src={card3} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="#" className="btn btn-primary" onClick={this.handleClick}>Explore Now</Link>
                </div>
                </div>
                </div>
            </div>
            </div>
            </div>
         );
    }
}
 
export default Home;