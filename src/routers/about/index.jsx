import React from "react";
import './about.sass'

const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
];

function User(props) { // 函数组件只能接受props（在不是用Hook的情况下）
    return (
        <ol className="list-item">
            <div>用户姓名：{props.user.name}</div>
            <div>用户年龄：{props.user.age}</div>
            <div>用户性别：{props.user.gender === 'male' ? '男' : '女'}</div>
        </ol>
    )
}

function About() {
    return (
        <div>
            <h2>list</h2>
            <ul>{users.map( (item, i)=> <User user={item} key={i} /> )}</ul>
        </div>
    );
}

export default About
