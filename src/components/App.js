import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import history from '../history';
import SocialNetwork from "./socialNetwork/SocialNetwork";
import ArrayDiff from "./arrayDiff/ArrayDiff";


const App = () => {
    return (
        <div className="ui container">

            <Router history={history}>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/arraydiff" exact component={ArrayDiff} />
                        <Route path="/social" exact component={SocialNetwork} />
                    </Switch>
                </div>
            </Router>
        </div>);
};

export default App;