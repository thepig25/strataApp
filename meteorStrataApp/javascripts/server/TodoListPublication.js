/*global Meteor, Tasks*/

'use strict';


Meteor.publish('tasks', function() {
	return Tasks.find({
		$or: [{
			private: {
				$ne: true
			}
		}, {
			owner: this.userId
		}]
	});
});