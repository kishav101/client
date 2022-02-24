import './analytics.css'
import {React,useState,useEffect} from 'react'
import { Table } from 'react-bootstrap';
import {Button} from '@material-ui/core'
import { Clock, PauseCircle, Person, PlayCircle } from 'react-bootstrap-icons';
import StatsCard from '../StatsCards';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,} from 'chart.js';
import { Bar } from 'react-chartjs-2';
//import GetData from '../../Datahouse/GetData';
//TODO: Update the picture to use Google
import {DesktopDateRangePicker} from "@mui/lab";
import {LinearProgress, Typography} from "@mui/material";
import moment from 'moment';
import Moment from 'react-moment'


function Analytics() {
    const [Technicians , setTechnicians ] = useState([""]);
    const [availableTechnicians, setavailableTechnicians] = useState(0)
    const [ticketJSON, setticketJSON] = useState([])
    const [ticketlog, setticketlog] = useState([])
    const [paymentJSON, setpaymentJSON] = useState([])
    const [ticketLogs,setticketLogs]=useState([])
    const [breach,setbreach]= useState([])
    const [value, setValue] = useState([null, null]);
    const now= new Date();

    //chart


    const start = new Date();
    function subType(startingPoint,amount,type){
        return moment(startingPoint).subtract(amount,'hours');
    }

    function dateArray(_start,type,interval){
        let end = subType(start,interval,'Hours')
        const datearray=[];
        while (interval>=0){

            datearray.push(end.format('hh:mm').toString());
            end=end.add(1,'hours');
            interval-=1;
        }

        return datearray;
    }
     const labels=dateArray(start,'hours',10)
    //-----------graph states
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
    };


    //const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data1 = ticketJSON.filter(e=>e.Status ==='Breached').map(e=>(new Date(e.Date_Opened)).getDate())

    const data = {
        labels,
        datasets: [
            {
                label: 'Breached',
                data: data1,
                backgroundColor: 'rgb(213,5,5)',
            },
            {
                label: 'Warning',
                data:ticketJSON.filter(e=>e.Status ==='Warning').map(e=>(new Date(e.Date_Opened)).getDate()),
                backgroundColor: 'rgb(255,145,20)',
            },
            {
                label: 'Good',
                data:ticketJSON.filter(e=>e.Status ==='Good').map(e=>(new Date(e.Date_Opened)).getDate()),
                backgroundColor: 'rgb(23,201,16)',
            }
        ],
    };

    //TODO: Create a date list output of two string arrays
    /* fetch('/payments').then(res=>res.json()).then(data=>data.map(item=>paymentArray.push(item))
    );
    */
    async function ticketData(){
        const tempdata=[];
        await fetch('/tickets').then(res=>res.json()).then(data=>data.map(item=>tempdata.push(item)));
        setticketJSON(tempdata);

    }
    async function ticketLogData(){
        const tempdata=[];
        await fetch('/ticketLogs').then(res=>res.json()).then(data=>data.map(item=> tempdata.push(item)));
        setticketLogs(tempdata);

    }
    async function getTechnicians(){
        const array=[];
        await fetch('/technicians').then(res=>res.json()).then(data=>data.map(item=> array.push(item))
        );
        setTechnicians(array);
    };
    async function getpayments(){
        const paymentArray = [];
        await fetch('/payments').then(res=>res.json()).then(data=>data.map(item=> paymentArray.push(item))
        );
        setpaymentJSON(paymentArray);
    }
    /* async function postpayment(){
       const item=["232345",3000];
       axios.post('/postpayment',item).then(()=>console.log("Posted"));
    }; */
    useEffect(() => {
        ticketData();
        ticketLogData()
    }, [])
    //Datepicker
    function DateRange(){

    }
    return (
        <div className="analytics row ">
            <div className="col-lg-12">
                <div style={{textAlign:'center',fontSize:'1.5rem',top:'0',width:'100%',backgroundColor:'white',borderBottom:'solid black 1px',left:'0',padding:'.5rem'}}>Daily Stats Analytics </div>
            </div>
            <div className="topBar col-lg-12 col-md-12 row mx-0" style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',overflow:'hidden'}}>
                <div className="col-lg-3 col-md-6">
                    <StatsCard data={data} degree={(ticketJSON.filter(item=>item.Status==='Breached').length/ticketJSON.length)*(180)} label="Breached" value={ticketJSON.filter(item=>item.Status==='Breached').length} icon={<Clock size={30} color='black' />}/>
                </div>
                <div className="col-lg-3 col-md-6">
                    <StatsCard degree={(ticketJSON.filter(item=>item.Status==='Good').length/ticketJSON.length)*(180)} label="Good" value={ticketJSON.filter(item=>item.Status==='Good').length}  icon={<PauseCircle size={30} color='black'/>}/>
                </div>
                <div className="col-lg-3 col-md-6">
                    <StatsCard   degree={(ticketJSON.filter(item=>item.Status==='Warning').length/ticketJSON.length)*(180)} label="Warning" value={ticketJSON.filter(item=>item.Status==='Warning').length} icon={<PlayCircle size={30} color='black' />}/>
                </div>
                <div className="col-lg-3 col-md-6">
                    <StatsCard   degree={180} label="Total tickets" value={ticketJSON.length} icon={<Person size={30} color='black' />}/>
                </div>
            </div>
            <div className="col-lg-12 col-md-12 mt-5 my-1">
                {/*CHART */}
                <div className='col-lg-8 d-flex flex-row justify-content-sm-around align-content-center'>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDateRangePicker
                            startText="start"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(startProps, endProps) => (
                                <div className='d-flex flex-row justify-content-between'>
                                    <TextField  size='small'  {...startProps} />
                                    <Box className='m-2' >  to  </Box>
                                    <TextField  size='small' {...endProps} />
                                </div>
                            )}
                        />
                        <Button variant='contained' stlye={{height:'2rem'}}>Change date</Button>
                    </LocalizationProvider>

                </div>
                <div style={{position:'relative',width:'100%',paddingLeft:'2rem'}} className=' row d-flex flex-row'>
                   <div className='col-lg-8'> <Bar options={options} data={data} /></div>
                    <div className='col-lg-4 d-flex flex-column m-5 ' style={{width:'200px',backgroundColor:'orange',borderRadius:'5px'}}>
                        <div className='m-2 mb-0 text-center'>
                           <h4>Careers</h4>
                        </div>
                        <hr/>
                        <div className='m-1'>
                            <div>Desktop Support</div>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', mr: 1 }}>
                                    <LinearProgress variant="determinate" value={30} />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="text.secondary">{60}%</Typography>
                                </Box>
                            </Box>
                        </div>
                        <div className='m-1'>
                            <div>Network Engineer</div>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', mr: 1 }}>
                                    <LinearProgress variant="determinate" value={30} />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="text.secondary">{50}%</Typography>
                                </Box>
                            </Box>
                        </div>
                        <div className='m-1'>
                            <div>Cloud Engineer</div>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', mr: 1 }}>
                                    <LinearProgress variant="determinate" value={30} />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="text.secondary">{30}%</Typography>
                                </Box>
                            </Box>
                        </div>
                        <div className='m-1'>
                            <div>Cyber Security</div>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', mr: 1 }}>
                                    <LinearProgress variant="determinate" value={30} />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="text.secondary">{50}%</Typography>
                                </Box>
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    )
}
export default Analytics
