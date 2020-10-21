import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import {Router, Switch, Route} from 'react-router-dom';
import Jokes from './components/Jokes';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css';
import Header from './components/Header';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route exact={true} path='/' render={()=><Header ><App/></Header>}/>
            <Route path='/jokes' render={()=><Header><Jokes/></Header>} />
        </Switch>
    </Router>
    , document.getElementById('root'));


