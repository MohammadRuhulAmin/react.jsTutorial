import React from 'react';

 function UserList(){
    const userList = ["Ruhul Amin" , "Sakib Hasan" , "Sajid Hasan" , "Apon ", "Mohammad Imam"]
    return (
        <div>
            {
                userList.map(name =><b>{name}</b>)
            }
        </div>
    )
}
export default UserList