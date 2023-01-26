import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "유미",
        comment: "안녕하세요, 유미입니다",
    },
    {
        name: "둘리",
        comment: "안녕하세요, 둘리입니다",
    },
    {
        name: "짱구",
        comment: "안녕하세요, 짱구입니다",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;