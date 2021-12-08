import React, { Component } from 'react'
import  { createElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './sidesty.css'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
export default class Section extends Component{
        render(){
            return (
                <>
                <aside className="container my-3">
                <div className="section1">
                    <h3>
                       <a className="m p-2"> <FontAwesomeIcon icon={faBriefcase}/> </a> {this.props.title}
                    </h3>
                <div className="block1">
                    <p>
                        front end developer / w3schools.com
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, vero!</p>
                    </p>
                </div>
                <div className="block2">
                    <h4>web developer / someting.com</h4>
                     <p>
                        front end developer / w3schools.com
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, vero!</p>
                     </p>
                </div>
                     <div className="block3">
                         <h4>graphic designer / designsomething.com</h4>
                        <p>
                          front end developer / w3schools.com
                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, vero!</p>
                         </p>
                     </div>
                </div>
        </aside>
                </>
            );
        }









}
