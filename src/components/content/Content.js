import React, { Component } from 'react';
import Sidebar from './sidebar/Sidebar';
import Home from './home/Home';
import { Switch, Route } from 'react-router-dom';
import Introduce from './introduce/Introduce';
import Contact from './contact/Contact';
import Productcat from './productcat/Productcat';
import Productsingle from './productsingle/Productsingle';

class Content extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <Sidebar></Sidebar>
                    <Switch>
                        <Route exact path="/" ><Home></Home></Route>
                        <Route exact path="/gioi-thieu" ><Introduce></Introduce></Route>
                        <Route exact path="/lien-he" ><Contact></Contact></Route>
                        <Route exact path="/danh-muc-san-pham/:id/:url" ><Productcat></Productcat></Route>
                        <Route exact path="/san-pham/:id/:url" ><Productsingle></Productsingle></Route>
                        <Route><Home></Home></Route>
                    </Switch>
                </div>
            </div>

        );
    }
}

export default Content;