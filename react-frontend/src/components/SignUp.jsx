import React, { Component } from 'react'
import CustomerService from '../services/CustomerService';
import 'bootstrap/dist/css/bootstrap.css';

class SignUp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            fname: "",
            lname: "",
            email: "",
            mobile: "",
            address: "",
            pwd: ""
        }
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeMobileHandler = this.changeMobileHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changepasswordHandler = this.changepasswordHandler.bind(this);
        this.save = this.save.bind(this);
    }

    save = (e) => {
        // e.preventDefault();

        let customer = {
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            mobile: this.state.mobile,
            address: this.state.address,
            pwd: this.state.pwd
        };

        console.log('customer =>' + JSON.stringify(customer));

        //api call to save data in data base

        if (customer.fname === "" || customer.lname === "" || customer.email === "" || customer.mobile === "" | customer.address === "" || customer.pwd === "") {
            return
        }
        else {
            CustomerService.createCustomer(customer).then(res => {
                //this.props.history.push('/customers');
                this.props.history.push('/signup');

            });
        }

        //  CustomerService.createCustomer(customer).then(res => {
        //      //this.props.history.push('/customers');
        //      this.props.history.push('/signup');
 
        //  });
         
    }

    changeFirstNameHandler(event) {
        this.setState({
            fname: event.target.value
        });
    }

    changeLastNameHandler(event) {
        this.setState({
            lname: event.target.value
        });
    }

    changeEmailHandler(event) {
        this.setState({
            email: event.target.value
        });
    }

    changeMobileHandler(event) {
        this.setState({
            mobile: event.target.value
        });
    }

    changeAddressHandler(event) {
        this.setState({
            address: event.target.value
        });
    }

    changepasswordHandler(event) {
        this.setState({
            pwd: event.target.value
        });
    }

    cancel() {
        this.props.history.push('/customers');
    }



    render() {
        return (
            <div>
                <section class="vh-100" style={{ background: "#eee" }}>
                    <div class="container h-100">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-lg-12 col-xl-11">
                                <div class="card text-black" style={{ borderRadius: "25px" }}>
                                    <div class="card-body p-md-5">
                                        <div class="row justify-content-center">
                                            <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>


                                                <form>

                                                    <div className='form-group needs-validation' novalidate>
                                                        <label > First Name: </label>
                                                        <input type="text" placeholder='First Name' name='firstName' className='form-control'
                                                            value={this.state.fname} onChange={this.changeFirstNameHandler} required />
                                                    </div>

                                                    <div className='form-group'>
                                                        <label> Last Name: </label>
                                                        <input type="text" placeholder='Last Name' name='lastName' className='form-control'
                                                            value={this.state.lname} onChange={this.changeLastNameHandler} required />
                                                    </div>

                                                    <div className='form-group'>
                                                        <label> Email Id: </label>
                                                        <input type="email" placeholder='Email Address' name='emailId' className='form-control '
                                                            value={this.state.email} onChange={this.changeEmailHandler} required />
                                                    </div>

                                                    <div className='form-group'>
                                                        <label> Mobile: </label>
                                                        <input type="tel" placeholder='Mobile No.' name='mobile' className='form-control'
                                                            value={this.state.mobile} onChange={this.changeMobileHandler} required />
                                                    </div>

                                                    <div className='form-group'>
                                                        <label> Address: </label>
                                                        <textarea placeholder='Address' name='address' className='form-control'
                                                            value={this.state.address} onChange={this.changeAddressHandler} required />
                                                            
                                                    </div>

                                                    <div className='form-group'>
                                                        <label> Password: </label>
                                                        <input type="password" placeholder='Password' name='pwd' className='form-control'
                                                            value={this.state.pwd} onChange={this.changepasswordHandler} required/>
                                                    </div>
                                                    
                                                    <br />
                                                    <div >
                                                        <button className='btn btn-success' onClick={this.save}>Save</button>
                                                        <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                                    </div>



                                                </form>
                                            </div>
                                            <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                                <img src="https://www.whiskaffair.com/wp-content/uploads/2020/08/Kadai-Paneer-2-3.jpg" class="img-fluid" alt="Img" style={{ borderRadius: "150px"}} />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default SignUp