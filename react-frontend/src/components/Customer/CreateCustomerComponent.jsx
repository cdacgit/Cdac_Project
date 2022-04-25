import React, { Component } from 'react'
import CustomerService from '../../services/CustomerService';
import 'bootstrap/dist/css/bootstrap.css';

class CreateCustomerComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            //step2 
            //(if id is _add request is for addCust and if id is any positive no then req. is for updateCust)
            id: this.props.match.params.id,
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
        this.changeMobileHandler=this.changeMobileHandler.bind(this);
        this.changeAddressHandler=this.changeAddressHandler.bind(this);
        this.changepasswordHandler=this.changepasswordHandler.bind(this);
        this.saveOrUpdateCustomer = this.saveOrUpdateCustomer.bind(this);
    }

    //step3
    componentDidMount() {

        //step4

        if (this.state.id === '_add') {
            return
        }
        else {
            CustomerService.getCustomerById(this.state.id).then((res) => {
                let customer = res.data;
                this.setState({
                    
                    fname: customer.fname,
                    lname: customer.lname,
                    email: customer.email,
                    mobile: customer.mobile,
                    address: customer.address,
                    pwd: customer.pwd
                });
            });
        }
    }


    saveOrUpdateCustomer = (e) => {
        e.preventDefault();

        let customer = {
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            mobile:this.state.mobile,
            address:this.state.address,
            pwd:this.state.pwd
        };

        console.log('customer =>' + JSON.stringify(customer));

        //step5

        if (this.state.id === '_add') {

            CustomerService.createCustomer(customer).then(res => {
                this.props.history.push('/customers');
            });
        }
        else {


            CustomerService.updateCustomer(customer, this.state.id).then(res => {
                this.props.history.push('/customers');
            });

        }
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

    changeMobileHandler(event){
        this.setState({
            mobile: event.target.value
        });
    }

    changeAddressHandler(event){
        this.setState({
            address:event.target.value
        });
    }

    changepasswordHandler(event){
        this.setState({
            pwd:event.target.value
        });
    }

    cancel() {
        this.props.history.push('/customers');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className='text-center'>Add Customer</h3>
        }
        else {
            return <h3 className='text-center'>Update Customer</h3>
        }
    }

    render() {
        return (
            <div>
                <br></br>
                <div className='container'>
                    <div className='row'>

                        <div className='card col-md-6 offset-md-3 offset-md-3 '>
                            {
                                this.getTitle()
                            }
                            <div className='card-body'>
                                <form>

                                    <div className='form-group card-body'>
                                        <label> First Name: </label>
                                        <input placeholder='First Name' name='firstName' className='form-control'
                                            value={this.state.fname} onChange={this.changeFirstNameHandler} />
                                    </div>



                                    <div className='form-group card-body'>
                                        <label> Last Name: </label>
                                        <input placeholder='Last Name' name='lastName' className='form-control'
                                            value={this.state.lname} onChange={this.changeLastNameHandler} />
                                    </div>

                                    <div className='form-group card-body'>
                                        <label> Email Id: </label>
                                        <input placeholder='Email Address' name='emailId' className='form-control'
                                            value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>

                                    <div className='form-group card-body'>
                                        <label> Mobile: </label>
                                        <input placeholder='Mobile No.' name='mobile' className='form-control'
                                            value={this.state.mobile} onChange={this.changeMobileHandler} />
                                    </div>

                                    <div className='form-group card-body'>
                                        <label> Address: </label>
                                        <textarea placeholder='Address' name='address' className='form-control'
                                            value={this.state.address} onChange={this.changeAddressHandler} />
                                    </div>

                                    <div className='form-group card-body'>
                                        <label> Password: </label>
                                        <input placeholder='Password' name='pwd' className='form-control'
                                            value={this.state.pwd} onChange={this.changepasswordHandler} />
                                    </div>

                                    <div className='card-body'>
                                        <button className='btn btn-success' onClick={this.saveOrUpdateCustomer}>Save</button>
                                        <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                    </div>

                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateCustomerComponent