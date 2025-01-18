import React, { Component } from 'react';
import TodoItems from './TodoItems';
import ProjectBreadCrumb from '../common/ProjectBreadcrumb';

class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    e.preventDefault();

    // One can Skip this IF Statement by Addding required* in Input Statement
    if (this.userInput.value !== '') {
      var newItem = {
        text: this.userInput.value,
        key: Date.now(),
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem),
        };
      });
      this.userInput.value = '';
    }
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return item.key !== key;
    });
    this.setState({ items: filteredItems });
  }

  render() {
    return (
      <div
        style={{
          background: 'skyblue',
          padding: '20px',
          height: '95vh',
          borderRadius: '15px',
        }}
        className="container mt-2"
      >
        <ProjectBreadCrumb projectName={'ToDo List App'} />
        <div className="todoListMain text-center">
          <div className="header">
            <form className="my-3" onSubmit={this.addItem}>
              <input
                className="w-50"
                ref={(a) => {
                  this.userInput = a;
                }}
                placeholder="Enter Tasks . . ."
                autoFocus
              />
              <button className="m-1" type="submit">
                {' '}
                ADD{' '}
              </button>
            </form>
          </div>
          <TodoItems
            style={{ background: 'skyblue', padding: '20px', height: '100vh' }}
            entries={this.state.items}
            delete={this.deleteItem}
          />
        </div>
      </div>
    );
  }
}

export default ToDoList;

// Addding Items 	--> ToDoList
// Displaying Items --> TodoItems.js
// Styling Items    --> TodoItems.css
// Removing Items   -->
// Animating Items  -->
