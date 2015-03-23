/*global Router*/


Router.map(function() {
	this.route('welcome', {
		path: '/home',
		layoutTemplate: 'baseLayout'
	});

	this.route('indexPage', {
		path: '/',
		layoutTemplate: 'baseLayout'
	});

	this.route('todo', {
		path: '/todo',
		layoutTemplate: 'baseLayout'
	});

	this.route('tenantBlog', {
		path: '/tenantBlog',
		layoutTemplate: 'baseLayout'
	});

	this.route('blockChat', {
		path: '/blockChat',
		layoutTemplate: 'baseLayout'
	});
});
