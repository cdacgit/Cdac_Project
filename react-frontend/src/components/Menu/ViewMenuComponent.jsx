import React, { Component } from 'react'
import MenuService from '../../services/MenuService';


class ViewMenuComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            foodId: this.props.match.params.foodId,
            menu: {}
        }
    }

    componentDidMount() {
        MenuService.getMenuById(this.state.foodId).then(res => {
            this.setState({
                menu: res.data
            });
        });
    }

    back() {
        this.props.history.push('/menu');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className='card col-md-6 offset-md-3' >
                    <h3 className='text-center'>View Product Details</h3>
                    <hr />
                    <div className='card-body'>
                        <div className='row'>


                        <table className='table table-borderless'>
                                    <tbody>

                                        <tr>
                                            <td>
                                                <b> Category  </b>
                                            </td>
                                            <td>
                                                {this.state.menu.category}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <b> Product Name  </b>
                                            </td>
                                            <td>
                                                {this.state.menu.title}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <b> Description  </b>
                                            </td>
                                            <td>
                                                {this.state.menu.description}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <b> Price  </b>
                                            </td>
                                            <td>
                                                {this.state.menu.price}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <b> Image Url  </b>
                                            </td>
                                            <td>
                                                {this.state.menu.url}
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

export default ViewMenuComponent