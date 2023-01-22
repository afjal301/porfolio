import React from "react";
import facebook from '../img/facebook.ico'
import github from '../img/github.ico'
import linkeding from '../img/linkedin.ico'
import gmail from '../img/gmail.ico'
const Info =()=>{
    return <>
     <div className="social">
        <div className="center">
           <img src={facebook} alt=""/>
        </div>
        <div className="center">
           <img src={github} alt=""/>
        </div>
        <div className="center">
           <img src={linkeding} alt=""/>
        </div>
        <div className="center">
           <img src={gmail} alt=""/>
        </div>
     </div>
    </>
}
export default Info