import ActionTypes  from "./../constants/action-types";
import ApplicationDispatcher from "./../dispatchers/application-dispatcher";
import API from "./../data/api";
import {default as URLS}  from "./../constants/api";

let SubmissionsActions = {

	fetchSubmissionsByUnderWriterName: (data) => {
		ApplicationDispatcher.handleViewAction({
			actionType: ActionTypes.FETCH_IN_PROGRESS,
			data: data
		});
		API.fetchSubmissionsByUnderWriterName(
			SubmissionsActions.fetchSubmissionsByUnderWriterNameLoaded,
			SubmissionsActions.submissionLoadError, {data: data});
	},


	fetchRejectedSubmissions: (data) => {
		ApplicationDispatcher.handleViewAction({
			actionType: ActionTypes.FETCH_IN_PROGRESS,
			data: data
		});
		API.fetchRejectedSubmissions(
			SubmissionsActions.fetchRejectedSubmissionsLoaded,
			SubmissionsActions.submissionLoadError, {data: data});
	},
	
	fetchSubmissionsByNo: (submissionNumber) => {
		let url = URLS.SUBMISSIONS_BY_ID+submissionNumber;
		let data = {};
		ApplicationDispatcher.handleViewAction({
			actionType: ActionTypes.FETCH_SUBMISSION_BY_NO_IN_PROGRESS,
			data: data
		});
		API.fetchSubmissionByNumber(
			SubmissionsActions.receiveSubmissionsByNo,
			SubmissionsActions.submissionLoadError, {data: data}, url);
	},

	receiveSubmissionsByNo: (data) => {
		ApplicationDispatcher.handleServerAction({
			type: ActionTypes.RECEIVE_SUBMISSION_BY_NO,
			data: data
		});
	},

	fetchSubmissionsByUnderWriterNameLoaded: (data) => {
		ApplicationDispatcher.handleServerAction({
			type: ActionTypes.RECEIVE_SUBMISSION_BY_UNDERWRITER,
			data: data
		});
	},

	fetchRejectedSubmissionsLoaded: (data) => {
		ApplicationDispatcher.handleServerAction({
			type: ActionTypes.RECEIVE_REJECTED_SUBMISSIONS_BY,
			data: data
		});
	},
	
	fetchSubmissionsByUnderWriterNameLoaded: (data) => {
		ApplicationDispatcher.handleServerAction({
			type: ActionTypes.RECEIVE_SUBMISSIONS,
			data: data
		});
	},

	submissionLoadError: (data) => {
		ApplicationDispatcher.handleServerAction({
			type: ActionTypes.SUBMISSION_LOAD_ERROR,
			data: data
		});
	}
};

export default SubmissionsActions;