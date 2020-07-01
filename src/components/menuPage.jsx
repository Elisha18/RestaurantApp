import React, { Component } from 'react';
import {getMeals} from '../services/mealsService';
import Pagination from './common/pagination';
import {paginate} from '../util/paginate';
import SearchBox from './common/searchBox';
import Table from './common/table';
import auth from '../services/authService';
import {Link} from 'react-router-dom';

class MenuPage extends Component {
    state = { 
        meals:[],
        restaurant:[],
        pageSize:4,            
        currentPage:1,
        searchQuery:"",
        user:{},
        
    }


    async componentDidMount(){
        const {data:meals} = await getMeals();
        console.log(meals);
        // console.log();
        this.setState({
            meals
        })


        const user = auth.getCurrentUser();
        this.setState({
            user : user || {}
        });
        console.log(this.state.user)
        
        

    }

    handlePagination=(page)=>{
        this.setState({
            currentPage:page
        });
        
   }

    handleSearch = (e)=>{
        this.setState({
            searchQuery: e.currentTarget.value,
            // selectedRestaurant:null,
            currentPage:1
        });
    }
    
   

    render() { 
        const {pageSize,currentPage,meals,searchQuery,user,role} = this.state;
        // console.log(this.state.meals.length)
        if(this.state.meals.length === 0) 
            return <h4 className="head">There are no meals in the Database</h4>
        
        let filtered = meals;
        if(searchQuery){
            filtered = meals.filter(m=>
               m.name.toLowerCase().startsWith(searchQuery.toLowerCase())
            )
        }
        const data = paginate(filtered,currentPage,pageSize);
        
        return ( 
        <div style={{marginTop:'4rem'}}>
            <div className="d-flex justify-content-between align-items-baseline">

            
                <h3 style={{marginBottom:'2rem'}}>Click your Pick !!</h3>
                {user && user.role=="Admin" &&
                    <Link className = "btn btn-danger" to={`/restraunt/new`}>Add New Restraunt</Link>
                }
            </div>
            <SearchBox 
                    onChange={this.handleSearch} 
                    value={searchQuery}   
            />
            <Table 
                 data = {data}
                 
            />
            <Pagination
                    count = {this.state.meals.length}
                    pageSize = {pageSize}
                    currentPage = {currentPage}
                    onClick = {this.handlePagination}
            />
        </div>
         );
    }
}
 
export default MenuPage;