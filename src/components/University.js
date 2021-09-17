import React ,{Component} from 'react';

class University extends Component{

    render() {
      return (
         <div>
            <h1>University Information </h1> 
            <p>{this.props.name}</p>
            <p>{this.props.location}</p>
         </div>
      )
    

    }


}

export default University;