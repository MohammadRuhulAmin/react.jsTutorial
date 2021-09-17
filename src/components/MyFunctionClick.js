import React from 'react'

const MyFunctionClick = ()=>{
    function aboutMe (){
        console.log("Message from myfunctionclick");
    }
    return(
        <div>
            <h1>This is My Function  </h1>
            <button onClick={aboutMe}>MyFunctionClick </button>
        </div>
    )


}

export default MyFunctionClick;