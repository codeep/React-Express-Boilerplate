import React from 'react';
import IndexApp from './containers';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppContainer} from 'react-hot-loader';
import configureStore from './configureStore';

let div = document.createElement('div');
div.setAttribute('id', 'app');
document.body.appendChild(div);

const mountNode = document.getElementById('app');
const store = configureStore();

render(
    <AppContainer>
        <MuiThemeProvider>
            <Provider store={store}>
                <IndexApp/>
            </Provider>
        </MuiThemeProvider>
    </AppContainer>
    ,
    mountNode
);

if(module.hot && process.env.NODE_ENV !== 'production'){
    module.hot.accept();
}
