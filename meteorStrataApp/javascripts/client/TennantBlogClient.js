/*global Meteor, Template, BlogPosts, BlogPostService*/
/*jshint -W020 */
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



