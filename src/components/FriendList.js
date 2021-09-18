import React from 'react'

function FriendList(){
    const friendList = ["Atikur Rahman","Adon","Atiqul Alom" , "Shawon"]
     const listOfNames =  friendList.map(name=><p>{name}</p>)
    return(
        <div>
            {
              listOfNames
            }
        </div>
    )
}

export default FriendList;