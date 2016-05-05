import React from "react";
import SubmissionsActions from './../actions/submission-action';
import ApplicationStore  from './../stores/application-store';
import {Submissions}  from './submissions';

export class RejectedSubmissions extends Submissions {

	constructor(props){
		super(props);
	}
	
	receiveData() {
		try{
			this.setState({"records": ApplicationStore.getRejectedSubmissions()});
		}catch(e){

		}
	}

	componentWillMount() {
		ApplicationStore.addChangeListener(this.receiveData.bind(this), true);
		SubmissionsActions.fetchRejectedSubmissions({});
	}

	componentWillUnMount() {
		ApplicationStore.removeChangeListener(this.receiveData.bind(this), true);
	}

	render(){
		return super.render();
	}
};