import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <div 
        className="Todo card mb-3"
        onClick={this.props.onClick}
      >
        <div className="Todo card-body">
          <div className="Todo-title card-title">
            {this.props.title}
          </div>
          <div className="Todo-description card-text">
            {this.props.description}
          </div>
          <div className="Todo-date card-date">
            {this.props.date}
          </div>
        </div>
      </div>
    );
  }
}
export default Todo;