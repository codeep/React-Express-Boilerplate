import React, { PureComponent } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import style from './style.css';

class TodoForm extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { todo, onFormSubmit, onNameChange, onDescriptionChange } = this.props;
        return (
            <div className='create-todo-form'>
                {!todo.id && <h3>Create todo</h3>}
                {todo.id && <h3>Edit todo</h3>}
                <form onSubmit={(event) => onFormSubmit(event)}>
                    <label>
                        Name: &nbsp;
                        <TextField
                            name="name"
                            className="form-input"
                            value={todo.name}
                            onChange={(event) => onNameChange(event)}
                            required/>
                    </label>
                    <label>
                        Description: &nbsp;
                        <TextField
                            name="description"
                            value={todo.description}
                            onChange={(event) => onDescriptionChange(event)}
                            required/>
                    </label>
                    &nbsp;
                    <RaisedButton
                        label={todo.id ? 'Save' : 'Add'}
                        primary={true}
                        type='submit'/>
                </form>
            </div>
        )
    }
}


export default TodoForm;
