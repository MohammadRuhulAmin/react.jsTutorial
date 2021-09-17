import React,{Component} from 'react';

class Versity extends Component{

    render(){
        return(
            <div>
                <h1>American International University Bangladesh</h1>
                <p>{this.props.id}</p>
                <p>{this.props.mail}</p>
            </div>
        )
    }
}

export default Versity;