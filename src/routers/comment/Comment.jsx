import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './comment.sass'

class Comment extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired, // 介个props是个对象而且是必须的
        onDel: PropTypes.func.isRequired,
        i: PropTypes.number.isRequired
    };

    constructor(props) {
        super(props);
        this.state = { timeString: '' };
    }

    componentWillMount () {
        this._updateTimeString();
        this._clock();
    }

    componentWillUnmount () {
        // 清除刷新时间的定时器
        clearInterval(this.clock)
    }

    _clock () {
        // 创建一个刷新时间的定时器
        this.clock = setInterval(()=>{
            this._updateTimeString();
        }, 60000)
    }

    _updateTimeString () {
        const comment = this.props.item;
        const duration = ( +Date.now() - comment.date ) / 1000;
        let timeString = (() => {
            if(duration < 1){
                return '刚刚'
            }
            if(duration < 60){
                return `${Math.round(duration)} 秒前`
            }
            if(60 < duration < 3600){
                return `${Math.round(duration / 60)} 分钟前`
            }
            if(3600 < duration ){
                return `${Math.round(duration / 3600)} 小时前`
            }
        })();
        console.log(timeString, duration);
        this.setState({ timeString })
    }

    _getProcessedContent (content) {
        return content
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")
            .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    }

    handleDel (i) {
        if(this.props.onDel){
            this.props.onDel(i);
        }
    }

    render() {
        console.log(this.props)
        const { item, i } = this.props;
        return (
            <div className="comment">
                <div className="comment-user">
                    <span>{item.name}</span>
                    :
                </div>
                <p dangerouslySetInnerHTML={{
                    __html: this._getProcessedContent(item.content)
                }} />
                <span className="comment-createdtime">{this.state.timeString}</span>
                <span className="comment-delete"
                      onClick={this.handleDel.bind(this, i)}>删除</span>
            </div>
        )
    }
}

export default Comment
