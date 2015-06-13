module.exports = function( grunt ) {
	// Init
	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' ),

		'imagemagick-convert': {
			dev: {
				args: [ 'src/ideal/ideal.svg', '-resize', '25x25', 'images/ideal/ideal-25x-25.png' ]
			}
		},

		svg_modify: {
			your_target: {
				cwd: '',
	            src: 'src/ideal/',
	            dest: 'images/'
	        }
	    }
	} );

	// Load
	grunt.loadNpmTasks( 'grunt-imagemagick' );
	grunt.loadNpmTasks( 'grunt-shell' );
	grunt.loadNpmTasks( 'grunt-svg-modify' );

	// Tasks
	grunt.registerTask( 'default', [ 'imagemagick-convert' ] );
};
