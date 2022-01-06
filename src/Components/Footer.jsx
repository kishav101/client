import React from 'react';
import { Card, Form,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                 <section id="footer">
                        <div className="container">
                            <div className="row text-center text-xs-center text-sm-left text-md-left">
                                <div className="col-xs-12 col-sm-4 col-md-4">
                                    <h5>ABOUT US</h5>
                                    
                                        <p style={{color:'azure'}}>
                                            TechResQ (Pty) Ltd is a 100% black owned,<br />
                                            and 30% woman owned Exempted Micro<br />
                                            Enterprise (EME)  that Provides ICT services<br />
                                            to medium and large enterprises.<br />
                                            TechResQ is a B-BBEE Level 1 contributor. Easy <br />
                                            customer service provided.

                                        </p>
                                </div>
                                <div className="col-xs-12 col-sm-4 col-md-4">
                                    <h5>OUR GOALS</h5>

                                        <p style={{color:'azure'}}>
                                            To help combat the amount of un-employed<br />
                                            people within the country as a start. We<br />
                                            aim to give IT support to those whom require<br />
                                            it, simultaneously allowing Skilled employees<br />
                                            to register and have a source of income. We <br />
                                            choose to brighten SA’s prosperity.

                                        </p>
                                    
                                </div>
                                <div className="col-xs-12 col-sm-4 col-md-4">
                                    <h5>CONTACT US</h5>
                                    <ul className="list-unstyled quick-links  text-white" >
                                        <li><i className="fa fa-angle-double-right"></i>22 Sloane Street, Bryanston</li>
                                        <li><i className="fa fa-angle-double-right"></i>Support@techresq.co.za</li>
                                        <li><i className="fa fa-angle-double-right"></i>086 123 7377</li>
                                        <li><i className="fa fa-angle-double-right"></i>Developed by NdalaICT Solutions</li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                                    <ul className="list-unstyled list-inline social text-center">
                                        <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                        <li className="list-inline-item"><a href="#" target="_blank"><i className="fa fa-envelope"></i></a></li>
                                    </ul>
                                </div>
                                <hr/>
                            </div>	
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                                    <p><u><a href="#">National TechResQ Corporation</a></u> is a Registered CIPC company of South Africa</p>
                                    <p className="h6">© All right Reversed.<a className="text-green ml-2" href="#" target="_blank">TechResQ</a></p>
                                </div>
                                <hr/>
                            </div>	
                        </div>
                    </section>
            </div>
        )
    }
}
