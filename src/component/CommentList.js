import React from 'react';
import context from "../DataProvider";
import CommentItem from "./CommentItem";
import axios from "axios";

class CommentList extends React.Component {

    state = {
        newComment : '',
        formText : '',
        author : '',
        selectedProduct : ''
    };

    onInputChange = (event) => {
        console.log(event.target.value);
        this.setState({author : event.target.value})
    };

    onAuthorChange = (event) => {
        console.log(event.target.value);
        this.setState({newComment : event.target.value})
    };

    // componentWillMount() {
    //     this.context.fetchProductComments("http://localhost:8091/comments/1");
    //     this.setState({selectedProduct : 1});
    //     console.log(this.context.comments)
    // }

    onFormSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8091/comments/save", {
            productId : this.state.selectedProduct,
            comment : this.state.newComment,
            author : this.state.author
        })
    };


    render() {
        return(
              <div className="ui threaded comments">
                    <h3 className="ui dividing header"> Comments:</h3>
                    <div className="comments">
                        {this.props.comments.map((comment) => (

                            <CommentItem className="comment" comment={comment}/>

                        ))}
                    </div>
                        <form className="ui reply form">
                            <div className="field" >
                                Who are you?
                                <input type="text"
                                       value={this.state.author}
                                       onChange={this.onInputChange} />
                               What's on your mind?
                                <input type="text"
                                       value={this.state.newComment}
                                       onChange={this.onAuthorChange} />
                            </div>
                            <button onClick={this.onFormSubmit}>Add</button>
                        </form>
                    </div>
        )


    }
}

CommentList.contextType = context;
export default CommentList;