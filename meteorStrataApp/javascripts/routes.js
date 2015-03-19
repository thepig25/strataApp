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
		layoutTemplate: ''
	});

	this.route('tenantBlog', {
		path: '/tenantBlog',
		layoutTemplate: 'baseLayout'
	});
});
