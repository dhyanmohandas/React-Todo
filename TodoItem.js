import React from 'react';
import {Component} from 'react';

class TodoItem extends Component{
    render(){
        return(
        <div>
        <input type="checkbox" checked= {this.props.item.completed}></input>
        <p>{this.props.item.text}</p>
        </div>)
    }
}
export default TodoItem;