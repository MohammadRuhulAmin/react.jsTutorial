import React from 'react'

function EmployeeList(){
    const names =['ruhul' , 'apon','imam']
    return (
        <div>
            {
                names.map(name => <h2>{name}</h2>)
            }
        </div>
    )
}
export default EmployeeList;
