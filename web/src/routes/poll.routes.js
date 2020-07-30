import React from 'react';
import { Route, Switch } from 'react-router-dom';

//import ActorEdit from '../pages/actor/edit';
import PollBrowser from '../pages/poll-browser';

export default function PollRouter() {

    return (
        <Switch>
            <Route exact path="/poll" component={PollBrowser} />
        </Switch>
    );

}
/*
<Route path="/actor/new" component={ActorEdit}/>
<Route path="/actor/:_id" component={ActorEdit}/>
*/