import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import UserRegisterForm from './components/userRegisterForm';
import RestrauntRegisterForm from './components/restaurantsRegisterForm';
import MenuPage from './components/menuPage';
import AddRestaurantItems from './components/addRestrauntItems';
import AddMenuItems from './components/addMenuItems';
import Logout from './components/logout';
import auth from './services/authService';
import NotFound from './components/notFound';
import ProtectedRoute from './components/common/protectedRoute';
// import order from
import './App.css';
import ViewOrderPage from './components/orderPage';

class App extends Component {
  state = {

  }

  componentDidMount(){
    const user = auth.getCurrentUser();
    console.log(user);
    this.setState({user});
  }

 render(){
   return (
     <React.Fragment>
       <ToastContainer/>
       <NavBar user={this.state.user}/>
        <main className="container">
         <Switch>
              <ProtectedRoute path="/order" component={ViewOrderPage}/>
             <ProtectedRoute path="/addMenuPage/:id" component={AddMenuItems}/>
             <ProtectedRoute path="/restraunt/:id" component = {AddRestaurantItems}/>
             <Route path="/menuPage" 
                  render={props=> <MenuPage {...props} user={this.state.user} /> } />
             <Route path="/login" component={LoginForm} />
             <Route path="/logout" component={Logout} />
             <Route path="/register" component={RegisterForm} />
             <Route path="/restrauntRegisterForm" component={RestrauntRegisterForm}></Route>
             <Route path="/userRegisterForm" component={UserRegisterForm}></Route>
             {/* <Route path="/aboutUs" component={AboutUs}></Route> */}
             <Route path="/not-found" component={NotFound}/> 
             <Route path="/" exact component={Home}></Route>      
         </Switch>
       </main>
       <Footer /> 
     </React.Fragment>
   );
 }
}

export default App;
