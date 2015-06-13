module.exports = function( grunt ) {
	// Init
	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' ),

		// ImageMagick Convert
		'imagemagick-convert': {
			dev: {
				args: [ 'src/ideal/ideal.svg', '-resize', '25x25', 'images/ideal/ideal-25x-25.png' ]
			}
		},

		// Rasterize
		rasterize: {
			your_target: {
				vector: 'src/ideal/ideal.svg',
				raster: [
					{ path: './rasterize/ideal/ideal-64x64.png', width: 64 },
					{ path: './rasterize/ideal/ideal-32x32.png', width: 32 },
					{ path: './rasterize/ideal/ideal-16x16.png', width: 16 },
					{ path: './rasterize/ideal/ideal.png' }
				]
			},
		},

		// Shell
		shell: {
			dirListing: {
				command: [
					'svgexport src/ideal/ideal.svg svgexport/ideal-128.png 128:',
					'svgexport src/ideal/ideal.svg svgexport/ideal-512.png 512:512'
				].join( '&&' )
			}
		},

		// SVG Modifu
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
	grunt.loadNpmTasks( 'grunt-rasterize' );
	grunt.loadNpmTasks( 'grunt-shell' );
	grunt.loadNpmTasks( 'grunt-svg-modify' );

	// Tasks
	grunt.registerTask( 'default', [ 'imagemagick-convert' ] );
};
