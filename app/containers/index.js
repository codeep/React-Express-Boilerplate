import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import { Home } from './Home';
import { BotManage } from './BotManage';
import style from './style.css';


class AppIndex extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className='app-page-title'>Bot Manager</h1>
            <Router>
                    <Switch>
                        <Route exact path={'/'} component={Home}/>
                        <Route exact path={'/create-bot'} component={BotManage}/>
                        <Route exact path={'/create-bot/:id'} component={BotManage}/>
                    </Switch>
            </Router>
            </div>
        )
    }
}

export default AppIndex;