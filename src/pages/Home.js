import React from 'react'
import Navs from '../component/Navs'
import Header from '../component/Header'
import "./Home.css"
import pho from "../Assets/1.png"
import pho2 from "../Assets/2.png"
import pho3 from "../Assets/4.jpg"
import Carousel from 'react-bootstrap/Carousel';

function Home() {
    return (
        <>
            <Header />
            <section className='numbers'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <h2>1263</h2>
                            <h6>SAVING</h6>
                        </div>
                        <div className='col-md-3'>
                            <h2>1263</h2>
                            <h6>PHOTOS</h6>
                        </div>
                        <div className='col-md-3'>
                            <h2>1263</h2>
                            <h6>ROCKETS</h6>
                        </div>
                        <div className='col-md-3'>
                            <h2>1263</h2>
                            <h6>GLOBES</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className='pride'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src={pho} />
                        </div>
                        <div className='col-md-6'>
                            <h2>We pride ourselves on making real food from the best ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.

                            </p>

                            <button><a href='#'>Learn More</a> </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='ingrid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h2>We make everything by hand with the best possible ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                            </p>
                            <ul>
                                <li>Etiam sed dolor ac diam volutpat.</li>
                                <li>Erat volutpat aliquet imperdiet.
                                </li>
                                <li>purus a odio finibus bibendum.</li>
                            </ul>
                            <button><a href='#'>Learn More</a> </button>
                        </div>

                        <div className='col-md-6'>
                            <img src={pho2} />
                        </div>
                    </div>
                </div>
            </section>
            <section className='paralex'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 col-lg-12'>
                            <h2>When a man's stomach is full it makes no<br />
                                difference whether he is rich or poor.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br />
                                finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='sliderx'>
            <div className='container'>
                <div className='row'>
                        <div className='col-md-12 col-lg-12'>
                            <Carousel>
                                <Carousel.Item>
                                    <img src={pho3} />
                                    <Carousel.Caption>
                                        <h3>Johnthan Doe - UX Designer</h3>
                                        <p>
                                            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia."
                                        </p></Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={pho3} />
                                    <Carousel.Caption>
                                        <h3>Johnthan Doe - UX Designer</h3>
                                        <p>
                                            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia."
                                        </p></Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={pho3} />
                                    <Carousel.Caption>
                                        <h3>Johnthan Doe - UX Designer</h3>
                                        <p>
                                            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia."
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
 
                    </div>
                </div>
            </div>
                
            </section>

        </>
    )
}

export default Home
