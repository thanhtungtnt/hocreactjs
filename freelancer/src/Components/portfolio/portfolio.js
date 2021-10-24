import React, { Component } from 'react';

import PortfolioHead from './portfolio-head';
import PortfolioItem from './portfolio-item';

class Portfolio extends Component {
    render() {
        return (
            <section className="page-section portfolio" id="portfolio">
                <div className="container">
                    <PortfolioHead />
                    <div className="row justify-content-center">
                        <PortfolioItem img="cabin.png" modal="#portfolioModal1" title="Hồ sơ Nguyễn Ngọc" />
                        <PortfolioItem img="cake.png" modal="#portfolioModal2" title="Nguyễn Văn Toàn" />
                        <PortfolioItem img="circus.png" modal="#portfolioModal3" title="Văn Thanh" />
                        <PortfolioItem img="game.png" modal="#portfolioModal4" title="Quang Hải" />
                        <PortfolioItem img="safe.png" modal="#portfolioModal5" title="Trần Đình Trọng" />
                        <PortfolioItem img="submarine.png" modal="#portfolioModal6" title="Đỗ Huy Hoàng" />
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;
