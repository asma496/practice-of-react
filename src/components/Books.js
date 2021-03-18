import React from 'react'

function Books({booklist}) {
    return (
        <>
       
            {
                booklist.map((item)=>(
                    <ul>
                    <li key={item.id}>{item.title}</li>
                    </ul>
                ))
            }
            
        </>
    )
}

export default Books
