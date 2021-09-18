import React, { Component } from 'react'


class NameList extends Component {
    render() {
        const names = ['Rana','Kamal+','Masud']
        const nameList =   names.map(name => <h2>{name}</h2>)
        return (
            <div>
               {
                  nameList 
               }
            </div>
        )
    }
}
export default NameList
