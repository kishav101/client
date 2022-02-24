import { Avatar, Box, Button, CardContent, List, ListItem, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Typography} from '@material-ui/core';
import { ArrowBack, ArrowForward, Assignment, AttachMoney, CallToAction, Description, Drafts, Home, Inbox, LinkedCamera, LinkedIn, Money, Person } from '@material-ui/icons';

import React, { useState } from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import './AsideBar.css'
import {pagging} from './DataHandler'
import { useRecoilState } from 'recoil';
import {ListItemButton} from "@mui/material";
import {GrLogin, IoTicketOutline, MdAnalytics} from "react-icons/all";
import {Image} from "react-bootstrap";
function AsideBar() {
    const navigate=useNavigate()
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [collapse, setcollapse] = React.useState(false);
    const [paggingState, setPaggingState] = useRecoilState(pagging);
    const location = useLocation();
    const itemClicked= (event,index)=>{

    }
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        setPaggingState(index.toString())
    };
    return <div className={`sidebar ${collapse}`}>
        <div className={`heading header ${collapse}`}>
            <Image className={`profile_image ${collapse}`} src={location.state.imageUrl} roundedCircle  style={{width:'100px',height:'100px'}}/>
            <div className={`profilename ${collapse}`}>{location.state.username}</div>
            <hr style={{border:'#484747 dotted.01px'}}/>
            <div className='toggleButton'>
                <Button onClick={()=>setcollapse(!collapse)} startIcon={collapse?<ArrowBack/>:<ArrowForward/>}/>
            </div>
        </div>
        <div className="content" style={{width: '100%',
            paddingLeft: '0.1rem',display:"flex"
           }}>

                <List  className='nav-list' component="nav" aria-label="main mailbox folders">
                    <ListItemButton
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}
                    >
                        <ListItemIcon>
                            <MdAnalytics style={{color:'black'}}/>
                        </ListItemIcon>
                        <ListItemText className={collapse.toString()} primary="Analytics" />
                    </ListItemButton>
                    <ListItemButton style={{marginBottom:'6rem'}}
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                    >
                        <ListItemIcon>
                            <IoTicketOutline  style={{color:'black'}} />
                        </ListItemIcon>
                        <ListItemText className={collapse.toString()} primary="SLA" />
                    </ListItemButton>
                    <hr/>
                    <ListItemButton
                        selected={selectedIndex === 2}
                        onClick={(event) => navigate("/")}
                    >
                        <ListItemIcon>
                            <GrLogin />
                        </ListItemIcon>
                        <ListItemText className={collapse.toString()} primary="Sign Out" />
                    </ListItemButton>
                </List>

            </div>


    </div>;
}
export default AsideBar;
