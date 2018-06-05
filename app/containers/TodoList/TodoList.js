import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { Table, TableHeader, TableBody } from 'material-ui/Table';
import * as todoActions from '../../actions/todoActions';
import { TodoListHeader } from '../../components/TodoListHeader';
import { TodoListBody } from '../../components/TodoListBody';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: {
              name: 'Name',
              description: 'Description',
              deadline: 'Deadline',
              actions: 'Actions'
            }
        };
        this.remove = this.remove.bind(this);
        this.edit = this.edit.bind(this);
    }

    componentDidMount() {
        const { actions } = this.props;
        actions.get_todos();
    }

    remove(id) {
        const { actions } = this.props;
        actions.delete_todo(id);
    }

    edit(id) {
        const { history } = this.props;
        history.push(`/create-todo/${id}`);
    }


    render() {
      const { todoList } = this.props;
      const { header } = this.state;

      return (
        <Table selectable={false}>
          <TableHeader>
            <TodoListHeader headerData={header}/>
          </TableHeader>
          <TableBody>
            <TodoListBody
                removeButtonHandler={this.remove}
                editButtonHandler={this.edit}
                todoList={todoList}/>
          </TableBody>
        </Table>
      )
    }

}


function mapStateToProps(state) {
    return {
        todoList: state.todo.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(todoActions, dispatch)
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList));
