import React, { Component } from 'react';

class PortfolioItem extends Component {

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
            
                <div className="btn btn-group">
                    <button className="btn btn-block btn-info">Edit</button>
                    <button className="btn btn-block btn-danger">Remove</button>
                </div>
            </div>
        );
    }
}

export default PortfolioItem;