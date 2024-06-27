import React from 'react'

function Video() {
    return (
        <div>
            <div class="video-area section-bg2 d-flex align-items-center" style={{ backgroundImage: `url(assets/img/gallery/video-bg.png)` }}>
                <div class="container">
                    <div class="video-wrap position-relative">
                        <div class="video-icon" >
                            <a class="popup-video btn-icon" href="https://www.youtube.com/watch?v=up68UAfH0d0"><i class="fas fa-play"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <section class="services-area">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                            <div class="single-services mb-40 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                                <div class="features-icon">
                                    <img src="assets/img/icon/icon1.svg" alt=""/>
                                </div>
                                <div class="features-caption">
                                    <h3>Location</h3>
                                    <p>You’ll look at graphs and charts in Task One, how to approach </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div class="single-services mb-40 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                                <div class="features-icon">
                                    <img src="assets/img/icon/icon2.svg" alt=""/>
                                </div>
                                <div class="features-caption">
                                    <h3>Phone</h3>
                                    <p>(90) 277 278 2566</p>
                                    <p>  (78) 267 256 2578</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div class="single-services mb-40 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".4s">
                                <div class="features-icon">
                                    <img src="assets/img/icon/icon3.svg" alt=""/>
                                </div>
                                <div class="features-caption">
                                    <h3>Email</h3>
                                    <p>jacson767@gmail.com</p>
                                    <p>contact56@zacsion.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Video
