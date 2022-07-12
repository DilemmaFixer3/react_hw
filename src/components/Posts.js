import React, {Component} from 'react';

import {PostsApiService} from "../services/posts.api.service";
import Post from "./Post";

class Posts extends Component {

    state = {posts:[]};

    componentDidMount() {
        this.postsApiService = new PostsApiService();
        this.postsApiService.getPosts().then(value => this.setState({posts:value}));
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map(value => <Post key={value.id} item={value}/>)
                }
            </div>
        );
    }
}

export default Posts;