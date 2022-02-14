import React from 'react'
import Applicant_Profile_Nav  from './Components/Applicant_Profile_Nav';
import landingImage from './Assets/landingBackground.jpg';
import { Card, Form, Col, Tab, Tabs, Row, Nav } from 'react-bootstrap';
import { useState, useEffect,useRef } from 'react';
import './App.css';
import {  HouseDoorFill, FilePerson,AppIndicator,GearFill, BoxArrowLeft } from 'react-bootstrap-icons';
import Axios from 'axios';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import TablePagination from '@mui/material/TablePagination';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import IconButton from '@mui/material/IconButton';
import PrintIcon from '@mui/icons-material/Print';
import CancelIcon from '@mui/icons-material/Cancel';

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import MenuItem from '@mui/material/MenuItem';

import Dialog from "@mui/material/Dialog";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import Button from '@mui/material/Button'
import EmailIcon from '@mui/icons-material/Email';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import PropTypes from 'prop-types';
import { Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import { bottomNavigationClasses } from '@mui/material';

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
   

    const[applicationData, setApplicationData] = useState([]);
    const[ticketData, setTicketData] = useState([]);
   

    const [ticketId, setTicketId] = useState('');
    const [ticketName, setTicketName] = useState('');
    const [ticketDescription, setTicketDescription] = useState('');
    const [ticketAddress, setTicketAddress] = useState('');
    const [ticketContact, setTicketContact] = useState('');
    const [ticketEmail, setTicketEmail] = useState('');
    const [ticketSolution, setTicketSolution] = useState('');
    const [ticketStatus, setTicketStatus] = useState('');
    const [ticketUpdate, setTicketUpdate] = useState('');
    const [ticketDateOpened, setTicketDateOpened] = useState('');
    const [ticketTimeAssigned, setTicketTimeAssigned] = useState('');
    const [ticketReAssignedFrom, setTicketReAssignedFrom] = useState('');
    const [ticketDateClosed, setTicketDateClosed] = useState('');
    const [ticketTechnicianEmail, setTicketTechnicianEmail] = useState('');
    const [ticketSortState, setTicketSortState] = useState('All')
    const [ticketSortValue, setTicketSortValue] = useState('')
    const [checked, setChecked] = React.useState(false);


    //------------------- New Ticket States--------------------

    const [newTicketName, setNewTicketName] = useState('')
    const [newTicketAddress, setNewTicketAddress] = useState('')
    const [newTicketDescription, setNewTicketDescription] = useState('')
    const [newTicketEmail, setNewTicketEmail] = useState('')
    const [newTicketContact, setNewTicketContact] = useState('')

    const [newTicketAssignedTech, setNewTicketAssignedTech] = useState('')
    


    const [ticketHistoryList, setTicketHistoryList] = useState([])

    const [onsiteRemote, setOnsiteRemote] = React.useState('On-site');


    const [TicketRemote, setTicketRemote] = useState('On-site');
    const [TicketHours, setTicketHours] = useState(0);
    const [TicketMin, setTicketMin] = useState(0);
    const [TicketUpdate01, setTicketUpdate01] = useState('');
    
    let ticketTableIndex= 0;
    const handleChange3OnsiteRemote = (event) => {
        setOnsiteRemote(event.target.value);
      };


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

    fetch('http://techreqnodeserver01.us-east-2.elasticbeanstalk.com/insertApplication', {
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

    fetch('http://techreqnodeserver01.us-east-2.elasticbeanstalk.com/UpdateCVPersonalStatement', {
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

    fetch('http://techreqnodeserver01.us-east-2.elasticbeanstalk.com/UpdateCVProfessionalExperience', {
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

    fetch('http://techreqnodeserver01.us-east-2.elasticbeanstalk.com/UpdateCVSkillsCompentencies', {
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

    Axios.post("http://techreqnodeserver01.us-east-2.elasticbeanstalk.com/getUserCvData",{
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

    Axios.post("http://techreqnodeserver01.us-east-2.elasticbeanstalk.com/getApplicantSettings",{
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
    
        fetch('http://techreqnodeserver01.us-east-2.elasticbeanstalk.com/setNewPassword', {
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

    fetch('http://techreqnodeserver01.us-east-2.elasticbeanstalk.com/UpdateUserPreferences', {
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
    
    Axios.post("http://techreqnodeserver01.us-east-2.elasticbeanstalk.com/getAllApplications",{
        USER_EMAIL:UserEmail_Variable,
      
    }).then((response)=>{
        setApplicationData(response.data)
    })
}


 function retrieveTechnicianTickets(){

    if(ticketSortState==='ID')
    {
        if(ticketSortValue.length>0)
        {
            Axios.post("http://techreqnodeserver01.us-east-2.elasticbeanstalk.com/getSpecificTicketSortID",{
                TicketID:  ticketSortValue                  
                }).
                then((response)=>{
                 setTicketData(response.data)
                 console.log(response.data)
            })
        }
     
    }
        if(ticketSortState==='My Tickets')
        {
            Axios.post("http://techreqnodeserver01.us-east-2.elasticbeanstalk.com/getAllTechnicianTickets",{
            USER_EMAIL:UserEmail_Variable                     
            }).
            then((response)=>{
             setTicketData(response.data)
             console.log(response.data)
        })
        }
        if(ticketSortState==='Engineer Name')
        {
            if(ticketSortValue.length>0)
            {
                Axios.post("http://techreqnodeserver01.us-east-2.elasticbeanstalk.com/getAllTechnicianTickets", {
                    USER_EMAIL:ticketSortValue  
                }).then((response)=>{
                        setTicketData(response.data)
                })
            }
         
        }
        if(ticketSortState==='Customer Name')
        {
            
            if(ticketSortValue.length>0)
            {
                Axios.post("http://techreqnodeserver01.us-east-2.elasticbeanstalk.com/getSearchTicketResults", {
                    USER_Name:ticketSortValue  
                }).then((response)=>{
                        setTicketData(response.data)
                })
            }
        }
        if(ticketSortState==='All')
        {
            Axios.get("http://techreqnodeserver01.us-east-2.elasticbeanstalk.com/getAllTickets").then((response)=>{
                setTicketData(response.data)

                console.log(response.data)
             })
        }

            
}


function displayTicket(index){

  try{
    Axios.post("http://techreqnodeserver01.us-east-2.elasticbeanstalk.com/getSpecificTicketData",{
        SEARCH_BY: index                   
      }).then((response)=>{

        setTicketAddress(response.data[0].Address)
        setTicketId(index);
        setTicketContact(response.data[0].Contact);
        setTicketDateOpened(response.data[0].Date_Opened);
        setTicketDescription(response.data[0].Description);
        setTicketEmail(response.data[0].Email);
        setTicketName(response.data[0].Name);
        setTicketReAssignedFrom(response.data[0].ReAssigned_From);
        setTicketSolution(response.data[0].Solution);
        setTicketStatus(response.data[0].Status);
        setTicketTimeAssigned(response.data[0].Time_Assigned)
        setTicketUpdate(response.data[0].Updates);
        setTicketTechnicianEmail(response.data[0].Technician_Email_ID);
        setTicketDateClosed(response.data[0].Date_Closed);
       
       // ticketCatagoryDB=response.data[0].Catagory;


    }).then(()=>{
         setTicketId(index);
        
    })
  }
  catch{}

}

const [page, setPage] = React.useState(0);
const [historyLogPage, setHistoryLogPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(3);
const [historyLogRowsPerPage, setHistoryLogRowsPerPage] = React.useState(3);



const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 3));
    setPage(0);
  };

  const handleChangePageHistoryLog = (event, newPageHistory) => {
    setPage(newPageHistory);
  };




  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



const [engineerList, setEngineerList] = useState([]);
const [selectedTech, setSelectedTech] = useState('')
const techArr = [];


  function getAllEngineers(){
    
    Axios.get("http://techreqnodeserver01.us-east-2.elasticbeanstalk.com/getAllTechnicians").then((response)=>{
            setEngineerList(response.data);
            
            let engineerTotal = response.data.length;

            for (let i = 0; i < engineerTotal  ; i++) {
              techArr.push(response.data[i].Email_Id);
            
            }
        
            
    })
}


  const emails3 = ['username@gmail.com', 'user02@gmail.com'];
  function SimpleDialog(props) {

    const { onClose, selectedValue, open } = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    const handleListItemClick = (value) => {
      onClose(value);
    };
  
 
    return (
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Assign a Technician</DialogTitle>
        <List sx={{ pt: 0 }}>
          {
                engineerList.map(( engineerList, index) => (
                <ListItem button onClick={() => handleListItemClick( engineerList.Email_Id)} key={engineerList.Email_Id}>
                    <ListItemAvatar>
                    <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                        <PersonIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={ engineerList.Email_Id} />
                </ListItem>
                ))
            }
  
         
        </List>
      </Dialog>
    );
  }
  
  SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };


  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails3[0]);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
   setSelectedValue(value);
   
   // console.log(value);
  };

  //Add_Dialog Box states and handlers
  const [open1, setOpen1] = useState(false);

         const handleClickToOpen1 = () => {
            setOpen1(true);
          };
          
          const handleToClose1 = () => {
            setOpen1(false);
          };
          
//Fowarding a ticket
          const [open2, setOpen2] = useState(false);

          const handleClickToOpen2 = () => {
            setOpen2(true);
          };
          
          const handleToClose2 = () => {
            setOpen2(false);
          };

//Closing a ticket

const [open3, setOpen3] = useState(false);

const handleClickToOpen3 = () => {
  setOpen3(true);
};

const handleToClose3 = () => {
  setOpen3(false);
};
    
function getCurrentDateTime(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); 
    let yyyy = today.getFullYear();

    let hh = String(today.getHours()).padStart(2, '0');
    let min = String(today.getMinutes()).padStart(2, '0'); 
    
    
    today = yyyy + '-' + mm + '-' + dd+" "+hh+":"+min;

    return today
}

    function addNewTicketTechnician(){
       
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
    
        fetch('http://techreqnodeserver01.us-east-2.elasticbeanstalk.com/insertNewTicketTech', {
            method: "POST",
            body: JSON.stringify({
                 NAME_TICKET:newTicketName ,
                 DESCRIPTION_TICKET:newTicketDescription,
                 ADDRESS_TICKET:newTicketAddress,
                 EMAIL_TICKET:newTicketEmail,
                 CONTACT_TICKET:newTicketContact,
                 STATUS_TICKET:"GOOD",
                 DATETIME_TICKET:getCurrentDateTime(),
                 TECH_EMAIL_ID:selectedValue,
                 TIME_ASSIGNED_TICKET:getCurrentDateTime()
                 
                 }),
            headers
            });
    }
//---------------------------------------above are pointing to rds--------------------------------------------------------------------------

    function updateTicketDetails(){

        const headers = new Headers();
        headers.append("Content-Type", "application/json");
    
        fetch('http://techreqnodeserver01.us-east-2.elasticbeanstalk.com/updateTicketRecordDetails', {
            method: "POST",
            body: JSON.stringify({
                UPDATE_NAME:ticketName,
                UPDATE_DESCRIPTION:ticketDescription,
                UPDATE_ADDRESS:ticketAddress,
                UPDATE_EMAIL:ticketEmail,
                UPDATE_CONTACT:ticketContact,
                TICKETUPDATE_ID:ticketId
                 }),
            headers
            });
        
    }

    function updateTicketLogs(logUpdate){

        const headers = new Headers();
        headers.append("Content-Type", "application/json");
    
        fetch('http://techreqnodeserver01.us-east-2.elasticbeanstalk.com/insertUpdateTicketLogs', {
            method: "POST",
            body: JSON.stringify({
                 TICKETUPDATE_ID:ticketId,
                 UPDATE:logUpdate,
                 TIMESTAMP:getCurrentDateTime(),
                 TECH:UserEmail_Variable
                 }),
            headers
            });
        
    }

    function fillTicketHistoryList(index){

        try{
           
                Axios.post("http://techreqnodeserver01.us-east-2.elasticbeanstalk.com/getAllTicketLogHistory", {
                    TICKET_INDEX:index
                }).then((response)=>{
                    console.log(response.data)

                        setTicketHistoryList(response.data)
                
                })
        }
        catch{

        }
    }

    function TechnicianUpdateForLogsTbl(){
       
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
    
        fetch('http://techreqnodeserver01.us-east-2.elasticbeanstalk.com/insertTicketLogsComplete', {
            method: "POST",
            body: JSON.stringify({
                 TICKETUPDATE_ID:ticketId,
                 UPDATE:TicketUpdate01,
                 TIMESTAMP:getCurrentDateTime(),
                 TECH:UserEmail_Variable,
                 TIME_SPENT_HRS: TicketHours,
                 TIME_SPENT_MIN:TicketMin
                 }),
            headers
            });
    }

    
    function updateTicket(){

        const headers = new Headers();
        headers.append("Content-Type", "application/json");
    
        fetch('http://techreqnodeserver01.us-east-2.elasticbeanstalk.com/updateTicketServiceRenderType', {
            method: "POST",
            body: JSON.stringify({
                 TICKETUPDATE_ID:ticketId,
                 SERVICE:TicketRemote,
                 }),
            headers
            });
        
    }

    function FowardTicketTechnician(){

        const headers = new Headers();
        headers.append("Content-Type", "application/json");
    
        fetch('http://techreqnodeserver01.us-east-2.elasticbeanstalk.com/updateFowardTicketTechnician', {
            method: "POST",
            body: JSON.stringify({
                 UPDATED_TECHNICIAN_EMAIL:selectedValue,
                 UPDATED_TICKED_ID:ticketId
                 }),
            headers
            }).then();
        
    }

    function CloseTicket(){

        const headers = new Headers();
        headers.append("Content-Type", "application/json");
    
        fetch('http://techreqnodeserver01.us-east-2.elasticbeanstalk.com/updateCloseTicket', {
            method: "POST",
            body: JSON.stringify({
                CLOSE_TICKET_SOLUTION:ticketSolution,
                CLOSE_TICKED_STATUS:"Closed",
                CLOSE_TICKED_DATE:getCurrentDateTime(),
                CLOSE_TICKED_ID:ticketId
                 }),
            headers
            });
        
    }

let arrOpenTickets = [];
let arrClosedTickets =[];

const [s, setS] = useState(0);
const [s2, setS2] = useState(0);

( function getReportChartTicketOpenData(){

    try{
       
        Axios.post("http://localhost:3001/getTicketsOpenReports", {
            USER_EMAIL:UserEmail_Variable
        }).then((response)=>
        {
         
           for(let k = 0 ;k < response.data.length; k++){
               arrOpenTickets.push(response.data[k].num)
           }
           setS(arrOpenTickets)
           
        })
    }
    catch{

    }
})();


( function getReportChartTicketClosedData(){

    try{
       
        Axios.post("http://localhost:3001/getTicketsClosedReports", {
            USER_EMAIL:UserEmail_Variable
        }).then((response)=>
        {
         
           for(let k = 0 ;k < response.data.length; k++){
               arrClosedTickets.push(response.data[k].num)
           }
           setS2(arrClosedTickets)
           
        })
    }
    catch{

    }
})();
   

    function LineChartOpenTickets() {
      
        const data = {

            labels:[ 'Jan', 'Feb', 'March', 'April', 'May','June','July','August', 'September', 'October', 'November','December' ],
            datasets: [
                {
                    label:'Open Monthly tickets',
                    data: s,
                    backgroundColor: ['rgba(35, 208, 57, 0.8)'],
                    borderColor : ['rgba(35, 208, 57, 0.8)'],
                    color :['rgba(35, 208, 57, 0.8)']
                },
                {
                    label:'Closed Monthly tickets',
                    data: s2,
                    backgroundColor: ['rgba(250, 20, 32, 0.8)'],
                    borderColor : ['rgba(250, 20, 32, 0.8)'],
                    color :['rgba(250, 20, 32, 0.8)']
                }
            ]
        }

        return(
            <Line data={data}>

            </Line>
        )

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
                                            <Nav.Link style={{color:'#474747'}} className="" eventKey="first"><HouseDoorFill/> Applicant Home</Nav.Link>
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
                                                   getAllEngineers()
                                                 }
                                                
                                                 }
                                                  eventKey="fourth"> <AppIndicator/>Ticket Control</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                             <Nav.Link style={{color:'#474747'}} eventKey="fifth"><GearFill/> Preferences</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                             <Nav.Link style={{color:'#474747'}}  eventKey="sixth"> <BoxArrowLeft/> Logout</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    </Col>
                                    <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first" className="">
                                         
                                         <div className='row mt-4'>
                                             <div className='lead'>
                                               <b> Ticket Reports : {UserEmail_Variable}</b>
                                               <hr className='endTabSpace'></hr>
                                             </div>
                                         </div>

                                             <div className='row mt-2'>
                                                 <div className="col-xs-12 col-sm-6 col-md-6">

                                                   <div className='chart'>
                                                    {LineChartOpenTickets()}
                                                   </div> 
                                                    

                                                 </div>
                                                 <div className="col-xs-12 col-sm-6 col-md-6">

                                                    <div className='chart'>
                                                    {LineChartOpenTickets()}
                                                    </div> 
                                                    

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
                                                                <Button variant="contained" color='warning' size="small" onClick={UpdatePersonalStatement}>Save Changes</Button>
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
                                                                  <Button variant="contained" color='warning' size="small" onClick={UpdateProfessionalExperience}>Save Changes</Button>
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
                                                                             <Button variant="contained" color='warning' size="small" onClick={UpdateSkillsCompentencies}>Save Changes</Button>
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
                                                            <Button variant="contained" color='warning' size="small" onClick={()=>{
                                                            
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
                                                                                        <Button variant="contained" color='danger' size="small" variant="danger" onClick={cancelAssessment}>Cancel</Button>
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
                                                                                <Button className="my-1 row mx-2" variant="contained" color='warning' size='small' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</Button>
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
                                        <Tab.Pane eventKey="fourth" className="mt-2 endTabSpace">
                                                <Form>

                                                    <div className='row mt-2'>
                                                        <div className='col-xs-12 col-sm-12 col-md-12'>
                                                            <Card className='p-1' style={{borderColor:'black'}}>
                                                                <div className='row mt-1 mb-1' style={{borderColor:'black'}}>
                                                                
                                                                        <div className='col-xs-12 col-sm-6 col-md-6'>

                                                                                   
                                                                                                <IconButton className='mx-1'  color='warning' aria-label="refresh">
                                                                                                <AutorenewIcon onClick={retrieveTechnicianTickets}/>
                                                                                                </IconButton>
                                                                                  
                                                                                        <IconButton  className='mx-1'  color='warning' aria-label="print tickets">
                                                                                                <PrintIcon/>
                                                                                        </IconButton>
                                                                                  
                                                                                    <IconButton  className='mx-1'  color='warning' aria-label="back">
                                                                                            <EmailIcon/>
                                                                                      </IconButton>
                                                                                   
                                                                                    <IconButton  className='mx-1'  color='warning' aria-label="foward">
                                                                                            <FileDownloadIcon/>
                                                                                      </IconButton>

                                                                                      <IconButton  className='mx-1' color='warning' aria-label="foward">
                                                                                            <AddCircleIcon onClick={()=>{
                                                                                               getAllEngineers()
                                                                                                handleClickToOpen1()
                                                                                              
                                                                                            }}/>

                                                                                            <Dialog open={open1} onClose={handleToClose1} maxWidth={'xl'}>
                                                                                                            <DialogTitle>{"New Ticket"}</DialogTitle>
                                                                                                                <DialogContent>
                                                                                                                 

                                                                                                                    <div className='row'>
                                                                                                                        <div className='col-xs-12 col-sm-4 col-md-4'>
                                                                                                                        <TextField
                                                                                                                            autoFocus
                                                                                                                            margin="dense"
                                                                                                                            id="name"
                                                                                                                            label="Full Name"
                                                                                                                            type="Name"
                                                                                                                            size='small'
                                                                                                                            onChange={(event)=>{
                                                                                                                                    setNewTicketName(event.target.value);
                                                                                                                            }}          
                                                                                                                            required={true}
                                                                                                                            fullWidth
                                                                                                                            variant="standard"
                                                                                                                        />
                                                                                                                        </div>
                                                                                                                        <div className='col-xs-12 col-sm-4 col-md-4'>
                                                                                                                        <TextField
                                                                                                                            autoFocus
                                                                                                                            margin="dense"
                                                                                                                            id="name"
                                                                                                                            label="Email Address"
                                                                                                                            size='small'
                                                                                                                            required={true}
                                                                                                                            type="email"
                                                                                                                            onChange={(event)=>{
                                                                                                                                    setNewTicketEmail(event.target.value);
                                                                                                                            }} 
                                                                                                                            fullWidth
                                                                                                                            variant="standard"
                                                                                                                        />
                                                                                                                        </div>
                                                                                                                        <div className='col-xs-12 col-sm-4 col-md-4'>
                                                                                                                        <TextField
                                                                                                                            autoFocus
                                                                                                                            margin="dense"
                                                                                                                            id="name"
                                                                                                                            label="Contact"
                                                                                                                            size='small'
                                                                                                                            required={true}
                                                                                                                            type="Type"
                                                                                                                            onChange={(event)=>{
                                                                                                                                    setNewTicketContact(event.target.value);
                                                                                                                            }} 
                                                                                                                            fullWidth
                                                                                                                            variant="standard"
                                                                                                                        />
                                                                                                                        </div>
                                                                                                                        
                                                                                                                    </div>
                                                                                                                    <div className='row mt-3'>
                                                                                                                        <div className='col-xs-12 col-sm-4 col-md-4'>
                                                                                                                        <TextField
                                                                                                                            id="outlined-multiline-static"
                                                                                                                            label="Description"
                                                                                                                            required={true}
                                                                                                                            size='small'
                                                                                                                            multiline
                                                                                                                            onChange={(event)=>{
                                                                                                                                    setNewTicketDescription(event.target.value);
                                                                                                                            }} 
                                                                                                                            rows={4}
                                                                                                                            defaultValue="e.g PC Crashed"
                                                                                                                            />
                                                                                                                        </div>
                                                                                                                        <div className='col-xs-12 col-sm-4 col-md-4'>
                                                                                                                        <TextField
                                                                                                                            id="outlined-multiline-static"
                                                                                                                            label="Physical Address"
                                                                                                                            placeholder='24 Umhlanga Drive'
                                                                                                                            size='small'
                                                                                                                            onChange={(event)=>{
                                                                                                                                    setNewTicketAddress(event.target.value);
                                                                                                                            }} 
                                                                                                                            multiline
                                                                                                                            rows={4}
                                                                                                                            
                                                                                                                            />
                                                                                                                        </div>
                                                                                                                        <div className='col-xs-12 col-sm-4 col-md-4'>
                                                                                                                             <Button variant='contained' color='info' size='small' onClick={handleClickOpen}>
                                                                                                                                Select Technician
                                                                                                                            </Button>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    

                                                                                                                    <div className='row mt-2'>
                                                                                                                            <div className='col-xs-12 col-sm-4 col-md-4'>
                                                                                                                           
                                                                                                                            <Typography variant="subtitle1" component="div" >
                                                                                                                             
                                                                                                                            </Typography>

                                                                                                                            <TextField
                                                                                                                            autoFocus
                                                                                                                            margin="dense"
                                                                                                                            id="name"
                                                                                                                            label="Selected technician"
                                                                                                                            size='small'
                                                                                                                            required={true}
                                                                                                                            type="Text"
                                                                                                                            value={selectedValue}
                                                                                                                            onChange={(event)=>{
                                                                                                                                setNewTicketAssignedTech(event.target.value);
                                                                                                                            }} 
                                                                                                                            fullWidth
                                                                                                                            variant="standard"
                                                                                                                        />

                                                                                                                            <SimpleDialog
                                                                                                                                selectedValue={selectedValue}
                                                                                                                                
                                                                                                                                open={open}
                                                                                                                                onClose={handleClose}
                                                                                                                                
                                                                                                                                 />                                                                       
                                                                                                                            </div>
                                                                                                                            <div className=' mt-1 col-xs col-sm-4 col-md-4'>
                                                                                                                           
                                                                                                                            </div>
                                                                                                                    </div>
                                                                                                                    <hr></hr>
                                                                                                                    <div className='row' >
                                                                                                                            <div className='col-xs-12 col-sm-12 col-md-12' >
                                                                                                                            <Button  variant='contained' onClick={addNewTicketTechnician} color='warning' size='small' >
                                                                                                                                Create Ticket
                                                                                                                            </Button>
                                                                                                                            </div>
                                                                                                                           
                                                                                                                    </div>
                                                                                                                </DialogContent>
                                                                                                           
                                                                                                        </Dialog>
                                                                                                     </IconButton>
                                                                                  
                                                                            </div>
                                                                            <div className='col-xs-12 col-sm-6 col-md-6'>

                                                                                    <div style={{ display:'inline-flex'}}>
                                                                                    <TextField id="search" size='small' style={{display:'inline-flex'}} label="Search field" type="search"
                                                                                     onChange={(event)=>{
                                                                                        setTicketSortValue(event.target.value)
                                                                                    }} />
                                                                          
                                                                                            <Select
                                                                                            onChange={(event)=>{
                                                                                                    setTicketSortState(event.target.value)
                                                                                            } 
                                                                                            }
                                                                                                    labelId="demo-simple-select-label"
                                                                                                    id="demo-simple-select"
                                                                                                    value="All"
                                                                                                    label="Status"
                                                                                                    size='small'
                                                                                                    className="px-4"
                                                                                                    style={{marginRight:'40px'}}
                                                                                                    style={{display:'inline-flex'}}
                                                                                                    >
                                                                                                <MenuItem value="ID">Ticket No</MenuItem>
                                                                                                <MenuItem value="Engineer Name">Engineer Name</MenuItem>
                                                                                                <MenuItem value="Customer Name">Customer Name</MenuItem>
                                                                                                <MenuItem value="My Tickets">My Tickets</MenuItem>
                                                                                                <MenuItem value="All"  >All Tickets</MenuItem>
                                                                                            </Select>

                                                                                            <IconButton  color='warning' aria-label="search">
                                                                                                    <SearchSharpIcon  onClick={retrieveTechnicianTickets}/>
                                                                                            </IconButton>
                                                                                    </div>
                                                                                   
                                                                        </div>
                                                                        
                                                                </div>
                                                            </Card>
                                                        </div>
                                                    </div>

                                                    <div className="row mt-2"  >
                                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                                           
                                                            <div className="row mt-4">
                                                                <div className="col-xs-12 col-sm-12 col-md-12" className='p-1' >
                                                                <Paper sx={{ width: '100%', mb: 1 }}>
                                                                    <TableContainer component={Paper} >
                                                                        <Table stickyHeader sx={{ minWidth: 650 }}  size="small" aria-label="sticky table">
                                                                            <TableHead stickyHeader style={{backgroundColor:'black'}}>
                                                                                <TableRow >
                                                                                    <TableCell align="left"><b>Ticket</b></TableCell>
                                                                                    <TableCell align="left"> <b>Fullname</b></TableCell>
                                                                                    <TableCell align="left"> <b>Description</b></TableCell>
                                                                                    <TableCell align="left"><b>Address</b></TableCell>
                                                                                    <TableCell align="left"><b>Email</b></TableCell>
                                                                                    <TableCell align="left"><b>Contact</b></TableCell>
                                                                                   
                                                                                </TableRow>
                                                                            </TableHead>
                                                                                <TableBody>
                                                                                {
                                                                                   
                                                                                    
                                                                                    ticketData
                                                                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                                                        .map((row, index) => {
                                                                                           
                                                                                           return( 
                                                                                               
                                                                                               <TableRow hover key={row.Ticket_ID}
                                                                                                onClick={(event)=>{
                         
                                                                                                        let temp = event.currentTarget.outerText;
                                                                                                     
                                                                                                        temp = temp.substring(0,2).trim();
                                                                                                        ticketTableIndex = temp;
                                                                                                        console.log(temp)
                                                                                                        

                                                                                                        displayTicket(ticketTableIndex)
                                                                                                        fillTicketHistoryList(ticketTableIndex)
                                                                                                        }}>

                                                                                            <TableCell component="th" scope="row" align="left">{row.Ticket_ID}</TableCell>
                                                                                                <TableCell align="left">{row.Name}</TableCell>
                                                                                                <TableCell align="left">{row.Description}</TableCell>
                                                                                                <TableCell align="left">{row.Address}</TableCell>
                                                                                                <TableCell align="left">{row.Email}</TableCell>
                                                                                                <TableCell align="left">{row.Contact}</TableCell>
                                                                                               

                                                                                            </TableRow>);

                                                                                          

                                                                                        })}
                                                                                </TableBody>
                                                                               
                                                                        </Table>
                                                                     
                                                                    </TableContainer>
                                                                   
                                                                    <TablePagination 
                                                                               style={{margin: 0 }}
                                                                                rowsPerPageOptions={[3, 25, 100]}
                                                                                component="div"
                                                                                color="primary"
                                                                                size='small'
                                                                                count={ticketData.length}
                                                                                rowsPerPage={rowsPerPage}
                                                                                page={page}
                                                                                onPageChange={handleChangePage}
                                                                              //  onRowsPerPageChange={handleChangeRowsPerPage}
                                                                            />

                                                                                </Paper>
                                                                   
                                                                </div>
                                                            </div>  
                                                      
                                                        </div>
                                                    </div>

                                                    

                                                    <div className='row mt-5'  style={{borderColor:'black'}} >
                                                            <div className='col-xs-12 col-sm-12 col-md-12' >
                                                          
                                                            <div className='row'>
                                                                            <div className='col-xs-12 col-sm-12 col-md-12'>
                                                                                <div className='lead'>
                                                                                        <p className='p-2' style={{backgroundColor:'#1f1f1f', color:'white'}} ><b>Selected Ticket : {ticketId}</b></p>
                                                                                </div>
                                                                            </div>
                                                                      </div>

                                                            <Tabs  className="mb-3"  >
                                                                <Tab eventKey="home" title="Ticket Details"   >
                                                                
                                                                                <Card className='p-3' style={{borderColor:'black'}}>
                                                                                        <div className='row' >
                                                                                            <div className='col-xs-6 col-sm-6 col-md-6'>
                                                                                            <IconButton color="primary"   aria-label="delete">
                                                                                                        <AutorenewIcon/>
                                                                                                    </IconButton>
                                                                                             
                                                                                             
                                                                                                        <IconButton color="primary"  aria-label="delete">
                                                                                                        <ArrowCircleRightIcon

                                                                                                                onClick={()=>{
                                                                                                                getAllEngineers()
                                                                                                                    handleClickToOpen2()
                                                                                                                
                                                                                                                }}

                                                                                                        />


                                                                                            <Dialog open={open2} onClose={handleToClose2} maxWidth={'xl'}>
                                                                                                            <DialogTitle>{"Foward Ticket To Technician"}</DialogTitle>
                                                                                                                <DialogContent>
                                                                                                                 
                                                                                                                    <div className='row mt-2 '>
                                                                                                                        <div className='col-xs-12 col-sm-12 col-md-12 '>
                                                                                                                             <Button variant='contained' color='info' size='small' onClick={handleClickOpen}>
                                                                                                                                Select Technician
                                                                                                                            </Button>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div className='row mt-2'>
                                                                                                                            <div className='col-xs-12 col-sm-6 col-md-6'>
                                                                                               
                                                                                                                            <SimpleDialog
                                                                                                                                selectedValue={selectedValue}
                                                                                                                                
                                                                                                                                open={open}
                                                                                                                                onClose={handleClose}
                                                                                                                                
                                                                                                                                 />                                                                       
                                                                                                                            </div>
                                                                                                                           
                                                                                                                    </div>
                                                                                                                    <div className='row mt-2 mx-2'>
                                                                                                                    <TextField
                                                                                                                            autoFocus
                                                                                                                            margin="dense"
                                                                                                                            id="name"
                                                                                                                            label="Selected technician"
                                                                                                                            size='small'
                                                                                                                            required={true}
                                                                                                                            type="Text"
                                                                                                                            value={selectedValue}
                                                                                                                            onChange={(event)=>{
                                                                                                                                setNewTicketAssignedTech(event.target.value);
                                                                                                                            }} 
                                                                                                                            fullWidth
                                                                                                                            variant="standard"
                                                                                                                        />
                                                                                                                    </div>

                                                                                                                    <div className='row mt-3 mx-auto'>
                                                                                                                           <Button variant='contained' color='warning' size='small' onClick={()=>{
                                                                                                                               FowardTicketTechnician()
                                                                                                                               updateTicketLogs("Forwarded ticket to : "+selectedValue)
                                                                                                                               }} >
                                                                                                                                Forward
                                                                                                                            </Button>
                                                                                                                    </div>
                                                                                                                  
                                                                                                                </DialogContent>
                                                                                                           
                                                                                                        </Dialog>
                                                                                                    </IconButton>
                                                                                               
                                                                                              
                                                                                                        <IconButton color="primary"   aria-label="delete" >
                                                                                                        <FileUploadIcon onClick={updateTicketDetails} />
                                                                                                    </IconButton>
                                                                                              
                                                                                                
                                                                                                        <IconButton color="primary" aria-label="delete" >
                                                                                                        <PrintIcon/>
                                                                                                    </IconButton>
                                                                                               
                                                                                                
                                                                                                        <IconButton color="primary" aria-label="delete" >
                                                                                                        <EmailIcon/>
                                                                                                    </IconButton>
                                                                                               

                                                                                           
                                                                                                    <IconButton color="primary"  aria-label="Close Ticket" >
                                                                                                       <CancelIcon onClick={handleClickToOpen3}/>

                                                                                                       <Dialog open={open3} onClose={handleToClose3} maxWidth={'xl'}>
                                                                                                            <DialogTitle>{"Closing Ticket : "+ticketId}</DialogTitle>
                                                                                                                <DialogContent>
                                                                                                                <div className='col-xs-12 col-sm-12 col-md-12'>
                                                                                                                               {getCurrentDateTime()}
                                                                                                                               </div>
                                                                                                                 <div className='row mt-2'>
                                                                                                                 
                                                                                                                               <div className='col-xs-12 col-sm-12 col-md-12'>
                                                                                                                              
                                                                                                                               <InputLabel id="demo-simple-select-label">Solution</InputLabel>
                                                                                                                                <TextareaAutosize
                                                                                                                                        minRows={4}
                                                                                                                                        aria-label="maximum height"
                                                                                                                                        placeholder="....."
                                                                                                                                        style={{ width: 350 }}
                                                                                                                                        onChange={(event)=>{
                                                                                                                                                setTicketSolution(event.target.value)
                                                                                                                                        }}
                                                                                                                                        />
                                                                                                                               </div>
                                                                                                                             
                                                                                                                 </div>
                                                                                                                 <div className='col-xs-12 col-sm-12 col-md-12'>
                                                                                                                 <Button variant='contained' color='warning' size='small' onClick={()=>{
                                                                                                                     CloseTicket()
                                                                                                                     updateTicketLogs("Ticket closed by : "+UserEmail_Variable)
                                                                                                                 }} >
                                                                                                                        Close Ticket
                                                                                                                  </Button>       
                                                                                                                 </div>

                                                                                                                </DialogContent>
                                                                                                           
                                                                                                        </Dialog>

                                                                                                  </IconButton>
                                                                                            </div>
                                                                                              
                                                                                        </div>
                                                                                            <hr style={{color:'orange', padding:'1px'}}></hr>
                                                                                            <div className='row'>
                                                                                                <div className='col-xs-12 col-sm-3 col-md-3'>
                                                                                                <TextField
                                                                                                    label="Name"
                                                                                                    id="standard-size-small"
                                                                                                    value={ticketName}
                                                                                                    size="small"
                                                                                                    variant="standard"
                                                                                                    onChange={(event)=>{
                                                                                                        setTicketName(event.target.value)
                                                                                                    }}
                                                                                                    />
                                                                                                        </div>
                                                                                                        <div className='col-xs-12 col-sm-3 col-md-3'>
                                                                                                        <TextField
                                                                                                            label="Address"
                                                                                                            id="standard-size-small"
                                                                                                            value={ticketAddress}
                                                                                                            size="small"
                                                                                                            variant="standard"
                                                                                                            onChange={(event)=>{
                                                                                                                setTicketAddress(event.target.value)
                                                                                                            }}
                                                                                                            />
                                                                                                        </div>
                                                                                                        <div className='col-xs-12 col-sm-3 col-md-3'>
                                                                                                        <TextField
                                                                                                            label="Contact"
                                                                                                            id="standard-size-small"
                                                                                                            value={ticketContact}
                                                                                                            size="small"
                                                                                                            variant="standard"
                                                                                                            onChange={(event)=>{
                                                                                                                setTicketContact(event.target.value)
                                                                                                            }}
                                                                                                            />
                                                                                                        </div>
                                                                                              <div className='col-xs-12 col-sm-3 col-md-3'>
                                                                                                <Form.Group className="" controlId="formBasicEmail">
                                                                                                <TextField
                                                                                                    label="Email"
                                                                                                    id="standard-size-small"
                                                                                                    value={ticketEmail}
                                                                                                    size="small"
                                                                                                    variant="standard"
                                                                                                    onChange={(event)=>{
                                                                                                        setTicketEmail(event.target.value)
                                                                                                    }}
                                                                                                    />
                                                                                                </Form.Group>
                                                                                                </div>
                                                                                            </div>

                                                                                <div className='row mt-4'>
                                                                                  <div className='col-xs-12 col-sm-6 col-md-6'>
                                                                                  <InputLabel id="demo-simple-select-label">Description</InputLabel>
                                                                                  <TextareaAutosize
                                                                                        minRows={4}
                                                                                        aria-label="maximum height"
                                                                                        placeholder="Description"
                                                                                        value={ticketDescription}
                                                                                        defaultValue={ticketDescriptionDb}
                                                                                        style={{ width: 350 }}
                                                                                        onChange={(event)=>{
                                                                                              setTicketDescription(event.target.value)
                                                                                        }}
                                                                                        />
                                                                                  </div>
                                                                                  <div className='col-xs-12 col-sm-6 col-md-6'>
                                                                                                        <TextField
                                                                                                            label="Status"
                                                                                                            id="standard-size-small"
                                                                                                            value={ticketStatus}
                                                                                                            size="small"
                                                                                                            variant="standard"
                                                                                                           aria-readonly
                                                                                                            />
                                                                                                        </div>
                                                                                 
                                                                              </div>
                                                                                
                                                                            </Card>
                                                                </Tab>
                                                             
                                                                <Tab eventKey="contact" title="Activities">
                                                                      
                                                                      <div className='row'>
                                                                            <div className='col-xs-12 col-sm-12 col-md-12'>
                                                                                    <Card className='p-3' style={{borderColor:'black'}}>

                                                                                        <div className='row'>
                                                                                        <div className='col-xs-12 col-sm-3 col-md-3'>
                                                                                       

                                                                                                    <Button variant="contained" onClick={ ()=>{
                                                                                                         updateTicket()
                                                                                                    TechnicianUpdateForLogsTbl()
                                                                                                   
                                                                                                    
                                                                                                    } } className='mx-2' size='small' endIcon={<FileUploadIcon  />}>
                                                                                                        Update
                                                                                                        </Button>
                                                                                        </div>
                                                                                        
                                                                                        </div>

                                                                                        <hr style={{color:'orange'}} ></hr>

                                                                                            <div className='row'>
                                                                                                <div className='col-xs-12 col-sm-6 col-md-6'>

                                                                                                    <div className='row'>
                                                                                                            <div className='col-xs-12 col-sm-6'>
                                                                                                            <Select
                                                                                                                    labelId="demo-simple-select-label"
                                                                                                                    id="demo-simple-select"
                                                                                                                    value={onsiteRemote}
                                                                                                                        className='px-4 mx-2'
                                                                                                                        size='small'
                                                                                                                        label='Remote\On-Site'
                                                                                                                     required='true'
                                                                                                                    onChange={(event)=>{
                                                                                                                        handleChange3OnsiteRemote(event)
                                                                                                                        setTicketRemote(event.target.value)
                                                                                                                    }}

                                                                                                                >
                                                                                                                    <MenuItem value={'On-site'}>On-Site</MenuItem>
                                                                                                                    <MenuItem value={'Remote'}>Remote Work</MenuItem>
                                                                                                                
                                                                                                                </Select>
                                                                                                            </div>
                                                                                                    
                                                                                                    </div> 
                                                                                                    <div className='row mt-4'  >
                                                                                                            <div className='col-xs-12 col-sm-8 col-md-8'   style={{display:'inline-flex'}}>
                                                                                                            <TextField
                                                                                                                id="outlined-number"
                                                                                                                label="Hours on Ticket"
                                                                                                                size='small'
                                                                                                                type="number"
                                                                                                                InputLabelProps={{
                                                                                                                    shrink: true,
                                                                                                                }}

                                                                                                            className="mx-2"
                                                                                                            onChange={(event)=>{
                                                                                                                setTicketHours(event.target.value)
                                                                                                            }}
                                                                                                                />
                                                                                                            <TextField
                                                                                                                id="outlined-number"
                                                                                                                label="Minutes on Ticket"
                                                                                                                size='small'
                                                                                                                type="number"
                                                                                                                InputLabelProps={{
                                                                                                                    shrink: true,
                                                                                                                }}
                                                                                                                onChange={(event)=>{
                                                                                                                    setTicketMin(event.target.value)
                                                                                                                }}
                                                                                                                />
                                                                                                            </div>
                                                                                            
                                                                                                
                                                                                        </div>
                                
                                                                                                </div>
                                                                                                <div className='col-xs-12 col-sm-6 col-md-6'>
                                                                                                <TextareaAutosize
                                                                                                                minRows={4}
                                                                                                                aria-label="maximum height"
                                                                                                                
                                                                                                                placeholder="Write your updates here..."
                                                                                                                
                                                                                                                style={{ width: 350 }}
                                                                                                                onChange={(event)=>{
                                                                                                                        setTicketUpdate01(event.target.value);
                                                                                                                }}
                                                                                                                
                                                                                                                />
                                                                                                </div>
                                                                                            
                                                                                        </div>

                                                                                   </Card>
                                                                            </div>
                                                                      </div>

                                                                  

                                                                 
                                                                  
                                                                 </Tab>
                                                                 <Tab eventKey="history" title="Ticket History">
                                                                        
                                                                      

                                                                <div className='row mt-2'  style={{overflowY:'scroll', maxHeight:'550px'}}>
                                                                    <div className='col-xs-12 col-sm-12 col-md-12'>
                                                                    
                                                                   <Paper sx={{ width: '100%', mb: 1, mt:2 }}>
                                                                     <TableContainer component={Paper} >
                                                                        <Table stickyHeader sx={{ minWidth: 650 }}  size="small" aria-label="sticky table">
                                                                            <TableHead stickyHeader style={{backgroundColor:'black'}}>
                                                                                <TableRow >
                                                                                    <TableCell align="left"><b>Ticket ID</b></TableCell>
                                                                                    <TableCell align="left"> <b>Technician</b></TableCell>
                                                                                    <TableCell align="left"> <b>Description</b></TableCell>
                                                                                    <TableCell align="left"><b>Time Stamp</b></TableCell>
                                                                                    <TableCell align="left"><b>Hours</b></TableCell>
                                                                                    <TableCell align="left"><b>Minutes</b></TableCell>
                                                                                  </TableRow>
                                                                            </TableHead>
                                                                                <TableBody>
                                                                                   {
                                                                                       
                                                                                    ticketHistoryList
                                                                                            .slice(historyLogPage* historyLogRowsPerPage, historyLogPage * historyLogRowsPerPage + historyLogRowsPerPage)
                                                                                            .map((row, index)=>{
                                                                                                    return(

                                                                                                        <TableRow hover key={row.ticket_log_id}>
                                                                                                            <TableCell  component="th" scope="row" align="left">{row.Ticket_ID}</TableCell>
                                                                                                            <TableCell align="left">{row.Technician_Email}</TableCell>
                                                                                                            <TableCell align="left">{row.Description}</TableCell>
                                                                                                            <TableCell align="left">{row.DateTime}</TableCell>
                                                                                                            <TableCell align="left">{row.Time_Spent_Hrs}</TableCell> 
                                                                                                            <TableCell align="left">{row.Time_Spent_Min}</TableCell>                                                          
                                                                                                        </TableRow>

                                                                                                    );
                                                                                            })
                                                                                   }
                                                                                </TableBody>
                                                                               
                                                                        </Table>
                                                                     
                                                                    </TableContainer>
                                                                   
                                                                  

                                                                      </Paper>


                                                                            </div>
                                                                        </div>
                                                                                                                      
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
                                                              <Button variant="contained" color='warning' size="small" onClick={UpdatePreferences}>Save Changes</Button>
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
                                                              <Button variant="contained" color='warning' size="small" onClick={UpdatePassword}>Save Changes</Button>
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
