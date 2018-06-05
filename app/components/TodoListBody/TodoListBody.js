import React, { PureComponent } from 'react';
import moment from 'moment';
import RaisedButton from 'material-ui/RaisedButton';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import style from './style.css';

class TodoListBody extends PureComponent {
  render() {
    const { todoList, removeButtonHandler, editButtonHandler } = this.props;

    return (
        todoList.map((todo, i) => {
            return (
                <TableRow key={todo._id}>
                    <TableRowColumn>{todo.name}</TableRowColumn>
                    <TableRowColumn>{todo.description}</TableRowColumn>
                    <TableRowColumn>
                      {moment(todo.deadline).isValid() ? moment(todo.deadline).format("HH:mm") : "N/A"}
                    </TableRowColumn>
                    <TableRowColumn>
                        <RaisedButton
                            label="Edit"
                            primary={true}
                            type='submit'
                            onClick={() => editButtonHandler(todo._id)}
                        /> &nbsp;
                        <RaisedButton
                            label="Delete"
                            secondary={true}
                            type='submit'
                            onClick={() => removeButtonHandler(todo._id)}
                        />
                    </TableRowColumn>
                </TableRow>
            )
        })
    )
  }
}

export default TodoListBody;
