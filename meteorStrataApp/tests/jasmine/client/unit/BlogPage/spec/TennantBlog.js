/*global expect, spyOn, BlogPosts, BlogPostService*/
describe('BlogPostService', function() {
	describe('blogPosts', function() {
		it('It should return a collection of Blog Posts', function() {
			var result = {};
			spyOn(BlogPosts, 'find').and.returnValue(result);

			expect(BlogPostService.blogPosts()).toBe(result);
		});
	});

	describe('postCount', function() {
		it('should return the number of blog posts', function() {
			var cursor = {
				count: function() {
					return 3;
				}
			};
			spyOn(BlogPosts, 'find').and.returnValue(cursor);
			expect(BlogPostService.postCount()).toBe(3);
		});
	});


});
