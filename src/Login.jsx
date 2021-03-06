import React from 'react';
import Navbar from './Components/Nav';
import Footer from './Components/Footer';
import landingImage from './Assets/landingBackground.jpg';
import { Card, Form,Button } from 'react-bootstrap';
import { useState, useEffect,useRef } from 'react';
import lottie from 'lottie-web';
import sideLottie from './Assets/LoginLottie.json';
import './App.css';
import { useNavigate } from "react-router-dom";
import Axios from 'axios'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import TextField from '@mui/material/TextField';

export default function Login() {

let navigate = useNavigate();
const container = useRef(null);

let GoogleEmail=""
let GoogleFamilyName=""
let GoogleGivenName = ""
let GoogleID=""
let GoogleImgURL=""
let GoogleName=""

function inputs(){
    return( <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Hello World"
        />)
}

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
    const[userList, setUserList] = useState([]);
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


        setLoginCookieValues();
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

        fetch('http://localhost:3001/createCvRow', {
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

function insertGoogleAccount(){

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    fetch('http://localhost:3001/insertUserGoogleAccount', {
        method: "POST",
        body: JSON.stringify({
             googleEmail:GoogleEmail,
             googleName: GoogleName,
             googleAvatar: GoogleImgURL,
             googleGoogle:GoogleID
             }),
        headers
        });
}

 function checkGoogleAccountExits(){ 

        Axios.post("http://localhost:3001/checkGoogleAccountExits",{
            userEmail:userEmail,
            userPassword:userPassword
        }).then((response)=>{
          
           let x_email = response.data[0].Email
            
            if( userEmail.toUpperCase() === x_email.toUpperCase())
            {
                
                 navigate('/Applicant_Profile'); 
            }
            else
            {
                alert("Username and Password Incorrect")
            }
           
        })
   }

 function checkUserList(){ 
   
     Axios.post("http://localhost:3001/checkUserLogon",{
            userEmail:userEmail,
            userPassword:userPassword
        }).then((response)=>{
          
         let x_email = response.data[0].Email_ID;

           console.log(x_email);
            if( userEmail === x_email)
            {
                 setLoginCookieValues();
                 navigate('/Applicant_Profile'); 
            }
            else
            {
                alert("Username and Password Incorrect")
            }
           
           
        })
   }

   const setLoginCookieValues = function(){

    if(GoogleEmail !== ""){
        document.cookie = `usernameCookie= ${GoogleEmail}; `;
    }
    else{
        document.cookie = `usernameCookie= ${userEmail};`;
    }
    
   }

    return (
        <div>
            <Navbar/>

                    <div className="backgroundFormColor" >
                        <div className="row mx-auto" style={{justifyContent:'center'}}>
                            <div className="col-xs-12 col-sm-12 col-md-12 " style={{width:'50%'}}>
                            <br/>
                            <Form>
                                <Card className="shadow mt-5 mb-5 p-5" style={{marginLeft:'10%', marginRight:'10%'}}>
                                  
                                                <h3 style={{textAlign:'center', fontWeight:'bold', fontSize:'33px'}}>Sign in as </h3>
                                                <hr style={{color:'orange',padding:'3px'}}/>
                                                <br></br>
                                                <Form.Label>Username </Form.Label>
                                                <TextField
                                                        required
                                                        id="outlined-required"
                                                        label="Required"
                                                        placeholder='John@somewhere.com'
                                                        onClick={(event)=>{
                                                                    setUserEmail(event.target.value);
                                                                }}
                                                        />
                                                        <Form.Label>Password</Form.Label>
                                                        <TextField
                                                            required
                                                            id="outlined-required"
                                                            label="Required"
                                                            placeholder='***********'
                                                            type="password"
                                                            onClick={(event)=>{
                                                                setUserPassword(event.target.value);
                                                                    }}
                                                            />        
                                              
                                               
                                     
                                                <Button className="mx-auto mt-3" variant="dark" type="button" onClick={checkUserList} style={{width:'50%'}} >
                                                        Continue with Email
                                                </Button>
                                                <div className='row col-6 mx-auto'>
                                                    { showLoginButton ?
                                                        
                                                        <GoogleLogin style={{width:'50% !important'}} className="mt-2"
                                                            clientId= {clientId}
                                                            buttonText="Login"
                                                            onSuccess={onLoginSuccess}
                                                            onFailure={onLoginFailure}
                                                            cookiePolicy={'single_host_origin'}
                                                        /> : null
                                                    }
                                                </div>
                                               
                                                { showLogoutButton ?
                                                    <GoogleLogout 
                                                        clientId={clientId}
                                                        buttonText="Logout"
                                                        onLogoutSuccess={onLogoutSuccess}
                                                        >
                                                </GoogleLogout> : null
                                                }
                                                
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

            <Footer/>
        </div>
    )
}
