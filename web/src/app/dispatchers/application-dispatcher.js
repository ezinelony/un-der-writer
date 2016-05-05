import {Dispatcher} from 'flux';
import assign from "object-assign";

let ApplicationDispatcher =  assign(new Dispatcher(), {

    handleViewAction: function(action) {
        this.dispatch({
            source: "VIEW_ACTION",
            action: action
        });
    },

    handleServerAction: function(action) {
        this.dispatch({
            source: "SERVER_ACTION",
            action: action
        });
    }
});

export default  ApplicationDispatcher;