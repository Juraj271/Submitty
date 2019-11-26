module.exports = function(grunt){
	// Initializing configuration objects
	grunt.initConfig({

		// specifying the settings for css file minification
		cssmin : {
			minify : {
				expand : true,
				cwd : './css/',
				src : [ '*.css', '!*.min.css' ],
				dest : './css/',
				ext : '.min.css'
			}
		},

		uglify: {
			build: {
			  files: [{
				  expand: true,
				  src: [ '**/*.js', '!*.min.js' ],
	    		  dest: './js',
				  cwd: './js',
				  ext: '.min.js'
			  }]
			}
		},

		//specifying the settings for watch
		watch: {
			scripts: {
				files: './css/*.css',
				tasks: ['default'],
				options: {
					spawn:false,
					event:['all']
				},
			},
		},
	});

	// Loading the 'grunt-contrib-cssmin' package.
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify-es');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Registering css minification as a default task
	grunt.registerTask( 'default', [ 'cssmin', 'uglify' ] );
}
