import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { Table, TableHeader, TableBody } from 'material-ui/Table';
import * as botActions from '../../actions/botActions';
import { BotListHeader } from '../../components/BotListHeader';
import { BotListBody } from '../../components/BotListBody';

class BotList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: {
                name: 'Name',
                description: 'Description',
                actions: 'Actions'
            }
        };
        this.remove = this.remove.bind(this);
        this.edit = this.edit.bind(this);
    }

    render() {
        const { botList } = this.props;
        const { header } = this.state;
        return (
            <Table selectable={false}>
                <TableHeader>
                    <BotListHeader headerData={header}/>
                </TableHeader>
                <TableBody>
                    <BotListBody
                        removeButtonHandler={this.remove}
                        editButtonHandler={this.edit}
                        botList={botList}/>
                </TableBody>
            </Table>
        )
    }

    componentDidMount() {
        const { actions } = this.props;
        actions.get_bots();
    }

    remove(id) {
        const { actions } = this.props;
        actions.delete_bot(id);
    }

    edit(id) {
        const { history } = this.props;
        history.push(`/create-bot/${id}`);
    }
}


function mapStateToProps(state) {
    return {
        botList: state.bot.bots
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(botActions, dispatch)
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(BotList));