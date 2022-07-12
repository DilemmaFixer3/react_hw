import React, {Component} from 'react';

class Post extends Component {

    constructor(props) {
        super(props);
        this.item = this.props.item;
    }

    render() {
        return (
            <div>
                {this.item.id} {this.item.title}
            </div>
        );
    }
}

export default Post;