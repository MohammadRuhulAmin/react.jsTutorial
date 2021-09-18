import React from 'react'

function TechName({aboutTech}) {
    return (
        <div>
            <p> This is{aboutTech.name} i am {aboutTech.age} years old and i am expert in {aboutTech.skill}</p>
        </div>
    )
}

export default TechName
