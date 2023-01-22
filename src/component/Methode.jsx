import React from "react";
const Methode = ({image,title})=>{
    return <>
        <div className="methode">
            <img src={image} alt="" className="left"/>
            <h6 className="left">{title}</h6>
        </div>
    </>
}
export default Methode