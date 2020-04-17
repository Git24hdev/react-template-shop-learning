import React, { Component } from 'react';
import Productcatlist from './productcatlist/Productcatlist';

class Sidebar extends Component {
    render() {
        return (
            <div className="col-lg-3">
                <h2 className="my-4">Danh mục</h2>
                <div className="list-group">
                    <Productcatlist></Productcatlist>
                    <Productcatlist></Productcatlist>
                    <Productcatlist></Productcatlist>
                    <Productcatlist></Productcatlist>
                    <Productcatlist></Productcatlist>
                </div>
            </div>
        );
    }
}

export default Sidebar;