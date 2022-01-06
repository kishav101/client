import React from 'react';
import Footer from './Components/Footer';
import { Card, Form,Button } from 'react-bootstrap';
import { useState, useEffect,useRef } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Axios from 'axios'

export default function ForgetPassword() {

    const [smsChecked, setSmsCheck] = useState(false);
    const [emailChecked, setEmailCheck] = useState(false);
    const[showOtp, setShowOtp] = useState(false);
    const[currentPassword, setCurrentPassword]= useState('');
    const[newPassword, setNewPassword]= useState('');
    const[confirmPassword, setConfirmPassword]= useState('');
    const [showEnterOtpPanel, setShowOtpPanel] = useState(false);

   const reciever =27605484251
   const sender =2712343445
   const username='Vuyani'
   const password= "Qaqmbile_1"
   const rand= 1 +(Math.random()*(5));
   const text = "Your OTP is " +rand.toString;

  
function sendUserOtp(){

    Axios.post("http://localhost:3001/sendOtp", {
        SMSusername:username,
        SMSpassword:password,
        SMStext: text,
        SMSreciever: reciever,
        SMSsender:sender
    }).then( ()=>{
        console.log('done');
    }) 

}   


function datahandler(){

    if(smsChecked===true){
       // alert('sms')
       sendUserOtp();
    }
    if(emailChecked===true){
        alert('email')
    }

}

function checkPasswords(){

    if(newPassword==confirmPassword){
            setShowOtp(true);
    }else{

    }
}


    return (
        <div>
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Container>
              <Navbar.Brand href="/">Reset Password</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              </Container>
            </Navbar>

            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className=" p-5 ">
                        <Container>
                        <Form>
                            <Card className="p-5 shadow mt-5">
                                <div className="row mx-auto">
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                            <h3>Reset your Password</h3>
                                            <hr style={{backgroundColor:'orange', padding:'5px'}}/>
                                    </div>
                                </div>
                                <div class="row mt-4">
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <Form.Group className="mb-3" >
                                                        <Form.Label>Email address</Form.Label>
                                                        <Form.Control type="email" id="smsCheckBox" placeholder="Account email address" onChange={(event)=>{
                                                            
                                                        }} />
                                            </Form.Group>
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <Form.Group className="mb-3" >
                                                        <Form.Label>Current Password</Form.Label>
                                                        <Form.Control type="email" id="emailCheckBox" placeholder="....." onChange={(event)=>{
                                                            
                                                        }} />
                                            </Form.Group>
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>New Password</Form.Label>
                                                        <Form.Control type="email" placeholder="....." onChange={(event)=>{
                                                            
                                                        }} />
                                            </Form.Group>
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Confirm Password</Form.Label>
                                                        <Form.Control type="email" placeholder="...." onChange={(event)=>{
                                                            
                                                        }} />
                                            </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                            <Button className="mx-auto" onClick={checkPasswords} variant="dark" type="button" style={{width:'50%'}} >
                                                        Continue
                                            </Button>
                                </div>
                            </Card>
                         </Form>
                        </Container>  
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 mt-5">
               { showOtp ?
                    <Container>
                    <Form>
                        <Card className="p-5 shadow mt-5 ">
                           <div className="row ">
                                <div className="col-xs-12 col-sm-12 col-md-12 ">
                                    <h3 >OTP Verification</h3>
                                    <hr style={{backgroundColor:'orange', padding:'5px'}}/>
                                </div>
                           </div>
                           <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                   
                                </div>
                           </div>
                           <div className="row">
                                <div className="col-xs-12 col-sm-3 col-md-3">
                                <Form.Group className="mb-3" >
                                        <Form.Check type="checkbox" id="smsCheckbox"  onChange={e => setSmsCheck(e.currentTarget.checked)}   label="via SMS:" />
                                    </Form.Group>           
                                </div> Or
                                <div className="col-xs-12 col-sm-3 col-md-3">
                                    <Form.Group className="mb-3" >
                                        <Form.Check type="checkbox" id="emailCheckbox"  onChange={e => setEmailCheck(e.currentTarget.checked)}  label="via Email:" />
                                    </Form.Group>
                                </div>
                           </div>
                           <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                           <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Email address</Form.Label>
                                                        <Form.Control type="email" placeholder="John@someone.com" onChange={(event)=>{
                                                            
                                                        }} />
                                            </Form.Group>
                                    </div>
                           </div>
                           <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                           <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Cell Number</Form.Label>
                                                        <Form.Control type="text" placeholder="+27" onChange={(event)=>{
                                                            
                                                        }} />
                                            </Form.Group>
                                    </div>
                           </div>
                           <div className="row ">
                                  
                                <Button className="mx-auto" variant="dark" type="button" onClick={datahandler}  style={{width:'50%'}} >
                                     Send OTP
                                 </Button> 
                           </div>
                           <div className="row ">
                                            <Form.Group className="mt-4" controlId="formBasicEmail">
                                                        <Form.Label >Enter OTP :</Form.Label>
                                                        <Form.Control type="text" placeholder="+27" onChange={(event)=>{
                                                            
                                                        }} />
                                            </Form.Group>
                           </div>
                           <div className="row mt-2 ">
                                  
                                <Button className="mx-auto" variant="success"  type="button"  style={{width:'50%'}} >
                                     Complete
                                 </Button> 
                           </div>
                        </Card>
                    </Form>
                </Container> : null
                }
                 </div>
            </div>
            
            <br></br>
            <Footer/>
        </div>
    )
}
