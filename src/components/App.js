// create your App component here
import React, { useState, useEffect } from "react";
import { data } from "../mocks/data";



function App(){

    const[image, setImage]=useState([])
    const[loaded,setLoaded]=useState(false)
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
            
            .then((response)=> response.json ())
            .then((data)=>{
                
                setImage(data.message);
                setLoaded(true);
            
        })
    },[]);

    if(!loaded) return <p>Loading ......</p>
    return(
        <img src={data.message} alt="A Random Dog"/>
    )
    
}
export default App;