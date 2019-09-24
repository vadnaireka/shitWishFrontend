import React from 'react';
import context from "../DataProvider";
import faker from "faker";

const CommentItem = ({comment}) => {

        return (
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {comment.author}
                    </a>
                    <div className="metadata">
                        <span className="date">
                            {faker.date.weekday()}
                        </span>
                    </div>
                    <div className="text">
                        {comment.comment}
                    </div>
                    <div className="actions">
                        <a className="reply">Reply</a>
                    </div>

                </div>
            </div>
        );



}

export default CommentItem;