import React, {Component} from 'react'
import Comment from './Comment'
import './comment.sass'

const data = [
    {
        name: 'ralf0843',
        content: '呼呼哈哈哈哈'
    },
    {
        name: 'ralf0843',
        content: '打蜡拉到拉到'
    }
];

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="comment-list">
                {data.map((item, i)=> <Comment key={i} item={item} />)}
            </div>
        )
    }
}

export default CommentList
