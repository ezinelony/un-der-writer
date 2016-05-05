import ApplicationDispatcher from "./../dispatchers/application-dispatcher";
import ActionTypes from "./../constants/action-types";
import assign from "object-assign";
import callback from "./../utils/callback";
import Store from "./store";


let ApplicationStore = assign({
    getSubmission() {
        return Store.getRecords(ActionTypes.RECEIVE_SUBMISSION_BY_NO);
    },
    
    getRejectedSubmissions(){
        return Store.getRecords(ActionTypes.RECEIVE_REJECTED_SUBMISSIONS_BY);
    },
    getSubmissions(){
        return Store.getRecords(ActionTypes.RECEIVE_SUBMISSIONS);
    }
}, Store);

ApplicationStore.dispatchToken = ApplicationDispatcher.register(function(payload){
    let action = payload.action;

    switch(action.type){
        case ActionTypes.RECEIVE_SUBMISSIONS:
        case ActionTypes.RECEIVE_SUBMISSION_BY_NO:
        case ActionTypes.RECEIVE_REJECTED_SUBMISSIONS_BY:
            ApplicationStore.setStore(action.type, action.data);
            ApplicationStore.emitChange()
            break;
        default:
            return true;
    }
});

export default ApplicationStore;