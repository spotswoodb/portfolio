import React, { Component } from 'react';
import { faFacebook, faAccessibleIcon, faFacebookF, faTwitter, faInstagram, faPinterest, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slides from '../Assets/Images/slide-2.jpg';

class Banner extends Component {
    render() {
        return(
            <section id="home" className="hero hero-slider-wrapper hero-style-1">
                <div className="hero-slider">
                    <div className="slide">
                        <div className="slider-image">
                            <img src={Slides}/>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col col-md-8 col-sm-12 slide-caption">
                                    <div className="slide-subtitle">
                                        <h4>I Am Ben Spotswood</h4>
                                    </div>
                                    <div className="slide-title">
                                        <h2>Full-Stack Software Developer</h2>
                                    </div>
                                    <div className="btns">
                                        <a href="#contact" className="theme-btn go-contact-area">Contact Me</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy"><p>Full-Stack Software Developer</p></div>
                <div className="social-links">
                    <ul>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faPinterestP} />
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Banner;