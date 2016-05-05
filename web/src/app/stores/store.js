import ApplicationDispatcher from "./../dispatchers/application-dispatcher";
import ActionTypes from "./../constants/action-types";
import assign from "object-assign";
import callback from "./../utils/callback";

import {CHANGE_EVENT, ERROR_EVENT}  from "./../constants/event-types";
import {EventEmitter} from "events";


let _store = {
    records: {},
    errors: {},
    counts: {}
};


let Store = assign({}, EventEmitter.prototype, {
    emitChange: function(event) {
        this.emit(event || CHANGE_EVENT);
    },

    emitError: function() {
        this.emit(ERROR_EVENT);
    },

    attachListener: function(event, cb, everyTime){
        let when = everyTime ? this.on : this.once;
        when.apply(this, [event, cb]);
    },

    addChangeListener: function(cb, everyTime){
        this.attachListener(CHANGE_EVENT, cb, everyTime);
        this.attachListener(ERROR_EVENT, cb, everyTime);
    },

    removeChangeListener: function(cb){
        this.removeListener(CHANGE_EVENT, cb);
        this.removeListener(ERROR_EVENT, cb);
    },

    getRecords: function(type){
        return _store.records[type];
    },

    getErrors: function(type){

        return _store.errors[type];
    },

    setStore: function(type, data){
        _store.records[type] = data;
    }
});

export default Store;