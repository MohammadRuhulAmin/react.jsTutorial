import React,{Component} from 'react';

class Dashboard extends Component{

    constructor(){
        super();
        this.state = {
            userState:'User Dashboard+',
        }
    }
    changeUserState(){
        this.setState({
            userState:'User Profile'
        });
    }

    render(){
        return(
            <div>
                <h1>{this.state.userState}</h1>
                <button onClick={()=>this.changeUserState()} >User Profile </button>
            </div>
        )

    }
}
export default Dashboard;


