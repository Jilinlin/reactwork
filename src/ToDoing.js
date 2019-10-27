import React, { Component } from 'react'

export default class ToDoing extends Component {
    render() {
        var { todoList } = this.props;
        return (
            <div>
                {/* 正在进行 */}
                <h2>正在进行<span>{this.props.doing}</span></h2>

                <ol id="doing">
                {
                    todoList.map((item, index) => {
                        if (item.done === false) {
                            return (
                                <li key={index}>
                                    <input type="checkbox" onClick={()=>this.props.change(index)}/>
                                    <p>{item.title}</p>
                                    <a onClick={()=>this.props.del(index)}>-</a>
                                </li>
                            )
                        }
                        return '';
                    })
                }
                </ol>

                {/* 已经完成 */}
                <h2>已经完成<span>{this.props.done}</span></h2>

                <ul id="done">
                {
                    todoList.map((item, index) => {
                        if (item.done === true) {
                            return (
                                <li key={index}>
                                    <input type="checkbox" onClick={()=>this.props.change(index)} checked="checked" readOnly/>
                                    <p>{item.title}</p>
                                    <a onClick={()=>this.props.del(index)}>-</a>
                                </li>
                            )
                        }
                        return '';
                    })
                } 
                </ul>

            </div>
        )
    }
}
