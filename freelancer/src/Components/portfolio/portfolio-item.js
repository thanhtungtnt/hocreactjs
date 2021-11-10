import React, { Component } from 'react';

class PortfolioItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            trangThai: 0
        }

    }

    onClickEdit = () => {
        this.setState({
            trangThai: 1
        });
    }
    onClickSave = () => {
        this.setState({
            trangThai: 0
        });
    }

    renderButton = () => (
        <div className="btn btn-group">
            <button className="btn btn-block btn-info" onClick={() => this.onClickEdit()}>Edit</button>
            <button className="btn btn-block btn-danger" onClick={() => this.thongbao3('xoa item nay')}>Remove</button>
        </div>   
    )
    renderForm = () => (
        <form className="form-inline">
            <input defaultValue={this.props.title} type="text" name="ten" className="form-control" />
            <button className="btn btn-block btn-success" onClick={() => this.onClickSave()}>Save</button>
        </form>
    )

    displayCheck = () => {
        if(this.state.trangThai === 0){
            return this.renderButton();
        }else{
            return this.renderForm();
        }
    }

    render() {
        return (
            <div className="col-md-6 col-lg-4 mb-5">
                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target={this.props.modal}>
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                </div>
                <img className="img-fluid" src={"assets/img/portfolio/" + this.props.img} alt="..." />
                <h3>{this.props.title}</h3>
                </div>
                {this.displayCheck()}

                
            </div>
        );
    }
}

export default PortfolioItem;
