import React from 'react'
import Applicant_Profile_Nav  from './Components/Applicant_Profile_Nav';
import landingImage from './Assets/landingBackground.jpg';
import { Card, Form,Button,Tab,Tabs, Col, Row, Nav } from 'react-bootstrap';
import { useState, useEffect,useRef } from 'react';
import './App.css';
import {  HouseDoorFill, FilePerson,AppIndicator,GearFill, BoxArrowLeft } from 'react-bootstrap-icons';
import Axios from 'axios';
import { Chart } from "react-google-charts";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import AutorenewIcon from '@mui/icons-material/Autorenew';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PrintIcon from '@mui/icons-material/Print';


import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

import MenuItem from '@mui/material/MenuItem';


export default function Applicant_Profile() {

    let UserEmail_Variable ="";
    let cvId_Variable ="";
    let personalStatement_Variable ="";
    let professionalExperience_Variable ="";
    let academicHistory_Variable ="";
    let skills_Variable ="";
    let qualification_Variable ="";
    
    let emailId_DB ="";
    let applicantId_DB  ="";
    let name_DB  ="";
    let gender_DB  ="";
    let contact_DB  ="";
    let address_DB  ="";
    let dob_DB  ="";
    let password_DB  ="";

    let ticketIdDb = '';
    let ticketNameDB ='';
    let ticketDescriptionDb ='';
    let ticketAddressDb = '';
    let ticketEmailDB ='';
    let ticketContactDB ='';
    let ticketSolutionDB ='';
    let ticketStatusDB ='';
    let ticketUpdateDB ='';
    let ticketDateOpenedDB ='';
    let ticketCatagoryDB ='';
    let ticketDateClosedDB ='';
    let ticketTimeAssignedDB ='';
    let ticketReAssignedFromDB ='';
    let ticketTechnicianEmailDB ='';
    
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},

        {
            questionText: 'What are the emerging skills in ICT?',
			answerOptions: [
				{ answerText: 'IoT', isCorrect: true },
				{ answerText: 'Desktop Support', isCorrect: false },
				{ answerText: 'Bullying', isCorrect: false },
				{ answerText: 'Crime', isCorrect: false },
			],

        },
        {
            questionText: 'What is a short-range wireless communication technology?',
			answerOptions: [
				{ answerText: 'Internet', isCorrect: false },
				{ answerText: 'Wi-Fi', isCorrect: true },
				{ answerText: 'Bluetooth', isCorrect: false },
				{ answerText: 'Crime', isCorrect: false },
			],

        },
	];
    
	const questions2 = [
		{
			questionText: 'Who is the CEO of Ndala ICT Solutions?',
			answerOptions: [
				{ answerText: 'Vuyani Daweti', isCorrect: false },
				{ answerText: 'Victor van Dame', isCorrect: false },
				{ answerText: 'Kishav Durgapersad', isCorrect: false},
				{ answerText: 'Masakane Holomisa', isCorrect: true },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},

        {
            questionText: 'What are the emerging skills in ICT?',
			answerOptions: [
				{ answerText: 'IoT', isCorrect: true },
				{ answerText: 'Desktop Support', isCorrect: false },
				{ answerText: 'Bullying', isCorrect: false },
				{ answerText: 'Crime', isCorrect: false },
			],

        },
        {
            questionText: 'What is a short-range wireless communication technology?',
			answerOptions: [
				{ answerText: ' Internet', isCorrect: false },
				{ answerText: 'Wi-Fi', isCorrect: true },
				{ answerText: 'Bluetooth', isCorrect: false },
				{ answerText: 'Crime', isCorrect: false },
			],

        },
	];

    var dummyArray= [];
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    const[showQuiz, setShowQuiz] = useState(false);
    const [quizzPass, setQuizzPass] = useState(false);
    const [quizzFail, setQuizzFail] = useState(false);
    const[quizCatagory, setQuizzCatagory] = useState('');
    
    const[personalStatement, setPersonalStatement] = useState('');
    const[ProfessionalExperience, setProfessionalExperience] = useState('');
    const[academicHistory, setAcademicHistory] = useState('');
    const[skills, setSkills] = useState('');
    const[qualifications, setQualifications] = useState('');
    const[certificates, setCertificates] = useState(null);
    
    const[email, setEmail] = useState('');
    
    const[applicantId, setapplicantId] = useState('');
    const[name, setName] = useState('');
    const[gender, setGender] = useState('');
    const[contact, setContact] = useState('');
    const[address, setAddress] = useState('');
    const[dob, setDob] = useState('');
    const[password, setPassword] = useState('');
    const[Enteredpassword, setEnteredPassword] = useState('');
    const[Newpassword, setNewPassword] = useState('');
    const [avatar, setUserAvatar] = useState('');

    const[applicationData, setApplicationData] = useState([]);
    const[ticketData, setTicketData] = useState([]);
    const[searchTickets, setSearchTickets] = useState([]);

    const [ticketId, setTicketId] = useState('');
    const [ticketName, setTicketName] = useState('');
    const [ticketDescription, setTicketDescription] = useState('');
    const [ticketAddress, setTicketAddress] = useState('');
    const [ticketContact, setTicketContact] = useState('');
    const [ticketSolution, setTicketSolution] = useState('');
    const [ticketStatus, setTicketStatus] = useState('');
    const [ticketUpdate, setTicketUpdate] = useState('');
    const [ticketDateOpened, setTicketDateOpened] = useState('');
    const [ticketTimeAssigned, setTicketTimeAssigned] = useState('');
    const [ticketReAssignedFrom, setTicketReAssignedFrom] = useState('');


    const [checked, setChecked] = React.useState(false);
    
    let ticketTableIndex= 0;


    (function getNameCookie(){

            let nameCookie = document.cookie;
       
            let dummyVariable = nameCookie.substring(nameCookie.lastIndexOf("=")+1).trim();
            UserEmail_Variable=dummyVariable;
    })();

    function prettyTable(){
        return(
                    applicationData.map((row)=>(
                            <TableRow 
                                    key={row.Application_Number}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell align="left">{row.Application_Number}</TableCell>
                                <TableCell align="left">{row.Applicant_Fullname}</TableCell>
                                <TableCell align="left">{row.Application_Status}</TableCell>
                                <TableCell align="left">{row.Date_Captured}</TableCell>
                                <TableCell align="left">{row.Termination_Date}</TableCell>
                                <TableCell align="left">{row.Test_Catagory}</TableCell>
                                <TableCell align="left">{row.Test_Score}</TableCell>
                            </TableRow>
                     ))
                   
        )
    }

    (function setQ(){
    

        if(quizCatagory === "Network Engineer"){
            dummyArray=questions2.slice();
        }
        if(quizCatagory === "Server Support"){
            dummyArray=questions.slice();
        }
        if(quizCatagory === "Desktop Support"){
            dummyArray=questions2.slice();
        }
        if(quizCatagory === "Cyber-Security"){
            dummyArray=questions.slice();
        }
        else{
            dummyArray=questions.slice();
        }
       

    })();

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} 
        else
         {
			setShowScore(true);

            if(score>4){
                setQuizzPass(true);
                captureApplication();
            }
            else{
                setQuizzFail(true);
            }
		}
	};

    function resetAssessment(){
        setShowScore(false);
        setCurrentQuestion(0);
    }

 
    const startAssessment = ()=>{

        setQuizzPass(false);
        setQuizzFail(false);
        setShowScore(false);
        setCurrentQuestion(0);
        setScore(0);
       
        setShowQuiz(true);
    }

    function cancelAssessment(){

        setShowQuiz(false);
        setShowScore(false);
        setCurrentQuestion(0);
        setQuizzFail(false);
        setQuizzPass(false);
    }

function captureApplication(){
    
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    fetch('http://localhost:3001/insertApplication', {
        method: "POST",
        body: JSON.stringify({
             FULLNAME:name,
             DATE_CAPTURE: Date.now,
             APPLICATION_STATUS: "Pending",
             USER_EMAIL:UserEmail_Variable,
             SCORE:score,
             CATAGORY:quizCatagory
             }),
        headers
        })
}



function UpdatePersonalStatement(){

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    fetch('http://localhost:3001/UpdateCVPersonalStatement', {
        method: "POST",
        body: JSON.stringify({
             PERSONAL_STATEMENT:personalStatement,
             USER_EMAIL:UserEmail_Variable
             }),
        headers
        })
}

 function UpdateProfessionalExperience(){

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    fetch('http://localhost:3001/UpdateCVProfessionalExperience', {
        method: "POST",
        body: JSON.stringify({
             PROFESSIONAL_EXPERIENCE:ProfessionalExperience,
             USER_EMAIL:UserEmail_Variable
             }),
        headers
        })
}

function UpdateSkillsCompentencies(){
  
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    fetch('http://localhost:3001/UpdateCVSkillsCompentencies', {
        method: "POST",
        body: JSON.stringify({
             ACADEMIC_HISTORY:academicHistory,
             SKILLS:skills,
             QUALIFICATIONS:qualifications,
             CERTIFICATES:certificates,
             USER_EMAIL:UserEmail_Variable
             }),
        headers
        });
}


(function retreieveApplicantCV(){

    
    
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    Axios.post("http://localhost:3001/getUserCvData",{
            USER_EMAIL:UserEmail_Variable
        }).then((response)=>{
            console.log(response);

            cvId_Variable = response.data[0].CV_ID;
            personalStatement_Variable = response.data[0].Personal_Statement;
            professionalExperience_Variable = response.data[0].Professional_Experience;
            academicHistory_Variable = response.data[0].Academic_History;
            skills_Variable= response.data[0].Key_Skills;
            qualification_Variable= response.data[0].Qualifications;

            console.log(personalStatement_Variable);

           if( (personalStatement === '') ){
                setPersonalStatement(personalStatement_Variable);
                setProfessionalExperience(professionalExperience_Variable)
                setAcademicHistory(academicHistory_Variable)
                setSkills(skills_Variable)
                setQualifications(qualification_Variable)
           }
         
        })
})();

(function retreieveApplicantSettings(){


    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    Axios.post("http://localhost:3001/getApplicantSettings",{
            USER_EMAIL:UserEmail_Variable
        }).then((response)=>{

            address_DB = response.data[0].Address;
            applicantId_DB = response.data[0].Applicant_ID;
            contact_DB= response.data[0].Contact;
            dob_DB = response.data[0].DOB;
            emailId_DB = response.data[0].Email_ID;
            gender_DB = response.data[0].Gender;
            name_DB = response.data[0].Name;
            password_DB = response.data[0].Password;

          if(name ===''){
            setAddress(address_DB);
            setapplicantId(applicantId_DB);
            setContact(contact_DB);
            setDob(dob_DB);
            setEmail(emailId_DB);
            setGender(gender_DB);
            setName(name_DB);
            setPassword(password_DB);
          }
              
        })
})();

function UpdatePassword(){

    if(password===Enteredpassword){
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
    
        fetch('http://localhost:3001/setNewPassword', {
            method: "POST",
            body: JSON.stringify({
                 PASSWORD: Newpassword,
                 USER_EMAIL:UserEmail_Variable
                 }),
            headers
            });
    }
    else{
        alert('Old password does not match the provided one')
    }

}

function UpdatePreferences(){

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    fetch('http://localhost:3001/UpdateUserPreferences', {
        method: "POST",
        body: JSON.stringify({
             APPLICANT_ID:applicantId,
             NAME:name,
             GENDER:gender,
             CONTACT:contact,
             ADDRESS:address,
             DOB:dob,
             USER_EMAIL:UserEmail_Variable
             }),
        headers
        });
}



function retrieveAppplications(){
    
    Axios.post("http://localhost:3001/getAllApplications",{
        USER_EMAIL:UserEmail_Variable,
      
    }).then((response)=>{
        setApplicationData(response.data)
    })
}

function setApplicationDataToTable(){

    return applicationData.map( (application, index) => {

        const{Applicant_Fullname, Application_Number, Application_Status, Date_Captured, Email_ID, Termination_Date, Test_Catagory, Test_Score} = application
           
        return(
                <tr key={Application_Number}>
                    <td>{Application_Number}</td>
                    <td>{Applicant_Fullname}</td>
                    <td>{Application_Status}</td>
                    <td>{Date_Captured}</td>
                    <td>{Email_ID}</td>
                    <td>{Termination_Date}</td>
                    <td>{Test_Catagory}</td>
                    <td>{Test_Score}</td>
                </tr>
            )
    })

}

 function retrieveTechnicianTickets(){

              Axios.post("http://localhost:3001/getTechnicianTickets",{
                 USER_EMAIL:UserEmail_Variable,
                                          
               }).then((response)=>{
                setTicketData(response.data)
             })
}

function setTicketDataToTable(){
    
    return( 
         ticketData.map((row)=>(
            <TableRow 
                    key={row.ticket_id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    onClick={(event)=>{
                         
                            let temp = event.currentTarget.outerText;
                            temp = temp.substring(0,1).trim();
                            ticketTableIndex = temp;
                            console.log(ticketTableIndex)

                            displayTicket(ticketTableIndex)
                           }}
                   >
                        <TableCell align="left">{row.ticket_id}</TableCell>
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">{row.description}</TableCell>
                        <TableCell align="left">{row.address}</TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                        <TableCell align="left">{row.contact}</TableCell>
                        <TableCell align="left"> 
                    <FormControlLabel id='displayToggleBtn' 
                        label="" control={<Switch checked={checked}  />} 
                     
                    />
                </TableCell>
            </TableRow>
 )))
}

function retrieveAllTechnicianTickets(){

    try{

        Axios.post("http://localhost:3001/getAllTechnicianTickets",{
            USER_EMAIL:UserEmail_Variable                     
          }).then((response)=>{
           
        })

    }catch{

    }
}

function retrieveSearchTicketResults(){

    Axios.post("http://localhost:3001/getSearchTicketResults",{
        USER_EMAIL:UserEmail_Variable,
        SEARCH_BY:""                      
      }).then((response)=>{
       console.log(response.data)
       setSearchTickets(response.data)
    })
}

function displayTicket(index){

  try{
    Axios.post("http://localhost:3001/getSpecificTicketData",{
        SEARCH_BY: index                   
      }).then((response)=>{

        ticketAddressDb=response.data[0].Address;
        ticketContactDB=response.data[0].Contact;
        ticketDateOpenedDBresponse.data[0].Date_Opened;
        ticketDescriptionDbresponse.data[0].Description;
        ticketEmailDB=response.data[0].Email;
        ticketNameDB=response.data[0].Name;
        ticketReAssignedFromDB=response.data[0].ReAssigned_From;
        ticketSolutionDB=response.data[0].Solution;
        ticketStatusDB=response.data[0].Status;
        ticketTimeAssignedDB=response.data[0].Time_Assigned;
        ticketUpdateDB=response.data[0].Update;
        ticketTechnicianEmailDB=response.data[0].Technician_Email_ID;
        ticketDateClosedDB=response.data[0].Date_Closed;
        ticketCatagoryDB=response.data[0].Catagory;

     
    })
  }
  catch{}

}



    return (
    <div>
 
    <Applicant_Profile_Nav/>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                                <Row>
                                    <Col sm={3}>
                                    <Nav variant="pills" className="flex-column userNav" style={{backgroundColor:'#f7f7f7',color:'white'}}>
                                      <Nav.Item className="mx-auto p-3">
                                        
                                              <img src={landingImage} alt="Avatar" className="avatar mx-5"/>  
                                              <br/> 
                                              <br/>
                                              <h5 style={{color:'black',  textAlign:'center'}}>{UserEmail_Variable}</h5>
                                              <p style={{color:'black', textAlign:'center'}}>{name}</p>
                                              

                                      </Nav.Item>
                                        <Nav.Item >
                                            <Nav.Link style={{color:'#474747'}} className="" eventKey="first"><HouseDoorFill/>  Applicant Home</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                             <Nav.Link style={{color:'#474747'}} eventKey="second"> <FilePerson/> Curriculum Vitae</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                             <Nav.Link style={{color:'#474747'}} onClick={retrieveAppplications} eventKey="third"> <AppIndicator/> Applications</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                             <Nav.Link style={{color:'#474747'}} onClick={
                                                 ()=>{
                                                    retrieveTechnicianTickets()
                                                    retrieveAllTechnicianTickets()
                                                 }
                                                
                                                 }
                                                  eventKey="fourth"> <AppIndicator/>Ticket Control</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                             <Nav.Link style={{color:'#474747'}} eventKey="fifth"><GearFill/> Preferences</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                             <Nav.Link style={{color:'#474747'}} onClick={()=>{
                                                 
                                             }} eventKey="sixth"> <BoxArrowLeft/> Logout</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    </Col>
                                    <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first" className="">
                                             <div className="row mt-3">
                                                <div className="col-xs-12 col-sm-12 col-md-12">
                                                        <Card className="shadow endTabSpace">
                                                            <Card.Body>
                                                                <h5>Ticket Statistics</h5>
                                                                    <p> Reflecting  ticket statistics for past five days
                                                                      
                                                                    </p>
                                                                    <hr style={{color:'orange', padding:'1px'}}/>
                                                                    <Form>
                                                                        <div className="row">
                                                                            <div className="col-xs-12 col-sm-6 col-md-6">
                                                                                
                                                                                <div style={{ display: 'flex', maxWidth: 900 }}>
                                                                                        <Chart
                                                                                            width={400}
                                                                                            height={300}
                                                                                            chartType="ColumnChart"
                                                                                            loader={<div>Loading Chart</div>}
                                                                                            data={[
                                                                                            ['Tickets', ' Open Tickets', 'Closed Tickets'],
                                                                                            ['Durban', 8175000, 8008000],
                                                                                            ['Cape Town', 3792000, 3694000],
                                                                                           
                                                                                            ]}
                                                                                            options={{
                                                                                            title: 'Visual representation of tickets',
                                                                                            chartArea: { width: '30%' },
                                                                                            hAxis: {
                                                                                                title: 'Total Tickets',
                                                                                                minValue: 0,
                                                                                            },
                                                                                            vAxis: {
                                                                                                title: 'City',
                                                                                            },
                                                                                            }}
                                                                                            legendToggle
                                                                                        />
                                                                                       
                                                                                  </div>
                                                                            </div>
                                                                            <div className="col-xs-12 col-sm-6 col-md-6">
                                                                                <div style={{ display: 'flex', maxWidth: 900 }}>
                                                                                <Chart
                                                                                            width={400}
                                                                                            height={'300px'}
                                                                                            chartType="AreaChart"
                                                                                            loader={<div>Loading Chart</div>}
                                                                                            data={[
                                                                                            ['Year', 'Sales', 'Expenses'],
                                                                                            ['2013', 1000, 400],
                                                                                            ['2014', 1170, 460],
                                                                                            ['2015', 660, 1120],
                                                                                            ['2016', 1030, 540],
                                                                                            ]}
                                                                                            options={{
                                                                                            title: 'Company Performance',
                                                                                            hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
                                                                                            vAxis: { minValue: 0 },
                                                                                            // For the legend to fit, we make the chart area smaller
                                                                                            chartArea: { width: '50%', height: '70%' },
                                                                                            // lineWidth: 25
                                                                                            }}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                      
                                                                    </Form>
                                                                   
                                                            </Card.Body>
                                                        </Card>
                                                </div>
                                             </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second" className="mt-3">
                                            <h4 className="mb-3">Virtual C.V </h4>
                  
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-12 col-md-12">
                                                       <Card className="shadow endTabSpace">
                                                            <Card.Body>
                                                            <h5 >Personal Statement</h5>
                                                            <hr style={{color:'orange', padding:'1px'}}/>
                                                                <p>Let's get you started with a cover letter, remember the more you tell us, the better we can help you
                                                                </p>
                                                                <Form>
                                                                     <Form.Control size="sm" className="mb-2" as="textarea" rows={3} defaultValue={personalStatement} onChange={(event)=>{
                                                                          setPersonalStatement(event.target.value);
                                                                         
                                                                }} />     
                                                                </Form>
                                                                <Button variant="dark" size="sm" onClick={UpdatePersonalStatement}>Save Changes</Button>
                                                        </Card.Body>
                                                        </Card>
                                                </div>
                                            </div>
                                           
                                                <div className="row">
                                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                                        <Card className="mt-3 endTabSpace shadow">
                                                            <Card.Body>
                                                                <h5>Professional Experience</h5>
                                                                <hr style={{color:'orange', padding:'1px'}}/>
                                                                <Form>
                                                                  <Form.Control size="sm" className="mb-2" as="textarea" defaultValue={ProfessionalExperience}   rows={2} onChange={(event)=>{
                                                                            setProfessionalExperience(event.target.value);
                                                                  }} /> 
                                                                  <Button variant="dark" size="sm" onClick={UpdateProfessionalExperience}>Save Changes</Button>
                                                                </Form>
                                                            </Card.Body>
                                                        </Card>
                                                    </div>
                                                  
                                                </div>

                                                <div className="row">
                                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                                            <Card className="mt-3 endTabSpace shadow">
                                                                <Card.Body>
                                                                    <h5>Compentencies and Skills</h5>
                                                                    <hr style={{color:'orange', padding:'1px'}}/>
                                                                    <Form>
                                                                        <div className="row">
                                                                            <div className="col-xs-12 col-sm-6 col-md-6">
                                                                            
                                                                                <Form.Label>Academic History :</Form.Label>
                                                                                <Form.Control size="sm" className="mb-2" as="textarea" rows={2} defaultValue={academicHistory} text={academicHistory_Variable} onChange={(event)=>{
                                                                                        setAcademicHistory(event.target.value);
                                                                                }} />      
                                                                           
                                                                            </div>
                                                                       
                                                                         <div className="col-xs-12 col-sm-6 col-md-6">
                                                                                
                                                                                    <Form.Label>List some of your Key Skills :</Form.Label>
                                                                                    <Form.Control size="sm" className="mb-2" as="textarea" rows={2} defaultValue={skills} text={skills_Variable} onChange={(event)=>{
                                                                                            setSkills(event.target.value);
                                                                                        }} />    
                                                                                
                                                                         </div>
                                                                      </div>
                                                                      <div className="row">
                                                                         <div className="col-xs-12 col-sm-6 col-md-6">
                                                                         
                                                                                    <Form.Label>List some of your Qualifications :</Form.Label>
                                                                                    <Form.Control size="sm" className="mb-2" as="textarea" rows={2} defaultValue={qualifications} onChange={(event)=>{
                                                                                            setQualifications(event.target.value);
                                                                                        }} />      
                                                                            
                                                                         </div>
                                                                         <div className="col-xs-12 col-sm-6 col-md-6">
                                                                                <Form.Label>Upload Relative Certificates</Form.Label>
                                                                                <Form.Control type="file" size="sm"  onChange={(event)=>{
                                                                                            setCertificates(event.target.value);
                                                                                        }} />
                                                                         </div>
                                                                      </div>
                                                                      <div className="row">
                                                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                                                             <Button variant="dark" size="sm" onClick={UpdateSkillsCompentencies}>Save Changes</Button>
                                                                        </div>
                                                                    </div>
                                                                    </Form>

                                                                </Card.Body>
                                                            </Card>
                                                        </div>
                                                </div>

                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third" className="mt-3">
                                            <Card className="shadow endTabSpace p-3 mt-2 mb-2">
                                                <h5>Applications</h5>
                                                <p>Here we assist you in exploring an venturing out into different catagories of ICT support.
                                                   Take an assessment today to improve your chances of being onboarded.</p>
                                                <hr style={{color:'orange', padding:'1px'}}/>
                                                <Form>
                                                    <div className="row">
                                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                                        <Form.Select  aria-label="Select Field" size="sm"  onClick={(event)=>{
                                                                 setQuizzCatagory(event.target.value);
                                                                
                                                            }}>
                                                          
                                                            <option value="Network Engineer">Network Engineer</option>
                                                            <option value="Server Support">Server Support</option>
                                                            <option value="Desktop Support">Desktop Support</option>
                                                            <option value="CyberSecurity">Cyber-Security</option>
                                                           
                                                         </Form.Select>        
                                                        </div>
                                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                                            <Button variant="dark" size="sm" onClick={()=>{
                                                            
                                                                startAssessment();
                                                            }
                                                            } >Start Assessment</Button>       
                                                        </div>
                                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                                        </div>
                                                    </div>
                                                </Form>
                                            </Card>
                                                 
                                                {showQuiz ?

                                                        <div className="mt-4">

                                                        {showScore ? (

                                                                    <div className='score-section endTabSpace'>
                                                                            <div className="row"> 
                                                                                <div className="col-xs-12 col-sm-12 col-md-12">
                                                                                    You scored {score} out of {dummyArray.length}
                                                                                </div>

                                                                                {quizzPass ? 
                                                                                <div className="row ">
                                                                                    <div className="col-xs-12 col-sm-12 md-12">
                                                                                        <p>Congratulations,you've passed, your results are being captured onto our system</p>
                                                                                    </div>
                                                                                </div>
                                                                             :null}
                                                                             {quizzFail ? 
                                                                                <div className="row ">
                                                                                    <div className="col-xs-12 col-sm-12 md-12">
                                                                                        <p>Please try again, you've achieved below 70%</p>
                                                                                    </div>
                                                                                </div>
                                                                             :null}

                                                                                <div className="col-xs-12 col-sm-4 col-md-4">
                                                                                        <Button className="" size="sm" variant="danger" onClick={cancelAssessment}>Cancel</Button>
                                                                                </div>
                                                                            </div>
 
                                                                    </div>
                                                                    ) : (
                                                                    <>
                                                                    <Card className="shadow p-3 endTabSpace">
                                                                    
                                                                        <div className='question-section '>
                                                                            <div className='question-count'>
                                                                                <span>Question {currentQuestion + 1}</span>/{dummyArray.length}
                                                                            </div>
                                                                            <div className='question-text'>{dummyArray[currentQuestion].questionText}</div>
                                                                            </div>
                                                                            <div className='answer-section expandbutton' style={{width:'50%'}}>
                                                                                {dummyArray[currentQuestion].answerOptions.map((answerOption) => (
                                                                                <Button className="my-1 row mx-2" size="sm" variant="dark" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</Button>
                                                                            ))}
                                                                        </div>
                                                                    </Card>
                                                                    </>
                                                                    )}

                                                        </div>
                                                : null
                                                
                                                }
                                           
                                                <div className="row mt-4 mb-2">
                                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                                     <div className='endTabSpace'>
                                                        <TableContainer component={Paper}>
                                                                <Table stickyHeader sx={{ minWidth: 650 }} size="small" aria-label="sticky table">
                                                                <TableHead>
                                                                    <TableRow>
                                                                        <TableCell align="left"><b>Application No.</b></TableCell>
                                                                        <TableCell align="left"> <b>Applicant Name</b></TableCell>
                                                                        <TableCell align="left"> <b>Application Status</b></TableCell>
                                                                        <TableCell align="left"><b>Date Captured</b></TableCell>
                                                                        <TableCell align="left"><b>Termination Date</b></TableCell>
                                                                        <TableCell align="left"><b>Test Catagory</b></TableCell>
                                                                        <TableCell align="left"><b>Test Score</b></TableCell>
                                                                    </TableRow>
                                                                </TableHead>
                                                                    <TableBody>
                                                                    {prettyTable()}
                                                                    </TableBody>
                                                                </Table>
                                                        </TableContainer>
                                                      </div>     
                                                    </div>
                                                </div>

                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fourth" className="mt-2">
                                                <Form>

                                                    <div className='row mt-2'>
                                                        <div className='col-xs-12 col-sm-12 col-md-12'>
                                                            <Card className='p-1 endTabSpace'>
                                                                <div className='row'>
                                                                
                                                                        <div className='col-xs-12 col-sm-12 col-md-12'>
                                                                        <IconButton  aria-label="delete">
                                                                           <AutorenewIcon/>
                                                                        </IconButton>
                                                                        <TextField id="search" size='small' style={{display:'inline-flex'}} label="Search field" type="search" />
                                                                          
                                                                                      <Select
                                                                                            labelId="demo-simple-select-label"
                                                                                            id="demo-simple-select"
                                                                                            value="Open"
                                                                                            label="Status"
                                                                                            size='small'
                                                                                            className="px-4"
                                                                                            >
                                                                                          <MenuItem value="Open">Call ID</MenuItem>
                                                                                          <MenuItem value="Pending">Engineer Name</MenuItem>
                                                                                          <MenuItem value="Closed">Customer Name</MenuItem>
                                                                                      </Select>

                                                                                      <IconButton aria-label="search">
                                                                                            <SearchSharpIcon/>
                                                                                      </IconButton>

                                                                                    <div className='mx-3' style={{float:'right'}}>
                                                                                    
                                                                                      <IconButton style={{marginRight:'40px'}} aria-label="print tickets">
                                                                                            <PrintIcon/>
                                                                                      </IconButton>
                                                                                    
                                                                                    
                                                                                      <IconButton aria-label="back">
                                                                                            <ArrowBackIcon/>
                                                                                      </IconButton>

                                                                                    <IconButton aria-label="foward">
                                                                                            <ArrowForwardIcon/>
                                                                                      </IconButton>
                                                                                    </div>
                                                                        
                                                                        </div>
                                                                        
                                                                </div>
                                                            </Card>
                                                        </div>
                                                    </div>

                                                    <div className="row mt-2">
                                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                                            <div className="endTabSpace">
                                                            <div className="row mt-4">
                                                                <div className="col-xs-12 col-sm-12 col-md-12">
                                                                  
                                                                    <TableContainer component={Paper}>
                                                                        <Table stickyHeader sx={{ minWidth: 650 }}  size="small" aria-label="sticky table">
                                                                            <TableHead>
                                                                                <TableRow>
                                                                                    <TableCell align="left"><b>Ticket No.</b></TableCell>
                                                                                    <TableCell align="left"> <b>Fullname</b></TableCell>
                                                                                    <TableCell align="left"> <b>Description</b></TableCell>
                                                                                    <TableCell align="left"><b>Address</b></TableCell>
                                                                                    <TableCell align="left"><b>Email</b></TableCell>
                                                                                    <TableCell align="left"><b>Contact</b></TableCell>
                                                                                    <TableCell align="left"><b>Show</b></TableCell>
                                                                                </TableRow>
                                                                            </TableHead>
                                                                                <TableBody>
                                                                                    {setTicketDataToTable()}
                                                                                </TableBody>
                                                                        </Table>
                                                                    </TableContainer>
                                                                </div>
                                                            </div>  
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='row mt-4 '>
                                                        <div className='col-xs-12 col-sm-12 col-md-12 '>
                                                        <Tabs  className="mb-3 endTabSpace" size="sm" >
                                                                <Tab eventKey="home" title="Client Details" >
                                                                                <Card className='shadow endTabSpace p-3'>
                                                                              
                                                                                <hr style={{color:'orange'}}></hr>
                                                                                <div className='row'>
                                                                                    <div className='col-xs-12 col-sm-3 col-md-3'>
                                                                                    <TextField
                                                                                        label="Name"
                                                                                        id="standard-size-small"
                                                                                        defaultValue={ticketNameDB}
                                                                                        size="small"
                                                                                        variant="standard"
                                                                                        onClick={(event)=>{
                                                                                            setTicketName(event.target.value)
                                                                                        }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className='col-xs-12 col-sm-3 col-md-3'>
                                                                                    <TextField
                                                                                        label="Address"
                                                                                        id="standard-size-small"
                                                                                        defaultValue={ticketAddressDb}
                                                                                        size="small"
                                                                                        variant="standard"
                                                                                        onClick={(event)=>{
                                                                                            setTicketAddress(event.target.value)
                                                                                        }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className='col-xs-12 col-sm-3 col-md-3'>
                                                                                    <TextField
                                                                                        label="Contact"
                                                                                        id="standard-size-small"
                                                                                        defaultValue={ticketContactDB}
                                                                                        size="small"
                                                                                        variant="standard"
                                                                                        onClick={(event)=>{
                                                                                            setTicketContact(event.target.value)
                                                                                        }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className='col-xs-12 col-sm-3 col-md-3'>
                                                                                    <Form.Group className="" controlId="formBasicEmail">
                                                                                    <TextField
                                                                                        label="Email"
                                                                                        id="standard-size-small"
                                                                                        defaultValue=""
                                                                                        size="small"
                                                                                        variant="standard"
                                                                                        onClick={(event)=>{
                                                                                            setTicketContact(event.target.value)
                                                                                        }}
                                                                                        />
                                                                                    </Form.Group>
                                                                                    </div>
                                                                                </div>
                                                                            </Card>
                                                                </Tab>
                                                                <Tab eventKey="profile" title="Ticket Details">
                                                                
                                                                <Card className='shadow endTabSpace p-3'>
                                                                              
                                                                              <hr style={{color:'orange'}}></hr>
                                                                              <div className='row'>
                                                                                  <div className='col-xs-12 col-sm-3 col-md-3'>
                                                                                  <TextField
                                                                                      label="Name"
                                                                                      id="standard-size-small"
                                                                                      defaultValue=""
                                                                                      size="small"
                                                                                      variant="standard"
                                                                                      onClick={(event)=>{
                                                                                          setTicketName(event.target.value)
                                                                                      }}
                                                                                      />
                                                                                  </div>
                                                                                  <div className='col-xs-12 col-sm-3 col-md-3'>
                                                                                  <TextField
                                                                                      label="Address"
                                                                                      id="standard-size-small"
                                                                                      defaultValue=""
                                                                                      size="small"
                                                                                      variant="standard"
                                                                                      onClick={(event)=>{
                                                                                          setTicketAddress(event.target.value)
                                                                                      }}
                                                                                      />
                                                                                  </div>
                                                                                  <div className='col-xs-12 col-sm-3 col-md-3'>
                                                                                  <TextField
                                                                                      label="Contact"
                                                                                      id="standard-size-small"
                                                                                      defaultValue=""
                                                                                      size="small"
                                                                                      variant="standard"
                                                                                      onClick={(event)=>{
                                                                                          setTicketContact(event.target.value)
                                                                                      }}
                                                                                      />
                                                                                  </div>
                                                                                  <div className='col-xs-12 col-sm-3 col-md-3'>
                                                                                  <Form.Group className="" controlId="formBasicEmail">
                                                                                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                                                                      <Select
                                                                                      labelId="demo-simple-select-label"
                                                                                      id="demo-simple-select"
                                                                                      value="Open"
                                                                                      label="Status"
                                                                                      size='small'
                                                                                      className="px-4"
                                                                                      >
                                                                                          <MenuItem value="Open">Open</MenuItem>
                                                                                          <MenuItem value="Pending">Pending</MenuItem>
                                                                                          <MenuItem value="Closed">Closed</MenuItem>
                                                                                      </Select>
                                                                                  </Form.Group>
                                                                                  </div>
                                                                              </div>
                                                                          </Card>

                                                                </Tab>
                                                                <Tab eventKey="contact" title="Contact">
                                                                     strtong                                                         
                                                                 </Tab>
                                                                </Tabs>

                                                        </div>
                                                    </div>

                                                </Form> 
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fifth" className="mt-2 endTabSpace">
                                            <div className="row mt-4 shadow">
                                            <div className="col-xs-12 col-sm-12 col-md-12">
                                              <h4 className="mt-3 ">Profile Settings</h4>
                                              <p>{UserEmail_Variable}</p>
                                              <p> It is important to us that you always ensure peronal particulars are kept up to date
                                              </p>
                                                <hr style={{padding:'1px', color:'orange'}}/>
                                                <div className="p-2 mb-3">
                                                    <Form>
                                                        <div className="row">
                                                            <div className="col-xs-12 col-sm-6 col-md-6">
                                                            <Form.Group className="mb-3" >
                                                                <Form.Label>Identity Number</Form.Label>
                                                                <Form.Control size="sm" type="text" defaultValue={applicantId} placeholder="Enter identity no." onChange={(event)=>{
                                                                   setapplicantId(event.target.value);
                                                                }} />
                                                            </Form.Group>
                                                            </div>
                                                            <div className="col-xs-12 col-sm-6 col-md-6">
                                                                <Form.Group className="mb-3" >
                                                                    <Form.Label>Full Name</Form.Label>
                                                                    <Form.Control  size="sm" type="text" defaultValue={name} placeholder="Enter your name" onChange={(event)=>{
                                                                        setName(event.target.value);
                                                                    }} />
                                                                </Form.Group>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-xs-12 col-sm-6 col-md-6">
                                                            <Form.Group className="mb-3" >
                                                                <Form.Label>Gender</Form.Label>
                                                                <Form.Select size="sm" aria-label="Default select example" value={gender}>
                                                                        <option>Select your gender</option>
                                                                        <option value="Male">Male</option>
                                                                        <option value="Female">Female</option>
                                                                        
                                                                        onClick={(event)=>{
                                                                            setGender(event.target.value);
                                                                }}
                                                                    
                                                                </Form.Select>
                                                            </Form.Group>
                                                            </div>
                                                            <div className="col-xs-12 col-sm-6 col-md-6">
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Contact Number</Form.Label>
                                                                <Form.Control size="sm" type="text" defaultValue={contact} placeholder="Enter your cell no." onChange={(event)=>{
                                                                  setContact(event.target.value);
                                                                }} />
                                                            </Form.Group>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-xs-12 col-sm-6 col-md-6">
                                                            <Form.Group className="mb-3" >
                                                                <Form.Label>Postal Address</Form.Label>
                                                                <Form.Control size="sm" type="text" defaultValue={address} placeholder="Enter Postal address" onChange={(event)=>{
                                                                    setAddress(event.target.value);
                                                                }}/>
                                                            </Form.Group>
                                                            </div>
                                                            <div className="col-xs-12 col-sm-6 col-md-6">
                                                            <Form.Group className="mb-3" >
                                                                    <Form.Label>Date of Birth</Form.Label>
                                                                    <Form.Control type="Date" size="sm" defaultValue={dob} placeholder="Choose your DOB" onChange={(event)=>{
                                                                       setDob(event.target.value);
                                                                    }}/>
                                                                </Form.Group>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-xs-12 col-sm-4 col-md-4">
                                                              <Button variant="dark" size="sm" onClick={UpdatePreferences}>Save Changes</Button>
                                                            </div>
                                                        </div>
                                                    </Form>
                                                </div>

                                             </div>   
                                            </div>
                                            <div className="row mt-4 mb-4  p-4 shadow">
                                            <h4>Security</h4>
                                            <hr style={{padding:'1px', color:'orange'}}/>
                                            <Form>
                                                    <div className="row">
                                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                                        <Form.Group className="mb-3" >
                                                                        <Form.Label>Current password</Form.Label>
                                                                        <Form.Control type="password" size="sm" placeholder="*****" onChange={(event)=>{
                                                                            setEnteredPassword(event.target.value)
                                                                        }}/>
                                                                    </Form.Group>
                                                        </div>
                                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                                        <Form.Group className="mb-3">
                                                                        <Form.Label>New password</Form.Label>
                                                                        <Form.Control type="password" size="sm" placeholder="********" onChange={(event)=>{
                                                                        
                                                                        }}/>
                                                                    </Form.Group>
                                                        </div>
                                                        <div className="col-xs-12 col-sm-4 col-md-4">
                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                            <Form.Label>Confirm password</Form.Label>
                                                                            <Form.Control type="password" size="sm" placeholder="********" onChange={(event)=>{
                                                                                setNewPassword(event.target.value)
                                                                            }}/>
                                                                        </Form.Group>
                                                            </div>
                                                    </div>
                                                    <div className="row">
                                                            <div className="col-xs-12 col-sm-4 col-md-4">
                                                              <Button variant="dark" size="sm" onClick={UpdatePassword}>Save Changes</Button>
                                                            </div>
                                                        </div>
                                                 
                                             </Form>
                                            </div>

                                        </Tab.Pane>
                                         <Tab.Pane eventKey="sixth" className="mt-2">
                                        <p>kishav</p>
                                        </Tab.Pane>
                                    </Tab.Content>
                                    </Col>
                                </Row>
                      </Tab.Container>


    </div>
    
    )
}
