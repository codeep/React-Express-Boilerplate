import React, { PureComponent } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import style from './style.css';

class BotForm extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { bot, onFormSubmit, onNameChange, onDescriptionChange } = this.props;
        return (
            <div className='create-bot-form'>
                {!bot.id && <h3>Create bot</h3>}
                {bot.id && <h3>Edit bot</h3>}
                <form onSubmit={(event) => onFormSubmit(event)}>
                    <label>
                        Name: &nbsp;
                        <TextField
                            name="name"
                            className="form-input"
                            value={bot.name}
                            onChange={(event) => onNameChange(event)}
                            required/>
                    </label>
                    <label>
                        Description: &nbsp;
                        <TextField
                            name="description"
                            value={bot.description}
                            onChange={(event) => onDescriptionChange(event)}
                            required/>
                    </label>
                    &nbsp;
                    <RaisedButton
                        label={bot.id ? 'Edit' : 'Add'}
                        primary={true}
                        type='submit'/>
                </form>
            </div>
        )
    }
}


export default BotForm;
