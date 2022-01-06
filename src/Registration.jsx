import React, {useEffect, useRef} from 'react'
import Navbar from './Components/Nav';
import { Card, Form,Button } from 'react-bootstrap';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import lottie from 'lottie-web';
import { useState } from 'react';
import sideLottie from './Assets/officeLottie.json';
import Footer from './Components/Footer';
import './App.css';

 
export default function Registration() {

const clientId ="1021479639634-u6k8ator1sfup9uhpe7aasvc0j4qbbof.apps.googleusercontent.com";

let GoogleEmail=""
let GoogleFamilyName=""
let GoogleGivenName = ""
let GoogleID=""
let GoogleImgURL=""
let GoogleName=""

const [userId, setUserId]= useState('');
const [userEmail, setUserEmail]= useState('');
const [userFullname, setUserFullname]= useState('');
const [userGender, setUserGender]= useState('');
const [userContact, setUserContact]= useState('');
const [userAddress, setUserAddress]= useState('');
const [userDOB, setUserDOB]= useState('');
const [userPassword, setUserPassword]= useState('');
const [userConfirmPassword, setUserConfirmPassword]= useState('');
const[showLoginButton, setShowLoginButton] = useState(true);
const[showLogoutButton, setShowLogoutButton] = useState(false);


const container = useRef(null)

useEffect( ()=>{

lottie.loadAnimation({
    container: container.current,
    renderer:'svg',
    loop:true,
    autoplay:true,
    animationData:sideLottie
})

},[])



let display =()=>
{
    console.log(userId);
}

const onLoginSuccess = (response) => {
    console.log("Login success: ",response.profileObj);

    GoogleEmail=response.profileObj.email;
    GoogleFamilyName=response.profileObj.familyName;
    GoogleGivenName=response.profileObj.givenName;
    GoogleID=response.profileObj.googleId;
    GoogleImgURL=response.profileObj.imageUrl;
    GoogleName=response.profileObj.name;
    
    setShowLoginButton(false);
    setShowLogoutButton(true);
}

const onLoginFailure = (response) => {
    console.log(response);
  }

  const onLogoutSuccess = () => {
    console.log("You have been successfully signed out");
    setShowLoginButton(true);
    setShowLogoutButton(false);
}

const addUser = () =>{

            const headers = new Headers();
            headers.append("Content-Type", "application/json");

            fetch("http://localhost:3001/create", {
            method: "POST",
            body: JSON.stringify({
                 userID: userId,
                 userEMAIL: userEmail,
                 userFULLNAME:userFullname,
                 userGENDER:userGender,
                 userCONTACT:userContact,
                 userADDRESS:userAddress,
                 userDOB:userDOB,
                 userPASSWORD: userConfirmPassword
                 }),
            headers
            });

}

let checkPasswordConfirm = ()=>{

    if(userPassword===userConfirmPassword)
    {
        addUser();
    }
    else{
        alert("Passwords entered to not match");
    }
}

    return (
        <div>
        
            <Navbar/>
           
           <div className="row">
               
                <div className="col-xs-12 col-sm-12 col-md-12 backgroundFormColor ">

                    <div className="row p-4 shadow " style={{backgroundColor:'white'}}>
                            <h4 style={ {textAlign:'center'} }>Join the team at TechResQ</h4>
                            <h5 style={ {textAlign:'center'} }>Complete the registration process below</h5>
                    </div>
                   
                  <br/>

                    <Card className="p-5">
                        <div>
                                <h5>Registration Process</h5>
                                <p>Personal Particulars of Applicant, These guidelines are for amendments in terms of Section 7(2) of the Births and Deaths Registration Act</p>
                            
                                <hr style={{backgroundColor:'orange', borderColor:'orange',padding:'1px'}}/>
                        </div>

                        <div className="row p-5 shadow">
                                <div className="col-xs-12 col-sm-12 sol-md-12">
                                      <Form>
                                          <div className="row">
                                                <div className="col-xs-12 col-sm-4 col-md-4">
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Identity Number</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter identity no." onChange={(event)=>{
                                                        setUserId(event.target.value);
                                                    }} />
                                                </Form.Group>
                                                </div>
                                                <div className="col-xs-12 col-sm-4 col-md-4">
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Email address</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email" onChange={(event)=>{
                                                        setUserEmail(event.target.value);
                                                    }} />
                                                </Form.Group>
                                                </div>
                                                <div className="col-xs-12 col-sm-4 col-md-4">
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Full Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter your name" onChange={(event)=>{
                                                        setUserFullname(event.target.value);
                                                    }} />
                                                </Form.Group>
                                                </div>
                                          </div>
                                       
                                          <div className="row">
                                                <div className="col-xs-12 col-sm-4 col-md-4">
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Gender</Form.Label>
                                                    <Form.Select aria-label="Default select example">
                                                            <option>Select your gender</option>
                                                            <option value="Male">Male</option>
                                                            <option value="Female">Female</option>
                                                            onClick={(event)=>{
                                                            setUserGender(event.target.value);
                                                    }}
                                                           
                                                    </Form.Select>
                                                </Form.Group>
                                                </div>
                                                <div className="col-xs-12 col-sm-4 col-md-4">
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Contact Number</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter your cell no." onChange={(event)=>{
                                                        setUserContact(event.target.value);
                                                    }} />
                                                </Form.Group>
                                                </div>
                                                <div className="col-xs-12 col-sm-4 col-md-4">
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Postal Address</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Postal address" onChange={(event)=>{
                                                        setUserAddress(event.target.value);
                                                    }}/>
                                                </Form.Group>
                                                </div>
                                          </div>

                                          <div className="row">
                                                <div className="col-xs-12 col-sm-4 col-md-4">
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Date of Birth</Form.Label>
                                                    <Form.Control type="Date" placeholder="Choose your DOB" onChange={(event)=>{
                                                        setUserDOB(event.target.value);
                                                    }}/>
                                                </Form.Group>
                                                </div>
                                                <div className="col-xs-12 col-sm-4 col-md-4">
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control type="Password" placeholder="Choose password" onChange={(event)=>{
                                                        setUserPassword(event.target.value);
                                                    }}/>
                                                </Form.Group>
                                                </div>
                                                <div className="col-xs-12 col-sm-4 col-md-4">
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Confirm Password</Form.Label>
                                                    <Form.Control type="Password" placeholder="Confirm your password" 
                                                        onChange={(event)=>{
                                                        setUserConfirmPassword(event.target.value);
                                                    }}
                                                    />
                                                </Form.Group>
                                                </div>
                                          </div>

                                          <div className="row">
                                                <div className="col-xs-12 col-sm-4 sol-md-4">
                                                <Button variant="dark" type="button" onClick={checkPasswordConfirm}>
                                                    Proceed 
                                                </Button>
                                                { showLoginButton ?
                                                    <GoogleLogin style={{width:'30px !important'}} className="mt-2 mx-2"
                                                        clientId= {clientId}
                                                        buttonText="Login"
                                                        onSuccess={onLoginSuccess}
                                                        onFailure={onLoginFailure}
                                                        cookiePolicy={'single_host_origin'}
                                                    /> : null
                                                }
                                                { showLogoutButton ?
                                                    <GoogleLogout 
                                                        clientId={clientId}
                                                        buttonText="Logout"
                                                        onLogoutSuccess={onLogoutSuccess}
                                                        >
                                                </GoogleLogout> : null
                                                }
                                                </div>
                                          </div>

                                      </Form>
                                </div>
                        </div>
                    </Card>
                   

                </div>
           </div>

           <Footer/>
           
              
        </div>
    )
}
