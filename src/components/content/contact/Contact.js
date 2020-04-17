import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="col-lg-9">
                <div className="card mt-5 mb-5">
                    <form className="pt-3 pl-3 pr-3 pb-3">
                        <div className="form-group">
                            <label>Họ và tên</label>
                            <input type="text" className="form-control" placeholder="Nhập tên của bạn" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Số điện thoại</label>
                            <input type="text" className="form-control" placeholder="Nhập số điện thoại" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Địa chỉ</label>
                            <input type="text" className="form-control" placeholder="Nhập địa chỉ" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Nội dung</label>
                            <textarea type="text" className="form-control" placeholder="Nhập nội dung"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Gửi</button>
                    </form>

                </div>
            </div>
        );
    }
}

export default Contact;