import React, {Component} from 'react'
import Comment from './Comment'
import './comment.sass'

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static defaultProps = {
        comments: []
    }

    _del (i) {
        if(this.props.onDel){
            this.props.onDel(i);
        }
    }

    render() {
        const { comments } = this.props;
        return (
            <div className="comment-list">
                {comments.map((item, i)=> <Comment onDel={this._del.bind(this)} i={i} key={i} item={item} />)}
            </div>
        )
    }
}

export default CommentList
