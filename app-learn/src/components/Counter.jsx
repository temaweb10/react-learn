import React, { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(2)
    function inc(spaqs){
        setCount(count + count)
      }
    
      function dec (){
        setCount(count - count/2)
      }


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={inc}>++</button>
            <button onClick={dec}>--</button>
        </div>
    )
}

export default Counter


