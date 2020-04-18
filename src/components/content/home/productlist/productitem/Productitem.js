import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Productitem extends Component {
    formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }
    render() {
        return (
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 pt-1 pr-1 pl-1 pb-1">
                    <img className="card-img-top" src={this.props.imageUrl} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.children}</h4>
                        <h5>{this.formatNumber(this.props.price)} VNĐ</h5>
                        <p className="card-text">{this.props.desc}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">★ ★ ★ ★ ☆</small>
                        <button type="button" className="btn btn-success ml-3 mr-3 float-right"><Link to={"/san-pham/" + this.props.pid + "/" + this.props.url}>Mua ngay</Link></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Productitem;