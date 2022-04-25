import React, { Component } from 'react'
import CustomerService from '../../services/CustomerService'
import 'bootstrap/dist/css/bootstrap.css';

class ListCustomerComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Customers: []
        }
        this.addCustomer = this.addCustomer.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
        this.viewCustomer = this.viewCustomer.bind(this);
    }



    deleteCustomer(id) {
        //rest api 
        CustomerService.deleteCustomer(id).then(res => {
            this.setState({
                Customers: this.state.Customers.filter(customer => customer.id !== id)
            });
        });
    }

    viewCustomer(id) {
        this.props.history.push(`/view-customer/${id}`);
    }

    editCustomer(id) {
        this.props.history.push(`/add-customer/${id}`);

    }

    componentDidMount() {
        CustomerService.getCustomer().then((res) => {
            this.setState({
                Customers: res.data
            });
        });
    }

    addCustomer() {
        this.props.history.push('/add-customer/_add');
    }

    render() {
        return (
            <div>
                    <h2 className='text-center'>Customer List</h2>
                    <div className='row' id="button">
                        <button  className="btn btn-primary  mx-5 w-25" onClick={this.addCustomer}>Add Customer</button>
                    </div>
                    <br></br>
                    <div className='row mx-4 w-75'>

                        <table className='table table-striped table-bordered'>
                            <thead>

                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email Id</th>
                                    <th>Actions</th>
                                </tr>

                            </thead>
                            <tbody>
                                {
                                    this.state.Customers.map(
                                        customer =>
                                            <tr key={customer.id}>
                                                <td>{customer.fname}</td>
                                                <td>{customer.lname}</td>
                                                <td>{customer.email}</td>
                                                <td>
                                                    <button onClick={() => this.editCustomer(customer.id)} className='btn btn-outline-primary'>Update</button>
                                                    <button onClick={() => this.deleteCustomer(customer.id)} className='btn btn-outline-danger' style={{ marginLeft: "15px" }}>Delete</button>
                                                    <button onClick={() => this.viewCustomer(customer.id)} className='btn btn-outline-dark' style={{ marginLeft: "15px" }}>View</button>
                                                </td>
                                            </tr>

                                    )
                                }

                            </tbody>
                        </table>

                    </div>
                
            </div>
        )
    }
}

export default ListCustomerComponent