import React, { Component } from 'react'
 class UserGreeting extends Component {
     constructor(props) {
         super(props)
         this.state = {
              isLoggedIn:true,
              userName:'ruhul amin',
         }
     }     
    render() {
        if(this.state.isLoggedIn === true){
            return (
                <div>Welcome {this.state.userName}</div>
            )
        }
        else {
            return (
                <div>Welcome as a Guest ! </div>
            )
        }
    }
}
export default UserGreeting;



