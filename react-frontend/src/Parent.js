

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ListCustomerComponent from './components/Customer/ListCustomerComponent';
import ViewCustomerComponent from './components/Customer/ViewCustomerComponent';
import CreateCustomerComponent from './components/Customer/CreateCustomerComponent';
import SignUp from './components/SignUp';
import ListMenuComponent from './components/Menu/ListMenuComponent';
import CreateMenuComponent from './components/Menu/CreateMenuComponent';
import ViewMenuComponent from './components/Menu/ViewMenuComponent';
function Parent() {
  return (

    <div>

      <Router>

        {/* <HeaderComponent /> */}
        <div className="container">
          <Switch>
            {/* customer */}
            {/* <Route exact path="/" component={ListCustomerComponent}></Route> */}
            <Route path="/customers" component={ListCustomerComponent}></Route>

            <Route path="/add-customer/:id" component={CreateCustomerComponent}></Route>
            <Route path="/view-customer/:id" component={ViewCustomerComponent}></Route>
            <Route exact path="/signup" component={SignUp}></Route>


            {/* menu */}
            {/* <Route exact path="/" component={ListMenuComponent}></Route> */}
            
            <Route path='/menu' component={ListMenuComponent}></Route>
            <Route path='/add-menu/:foodId' component={CreateMenuComponent}></Route>
            <Route path='/view-menu/:foodId' component={ViewMenuComponent}></Route>

          </Switch>

        </div>


      </Router>
      {/* <FooterComponent /> */}

    </div>




  );
}

export default Parent;
