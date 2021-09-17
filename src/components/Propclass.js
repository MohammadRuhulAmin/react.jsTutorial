import React,{Component} from 'react';

class Propclass extends Component {
    render(){
        const {userName,userEmail} = this.props 
        return (
            <div>
                <h1>User Name {userName}   : </h1>
                <h1>User Email  {userEmail} :</h1>
            </div>
        )
    }



}

export default Propclass;