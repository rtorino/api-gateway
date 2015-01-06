'use strict';

var util = require('util');
var Rabbus = require('rabbus');
var Rabbit = require('wascally');

var ProductRequester = function(options) {
	Rabbus.Requester.call(this, Rabbit, {
		exchange: 'req-res.products-exchange',
		messageType: options.messageType
	});
};

util.inherits(ProductRequester, Rabbus.Requester);

var messageTypes = {
	create: 'req-res.api.v1.products.create',
	read: 'req-res.api.v1.products.read',
	update: 'req-res.api.v1.products.update',
	delete: 'req-res.api.v1.products.delete'
};

var requesters = {};
for (var type in messageTypes) {
	requesters[type] = new ProductRequester({
		messageType: messageTypes[type]
	});
}

module.exports = requesters;
