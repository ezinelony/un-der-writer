import React from "react";
import SubmissionsActions from './../actions/submission-action';
import ApplicationStore  from './../stores/application-store';
import {Submissions}  from './submissions';

export class AllSubmissions extends Submissions {

	constructor(props){
		super(props);
	}
	
	receiveData() {
		try{
		this.setState({"records": ApplicationStore.getSubmissions()});
	}catch(e){

		}
	}

	componentWillMount() {
		ApplicationStore.addChangeListener(this.receiveData.bind(this), true);
		SubmissionsActions.fetchSubmissionsByUnderWriterName({});
	}

	componentWillUnMount() {
		ApplicationStore.removeChangeListener(this.receiveData.bind(this), true);
	}

	render(){
		return super.render();
	}
};