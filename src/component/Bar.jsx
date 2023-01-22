import React from "react";
import { useState } from "react";
const Bar = ({value, langage,taille})=>{
    const [chrono , setchrono] =useState(0)
    const divStyle = {
        width:taille,
        transition:'0.2s'
    }
    

        if(chrono<taille){
            setTimeout(setchrono(chrono+1),10000)
        }
    return <>
    <div className="stat">
    <h6 className="title">{value}</h6>
    <div className="bar">
        <div className="value" style={divStyle}>  
        </div>
    </div>
    </div>
    
    </>
}
export default Bar;