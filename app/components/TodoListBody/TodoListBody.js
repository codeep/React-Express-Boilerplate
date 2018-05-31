import React, { PureComponent } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import style from './style.css';

class TodoListBody extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { todoList, removeButtonHandler, editButtonHandler } = this.props;
        console.log(todoList)
        return (
            todoList.map((todo, i) => {
                return (
                    <TableRow key={todo._id}>
                        <TableRowColumn>{todo.name}</TableRowColumn>
                        <TableRowColumn>{todo.description}</TableRowColumn>
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
