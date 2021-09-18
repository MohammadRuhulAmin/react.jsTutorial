import React, { Component } from 'react'


 class ConditionalRendering extends Component {
     constructor(props) {
         super(props)
         this.state = {
              isLoggedIn:true
         }
     }
     render(){
         return( this.state.isLoggedIn && <div>Hi Conditional Rendering ! Mr. Md Ruhul Amin</div>)
     }
     
    // render() {
    //    let message
    //    if(this.state.isLoggedIn){
    //        message = <div>Welcome Ruhul Amin++COnditional Rendering </div>
    //    }else{
    //        message = <div>As A Guest</div>
    //    }
    //    return <div>{message}</div>
       
    // }
//    render(){
//     return  this.state.isLoggedIn ?
//     (<div>Welcome Conditional Rendering </div>) :
//      (<div>No Welcome</div>)
 
//    }
}

export default ConditionalRendering