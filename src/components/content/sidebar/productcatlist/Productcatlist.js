import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Productcatlist extends Component {
    render() {
        return (
            <span className="list-group-item"><Link to="/danh-muc-san-pham/1/danh-muc-san-pham-1">Danh mục sản phẩm 1</Link></span>
        );
    }
}

export default Productcatlist;