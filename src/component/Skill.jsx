import React from 'react';
import 'chart.js/auto'
import { Doughnut } from "react-chartjs-2"
const Skill =({value,color,description})=>{
    var reste = 100 - value
    const data = {
        labels: [],
        datasets: [{
          label: value+' '+description,
          data: [reste,value],
          backgroundColor: [
            'white', 
            color
          ],
          borderWidt:1,
          borderColor:'black',
          hoverOffset: 4
        }]
      };
    return <>
        <Doughnut data={data} height="50"/>
    </>
}
export default Skill