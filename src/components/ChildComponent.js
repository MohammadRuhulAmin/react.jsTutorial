import React from 'react'

function ChildComponent(props){
    return(
        <div>
            <button onClick={props.gettingHandler}>Child Button </button>
        </div>
    )
}

export default ChildComponent;
