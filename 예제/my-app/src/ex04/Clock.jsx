import React from "react";

function Clock(props) {
    return (
        <div>
            <h1>Hello, React!</h1>
            <h2>íėŽėę°: {new Date().toLocaleTimeString() }</h2>
        </div>
    );
}

export default Clock;