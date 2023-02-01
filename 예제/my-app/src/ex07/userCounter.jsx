import React, {useState } from "react";

function useCounter() {
    return "";
}

export default useCounter;



import {useState } from "react";

function ParentComponent(props) {
    const [count, setCount] = useState(0);

    // const handClick = (event) => {
    //     // 클릭 이벤트 처리
    // };

    const handClick = useCallback((event) => {
        // 클릭 이벤트 처리
    }, []);

    return (
        <div>
            <button onClick={() => {
                setCount(count + 1);
            }}>
                {count }
            </button>

            <ChildComponent handClick={handClick } />
        </div>
    );
}