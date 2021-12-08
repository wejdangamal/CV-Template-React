import React, { Component } from 'react'
import  { createElement } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEnvelope, faGlobeEurope, faMapLocation, faPhoneAlt, faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import Section from './section';
import pic from './pic.jpeg'
export default class Side extends Component{

        render(){
            return(
                <>
                <div className="row container mx-5">
                    <div className="col-4 my-3 p-0 bg-warning left-side ">
                    <img className="img-fluid" src={pic}/>
                    <article>
                    <ul>
                        <li><a className="me-4 p-2"><FontAwesomeIcon icon={faBriefcase} /></a> Designer</li>
                        <li><a className="me-4 p-2"><FontAwesomeIcon icon={faMapLocation} /></a> Cairo</li>
                        <li><a className="me-4 p-2"><FontAwesomeIcon icon={faPhoneAlt} /></a> 0123456789</li>
                        <li><a className="me-4 p-2"><FontAwesomeIcon icon={faEnvelope}/></a> wegdan@gmail.com</li>
                    </ul>
                    </article>
                   

                    <article>
                        <h3 className="m p-2"><FontAwesomeIcon icon={faStarOfLife}/> Skills</h3>
                        <ul>
                            <li>Adobe photoshop</li>
                            <li>photography</li>
                            <li>illustrator</li>
                            <li>media</li>
                        </ul>
                    </article>
                   

                    <article>
                        <h3 className="m p-2"><FontAwesomeIcon icon={faGlobeEurope}/> Languages</h3>
                        <ul>
                            <li>English</li>
                            <li>Spanish</li>
                            <li>German</li>
                        </ul>
                    </article>
                            </div>


                      <div className="col-8">
                       < Section title='Work Experience'/>
                       < Section title='Education'/>

                      </div>
                </div>

                </>
            );
        
}
}