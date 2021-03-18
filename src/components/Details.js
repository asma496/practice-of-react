import React, { useState, createContext } from 'react'
export const UserContext = createContext();

function Details(props) {
    const [data, setdata] = useState([
        {
        name:'asma',
        qaulification: 'graduate'
    },
      
        
    ])
    console.log(props.children)
    return (
        <div>
            <UserContext.Provider value={{data, setdata}}>
                {props.children}

            </UserContext.Provider>
            
            
        </div>
    )
}

export default Details
