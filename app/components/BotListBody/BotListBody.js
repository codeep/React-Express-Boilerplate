import React, { PureComponent } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import style from './style.css';

class BotListBody extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { botList, removeButtonHandler, editButtonHandler } = this.props;

        return (
            botList.map((bot, i) => {
                return (
                    <TableRow key={bot._id}>
                        <TableRowColumn>{bot.name}</TableRowColumn>
                        <TableRowColumn>{bot.description}</TableRowColumn>
                        <TableRowColumn>
                            <RaisedButton
                                label="Edit"
                                primary={true}
                                type='submit'
                                onClick={() => editButtonHandler(bot._id)}
                            /> &nbsp;
                            <RaisedButton
                                label="Delete"
                                secondary={true}
                                type='submit'
                                onClick={() => removeButtonHandler(bot._id)}
                            />
                        </TableRowColumn>
                    </TableRow>
                )
            })
        )

    }
}

export default BotListBody;