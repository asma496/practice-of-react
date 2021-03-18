import React, {useState, useEffect} from 'react'
import Axios from 'axios'

function FetchData() {
    const [product, setproduct] = useState([])
    useEffect(() => {
        Axios.get('https://api.moltin.com/v2/products?page[limit]=10&page[offset]=20').then(res => {
            console.log(res.data)
            setproduct(res.data);
         })
        
    }, [])
    return (
        <div>

            
        </div>
    )
}

export default FetchData
