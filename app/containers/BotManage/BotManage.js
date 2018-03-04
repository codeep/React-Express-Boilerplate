import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as botActions from '../../actions/botActions';
import { BotForm } from '../../components/BotForm';

class BotManage extends Component {
    constructor(props) {
        super(props);
        this.addBot = this.addBot.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
    }

    componentDidMount() {
        const {match, actions} = this.props;
        const {id} = match.params;
        if (id) {
            actions.get_bot_by_id(id);
        } else {
            actions.clear_bot_data();
        }
    }

    changeName(event) {
        const { actions } = this.props;
        actions.change_bot_name(event.target.value);
    }

    changeDescription(event) {
        const { actions } = this.props;
        actions.change_bot_description(event.target.value);
    }

    addBot(event) {
        const {actions, history, bot} = this.props;
        const {name, description, id} = bot;

        event.preventDefault();
        bot.id
        ? actions.edit_bot(name, description, id)
        : actions.create_bot(name, description, id);
        history.push('/');
    }

    render() {
        const {bot} = this.props;
        return (
            <BotForm
                bot={bot}
                onFormSubmit={this.addBot}
                onNameChange={this.changeName}
                onDescriptionChange={this.changeDescription}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        bot: state.bot
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
)(BotManage));