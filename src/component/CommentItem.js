import React from 'react';
import context from "../DataProvider";
import CommentList from "./CommentList";

class CommentItem extends React.Component {


    render() {
        return (
            <div>
                CommentItem
            </div>
        );
    }


}

CommentItem.contextType = context;
export default CommentItem;