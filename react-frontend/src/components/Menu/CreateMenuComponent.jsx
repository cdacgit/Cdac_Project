import React, { Component } from 'react'
import MenuService from '../../services/MenuService';


class CreateMenuComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            //step2 

            foodId: this.props.match.params.foodId,
            title: "",
            description: "",
            price: "",
            category: "",
            url: ""

        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);

        this.changeUrlHandler = this.changeUrlHandler.bind(this);

        this.saveOrUpdateCustomer = this.saveOrUpdateCustomer.bind(this);
    }

    //step3
    componentDidMount() {

        //step4

        if (this.state.foodId === '_add') {
            return
        }
        else {
            MenuService.getMenuById(this.state.foodId).then((res) => {
                let menu = res.data;
                this.setState({

                    title: menu.title,
                    description: menu.description,
                    price: menu.price,
                    category: menu.category,
                    url: menu.url

                });
            });
        }
    }


    saveOrUpdateCustomer = (e) => {
        e.preventDefault();

        let menu = {
            title: this.state.title,
            description: this.state.description,
            price: this.state.price,
            category: this.state.category,
            url: this.state.url
        };

        console.log('menu =>' + JSON.stringify(menu));

        //step5

        if (this.state.foodId === '_add') {

            MenuService.createMenu(menu).then(res => {
                this.props.history.push('/menu');
            });
        }
        else {


            MenuService.updateMenu(menu, this.state.foodId).then(res => {
                this.props.history.push('/menu');
            });

        }
    }

    changeCategoryHandler(event) {
        this.setState({
            category: event.target.value
        });
    }

    changeTitleHandler(event) {
        this.setState({
            title: event.target.value
        });
    }

    changeDescriptionHandler(event) {
        this.setState({
            description: event.target.value
        });
    }

    changePriceHandler(event) {
        this.setState({
            price: event.target.value
        });
    }

    changeUrlHandler(event) {
        this.setState({
            url: event.target.value
        });
    }



    cancel() {
        this.props.history.push('/menu');
    }

    getTitle() {
        if (this.state.foodId === '_add') {
            return <h3 className='text-center'>Add Product</h3>
        }
        else {
            return <h3 className='text-center'>Update Product</h3>
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
                                        <label> Category: </label>
                                        <input type="text" placeholder='Category' name='category' className='form-control'
                                            value={this.state.category} onChange={this.changeCategoryHandler} />
                                    </div>



                                    <div className='form-group card-body'>
                                        <label> Product Title: </label>
                                        <input type="text" placeholder='Product Title' name='title' className='form-control'
                                            value={this.state.title} onChange={this.changeTitleHandler} />
                                    </div>

                                    <div className='form-group card-body'>
                                        <label> Description: </label>
                                        <input type="text" placeholder='Description' name='description' className='form-control'
                                            value={this.state.description} onChange={this.changeDescriptionHandler} />
                                    </div>

                                    <div className='form-group card-body'>
                                        <label> Price: </label>
                                        <input type="number" placeholder='Enter Price' name='price' className='form-control'
                                            value={this.state.price} onChange={this.changePriceHandler} />
                                    </div>

                                    <div className='form-group card-body'>
                                        <label> Image url: </label>
                                        <input type="url" placeholder='Enter product Url' name='url' className='form-control'
                                            value={this.state.url} onChange={this.changeUrlHandler} />
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

export default CreateMenuComponent