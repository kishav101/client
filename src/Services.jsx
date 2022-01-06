import React from 'react'
import Navbar from './Components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import NavBar from './Components/Nav';
import serviceBackground from './Assets/ServiceBackground.jpg';


export default function Services() {
    return (
        <div>
        <Navbar/>
        <div>
                <figure className="position-relative">
                  <img src= { serviceBackground } alt="IT" className="img-fluid" ></img>
                    <figcaption>
                      <h1>TechResQ ICT Support Services</h1>
                      <p id="landingPragraph">
                      We love to find new idea and technologies to overcome everyday ICT issues. We firmly believe that
                       creating employment to solve this is the best way forward for everyone.
                      </p>
                    </figcaption>
                </figure>
               
             </div>

            
        </div>
    )
}
