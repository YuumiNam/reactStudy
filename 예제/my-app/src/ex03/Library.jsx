import React from "react";
import Book from "./Book";

function Library(props) {
    return(
        <div>
            <Book name="처음 만난 자바" numOfPage={300} />
            <Book name="처음 만난 자바스크립트" numOfPage={400} />
            <Book name="처음 만난 리액트" numOfPage={500} />
        </div>
    );
}

export default Library