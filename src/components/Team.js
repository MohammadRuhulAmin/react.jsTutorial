import React,{Component} from 'react'

class Team extends Component{

    constructor(){
        super();
        this.state = {
            author:"Md Ruhul Amin",
        }
    }
    changeAuthor(){
        this.setState({
            author:"Dr Ashraful Islam",
        });
    }

    render(){
        return(
            <div>
                <h1>Team Bravo! {this.state.author}</h1>
                <button onClick={()=>this.changeAuthor()}>Change Author </button>
            </div>
        )
    }
}

export default Team;