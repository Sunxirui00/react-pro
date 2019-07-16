import React, {Component} from 'react'
import './comment.sass'

class CommentInput extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名：</span>
                    <div className="comment-field-input">
                        <input name="username" type="text"/>
                    </div>

                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容：</span>
                    <div className="comment-field-input">
                        <textarea name="content">默认内容</textarea>
                    </div>
                </div>
                <div className="comment-field-button">
                    <button>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput
