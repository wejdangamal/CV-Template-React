import { faFacebook, faFacebookMessenger, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import React, { Component } from 'react'
import  { createElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default class Footer extends Component{
    render(){

        return(
            <>
            <footer className="bg-dark m-0 p-1">
            <p className="text-center text-white m-0">
                <h5>Find me on social media</h5>
                <div className="px-2">
                <a href="" className="me-4 px-1 text-reset">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="" className="me-4 px-1 text-reset">
                    <FontAwesomeIcon icon={faFacebookMessenger} />
                </a>
                <a href="" className="me-4 px-1 text-reset">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="" className="me-4 px-1 text-reset">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                </div>
                <h6 className="py-1">Powered by wejdan gamal</h6>
            </p>      
            </footer>
            </>
        );
    }
}