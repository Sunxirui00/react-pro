// 主体
import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import './comment.sass'

class CommentApp extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {
        return (
            <div className="wrapper">
                {/* 评论输入 */}
                <CommentInput />
                {/* 评论列表 */}
                <CommentList />
            </div>
        )
    }
}

export default CommentApp
