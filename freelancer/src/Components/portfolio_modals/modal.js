import React, { Component } from 'react';

class Modal extends Component {
    render() {
        return (
            <div>
                <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} aria-labelledby="portfolioModal1" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
                        <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                            <div className="col-lg-8">
                                {/* Portfolio Modal - Title*/}
                                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Log Cabin</h2>
                                {/* Icon Divider*/}
                                <div className="divider-custom">
                                <div className="divider-custom-line" />
                                <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                                <div className="divider-custom-line" />
                                </div>
                                {/* Portfolio Modal - Image*/}
                                <img className="img-fluid rounded mb-5" src="assets/img/portfolio/cabin.png" alt="..." />
                                {/* Portfolio Modal - Text*/}
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                <i className="fas fa-times fa-fw" />
                                Close Window
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                {/* P2*/}
                <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" aria-labelledby="portfolioModal2" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                            <div class="modal-body text-center pb-5">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8">
                                            
                                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Tasty Cake</h2>
                                            
                                            <div class="divider-custom">
                                                <div class="divider-custom-line"></div>
                                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                                <div class="divider-custom-line"></div>
                                            </div>
                                            
                                            <img class="img-fluid rounded mb-5" src="assets/img/portfolio/cake.png" alt="..." />
                                            
                                            <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                            <button class="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                                <i class="fas fa-times fa-fw"></i>
                                                Close Window
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* end P2*/}

                {/* P3*/}
                <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex={-1} aria-labelledby="portfolioModal3" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
                        <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                            <div className="col-lg-8">
                                {/* Portfolio Modal - Title*/}
                                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Circus Tent</h2>
                                {/* Icon Divider*/}
                                <div className="divider-custom">
                                <div className="divider-custom-line" />
                                <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                                <div className="divider-custom-line" />
                                </div>
                                {/* Portfolio Modal - Image*/}
                                <img className="img-fluid rounded mb-5" src="assets/img/portfolio/circus.png" alt="..." />
                                {/* Portfolio Modal - Text*/}
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                <i className="fas fa-times fa-fw" />
                                Close Window
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* end P3*/}
                {/* P4*/}
                <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex={-1} aria-labelledby="portfolioModal4" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
                        <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                            <div className="col-lg-8">
                                {/* Portfolio Modal - Title*/}
                                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Controller</h2>
                                {/* Icon Divider*/}
                                <div className="divider-custom">
                                <div className="divider-custom-line" />
                                <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                                <div className="divider-custom-line" />
                                </div>
                                {/* Portfolio Modal - Image*/}
                                <img className="img-fluid rounded mb-5" src="assets/img/portfolio/game.png" alt="..." />
                                {/* Portfolio Modal - Text*/}
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                <i className="fas fa-times fa-fw" />
                                Close Window
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* end P4*/}
                {/* P5*/}
                <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex={-1} aria-labelledby="portfolioModal5" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
                        <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                            <div className="col-lg-8">
                                {/* Portfolio Modal - Title*/}
                                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Locked Safe</h2>
                                {/* Icon Divider*/}
                                <div className="divider-custom">
                                <div className="divider-custom-line" />
                                <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                                <div className="divider-custom-line" />
                                </div>
                                {/* Portfolio Modal - Image*/}
                                <img className="img-fluid rounded mb-5" src="assets/img/portfolio/safe.png" alt="..." />
                                {/* Portfolio Modal - Text*/}
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                <i className="fas fa-times fa-fw" />
                                Close Window
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* end P5*/}
                {/* P6*/}
                <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex={-1} aria-labelledby="portfolioModal6" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
                        <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                            <div className="col-lg-8">
                                {/* Portfolio Modal - Title*/}
                                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Submarine</h2>
                                {/* Icon Divider*/}
                                <div className="divider-custom">
                                <div className="divider-custom-line" />
                                <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                                <div className="divider-custom-line" />
                                </div>
                                {/* Portfolio Modal - Image*/}
                                <img className="img-fluid rounded mb-5" src="assets/img/portfolio/submarine.png" alt="..." />
                                {/* Portfolio Modal - Text*/}
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                <i className="fas fa-times fa-fw" />
                                Close Window
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* end P6*/}
            </div>
            
        );
    }
}

export default Modal;