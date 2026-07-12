"use client";

import { useState } from 'react';

const TestHook = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2 style={{paddingBottom:'0.5rem'}}>Count: {count}</h2>
            
            <button onClick={() => setCount((prev) => prev + 1)} style={{backgroundColor:'pink'}}>
                Increment
            </button>
        </div>
    );
};

export default TestHook;