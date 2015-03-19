/*global Meteor, Template, BlogPosts, BlogPostService*/

BlogPosts = new Mongo.Collection('blogPosts');


/**
 * Separate player logic into an own service singleton for better testability and reusability.
 * @type {{}}
 */
BlogPostService = {
	blogPosts: function() {
		return BlogPosts.find({});
	},
	postCount: function() {
		return BlogPosts.find().count();
	}
};

if (Meteor.isClient) {
	// This code only runs on the client
	Meteor.subscribe('blogPosts');

	Template.tenantBlog.helpers({
		blogPosts: function() {
			return BlogPostService.blogPosts();
		},
		postCount: function() {
			return BlogPostService.postCount();
		}

	});

	Template.tenantBlog.events({
		'submit .newBlogPostForm': function(event) {
			// This function is called when the new task form is submitted

			var text = event.target.text.value;

			Meteor.call('addPost', text);

			// Clear form
			event.target.text.value = '';

			// Prevent default form submit
			return false;
		}
	});

	Template.post.events({
		'click .delete': function() {
			Meteor.call('deletePost', this._id);
		}
	});


	Template.post.helpers({
		isOwner: function() {
			return this.owner === Meteor.userId();
		}
	});

}

Meteor.methods({
	addPost: function(text) {
		// Make sure the user is logged in before inserting a task
		if (!Meteor.userId()) {
			throw new Meteor.Error('not-authorized');
		}

		BlogPosts.insert({
			text: text,
			createdAt: new Date(),
			owner: Meteor.userId(),
			username: Meteor.user().username
		});
	},

	deletePost: function(postId) {

		var post = BlogPosts.findOne(postId);
		if ((post.private && post.owner !== Meteor.userId()) || post.owner !== Meteor.userId()) {
			// If the task is private, make sure only the owner can delete it
			throw new Meteor.Error('not-authorized');
		} else {
			BlogPosts.remove(postId);
		}

	}

});


if (Meteor.isServer) {
	Meteor.publish('blogPosts', function() {
		return BlogPosts.find({});
	});
}
