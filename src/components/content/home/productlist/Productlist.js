import React, { Component } from 'react';
import Productitem from './productitem/Productitem';

class Productlist extends Component {
    render() {
        return (
            <div className="row">
                <Productitem imageUrl="/images/app5.jpg" price="5000000" desc="Màn hình tự động chuyển đổi chế độ màu hiển thị và luôn luôn hiển thị khi người dùng xoay tay. Với những thế hệ Apple Watch trước đây" url="apple-watch-5" pid="1" >Apple watch 5</Productitem>

                <Productitem imageUrl="/images/iP11Pro.jpg" price="6000000" desc="Màn hình tự động chuyển đổi chế độ màu hiển thị và luôn luôn hiển thị khi người dùng xoay tay. Với những thế hệ Apple Watch trước đây" url="iphone-11-pro" pid="4" >iPhone 11 pro</Productitem>

                <Productitem imageUrl="/images/ipad2020.jpg" price="9000000" desc="Màn hình tự động chuyển đổi chế độ màu hiển thị và luôn luôn hiển thị khi người dùng xoay tay. Với những thế hệ Apple Watch trước đây" url="ipad-pro" pid="2" >iPad Pro</Productitem>

                <Productitem imageUrl="/images/mac2019.jpg" price="8000000" desc="Màn hình tự động chuyển đổi chế độ màu hiển thị và luôn luôn hiển thị khi người dùng xoay tay. Với những thế hệ Apple Watch trước đây" url="macbook-pro" pid="3">Macbook pro</Productitem>

                <Productitem imageUrl="/images/ipad2020.jpg" price="9000000" desc="Màn hình tự động chuyển đổi chế độ màu hiển thị và luôn luôn hiển thị khi người dùng xoay tay. Với những thế hệ Apple Watch trước đây" url="ipad-pro" pid="2" >iPad Pro</Productitem>

                <Productitem imageUrl="/images/app5.jpg" price="4000000" desc="Màn hình tự động chuyển đổi chế độ màu hiển thị và luôn luôn hiển thị khi người dùng xoay tay. Với những thế hệ Apple Watch trước đây" url="apple-watch-5" pid="1" >Apple watch 5</Productitem>
            </div>
        );
    }
}

export default Productlist;