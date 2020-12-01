const { Console } = require('console');

module.exports = function (grunt) {
  var path = require('path');
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		replace: {
			site: {
				options: {
					patterns: [{
						match: 'href="/',
						replacement: 'href="'
					},
					{
						match: 'href=""',
						replacement: 'href="index"'
					},
					{
            match: 'src="/',
						replacement: 'src="'
					},
					{
						match: 'srcset="/',
						replacement: 'srcset="'
					},
					],
					usePrefix: false
				},
				files: [
          {
            expand: true,
            src: ['*.html'],
            dest: ''
          }
        ]
			},
		},
	});


	grunt.registerTask('default', ['replace']);

};