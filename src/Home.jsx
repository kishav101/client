import React from 'react'
import Navbar from './Components/Nav';
import Footer from './Components/Footer';
import { Container, Card } from 'react-bootstrap';
import landingImage from './Assets/landingBackground.jpg';
import businessImage from './Assets/businessPichome.jpg';
import ict from './Assets/ict.json';
import employment from './Assets/employment.json';
import app from './Assets/app.json';
import about from './Assets/about.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect,useRef } from 'react';
import lottie from 'lottie-web';

export default function Home() {

  const container = useRef(null);
  const container2 = useRef(null);
  const container3 = useRef(null);
  const container4 = useRef(null);

  useEffect( ()=>{

    lottie.loadAnimation({
        container: container.current,
        renderer:'svg',
        loop:true,
        autoplay:true,
        animationData:ict
    })
    
    },[])
    useEffect( ()=>{

      lottie.loadAnimation({
          container: container2.current,
          renderer:'svg',
          loop:true,
          autoplay:true,
          animationData:employment
      })
      
      },[])

      useEffect( ()=>{

        lottie.loadAnimation({
            container: container3.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData:app
        })
        
        },[])

        useEffect( ()=>{

          lottie.loadAnimation({
              container: container4.current,
              renderer:'svg',
              loop:true,
              autoplay:true,
              animationData:about
          })
          
          },[])

    return (
        <div>
            <Navbar/>

             <div>
                <figure className="position-relative">
                  <img src= { landingImage } alt="IT" className="img-fluid"></img>
                    <figcaption className="p-4">
                      <h1>Innovative ICT Support</h1>
                      <h2>Creating and Supplying ICT Employment </h2>
                      <p className="mt-4" id="landingPragraph">
                      We love to find new idea and technologies to overcome everyday ICT issues. We firmly believe that
                       creating employment to solve this is the best way forward for everyone.
                      </p>
                    </figcaption>
                </figure>

                <div className="row" style={{marginTop:'-5%'}}>
                    <div className="col-xs-12 col-sm-3 col-md-3">
                        <Card className="shadow p-4 mx-2">
                        <div className="container mb-3" ref={container}  style={{ width:'170px'}}></div>
                          <p style={{textAlign:'center', fontSize:'20px'}}>PROVIDING ICT SUPPORT</p>
                          <hr/>
                          <p style={{textAlign:'center', fontWeight:'30', fontSize:'17px'}}>WE PROVIDE THE MOST EFFICIENT ICT SUPPORT 24/7.</p>
                        </Card>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3">
                        <Card className="shadow p-4 mx-2">
                        <div className="container mb-3" ref={container2}  style={{ width:'170px'}}></div>
                          <p style={{textAlign:'center', fontSize:'20px'}}>CREATING EMPLOYMENT</p>
                          <hr/>
                          <p style={{textAlign:'center', fontWeight:'30', fontSize:'17px'}}>PROVIDING EMPLOYMENT TO THE UNEMPLOYED AT EASE.</p>
                        </Card>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3">
                        <Card className="shadow p-4 mx-2">
                        <div className="container mb-3" ref={container3}  style={{ width:'160px'}}></div>
                          <p style={{textAlign:'center', fontSize:'20px'}}>DOWNLOAD OUR APP</p>
                          <hr/>
                          <p style={{textAlign:'center', fontWeight:'30', fontSize:'17px'}}>OUR APP IS AVAILABLE VIA APP STORE AND GOOGLE PLAY.</p>
                        </Card>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3">
                        <Card className="shadow p-4 mx-2">
                        <div className="container mb-3" ref={container4}  style={{ width:'130px'}}></div>
                        <p style={{textAlign:'center', fontSize:'20px' }}>LEARN MORE ABOUT US</p>
                        <hr/>
                        <p style={{textAlign:'center', fontWeight:'30', fontSize:'17px'}}>PLEASE TAKE THE TIME TO BROWSE THROUGH OUR SITE.</p>
                        </Card>
                    </div>
                </div>
                <br/>
                <br/>
             
                <div className="row mt-5 mb-4 backgroundFormColor">
                      <div className="col-xs-12 col-sm-6 col-md-6  mt-5 mb-5">
                        <Card className="shadow p-5 mx-4 ">
                          <h5 className="mx-4" style={{color:'orange'}}>About us</h5>
                          <p className="mt-4 mx-4" style={{ fontWeight:'normal', fontSize:'40px', color:'#de9323'}}>WE STRIVE TO PROVIDE ONLY THE BEST</p>
                          <p className="mx-4">We believe in changing up the game by allowing our fellow skilled unemployed South Africans the opportunity to sign up and once validated, engineers are mobile and ready for your support at your door step.</p>
                        </Card>
                      </div>

                      <div className="col-xs-12 col-sm-6 col-md-6 mt-3 mb-3">
                        <Card className="mx-2 p-5 shadow" style={{backgroundImage:`url(${landingImage})`}}>
                          <h1 style={{color:'white', fontWeight:'normal'}}>Working in Teams to accomplish huge scalable tasks for your business needs.</h1>
                         
                            <br/>
                            <br/>
                              <p style={{color:'white', fontSize:'15px'}}>
                                  Creating and Supplying the ICT Industry with providing support and
                                  creating jobs for the Un-employed.
                              </p>
                              <p style={{color:'white', fontSize:'15px'}}>
                              We at TechResQ believe strongly in teamwork as it increases one’s self growth in the field.
                              </p>
                              <p style={{color:'white', fontSize:'15px'}}>
                              We at TechResQ believe strongly in teamwork as it increases one’s self growth in the field.Aiming to create jobs within the industry for those who suffer from un-employment and poverty.
                              </p>
                        </Card>
                      </div>
                </div>
                <br/>

                <div className="row mt-4 mb-4 p-3">
                    <div className="col-xs-12 col-sm-6 col-md-6 ">
                        <h5 className="mx-4">TechResQ – leading innovative ICT plateform</h5>
                        <hr className=" mx-4 p-1" style={{color:'orange', width:'15%'}}/>
                        <br/>

                        <p className="mx-3" style={{fontSize:'30px'}}>Onboarding Engineers</p>
                        <p className="mx-3">
                             Engineers are first put through a precise vetting proccess, once approved engineers are given their details.Which they can then use to logon the the TechResQ app.
                        </p>
                        <p  className="mx-3">
                             Validated Engineers can and may place themselves on Standby from with-in the application to be ready at your disposal.
                        </p>

                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6">
                    
                        <div className="row " style={{marginTop:'10%'}}>
                          <div className="col-xs-12 col-sm-6 col-md-6">
                               <h3>Interested ?</h3>
                               <p>
                                  Visit our applicant page a then fill out your details and we will be in touch.
                               </p>
                          </div>
                          <div className="col-xs-12 col-sm-6 col-md-6">
                               <h3>Vetting Process ?</h3>
                               <p>
                                  Applicant details are sent through a strict vetting process to be approved.
                               </p>
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-xs-12 col-sm-6 col-md-6">
                               <h3>Self-Owned Vehicle</h3>
                               <p>
                               Applicants must own a vehicle to apply to ensure good response times
                               </p>
                          </div>
                          <div className="col-xs-12 col-sm-6 col-md-6">
                               <h3>Our SLA’s</h3>
                               <p>
                               Technicians are paid out based on performance and efficiency.
                               </p>
                          </div>
                        </div>
                            
                     
                    </div>
                </div>
                <br/>
                
                <div className="row mt-5 mb-5 p-3 " style={{backgroundColor:'#fcfcfc'}}>
                      <div className="col-xs-12 col-sm-6 col-md-6">
                        <Card className=" mx-3 mt-5 ">
                           <div >
                              <img src={businessImage} className="img-rounded img-thumbnail" alt="Cinque Terre"/>
                            </div>
                         
                        </Card>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-6">
                          <h5 className="mx-4">Providing seamless support</h5>
                            <hr className=" mx-4 p-1" style={{color:'orange', width:'15%'}}/>
                            <br/>
                            <p className="mx-3" style={{fontSize:'30px'}}>Onboarding Engineers</p>
                            <p className="mx-3">
                              TechResQ offers various types of ICT support. Ranging from desktop support to infrastructure support. Providing flexible support to clients as they require. Having a good real-time response is what sets us aside from competion. 
                            </p>

                            <div className="row mx-2">
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    <h3>Seamless Support</h3>
                                    <p>
                                    We believe in assisting clients in everday ICT issues with ease.
                                    </p>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    <h3>Response Times</h3>
                                    <p>
                                        Clients have SLA’s as well  which is why we provide instant support.
                                    </p>
                                </div>
                            </div>
                            <div className="row mx-2 mt-3">
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    <h3>Client Care</h3>
                                    <p>
                                    Customers are TechResQ’s number one priority.
                                    </p>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    <h3>Customer Support</h3>
                                    <p>
                                       Clients can reach via the app , email or make use of the site for support.
                                    </p>
                                </div>
                            </div>


                      </div>
                </div>
               
               
             </div>

              <Footer/>

        </div>
    )
}
