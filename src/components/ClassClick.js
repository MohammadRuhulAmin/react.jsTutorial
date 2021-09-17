import React,{Component}  from 'react';


class ClassClick extends Component{
    showMessage(){
        console.log("event response from class ")
    }
    render(){
        return(
            <div>
                Class Click 
                <button onClick={this.showMessage} >Class Click Button </button>
            </div>
        )
    }

}

export default ClassClick;