
import React, {useContext} from 'react'
import {UserContext} from './Details'

const User = () => {
const{ data} = useContext(UserContext)
    console.log(data)
    return (
        <>
            {
                data.map((item)=>(
                    <>
                    <ul>
                    <li> Name:{item.name} </li>
                    <li>Qualification:{item.qaulification}</li>
                    </ul>
                    </>
                ))
            }
            
        </>
    )
}

export default User
