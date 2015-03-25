/*global Deps, Meteor, Template, Session, ChatRooms, alert */
'use strict';
Deps.autorun(function() {
	Meteor.subscribe('chatrooms');
	Meteor.subscribe('onlusers');
});


Template.blockChat.helpers({
	'onlusr': function() {
		return Meteor.users.find({
			'status.online': true,
			_id: {
				$ne: Meteor.userId()
			}
		});
	},

});

Template.blockChat.events({
	'click .user': function() {
		Session.set('currentId', this._id);
		var res = ChatRooms.findOne({
			chatIds: {
				$all: [this._id, Meteor.userId()]
			}
		});
		if (res) {
			//already room exists
			Session.set('roomid', res._id);
		} else {
			//no room exists
			var newRoom = ChatRooms.insert({
				chatIds: [this._id, Meteor.userId()],
				messages: []
			});
			Session.set('roomid', newRoom);
		}
	}

});

Template.messages.helpers({
	'msgs': function() {
		var result = ChatRooms.findOne({
			_id: Session.get('roomid')
		});

		if (result) {

			return result.messages;
		} else {
			return;
		}
	}
});

Template.input.events = {
	'keydown input#message': function(event) {
		if (event.which === 13) {
			if (Meteor.user()) {
				var name = Meteor.user().username;
				var message = document.getElementById('message');

				if (message.value !== '') {
					var de = ChatRooms.update({
						'_id': Session.get('roomid')
					}, {
						$push: {
							messages: {
								name: name,
								text: message.value,
								createdAt: Date.now()
							}
						}
					});
					document.getElementById('message').value = '';
					message.value = '';
				}
			} else {
				alert('login to chat');
			}

		}
	}
};

if (Meteor.isCordova) {

}

