import React from 'react'
import { Card } from 'react-bootstrap'
import { Clock } from 'react-bootstrap-icons'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from "chart.js";
import './StatsCards.css'
ChartJS.register(ArcElement, Tooltip, Legend);
let options = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        circumference: 0.5 * Math.PI,
        rotation: Math.PI,
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};
function StatsCard(props) {
    return (
        <div>
            <div className="col-auto borders" style={{display:'flex',flexDirection:'row',justifyContent:'space-even',alignItems:'center',borderRadius:'1px',width:'auto',height:'auto',padding:'.5rem',margin:'.3rem',color:`${props.color}`,backgroundColor:'orange'}}>
                <div style={{padding:'.1rem',textAlign:'center',width:'auto',flex:'0.3'}}>{props.icon}</div>
                <div className="vr" />

                <div className="col-lg-auto" style={{padding:'5px',textAlign:'center',color:'black',margin:"auto",flex:'.6'}}>
                    <div className="gauge">
                        <div className="gauge__body">
                            <div className="gauge__fill" style={{transform:`rotate(${props.degree}deg)`}}></div>
                            <div className="gauge__cover">{props.value}</div>
                        </div>
                    </div>
                   <h6 style={{fontSize:'14px',fontWeight:'700',padding:'0rem 0',color:`#3a3a3a`}}>{props.label.toString().toUpperCase()}</h6>
                </div>
            </div>
        </div>
    )
}

export default StatsCard
