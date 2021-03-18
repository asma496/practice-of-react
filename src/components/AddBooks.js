import React, { useState } from 'react'
import Books from './Books'

function AddBooks() {
    const [books, setbooks] = useState([])
    const [task, settask] = useState({title:'',id:''})

   const handlechange=  (e)=>{
       settask({title:e.target.value,id:2 })

   }

   const handlesubmit= (e)=>{
       e.preventDefault()
       setbooks([...books,task])
       e.target.firstChild.value='';

   }


    return (
        <div>
            <form onSubmit={handlesubmit}>
                <input type='text' onChange={handlechange}/>
                <button type='submit'>submit</button>
            </form>
            <Books booklist={books}/>
            
        </div>
    )
}

export default AddBooks
