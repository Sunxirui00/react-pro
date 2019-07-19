import React, {Component} from 'react'
import './comment.sass'

class CommentInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            content: ''
        };
    }

    handleUsernameChange (event) {
        this.setState({
            name: event.target.value
        })
        window.localStorage.setItem('name', event.target.value)
    }

    handleContentChange (event) {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit () {
        if(this.props.onSubmit){
            const date = +new Date();
            const { name, content } = this.state;
            this.props.onSubmit({ name, content, date})
        }
        this.setState({ content: '' })
    }

    componentDidMount () {
        this.input.focus();
        if(window.localStorage.getItem('name')){
            this.setState({
                name: window.localStorage.getItem('name')
            })
        }
    }

    render() {
        const name = this.state.name;
        const content = this.state.content;
        return (
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名：</span>
                    <div className="comment-field-input">
                        <input onChange={this.handleUsernameChange.bind(this)}
                               value={name}
                               name="username"
                               type="text"/>
                    </div>

                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容：</span>
                    <div className="comment-field-input">
                        <textarea name="content"
                                  ref={(input)=>{this.input = input}}
                                  onChange={this.handleContentChange.bind(this)}
                                  value={content}></textarea>
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput
