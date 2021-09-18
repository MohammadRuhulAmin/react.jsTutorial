import React from 'react'
import AboutProgrammer from './AboutProgrammer'
export default function ProgrammerList() {
    const programmerList = [
      {
          name:"ruhul amin",
          id:1,
      },
      {
        name:"Sakib Hasan",
        id:12,
    },
    {
        name:"Sajid Hasan",
        id:123,
    },

    ]
    const programmer = programmerList.map((person,index) => <AboutProgrammer key={index} programmer = {person}></AboutProgrammer> )
    

    return (
        <div>
             {programmer}
        </div>
    )
}
