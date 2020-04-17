import React, { Component } from 'react';
import Productlist from '../home/productlist/Productlist';

class Productcat extends Component {
    render() {
        return (
            <div className="col-lg-9 mt-5">
                <Productlist></Productlist>
            </div>
        );
    }
}

export default Productcat;