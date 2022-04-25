
import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateCustomerComponent from './components/Customer/CreateCustomerComponent';
import ListCustomerComponent from './components/Customer/ListCustomerComponent';
import ViewCustomerComponent from './components/Customer/ViewCustomerComponent';
import FooterComponent from './components/FooterComponent';
import Home from './components/Home';
import Login from './components/LoginForm2';
import CreateMenuComponent from './components/Menu/CreateMenuComponent';
import ListMenuComponent from './components/Menu/ListMenuComponent';
import ViewMenuComponent from './components/Menu/ViewMenuComponent';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/SignUp';

class App extends Component {

	render() {
		return (
			<div>

				<Router>
					<div>
					<Switch>
						<Route path="/log" component={Login}></Route>
						<Route path="/signup"><SignUp/></Route>
						<Route  exact path="/"><Navbar/> <Home/> <FooterComponent/> </Route>
						<Route path="/customers"><Navbar/><ListCustomerComponent/></Route>
						<Route path="/add-customer/:id" component={CreateCustomerComponent}></Route>
						<Route path="/view-customer/:id" component={ViewCustomerComponent}></Route>
						<Route path='/menu' component={ListMenuComponent}></Route>
						<Route path='/add-menu/:foodId' component={CreateMenuComponent}></Route>
						<Route path='/view-menu/:foodId' component={ViewMenuComponent}></Route>
					</Switch>
					</div>
				</Router>
			</div>

		);
	}
}

export default App;
