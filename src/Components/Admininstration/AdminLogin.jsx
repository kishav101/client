import {Button, Card, Form} from "react-bootstrap";
import TextField from "@mui/material/TextField";
import {GoogleLogin, GoogleLogout} from "react-google-login";
import React, {useRef, useState} from "react";
import CardHeader from "react-bootstrap/CardHeader";
import {CardContent} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import landingBackground from '../../Assets/landingBackground.jpg'


export default function AdminLogin(){
    let navigate = useNavigate();
    const container = useRef(null);
    let GoogleEmail=""
    let GoogleFamilyName=""
    let GoogleGivenName = ""
    let GoogleID=""
    let GoogleImgURL=""
    let GoogleName=""
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
        navigate('/AdminDashboard',{state:{username:GoogleName,imageUrl:GoogleImgURL,email:GoogleEmail}});

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
    const setLoginCookieValues = function(){

        if(GoogleEmail !== ""){
            document.cookie = `usernameCookie= ${GoogleEmail}; `;
        }
        else{
            document.cookie = `usernameCookie= ${userEmail};`;
        }
    }
    return (
            <div className='d-flex pe-auto justify-content-center  m-auto' style={{width:'100%',height:'100vh'}}>
                <div style={{width:'100%',height:'100vh',backgroundImage:`url(${landingBackground})`,filter:'blur(8px)'}}>
                </div>
                <CardContent  style={{position:'absolute',height:'fit-content',width:'40rem',boxShadow:'2px 2px 20px black',backgroundColor:'rgba(255,255,255,0.85)',top:'10%'}}>
                   <div className='text-center mt-2'>
                      <h3 style={{color:'orange'}}> <u>ADMINISTRATOR</u></h3>
                   </div>
                    <div className='d-flex flex-column mt-5 w-75 mt-1 mb-4 mx-auto' >
                        <TextField id="standard-basic" label="Email/Username" variant="standard" required />
                        <br/>
                        <TextField id="standard-basic" label="Password" variant="standard" required/>
                    </div>
                    <div className='d-flex flex-column mt-5 w-75 mt-1 mb-4 mx-auto'>
                        <Link to='/AdminDashboard'>
                            <Button className='w-100'>Login in </Button>
                        </Link>
                    </div>
                    <div className='text-center'> or</div>
                    <hr className='d-flex flex-column w-75 mx-auto'/>
                    <div className='d-flex flex-row mx-auto justify-content-evenly w-75'>
                        <Link to=''>
                           <Button style={{width:'10rem'}}> Linkedin</Button>
                        </Link>
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
                    </div>
                    <div className='d-flex text-center ps-5 pt-4 mx-auto'><h6>If you are having issues with login in contact us at <Link to='#' onClick={() => window.location = 'mailto:support@techresq.co.za'}>support@techresq.co.za</Link></h6> </div>
                </CardContent>
            </div>
    )
}