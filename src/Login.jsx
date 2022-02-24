import React from 'react';
import Navbar from './Components/Nav';
import Footer from './Components/Footer';
import landingImage from './Assets/landingBackground.jpg';
import { Card, Form } from 'react-bootstrap';
import { useState, useEffect,useRef } from 'react';
import lottie from 'lottie-web';
import sideLottie from './Assets/LoginLottie.json';
import './App.css';
import { useNavigate } from "react-router-dom";
import Axios from 'axios'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button'

export default function Login() {

let navigate = useNavigate();
const container = useRef(null);

let GoogleEmail=""
let GoogleFamilyName=""
let GoogleGivenName = ""
let GoogleID=""
let GoogleImgURL=""
let GoogleName=""



useEffect( ()=>{

    lottie.loadAnimation({
        container: container.current,
        renderer:'svg',
        loop:true,
        autoplay:true,
        animationData:sideLottie
    })
    
    },[])
    
    const clientId ="1021479639634-u6k8ator1sfup9uhpe7aasvc0j4qbbof.apps.googleusercontent.com";
    const [userEmail, setUserEmail]= useState('');
    const [userPassword, setUserPassword]= useState('');
    const[showLoginButton, setShowLoginButton] = useState(true);
    const[showLogoutButton, setShowLogoutButton] = useState(false);

   
   function onLoginSuccess ( response) {

        console.log("Login success: ",response.profileObj);

        GoogleEmail=  response.profileObj.email;
        GoogleFamilyName=  response.profileObj.familyName;
        GoogleGivenName=response.profileObj.givenName;
        GoogleID=response.profileObj.googleId;
        GoogleImgURL=response.profileObj.imageUrl;
        GoogleName=response.profileObj.name;
        
        setShowLoginButton(false);
        setShowLogoutButton(true);


      //  setLoginCookieValues();
       // createCvRowForUser();
         

          navigate('/Applicant_Profile');
       
    }

    function createCvRowForUser(){

        let x = ""

        if(GoogleEmail==""){
            x=userEmail;
        }
        else {
            x=GoogleEmail;
        }
       
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        fetch('httpS://localhost:3001/createCvRow', {
            method: "POST",
            body: JSON.stringify({
                 userEMAIL1:x
                 }),
            headers
            });


    }
      
    const onLoginFailure = (response) => {
        console.log(response);
       // alert("Please try again, thank you!")
      }

      const onLogoutSuccess = () => {
        console.log("You have been successfully signed out");
        setShowLoginButton(true);
        setShowLogoutButton(false);
    }


 function checkUserList(){ 
   
     Axios.post("https://techresqnodesrv.click/getLoginPassword",{
            userEmail1:userEmail
        }).then((response)=>{
          
    

           console.log(response.data[0].password);
           console.log(userPassword);
           if(response.data[0].password===userPassword)
            {
                navigate('/Applicant_Profile');
            }
        })
   }

   const setLoginCookieValues = function(){

   
        document.cookie = `usernameCookie= ${userEmail}; `;
      //  alert(GoogleEmail);
        document.cookie = `usernameCookie= ${userEmail};`;
  
   

   }

    return (
        <div>
            <Navbar/>

                    <div className="backgroundFormColor" >
                        <div className="row mx-auto"  style={{justifyContent:'center'}}>
                        <div className='container'  >
                        <div className="col-xs-6 col-sm-6 col-md-6 mx-auto " >
                            <br/>
                            <Form>
                                <Card className="shadow mt-5 mb-5 p-5" >
                                  
                                                <h3 style={{textAlign:'center', fontWeight:'bold', fontSize:'33px'}}>Sign in as </h3>
                                                <hr style={{color:'orange',padding:'3px'}}/>
                                                <br></br>
                                                <Form.Label>Username </Form.Label>
                                                <TextField
                                                        required
                                                        id="outlined-required"
                                                        label="Required"
                                                        placeholder='John@somewhere.com'
                                                        onChange={(event)=>{
                                                                    setUserEmail(event.target.value);
                                                                }}
                                                        />
                                                        <Form.Label>Password</Form.Label>
                                                        <TextField
                                                        required
                                                        id="outlined-required"
                                                        label="Required"
                                                        type='password'
                                                        placeholder='************'
                                                        onChange={(event)=>{
                                                                    setUserPassword(event.target.value);
                                                                }}
                                                        />   
                                              
                                               
                                     
                                               

                                                <div className='row col-6  mx-auto mt-3'>
                                                   <Button variant="contained" color='warning' endIcon={<EmailIcon />}
                                                    onClick={()=>{
                                                    checkUserList()
                                                    setLoginCookieValues()}}
                                                     >
                                                        Continue with Email
                                                   </Button>
                                                </div>
                                               
                                               
                                                <a className="mt-3 mx-auto" onClick={
                                                    ()=>{
                                                        navigate('/ForgetPassword');
                                                    }
                                                } style={{color:'orange'}}>Forgot Password ?</a>
                                    
                                    
                                </Card>
                              </Form>
                            </div>
                        </div>
                            
                        </div>
                    </div>

            <Footer/>
        </div>
    )
}
