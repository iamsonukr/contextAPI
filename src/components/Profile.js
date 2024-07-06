import React from 'react'
import userContext from '../context/UserContext'
import { useContext } from 'react'

function Profile() {
    const {user}=useContext(userContext)

    if(!user){
        return <>Please login</>
    }else{
        return(
            <h1>Welcome {user.username}</h1>
        )
    }
}

export default Profile