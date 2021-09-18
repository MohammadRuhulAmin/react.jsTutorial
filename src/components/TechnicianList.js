import React from 'react'
import TechName from './TechName'

 function TechnicianList() {
     const list = [
         {
             "name":"x",
             "age":"28",
             "skill":"hardware"
         },
         {
            "name":"xx",
            "age":"23",
            "skill":"camera"
        },
        {
            "name":"Tx",
            "age":"12",
            "skill":"ISP"
        },
        {
            "name":"XXdx",
            "age":"32",
            "skill":"Mouse"
        }
     ]
     const listAsInfo = list.map(tech  =>  <TechName aboutTech = "tech"></TechName>)
    return (
        <div>
            {
                listAsInfo
            }
        </div>
    )
}

export default TechnicianList
