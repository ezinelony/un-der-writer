import {default as URLS}  from "./../constants/api";
import callback from "./../utils/callback";
import $ from 'jquery';

let API = {
	CACHE_ENABLED: true,
	cache: {},
	TIME_LAPSE: 120000, /* about 2 minutes*/

	hashCode : (string) => {
		var hash = 0, i, chr, len;
		if (string.length === 0) return hash;
		/*This is actually the consistently fastest looping function in all browsers in javascript */
		for (i = 0, len = string.length; i < len; i++) {
			chr   = string.charCodeAt(i);
			hash  = ((hash << 5) - hash) + chr;
			hash |= 0; // Convert to 32bit integer
		}
		return hash;
	},

	fetchSubmissionsByUnderWriterName: (successActionCreator, failureActionCreator, data, args) =>{
		let watchers = [{success: {context: null, func: successActionCreator, args: args},
			fail: {context: null, func: failureActionCreator } }];
		API.fetch({watchers: watchers, url: URLS.UNDERWRITTEN_UNDERWRITER, data });
	},

	fetchRejectedSubmissions: (successActionCreator, failureActionCreator, data) =>{
		let watchers = [{success: {context: null, func: successActionCreator},
			fail: {context:null, func: failureActionCreator } }];
		API.fetch({watchers: watchers, url: URLS.REJECTED_SUBMISSIONS_BY, data });
	},

	fetchSubmissionByNumber: (successActionCreator, failureActionCreator, data, url) =>{
		debugger;
		let watchers = [{success: {context: null, func: successActionCreator},
			fail: {context: null,func: failureActionCreator } }];
		API.fetch({watchers: watchers, url: url || URLS.SUBMISSIONS_BY_ID });
	},

	fetch: (param) => {
		let url = URLS.API_BASE + param.url,
		data = (param.data ? (param.data.data || {}) : {}), key,
		now = new Date().getTime();

		key = API.hashCode(url + JSON.stringify(data));

		if(API.CACHE_ENABLED && API.cache[key] && (now - API.cache[key].time <= API.TIME_LAPSE) ){
			let _cachedData = API.cache[key];
			API.notifyWatchers(param.watchers, "success", _cachedData.data);
			return;
		}

		API.makeRequest(url, data, param, key);
	},

	makeRequest: (url, data, param, cacheKey, requestType)=>{
		$.ajax({
			url: url, data: data, dataType: param.dataType || "json", type: requestType || "GET" })
			.then(
			function(resp){
				if(API.CACHE_ENABLED){
					API.cache[cacheKey] = {data: resp, time: new Date().getTime()};
				}
				API.notifyWatchers(param.watchers, "success", resp);
			},
			function(error){
				API.notifyWatchers(param.watchers, "fail", error);
			}
		);
	},

	notifyWatchers : (watchers, key, resp) => {
		for(var i = 0; i < watchers.length; i++){
			if(watchers[i][key]){
				let obj = watchers[i][key], args = watchers[i][key].args || [];
				args.push(resp);
				callback(obj,args);
			}
		}
	}
};

export default API;