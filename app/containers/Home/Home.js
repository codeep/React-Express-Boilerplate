import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { AddButton } from '../../components/AddButton';
import { TodoList } from '../TodoList';

class Home extends Component {

  addTodo = () => {
    const { history } = this.props;
    history.push('/create-todo')
  }

  render() {
    return (
      <div>
        <TodoList />
        <AddButton addButtonHandler={this.addTodo} />
      </div>
    )
  }
}

export default withRouter(Home);
