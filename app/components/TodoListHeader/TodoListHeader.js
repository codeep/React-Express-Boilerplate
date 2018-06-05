import React, {PureComponent} from 'react';
import {TableHeaderColumn, TableRow} from 'material-ui/Table';
import style from './style.css';

class TodoListHeader extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {headerData} = this.props;
        return (
            <TableRow>
                <TableHeaderColumn>{headerData.name}</TableHeaderColumn>
                <TableHeaderColumn>{headerData.description}</TableHeaderColumn>
                <TableHeaderColumn>{headerData.deadline}</TableHeaderColumn>
                <TableHeaderColumn>{headerData.actions}</TableHeaderColumn>
            </TableRow>
        )
    }
}

export default TodoListHeader;
