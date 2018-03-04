import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { AddButton } from '../../components/AddButton';
import { BotList } from '../BotList';

class Home extends Component {
    constructor(props) {
        super(props);
        this.addBot = this.addBot.bind(this);
    }

    addBot() {
        const { history } = this.props;
        history.push('/create-bot')
    }

    render() {
        return (
            <div>
                <BotList />
                <AddButton addButtonHandler={this.addBot} />
            </div>
        )
    }
}

export default withRouter(Home);