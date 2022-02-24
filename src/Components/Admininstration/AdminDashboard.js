import AsideBar from "./AsideBar";
import {RecoilRoot,useRecoilValue} from "recoil";
import {FaBars} from "react-icons/all";
import {pagging} from './DataHandler'
import {useState} from "react";
import Analytics from "./Analytics/Analytics";
import './AdminDashboard.css'
import SLA from "./SLA/SLA";



export default function AdminDashboard(){
    const paggingState =useRecoilValue(pagging)
    return (
        <div className='dashboard'>
            <AsideBar/>
            <div className='board'>
                {(() => {
                    switch (paggingState) {
                        case "1":
                            return (
                              <SLA/>
                            )
                        default:
                            return (
                                <Analytics/>
                            )
                    }
                })()}
            </div>
        </div>
    )
}

