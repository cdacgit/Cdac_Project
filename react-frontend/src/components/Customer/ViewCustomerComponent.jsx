import React, { Component } from 'react'
import CustomerService from '../../services/CustomerService'

class ViewCustomerComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            customer: {}
        }
    }

    componentDidMount() {
        CustomerService.getCustomerById(this.state.id).then(res => {
            this.setState({
                customer: res.data
            });
        });
    }

    back() {
        this.props.history.push('/customers');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className='card col-md-6 offset-md-3' >
                    <h3 className='text-center'>View Customer Details</h3>
                    <hr/>
                    <div className='card-body'>
                        <div className='row'>
                            
                            
                                <table className='table table-borderless'>
                                    <tbody>

                                        <tr>
                                            <td>
                                                <b> First Name :- </b>
                                            </td>
                                            <td>
                                                {this.state.customer.fname}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <b> Last Name :- </b>
                                            </td>
                                            <td>
                                                {this.state.customer.lname}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <b> Email Id :- </b>
                                            </td>
                                            <td>
                                                {this.state.customer.email}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <b> Mobile No :- </b>
                                            </td>
                                            <td>
                                                {this.state.customer.mobile}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <b> Password :- </b>
                                            </td>
                                            <td>
                                                {this.state.customer.pwd}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <b> Address :- </b>
                                            </td>
                                            <td>
                                                {this.state.customer.address}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                            <button className='btn btn-outline-dark' onClick={this.back.bind(this)} >Back</button>
                                            </td>
                                            
                                        </tr>

                                        
                                    </tbody>
                                </table>
                            

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewCustomerComponent