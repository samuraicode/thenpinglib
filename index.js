const request = require('request');

//ThenPing Client
var ThenPing = function(name) {
	if (!(this instanceof ThenPing)) {
		return new ThenPing(name);
	}

	var self = this;
	var ping_name = name;

	this.path = `https://thenping.com/ping/${this.ping_name}/`;
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
	request(`${this.path}message`, cb);
}

exports.ThenPing;