import React from 'react';
import context from "../DataProvider";
import CommentItem from "./CommentItem";
import axios from "axios";
import CommentForm from "./CommentForm";

class CommentList extends React.Component {

    state = {
        newComment: '',
        formText: '',
        author: '',
        selectedProduct: ''
    };

    onInputChange = (event) => {
        console.log(event.target.value);
        this.setState({author: event.target.value})
    };

    onAuthorChange = (event) => {
        console.log(event.target.value);
        this.setState({newComment: event.target.value})
    };


    onFormSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8091/comments/save", {
            productId: this.state.selectedProduct,
            comment: this.state.newComment,
            author: this.state.author
        })
    };

    updatelist = () => {
        this.forceUpdate()
    };

    render() {
        return (
            <div className="ui threaded comments">
                <h3 className="ui dividing header"> Comments:</h3>
                <div className="comments">
                    {this.props.comments.map((comment) => (

                        <CommentItem className="comment" comment={comment}/>

                    ))}
                </div>
                <CommentForm productid={this.props.productId} update={this.updatelist}/>
            </div>
        )


    }
}

CommentList.contextType = context;
export default CommentList;