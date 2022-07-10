import React from 'react';
import './Banner.css';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
// import Typewriter from 'typewriter-effect/dist/core';
import Typewriter from "typewriter-effect";

function Banner() {
    return (
        <div className="banner">
            <div className="banner_title1">
                <p><span className="emerge">Hi,</span> my name is</p>
            </div>
            <div className="banner_title2">
                <p>Nitish Kumar.</p>
            </div>
            <div className="banner_desc1">
                <p>I am an Web developer and <span className="emerge">Cyber Security</span>.</p>
                
            </div>
            <div className="banner_desc2">
                <p>
                    I am a Computer Science graduate and I love working on front end web development projects.<br />
                    I have developed <span className="emerge">Some Projects</span>  <span className="emerge"> </span>.<br />
                   
                </p> 
                
            </div>
            <div className="social_logo">
                <div className="social_logo1">
                    <a href="https://www.linkedin.com/in/nitish-kumar-157786193" target="_blank" rel="noreferrer">
                        <img className="social_logo_image" src={linkedin} alt="" />
                    </a>
                </div>
                <div className="social_logo1">
                    <a href="https://github.com/nitish74" target="_blank" rel="noreferrer">
                        <img className="social_logo_image" src={github} alt="" />
                    </a>
                </div>
            </div>
            <div className="mail_btn">
                <a href="mailto: nitishkumar74610026@gmail.com ">
                    <button className="mail_btnn">Get in Touch</button>
                </a>
            </div>
        </div>
    )
}

export default Banner;