import React from "react";
import Book from "./Book";

// Book.jsx보다 상위 Component인 Library.jsx
// 3개의 Book Component를 렌더링하고 있음
function Library(props) {
    return (
        <div>
            <Book name="처음 만난 자바" numOfPage={300} />
            <Book name="처음 만난 자바스크립트" numOfPage={400} />
            <Book name="처음 만난 리액트" numOfPage={500} />
        </div>
    );
}

export default Library;