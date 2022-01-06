import React from 'react'
import Navbar from './Components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap';
import NavBar from './Components/Nav';
import serviceBackground from './Assets/ServiceBackground.jpg';
import { useState, useEffect,useRef } from 'react';
import lottie from 'lottie-web';
import frontend from './Assets/frontend.json';
import server from './Assets/server.json';
import access from './Assets/access.json';
import network from './Assets/network.json';
import helpdesk from './Assets/helpdesk.jpg';
import helpdesk2 from './Assets/helpdesk2.jpg';
import helpdesk3 from './Assets/helpdesk3.jpg';
import helpdesk4 from './Assets/helpdesk4.jpg';
import Footer from './Components/Footer';

export default function Services() {

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
        animationData:frontend
    })
    
    },[])
    useEffect( ()=>{

      lottie.loadAnimation({
          container: container2.current,
          renderer:'svg',
          loop:true,
          autoplay:true,
          animationData:server
      })
      
      },[])

      useEffect( ()=>{

        lottie.loadAnimation({
            container: container3.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData:network
        })
        
        },[])
        useEffect( ()=>{
    
          lottie.loadAnimation({
              container: container4.current,
              renderer:'svg',
              loop:true,
              autoplay:true,
              animationData:access
          })
          
          },[])


    return (
        <div>
        <Navbar/>
        <div>
                <figure className="position-relative">
                  <img src= { serviceBackground } alt="IT" className="img-fluid" ></img>
                    <figcaption className="p-5">
                      <h1>TechResQ ICT Support Services</h1>
                      <p id="landingPragraph">
                       We love to find new idea and technologies to overcome everyday ICT issues. We firmly believe that
                       creating employment to solve this is the best way forward for everyone.
                      </p>
                    </figcaption>
                </figure>

                <div className="row"> 
                <div className="col-xs-12 col-sm-3 col-md-3">
                        <Card className="shadow p-4 mx-2">
                        <div className="container mb-3" ref={container}  style={{ width:'170px'}}></div>
                        <p style={{textAlign:'center', fontSize:'20px'}}>FRONT-END USER SUPPORT</p>
                        <hr style={{color:'orange', padding:'1px'}}/>
                          <p style={{textAlign:'center', fontWeight:'30', fontSize:'17px'}}>We offer desktop suppor via remote or on-site. </p>
                        </Card>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3">
                        <Card className="shadow p-4 mx-2">
                        <div className="container mb-3" ref={container2}  style={{ width:'210px'}}></div>
                        <p style={{textAlign:'center', fontSize:'20px'}}>INFRASTRUCTURE SUPPORT</p>
                        <hr style={{color:'orange', padding:'1px'}}/>
                          <p style={{textAlign:'center', fontWeight:'30', fontSize:'17px'}}>We can help you build or maintain your company ICT..</p>
                        </Card>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3">
                        <Card className="shadow p-4 mx-2">
                        <div className="container mb-3" ref={container3}  style={{ width:'170px'}}></div>
                        <p style={{textAlign:'center', fontSize:'20px'}}>NETWORKING AND CABLING</p>
                        <hr style={{color:'orange', padding:'1px'}}/>
                          <p style={{textAlign:'center', fontWeight:'30', fontSize:'17px'}}>Assisting with additional or maintanence of cabling.</p>
                        </Card>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3">
                        <Card className="shadow p-4 mx-2">
                        <div className="container mb-3" ref={container4}  style={{ width:'140px'}}></div>
                        <p style={{textAlign:'center', fontSize:'20px'}}>Access control, CCTV and firewalls.</p>
                        <hr style={{color:'orange', padding:'1px'}}/>
                          <p style={{textAlign:'center', fontWeight:'30', fontSize:'17px'}}>Access control, CCTV, Anti-virus  and firewalls.</p>
                        </Card>
                    </div>
                </div>
               
                  <div className="row mt-4 p-4 backgroundFormColor">
                      <div className="col-xs-12 col-sm-8 col-md-8">
                          <Card className=" p-3 shadow">
                             <h5>Help-desk Support</h5>
                             <hr className=" p-1" style={{color:'orange', width:'50%'}}/>
                              <p className="p-3">
                              At TechResQ, our experienced consultants know that no job is too big or too small – 
                              it is a problem that needs to be fixed so you can carry on with your work, your studies, 
                              and your life. We spend a great deal of our time researching, testing, and implementing the 
                              latest and most advanced technology so we know how to get the most benefits for you
                              </p>
                            
                              <p className="p-3" style={{fontSize:'18px'}}>
                                TechResQ offers IT Support nationwide, with offices in Johannesburg, KZN and Cape Town
                              </p>
                          </Card>
                      </div>
                      <div className="col-xs-12 col-sm-4 col-md-4">
                            <div>
                              <img src={helpdesk} className="img-rounded img-thumbnail" alt="Cinque Terre"/>
                            </div>
                      </div>
                  </div>
                  <div className="row p-4 backgroundFormColor">
                      <div className="col-xs-12 col-sm-6 col-md-6">
                      <div>
                              <img src={helpdesk2} className="img-rounded img-thumbnail" alt="Cinque Terre"/>
                            </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-6">
                      <Card className=" p-3 shadow">
                             <h5>ICT Infrastructure Support</h5>
                             <hr className=" p-1" style={{color:'orange', width:'50%'}}/>
                              <p className="p-3">
                              So whether it is a problem with a network cable, a virus, or even a cloud migration, 
                              give our team a call and discuss how we can partner to take you forward and alleviate 
                              your pressure with the right tech support. After all, you do not want to get stuck with I.T.
                               issues – you want to rule the world! </p>
                          </Card>
                      </div>
                  </div> 
                  <div className="row mt-4">
                      <div className="col-xs-12 col-sm-12 col-md-12">
                          <p className="mx-auto p-3" style={{textAlign:'center', fontSize:'24px'}}>FOR BUSINESS</p>
                          <p className="mx-auto p-4" style={{textAlign:'center', fontSize:'18px'}}>
                          Any business owner knows the struggle of balancing meeting growth objectives while still 
                          ensuring the lights are kept on. Complicating matters further is ever-changing technology 
                          requirements with employees expecting more from their business networks.
                          </p>
                      </div>
                  </div>
                   <div className="row p-4 mt-4 backgroundFormColor">
                      <div className=" mt-5 col-xs-12 col-sm-6 col-md-6">
                        <Card className="p-4 mt-5 mb-5 shadow" >
                        <h4>Business Needs</h4>
                            <p style={{fontSize:"20px"}}>
                            Our professional and dedicated team of technicians and consultants can provide you with the IT 
                            support you need so you can focus on improving your bottom line. Whether it is a fully managed IT
                            service or just needing assistance with a software or hardware installation, TechResQ can help you.
                            </p>
                        </Card>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-6">
                            <div className="mt-5">
                              <img src={helpdesk3} className="img-rounded img-thumbnail" alt="Cinque Terre"/>
                            </div>
                      </div>
                  </div>
            </div>

            <Footer/>
            
        </div>
    )
}
