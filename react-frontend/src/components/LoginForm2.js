import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
//import ApiService from '../../ApiService';
import CustomerService from '../services/CustomerService';
import {Link} from "react-router-dom";


export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
          customer: []
        };
    
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changepasswordHandler = this.changepasswordHandler.bind(this);
    
    
      }
    
      changeEmailHandler(event) {
        this.setState({
          email: event.target.value
        });
      }
    
      changepasswordHandler(event) {
        this.setState({
          password: event.target.value
        });
      }
    
      saveOrUpdateCustomer = (e) => {
        e.preventDefault();
    
        let customer = {
    
          email: this.state.email,
          pwd: this.state.password,
    
    
        };
    
         CustomerService.Login(customer).then(res => {
    
          this.setState({
            customer: res.data
          });
    
          if (this.state.customer.length === 0) {
            console.log(this.state.customer);
            alert("Invalid credentials");
            this.props.history.push('/');
          }
          else {
            console.log(this.state.customer);
            alert("login succesfull..!!!");
            this.props.history.push('/home');
          
          }
    
    
        });
    
    
      }

    render() {
        return (
            <div>
                <section class="vh-100">
                    <div class="container-fluid h-custom">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-md-9 col-lg-6 col-xl-5">
                            </div>
                            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mx-5 my-5">
                                <form onSubmit={this.saveOrUpdateCustomer}>
                                    <div class="form-outline mt-5 mx-5">
                                        <input type="text" id="form3Example3" name="emailOrUsername" class="form-control form-control-lg"
                                            placeholder="Email address"
                                            value={this.state.email}
                                            onChange={this.changeEmailHandler} />
                                        <label class="form-label" for="form3Example3">Email address</label>
                                    </div>

                                    <div class="form-outline  mt-3 mx-5">
                                        <input type="password" id="form3Example4" class="form-control form-control-lg"
                                            placeholder="Enter password"   name="password"
                                            value={this.state.password}
                                            onChange={this.changepasswordHandler}/>
                                        <label class="form-label" for="form3Example4">Password</label>
                                    </div>

                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="form-check mb-0 mx-5">
                                            <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                            <label class="form-check-label" for="form2Example3">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>

                                    <div class="text-center text-lg-start mt-4 pt-2 mx-5">
                                        <button type="submit" class="btn btn-primary btn-lg"
                                            style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }} >Login</button>
                                        <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account?  <Link to="/signup">Register</Link></p>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                    {/* <div
    class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
   
    <div class="text-white mb-3 mb-md-0">
      Copyright © 2020. All rights reserved.
    </div>

    <div>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-google"></i>
      </a>
      <a href="#!" class="text-white">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </div>
  </div> */}
                </section>
            </div>
        )
    }
}
export default Login;