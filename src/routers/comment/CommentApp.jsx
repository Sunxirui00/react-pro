// 主体
import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import './comment.sass'

class CommentApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
    }

    componentDidMount () {
        this._loadComments();

    }

    _del (i) {
        this.state.comments.splice(i, 1)
        this.setState({
            comments: this.state.comments
        })
        this._saveComments(this.state.comments)
    }

    _loadComments () {
        let comments = window.localStorage.getItem('comments')
        if(comments){
            this.setState({
                comments: JSON.parse(comments)
            })
        }
    }

    _saveComments (comments) {
        window.localStorage.setItem('comments', JSON.stringify(comments))
    }

    handleSaveSubmit (comment) {
        if (!comment) return
        if (!comment.name) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        this.state.comments.push(comment);
        this.setState({
            comments: this.state.comments
        });
        this._saveComments(this.state.comments)
    }

    render () {
        return (
            <div className="wrapper">
                {/* 评论输入 */}
                <CommentInput onSubmit={this.handleSaveSubmit.bind(this)} />
                {/* 评论列表 */}
                <CommentList onDel={this._del.bind(this)} comments={this.state.comments}/>
            </div>
        )
    }
}

export default CommentApp
