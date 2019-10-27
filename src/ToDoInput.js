import React, { Component } from 'react'

export default class TodoInput extends Component {
    // 按下回车键，添加ToDo
    handleInput = (e) => {
        if (e.keyCode === 13 && e.target.value !== '') {
            this.props.add(e.target.value);
            e.target.value = '';
        }
    }

    render() {
        return (
            // 顶部整体
            <div className="section">
                {/* Logo */}
                <div className="label">ToDoList</div>
                {/* 输入框 */}
                <input onKeyDown={this.handleInput} type="text" placeholder="添加ToDo"/>
            </div>
        )
    }
}
