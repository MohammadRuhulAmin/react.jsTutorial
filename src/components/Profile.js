import React,{Component} from 'react'

class Profile extends Component{

    constructor(){
        super();
       this.state = {
           userName:'Mohammad Ruhul Amin',
           userEmail:'ruhulamin.cs.dev@gmail.com',

       }
    }
    
    changeUserInformation(){
        this.setState({
            userName:"Sakib Hasan",
            userEmail:"Sakib@gmail.com",
        });
    }


    render(){
        return (
            <div>
                <h1>User Name :{this.state.userName} </h1>
                <h1>User Email:{this.state.userEmail}</h1>
                <button onClick={()=>this.changeUserInformation()}>Change Information </button>
            </div>
        )
    }
}
export default Profile;