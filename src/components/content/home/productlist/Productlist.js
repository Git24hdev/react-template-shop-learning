import React, { Component } from 'react';
import Productitem from './productitem/Productitem';

class Productlist extends Component {
    render() {
        return (
            <div className="row">
                <Productitem imageUrl="/images/app5.jpg" price="5000000" desc="Màn hình tự động chuyển đổi chế độ màu hiển thị và luôn luôn hiển thị khi người dùng xoay tay. Với những thế hệ Apple Watch trước đây" url="/san-pham/1/apple-watch-5" >Apple watch 5</Productitem>
                <Productitem imageUrl="/images/iP11Pro.jpg" price="6000000" desc="Màn hình tự động chuyển đổi chế độ màu hiển thị và luôn luôn hiển thị khi người dùng xoay tay. Với những thế hệ Apple Watch trước đây" url="/san-pham/4/iphone-11-pro" >iPhone 11 pro</Productitem>
                <Productitem imageUrl="/images/ipad2020.jpg" price="9000000" desc="Màn hình tự động chuyển đổi chế độ màu hiển thị và luôn luôn hiển thị khi người dùng xoay tay. Với những thế hệ Apple Watch trước đây" url="/san-pham/2/ipad-pro" >iPad Pro</Productitem>
                <Productitem imageUrl="/images/mac2019.jpg" price="8000000" desc="Màn hình tự động chuyển đổi chế độ màu hiển thị và luôn luôn hiển thị khi người dùng xoay tay. Với những thế hệ Apple Watch trước đây" url="/san-pham/3/macbook-pro" >Macbook pro</Productitem>
                <Productitem imageUrl="/images/ipad2020.jpg" price="9000000" desc="Màn hình tự động chuyển đổi chế độ màu hiển thị và luôn luôn hiển thị khi người dùng xoay tay. Với những thế hệ Apple Watch trước đây" url="/san-pham/2/ipad-pro" >iPad Pro</Productitem>
                <Productitem imageUrl="/images/app5.jpg" price="4000000" desc="Màn hình tự động chuyển đổi chế độ màu hiển thị và luôn luôn hiển thị khi người dùng xoay tay. Với những thế hệ Apple Watch trước đây" url="/san-pham/1/apple-watch-5" >Apple watch 5</Productitem>
            </div>
        );
    }
}

export default Productlist;