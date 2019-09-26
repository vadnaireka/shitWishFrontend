import React from 'react';
import context from "../DataProvider";
import faker from "faker";
import axios from "axios";
import CommentItem from "./CommentItem";

class CommentForm extends React.Component {

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
        console.log("submit====="+this.state.newComment);
        axios.post("http://localhost:8762/product/product/savecomment", {
            productId: this.props.productid,
            comment: this.state.newComment,
            author: this.state.author
        }).then(this.context.fetchProductDetail("http://localhost:8762/product/product/"+this.props.productid));
        this.setState({newComment: ""});
        this.setState({author: ""});
        this.props.update();
    };


    render() {
        return (
            <div>
                <form className="ui reply form">
                    <div className="field">
                        Who are you?
                        <input type="text"
                               value={this.state.author}
                               onChange={this.onInputChange}/>
                        What's on your mind?
                        <input type="text"
                               value={this.state.newComment}
                               onChange={this.onAuthorChange}/>
                    </div>
                    <button onClick={this.onFormSubmit}>Add</button>
                </form>
            </div>
        )


    }
}

CommentForm.contextType = context;
export default CommentForm;