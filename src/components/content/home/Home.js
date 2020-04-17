import React, { Component } from 'react';
import Slide from './slide/Slide';
import Productlist from './productlist/Productlist';

class Home extends Component {
    render() {
        return (
            <div className="col-lg-9">
                <Slide></Slide>
                <Productlist></Productlist>
            </div>
        );
    }
}

export default Home;