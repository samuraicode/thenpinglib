const request = require('request');
const querystring = require('querystring');

//ThenPing Client
function ThenPing(name) {
	if (!(this instanceof ThenPing)) {
		return new ThenPing(name);
	}

	var self = this;
	var ping_name = name;

	this.path = `https://thenping.com/ping/${ping_name}/`;
}

/**
 * Sends the specified message to your Ping.
 * Callback is optional.
 *
 *
 *
 * @param  {message}	message		message to send to your Ping
 * @param  {cb}			cb      	callback of the form: function (error, response, body)
 */
ThenPing.prototype.say = function (message, cb) {
	var msg = querystring.escape(message);
	var msgPath = `${this.path}${msg}`;
	request(msgPath, cb);
}

module.exports = ThenPing;