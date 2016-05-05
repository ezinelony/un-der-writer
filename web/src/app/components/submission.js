import React from "react";
import SubmissionsActions from './../actions/submission-action';
import ApplicationStore  from './../stores/application-store';

export class Submission extends React.Component {

	constructor(props){
		super(props);
		this.state = props;
	}
	
	receiveData() {
		try{
			this.setState({"record": ApplicationStore.getSubmission()});
		}catch(e){}

	}

	componentWillMount() {
		ApplicationStore.addChangeListener(this.receiveData.bind(this), true);
		SubmissionsActions.fetchSubmissionsByNo(this.props.params.submissionNumber);
	}

	componentWillUnMount() {
		ApplicationStore.removeChangeListener(this.receiveData.bind(this), true);
	}
	
	render(){
		let data = this.state.record || this.props;
		return (
			<div>
				<div> Submission No: {this.props.params.submissionNumber}</div>
				<div className={"record"}>

	                <div>
		                <span> Agent Name  : </span>
		                <span> {data.agentName || ""} </span>
	                </div>
					<div>
						<span> Agent Code  : </span>
						<span> {data.agentCode || ""} </span>
					</div>
					<div>
						<span> Insured State  : </span>
						<span> {data.insuredState || ""} </span>
					</div>
					<div>
						<span> Policy Number  : </span>
						<span> {data.policyNumber || ""} </span>
					</div>
					<div>
						<span> Quoted Count  : </span>
						<span> {data.quotedCount || ""} </span>
					</div>
					<div>
						<span> Quoted Date  : </span>
						<span> {data.quotedDate || ""} </span>
					</div>
					<div>
						<span> Submission Number  : </span>
						<span> {data.submissionNumber || ""} </span>
					</div>
					<div>
						<span> Under Writer Name  : </span>
						<span> {data.underWriterName || ""} </span>
					</div>
				</div>
			</div>
		);
	}
}