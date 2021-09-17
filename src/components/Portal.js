import React from 'react';
const Portal = (props)=>{
    return (
        <div>
            <h1>This is Web Application Portal !{props.link}</h1>
            <p> Author : {props.author}</p>
            {props.children}
        </div>
    );
}

export default Portal;