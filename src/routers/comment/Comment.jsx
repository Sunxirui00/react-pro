import React, {Component} from 'react'
import './comment.sass'

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { item } = this.props;
        return (
            <div className="comment">
                <div className="comment-user">
                    <span>{item.name}</span>
                    :
                </div>
                <p>{item.content}</p>
            </div>
        )
    }
}

export default Comment
