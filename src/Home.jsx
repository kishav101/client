import React from 'react'
import Navbar from './Components/Nav';
import { Container } from 'react-bootstrap';
import landingImage from './Assets/landingBackground.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    return (
        <div>
            <Navbar/>

             <div>
                <figure className="position-relative">
                  <img src= { landingImage } alt="IT" className="img-fluid"></img>
                    <figcaption>
                      <h1>Innovative ICT Support</h1>
                      <h2>Creating and Supplying ICT Employment </h2>
                      <p className="mt-4" id="landingPragraph">
                      We love to find new idea and technologies to overcome everyday ICT issues. We firmly believe that
                       creating employment to solve this is the best way forward for everyone.
                      </p>
                    </figcaption>
                </figure>
               
             </div>



        </div>
    )
}
