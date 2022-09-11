import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Profilepage from './ProfilePage/profilePage';
import LandingPage from './LandingPage/landingPage';
import Login from './Login/login';
import Signup from './Signup/signup';
import HomePageOwner from './Home/Home-Owner';
import HomePageUser from './Home/Home-User';
import UserTransactions from './UserTransactions/UserTransactions'
import HomePageAdmin from './Home/Home-Admin'
import UserTripDetails from './UserTripDetails/UserTripDetails';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import UserTrackingDashboard from './UserTrackingDashboard';
import Map from './Map';
import Speedometer from "./Speedometer";
import TripStatus from "./TripStatus";

class Main extends Component {
  render() {
    return (
      <div>
        {/*Render Different Component based on Route*/}
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/profile' component={Profilepage} />
          <Route path='/home-owner' component={HomePageOwner} />
          <Route path='/home-user' component={HomePageUser} />
          <Route path='/userTransactions' component={UserTransactions} />
          <Route path='/userTripDetails' component={UserTripDetails} />
          <Route path='/profileInfo' component={ProfileInfo} /> 
          <Route path="/userTrackingDashboard" exact component={UserTrackingDashboard} />               
          <Route path="/map" exact component={Map}/>                  
          <Route path="/Speedometer" exact component={Speedometer}/>   
          <Route path="/TripStatus" exact component={TripStatus}/>         
        </Switch>
      </div>
    );
  }
}

export default Main;
