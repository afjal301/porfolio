import React from "react";
import { useState } from "react";
import reduct from '../img/reduct2.ico'
import exit from '../img/exit.png'
const Header =()=>{
  const [event , setevent]=useState(reduct)
  const handleEvent =()=>{
    
    if(event == reduct){
      document.getElementById("nav").style.display="flex"
      document.getElementById("nav1").style.display="flex"
      document.getElementById("nav2").style.display="flex"
      document.getElementById("nav3").style.display="flex"
      document.getElementById("nav").style.textAlign="center"
      
      setevent(exit)
    }else{
      setevent(reduct)
      document.getElementById("nav").style.display="none"
      document.getElementById("nav1").style.display="none"
      document.getElementById("nav2").style.display="none"
      document.getElementById("nav3").style.display="none"
      
    }
    
  }
    return <>
     <header className="center" id="header">
       <div className="reduct">
            <img src={event} alt="" onClick={handleEvent} />
       </div>
       <div className="nav" id="nav">
        <a href="#">Personnalite <br /> <hr /></a >
       </div>
       <div className="nav" id="nav3">
        <a href="#">Experience <br /><hr /></a>
      </div>
       <div className="nav" id="nav1">
          <a href="#">Methode<hr /></a >
       </div>
      <div className="nav" id="nav2">
        <a href="#">Connaissance <hr /></a>
      </div>
     
     </header>
    </>
   

}
export default Header;