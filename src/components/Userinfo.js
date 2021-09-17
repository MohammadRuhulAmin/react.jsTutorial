import React from 'react';

const Userinfo = ({name,email})=>{
    // another way of distructing props : 
    //const{contact} = props
    return (
        <div>User Information : {name} {email}</div>
    )
}

export default Userinfo;