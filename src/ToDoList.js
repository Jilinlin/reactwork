import React, { Component } from 'react'
// 引入输入框组件
import ToDoInput from './ToDoInput'
// 引入输出框组件
import ToDoing from './ToDoing'
import './ToDoList.css';

export default class Todolist extends Component {
    
    constructor() {
        super();//将父类的this传递给子类
        let todo = JSON.parse(localStorage.getItem('todo'));
        if (todo === null) {
            this.state = {
                todoList: []
            }
        } else {
            this.state = {
                todoList: todo
            }
        }
    }
    // 增加元素
    addItem = (data) => {
        let todo = {"title": data, "done": false}
        this.setState({
            todoList: [...this.state.todoList, todo]
        })
    }
    // 改变元素
    changeItem = (index) => {
        let todoList = [...this.state.todoList];
        todoList[index].done = !todoList[index].done;
        this.setState({
            todoList: todoList
        })
    }
    // 删除元素
    delItem = (index) => {
        let todoList = [...this.state.todoList];
        todoList.splice(index, 1);
        this.setState({
            todoList: todoList
        });
    }

    render() {
        // 更新localStorage
        localStorage.setItem('todo', JSON.stringify(this.state.todoList));
        let doing = 0;
        let done = 0;

        // 获取正在进行和已完成的数量
        this.state.todoList.forEach((item) => {
            if (item.done === false) {
                doing++;
            } else {
                done++;
            }
        });

        return (
            <div>
                <div className="header">
                    <ToDoInput add={this.addItem}/>
                </div>
                <div className="section">
                    <ToDoing change={this.changeItem} del={this.delItem} todoList={this.state.todoList} doing={doing} done={done}/>
                </div>
            </div>
        )
    }
}

