import React, {Component} from 'react';

import {CommentsApiService} from "../services/comments.api.service";
import Comment from "./Comment";


class Comments extends Component {

    state = {comments:[]};

    componentDidMount() {
        this.commentsApiService = new CommentsApiService();
        this.commentsApiService.getComments().then(value => this.setState({comments:value}));
    }

    render() {
        return (
            <div>
                {
                    this.state.comments.map(value => <Comment key={value.id} item={value}/>)
                }
            </div>
        );
    }
}

export default Comments;