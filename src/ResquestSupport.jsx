import React from 'react';
import Navbar from './Components/Nav';
import Footer from './Components/Footer';
import landingImage from './Assets/landingBackground.jpg';
import support from './Assets/support.jpg'
import { Card, Form } from 'react-bootstrap';
import { useState, useEffect,useRef } from 'react';
import lottie from 'lottie-web';
import desktop from './Assets/desktop.json';
import maintenance from './Assets/maintenance.json';
import security from './Assets/security.json'
import './App.css';
import { useNavigate } from "react-router-dom";
import Axios from 'axios'
import Dialog from "@mui/material/Dialog";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from '@mui/material/Button';



export default function ResquestSupport() {

    let navigate = useNavigate();
    const container = useRef(null);
    const container2 = useRef(null);
    const container3 = useRef(null);

    const [fullnameCustomer, setCustomerFullname]= useState('');
    const [descriptionCustomer, setCustomerDescription]= useState('');
    const [emailCustomer, setCustomerEmail]= useState('');
    const [contactCustomer, setCustomerContact]= useState('');
    const [addressCustomer, setCustomerAddress]= useState('');
    const [areaCustomer, setCustomerArea]= useState('');
    const[ticketSuccess, setTicketSuccess] = useState(false);


    function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 4000));
      }

    function LoadingButton() {
        const [isLoading, setLoading] = useState(false);
      
        

        useEffect(() => {
          if (isLoading) {
            simulateNetworkRequest().then(() => {
              setLoading(false);
            });
          }
        }, [isLoading]);
      
        const handleClick = () => setLoading(true);
      
        return (
          <Button
            variant="dark"
            disabled={isLoading}
            onClick={!isLoading ? handleClick : null}
          >
            {isLoading ? 'Sending...' : 'Submit Ticket'}
          </Button>
        );
      }

    function captureTicket(){

        const headers = new Headers();
        headers.append("Content-Type", "application/json");
    
        fetch('http://localhost:3001/insertTicket', {
            method: "POST",
            body: JSON.stringify({
                CUSTOMER_NAME:fullnameCustomer,
                CUSTOMER_DESCRIPTION:descriptionCustomer,
                ADDRESS:addressCustomer,
                EMAIL:emailCustomer,
                CONTACT:contactCustomer,
                CATAGORY:areaCustomer,
                DATE_OPENED: Date().toLocaleUpperCase()
                 }),
            headers
            });

            simulateNetworkRequest().then(()=>{
                setTicketSuccess(false);
            })
    }


    useEffect( ()=>{

        lottie.loadAnimation({
            container: container.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData:desktop
        })
        
        },[])
        useEffect( ()=>{

            lottie.loadAnimation({
                container: container2.current,
                renderer:'svg',
                loop:true,
                autoplay:true,
                animationData:maintenance
            })
            
            },[])

            useEffect( ()=>{

                lottie.loadAnimation({
                    container: container3.current,
                    renderer:'svg',
                    loop:true,
                    autoplay:true,
                    animationData:security
                })
                
                },[])


         const [open, setOpen] = useState(false);

         const handleClickToOpen = () => {
            setOpen(true);
          };
          
          const handleToClose = () => {
            setOpen(false);
          };
          
          

    return (
        <div>
        <Navbar/>

            <div className="row " style={{backgroundImage:`url(${landingImage})`}}>
                <div className="col-xs-12 col-sm-12 col-md-12 ">
                    <br/>
                    <h2 className="mx-5 mt-5" style={{color:'white', textAlign:'center'}}>Request Instant Support Online</h2>
                    <hr className="mx-5 mx-auto " style={{color:'white', padding:'2px', width:'75%'}}/>
                   <br></br>
                   <br></br>
                </div>
              
            </div>
            <div className='row mt-5'>
                <div className="col-xs-12 col-sm-12 col-md-12" style={{textAlign:'center', fontFamily:'Arial '}}>
                    <h1>It's Like Having the World's Best IT Guy at your door</h1>
                    <p>
                        We're just a phone call or email away. Our team can offer you a wide range of expertise:
                    </p>
                    <hr className="mx-5" style={{color:'orange', padding:'4px'}}/>
                </div>
            </div>

            <div className="row mt-2 mx-5">
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <Card className="shadow p-4 mx-3">
                        <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                                       <div className="container mb-3" ref={container}  style={{ width:'150px'}}></div>
                       </div>
                        </div>
                            <div className="row ">
                              
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                <h4 style={{color:'orange'}}>On-site and remote support</h4>
                                </div>
                            </div>
                            <hr style={{color:'orange', padding:'1px'}}/>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                <p > We are availiable 24/7. Schedule an appointment to get help on site, or call/email us for a faster response. We use powerful software to share your screen and get you help with a minimal wait</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <Card className="shadow p-4 mx-3">
                        <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                                       <div className="container mb-3"  ref={container2} style={{ width:'150px'}}></div>
                                </div>
                        </div>
                        <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                <h4 style={{color:'orange'}}> Desktop maintenance and service</h4>
                              
                                </div>
                            </div>
                            <hr style={{color:'orange', padding:'1px'}}/>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                <p >	
                                    Workstation management and maintenance
                                    Software checks all of your devices 24 hours per day, automatically alerting us to start working on your problems before they interrupt your work.
                                 </p>
                                 </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <Card className="shadow p-4 mx-3">
                        <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                                       <div className="container mb-3" style={{ width:'200px'}} ref={container3}></div>
                                </div>
                        </div>
                        <div className="row ">
                               
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                <h4 style={{color:'orange'}}> Antivirus, Backup, and Security</h4>
                                </div>
                            </div>
                            <hr style={{color:'orange', padding:'1px'}}/>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                <p >	
                                 Security is essential to an organization Keep your workstations secure and protected from viruses, prying eyes, or thieves. Know where all of your machines are at all time and keep your data backed up 24/7.  </p>
                                 </div>
                            </div>
                        </Card>
                    </div>
            </div>

            <div className="row mt-4 mb-3 p-3" style={{backgroundColor:'#fcfcfc'}}>
                <div className="col-xs-12 col-sm-6 col-md-6">
                    <Card className=" shadow p-4">
                        <h4 className="mx-4" style={{fontFamily:'sans-serif'}}>Request Support</h4>
                        <hr className="mx-4 p-1 " style={{color:'orange'}}/>
                        <Form>
                            <div className="row mx-4">
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                <Form.Group className="mb-3" >
                                         <Form.Label>Customer Name</Form.Label>
                                         <Form.Control type="text" placeholder="John Nathan" onChange={(event)=>{
                                                setCustomerFullname(event.target.value);
                                         }}/>
                                </Form.Group>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                <Form.Group className="mb-3" >
                                         <Form.Label>Description of Issue</Form.Label>
                                         <Form.Control type="text" placeholder="login domain issue" onChange={(event)=>{
                                              setCustomerDescription(event.target.value);
                                         }}/>
                                </Form.Group> 
                                </div>
                            </div>
                            <div className="row mx-4">
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    <Form.Group className="mb-3" >
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="John@somewhere.com" onChange={(event)=>{
                                             setCustomerEmail(event.target.value);
                                            }}/>
                                    </Form.Group>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                <Form.Group className="mb-3" >
                                         <Form.Label>Contact</Form.Label>
                                         <Form.Control type="text" placeholder="032 976 5469" onChange={(event)=>{
                                          setCustomerContact(event.target.value);
                                         }}/>
                                </Form.Group>
                                </div>
                            </div>
                            <div className="row mx-4">
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    <Form.Group className="mb-3" >
                                            <Form.Label>Physical Address</Form.Label>
                                            <Form.Control type="text" placeholder="02 Gold Reef City" onChange={(event)=>{
                                             setCustomerAddress(event.target.value);
                                            }}/>
                                    </Form.Group>  
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                <Form.Label>Choose Area</Form.Label>
                                <Form.Select  aria-label="Select Field" onClick={(event)=>{
                                                           setCustomerArea(event.target.value);     
                                                                
                                                            }}>
                                                          
                                                            <option value="Network Support">Network Support</option>
                                                            <option value="Server Support">Server Support</option>
                                                            <option value="Desktop Support">Desktop Support</option>
                                                            <option value="Cyber-Security">Cyber-Security</option>
                                                           
                                                         </Form.Select>  
                                </div>
                            </div>
                            <div className="row mx-4">
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                        <Button variant="contained"  color="primary" type="button" onClick={handleClickToOpen}>Request Support</Button>
                                      

                                        <Dialog open={open} onClose={handleToClose}>
                                                <DialogTitle>{"Are you sure?"}</DialogTitle>
                                                    <DialogContent>
                                                        <DialogContentText>
                                                             If you continue TechReQ will be in touch shortly.
                                                        </DialogContentText>
                                                    </DialogContent>
                                                <DialogActions>
                                                <Button  onClick={()=>{

                                                            handleToClose()
                                                            captureTicket()
                                                            setTicketSuccess(true);

                                                            } }
                                                            color="primary" autoFocus>
                                                        Continue
                                                    </Button>
                                                    <Button onClick={handleToClose}
                                                            color="primary" autoFocus>
                                                        Close
                                                    </Button>
                                                    
                                                </DialogActions>
                                            </Dialog>
                                </div>
                               
                            </div>
                        </Form>
                    </Card>
                        { ticketSuccess ?
                            <div className="row mt-4">
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                            <div className="alert alert-success" role="alert">
                                                Thank you, TechResQ will be in touch shortly.
                                            </div>
                                 </div>
                             </div>
                        : null}

                </div>
                <div className=" mt-2 col-xs-12 col-sm-6 col-md-6">
                    <Card className="p-2" >
                            <div>
                              <img src={support} className="img-rounded img-thumbnail" alt="Cinque Terre"/>
                            </div>
                    </Card>
                </div>
                <br></br>
            </div>
            <Footer/>
        </div>
    )
}
