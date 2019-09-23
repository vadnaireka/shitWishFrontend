import React from 'react';
import context from "../DataProvider";
import CommentItem from "./CommentItem";

class CommentList extends React.Component {

    componentWillMount() {
        this.context.fetchProductComments("http://localhost:8091/comments/1");
        console.log(this.context.comments)
    }

    render() {
        console.log(this.context.comments);
        return(
            <context.Consumer>
                {({comments}) => (
                    <div className="productcontainer">
                        {comments.map((comment) => (
                            <CommentItem comment={comment}/>
                        ))}
                    </div>
                )}
            </context.Consumer>
        )
    }
}

CommentList.contextType = context;
export default CommentList;