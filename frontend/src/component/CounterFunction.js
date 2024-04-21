import React, { useState } from "react";

function CounterFunction(){

    let [number,setNumber]= useState(0)  
    
    function increment(){
        setNumber(++number);
    }

    return(
        <dev>   
            <h2>Functionl Component</h2> 
            <h1>Counter = {number}</h1>  
            <button onClick={e=> increment()}>Increment</button>  

        </dev>
    )
}

export default CounterFunction;