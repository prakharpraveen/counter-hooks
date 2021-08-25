import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(10);

    const increaseCount = () => {
        setCount(currentValue => currentValue + 1);
    }

    const decreaseCount = () => {
        setCount(currentValue => currentValue - 1);
    }

    useEffect(() => {
        console.log("COUNT IN USE_EFFECT", count);
    }, [count])

    return (
        <div className="Counter">
            <h1>Initial Value Of Counter is : 10 </h1>
            <button style={{ margin: "10px" }} onClick={decreaseCount}> - </button>
            <b style={{ fontSze: "large" }}> Counter: {count}</b>
            <button style={{ margin: "10px" }} onClick={increaseCount}> + </button>
        </div>
    )
}

export default Counter;