import React from 'react';
import { render } from 'react-dom'
import { hashHistory, Route, Router, IndexRoute } from 'react-router';
import {App} from './app';
import {Submission} from './components/submission';
import {RejectedSubmissions} from './components/rejected-submissions';
import {AllSubmissions} from './components/all-submissions';

render((
    <Router histroy={hashHistory}>
        <Route path="/" components={App}>
            <IndexRoute component={AllSubmissions} />

        <Route path="submissions/rejected_by/:underwriter" component={RejectedSubmissions} />
            <Route path="submissions/:submissionNumber" component={Submission} />
            <Route path="all-submissions" component={AllSubmissions} />
        </Route>
    </Router>
), document.getElementById("dashboard"));
