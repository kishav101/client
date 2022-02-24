import {React, useState, useEffect,} from 'react'
import './SLA.css'
import { makeStyles } from "@mui/styles";
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { Box, Button, FormControl, FormControlLabel, FormLabel, InputLabel, Menu, MenuItem, Radio, RadioGroup, Select, TextareaAutosize, TextField } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';

//Get hours
function getDateOpen(params){
    let opendate =new Date(params.row.Date_Opened)
    return `${opendate.getDate()}/${opendate.getMonth()}/${opendate.getFullYear()}  ${opendate.getHours()}:${opendate.getMinutes()}:${opendate.getSeconds()}`;
}
function getDateClose(params){
    let opendate =new Date(params.row.Date_Closed)
    return `${opendate.getDate()}/${opendate.getMonth()}/${opendate.getFullYear()}  ${opendate.getHours()}:${opendate.getMinutes()}:${opendate.getSeconds()}`;
}
function getTheHours(params){
    let opendate =new Date(params.row.Date_Opened)
    let closedate =new Date(params.row.Date_Closed)
    let hours = Math.abs(closedate.getHours()-opendate.getHours())
    let days = closedate.getDay()-opendate.getDate()
    let minutes= closedate.getMonth()- opendate.getMinutes()
    if(hours>0&&hours<=1){
        return `Good:${hours} hours ${minutes} mins`
    }
    if(hours >= 2){
        return `Breached:  ${hours} Hours ${minutes} mins`
    }
    if(hours>=1.5){
        return `Warning:${hours} hours ${minutes} mins`
    }
    else {return `er${hours} hours ${minutes} mins`}
}
export default function SLA() {
    let [ticketsJSON, setticketsJSON] = useState([]);
    const [selectedRow, setselectedRow] = useState([])
    const [TicketID, setTicketID] = useState('')
    const [Name, setName] = useState('')
    const [description, setdescription] = useState('')
    const [Technicainemail, setTechnicainemail] = useState('')
    const [status, setstatus] = useState('')
    const [solution, setsolution] = useState('')
    const [update, setupdate] = useState('')
    const [time, settime] = useState('')
    const [closeTicket, setcloseTicket] = useState(false)
    const [category, setcategory] = useState('')
    const [serviceRender, setserviceRender] = useState('')
    const [reAssignedFrom, setreAssignedFrom] = useState('')
    useEffect(() => {
        getTickets();
    },[]);
    async function getTickets(){
        let ticketArray= []
         await fetch('http://localhost:3001/tickets').then(res=>res.json()).then(data=>setticketsJSON(data));
        
    }
    useEffect(() => {
      setselectedRow(ticketsJSON.filter((e)=>e.Ticket_ID===1));
    }, [ticketsJSON])
    
    const filter = textFilter();
    const options = {
      // pageStartIndex: 0,
      sizePerPage: 8,
      hideSizePerPage: true,
      hidePageListOnlyOnePage: true
    };
    const columns = [{
        dataField: 'Ticket_ID',
        text: 'Ticket ID',
        filter: filter,
        sort: true,
    }, {
        dataField: 'Name',
        text: 'Name',
        filter: filter,
        sort: true,
    }, {
        dataField: 'Status',
        text: 'Status',
       filter: filter,
       sort: true,
       formatter: (cellContent, row) => {
          if (row.Status==='Breached') {
            return (
              <h5>
                <span style={{color:'black',backgroundColor:'red',padding:'.2rem',borderRadius:'5px',fontSize:'12px'}}>{row.Status}</span>
              </h5>
            );
          }else if (row.Status==='Warning') {
            return (
              <h5>
                <span style={{color:'black',backgroundColor:'orange',padding:'.2rem',borderRadius:'5px',fontSize:'12px'}}>{row.Status}</span>
              </h5>
            );
          }
          return (
            <h5>
              <span style={{color:'black',backgroundColor:'green',padding:'.2rem',borderRadius:'5px',fontSize:'12px',textAlign:'center'}}>{row.Status}</span>
            </h5>
          );
        },
    }];
    const rowEvents = {
        onClick: (e, row, rowIndex) => {
            setTicketID(row.Ticket_ID)
            setTechnicainemail(row.Technician_Email_ID)
            setdescription(row.Description)
            setstatus(row.Status)
            setName(row.Name)
            setsolution(row.Solution)
            setcategory(row.Catagory)
            setserviceRender(row.Service_Render)
            setreAssignedFrom(row.ReAssigned_From)
        },

    };
     const handleChange = (event) => {
    setTechnicainemail(event.target.value);
  };
  const handleticketChange = (event) => {
    setcloseTicket(event.target.value);
  };
   
    return (
        <div className="sla d-flex flex-column">
           <div className='h-100'>
                <div className="heading"style={{borderRadius: '0.25em', textAlign: 'center', color: 'purple', border: '1px solid purple', padding: '0.5em' }}>Service Licence Agreement Tickets </div>
            <div className='mt-4 mx-4 overflow-hidden borders'>
                <div  className='mt-1 '>
                    <BootstrapTable  hover condensed bodyClasses='boottable' keyField='id' filter={ filterFactory() }  data={ticketsJSON} columns={ columns } pagination={ paginationFactory(options) }  rowEvents={ rowEvents }  />
                </div>
            </div>
            <div className="section px-4 mt-5">
                <div className="col-lg-12 d-flex flex-row justify-content-between mx-3 mt-1 mb-2 ">
                    <TextField id="standard-basic" onChange={(e)=>setTicketID(e.target.value)} InputProps={{readOnly: true,}} label="Ticket ID" variant="standard" value={TicketID}/>
                     <Box sx={{ minWidth: 120 }}>
      <FormControl>
        <InputLabel id="simple1-select-label">Assigned Technician</InputLabel>
        <Select
          labelId="simple1-select-label"
          id="simple-select"
          value={Technicainemail}
          label="Technician Email"
          onChange={handleChange}
        >
          {ticketsJSON.map(e=>{
              return (
                  <MenuItem value={e.Technician_Email_ID} onClick={e=>setTechnicainemail(e.target.value)}>{e.Technician_Email_ID}</MenuItem>
              )
          })}
        </Select>
      </FormControl>
                    </Box>
                    <TextField id="standard-basic" label="Name" variant="standard" value={Name}/>
                </div>
                 <div className="col-lg-12 d-flex flex-row justify-content-between mx-3 my-2 ">
                      <TextField id="standard-basic"style={{width:'100%'}} onChange={(e)=>setdescription(e.target.value)} multiline label="Description" variant="standard" value={description}/>
                 </div>
                <div className="col-lg-12 d-flex flex-row justify-content-between mx-3">
                    <TextField id="time" label="Duration" type="time" defaultValue="00:30" InputLabelProps={{ shrink: true,}}inputProps={{step: 300, }} sx={{ width: 150 }}/>
                    <FormControl>
  <InputLabel id="simple-select-label">Status</InputLabel>
  <Select
    labelId="simple-select-label"
    id="simple_-select"
    value={status}
    label="Status"
    onChange={(e)=>setstatus(e.target.value)}
  >
    <MenuItem value={'Good'}>Good</MenuItem>
    <MenuItem value={'Warning'}>Warning</MenuItem>
    <MenuItem value={'Breached'}>Breached</MenuItem>
  </Select>
                    </FormControl>
                    <TextField multiline onChange={(e)=>setsolution(e.target.value)} label="Solution" variant="standard" value={solution}/>
                     <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Close Ticket? </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="No"
        name="radio-buttons-group"
        value={closeTicket}
        onChange={handleticketChange}
        row
      >
        <FormControlLabel value="true" control={<Radio  sx={{
          color: orange[800],
          '&.Mui-checked': {
            color: orange[600],
          },
        }}/>} label="Yes" />
        <FormControlLabel value='false' control={<Radio sx={{
          color: orange[800],
          '&.Mui-checked': {
            color: orange[600],
          },
        }} />} label="No" />
      </RadioGroup>
                    </FormControl>
                </div>
                <div className="col-lg-12 d-flex flex-row justify-content-between mx-3 my-4">
                     <TextField id="standard-basic" onChange={(e)=>setcategory(e.target.value)} InputProps={{readOnly: true,}} label="category " variant="standard" value={category}/>
                    <TextField id="standard-basic" onChange={(e)=>setserviceRender(e.target.value)} InputProps={{readOnly: true,}} label="Service Render" variant="standard" value={serviceRender}/>
                    <TextField id="standard-basic" onChange={(e)=>setreAssignedFrom(e.target.value)} InputProps={{readOnly: true,}} label="Re Assigned From " variant="standard" value={reAssignedFrom}/>
                </div>
                <div className="col-lg-12 d-flex flex-row justify-content-between mx-3 mb-5 pb-5">
                    <Button variant='contained'  onClick={()=>alert(`Ticket Number: ${TicketID} has been updated`)} style={{width:'100%'}}> Update Ticket</Button>
                </div>
                
            </div>
           </div>
        </div>
    );
}
