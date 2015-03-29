/*global Meteor, ChatRooms*/

'use strict';

Meteor.publish('chatrooms', function() {
	return ChatRooms.find({});
});
Meteor.publish('onlusers', function() {
	return Meteor.users.find({
		'status.online': true
	}, {
		username: 1
	});
});
Meteor.publish('offlineUsers', function() {
	return Meteor.users.find({
		'status.online': false
	}, {
		username: 1
	});
});


