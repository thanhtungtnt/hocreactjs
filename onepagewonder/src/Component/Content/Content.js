import React, { Component } from 'react';

class Content extends Component {

    state = {
        trangthai: 1
    }

    edit = () => {console.log("Edit"); }
    remove = () => {console.log("Remove"); }

    renderButton = () => (
        <div className="row align-items-center">
            <button className="btn btn-info" onClick={this.editClick}>Edit</button>
            <button className="btn btn-warning" onClick={this.remove}>Remove</button>
        </div>

    )
    renderForm = () => (
        <div className="row align-items-center">
            <input ref = {(dulieunhap) => {this.trunggian = dulieunhap; }}defaultValue={this.props.title} type="text" className="form-control" name="title" />
            <button className="btn btn-danger" onClick={this.dangerClick}>Save</button>
        </div>
    )
    
    displayCheck = () => {
        if(this.state.trangthai === 0){
            return this.renderButton();
        }else{
            return this.renderForm();
        }
    }

    editClick = () => {
        this.setState({trangthai: 1});
    }

    dangerClick = () => {
        this.setState({trangthai: 0});
        console.log(this.trunggian.value);
    }

    render() {
        return (
            <div>
                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-2">
                                <div className="p-5">
                                    <img className="img-fluid rounded-circle" src="img/01.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <div className="p-5">
                                    <h2 className="display-4">{this.props.title}</h2>
                                    <p>{this.props.desc}</p>
                                </div>
                            </div>
                        </div>
                        {this.displayCheck()}
                    </div>
                </section>
            </div>
        );
    }
}

export default Content;