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
                        <PortfolioItem img="cabin.png" modal="#portfolioModal1" />
                        <PortfolioItem img="cake.png" modal="#portfolioModal2" />
                        <PortfolioItem img="circus.png" modal="#portfolioModal3" />
                        <PortfolioItem img="game.png" modal="#portfolioModal4" />
                        <PortfolioItem img="safe.png" modal="#portfolioModal5" />
                        <PortfolioItem img="submarine.png" modal="#portfolioModal6" />
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;