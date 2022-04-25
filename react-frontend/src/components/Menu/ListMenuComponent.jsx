import React, { Component } from 'react'
import MenuService from '../../services/MenuService';


class ListMenuComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Menu: []
        }
        this.addMenu = this.addMenu.bind(this);
        this.editMenu = this.editMenu.bind(this);
        this.deleteMenu = this.deleteMenu.bind(this);
        this.viewMenu = this.viewMenu.bind(this);
    }

    

    deleteMenu(foodId) {
        //rest api 
        MenuService.deleteMenu(foodId).then(res => {
            this.setState({
                Menu: this.state.Menu.filter(menu => menu.foodId !== foodId)
            });
        });
    }

    viewMenu(foodId) {
        this.props.history.push(`/view-menu/${foodId}`);
    }

    editMenu(foodId) {
        this.props.history.push(`/add-menu/${foodId}`);

    }

    componentDidMount() {
        MenuService.getMenu().then((res) => {
            this.setState({
                Menu: res.data
            });
        });
    }

    addMenu() {
        this.props.history.push('/add-menu/_add');
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Menu List</h2>
                <div className='row' id="button">
                    <button className="btn btn-primary mx-5 w-25" onClick={this.addMenu}>Add Food</button>
                </div>
                <br></br>
                <div className='row mx-5'>

                    <table className='table table-striped table-bordered'>
                        <thead>

                            <tr>
                                <th>Product Title</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Actions</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                this.state.Menu.map(
                                    menu =>
                                        <tr key={menu.foodId}>
                                            <td>{menu.title}</td>
                                            <td>{menu.price}</td>
                                            <td>{menu.category}</td>
                                            <td>
                                                <button onClick={() => this.editMenu(menu.foodId)} className='btn btn-outline-primary'>Update</button>
                                                <button onClick={() => this.deleteMenu(menu.foodId)} className='btn btn-outline-danger' style={{ marginLeft: "15px" }}>Delete</button>
                                                <button onClick={() => this.viewMenu(menu.foodId)} className='btn btn-outline-dark' style={{ marginLeft: "15px" }}>View</button>
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

export default ListMenuComponent