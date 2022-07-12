import React, {Component} from 'react';

class Comment extends Component {

    constructor(props) {
        super(props);
        this.item = this.props.item;
    }

    render() {
        return (
            <div>
                {this.item.id} {this.item.name}
            </div>
        );
    }
}

export default Comment;