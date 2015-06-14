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
			svgexport: {
				command: [
					'svgexport svgexport.json'
				].join( '&&' )
			},

			inkscape: {
				command: [
					'inkscape --export-png=converted/inkscape/png/ideal-square-20pct-margin/ideal-square-20pct-margin-256x256.png --export-width=256 --export-height=256 src/ideal-square-20pct-margin/ideal-square-20pct-margin.svg',
					'inkscape --export-png=converted/inkscape/png/ideal-square-20pct-margin/ideal-square-20pct-margin-128x128.png --export-width=128 --export-height=128 src/ideal-square-20pct-margin/ideal-square-20pct-margin.svg',
				].join( '&&' )
			},

			imagemagick: {
				command: [
					'convert -background transparent -resize 256x256 src/ideal-square-20pct-margin/ideal-square-20pct-margin.svg converted/imagemagick/png/ideal-square-20pct-margin/ideal-square-20pct-margin-256x256.png'
				].join( '&&' )
			}
		},

		// Image Minify
		imagemin: {
			dynamic: {
				files: [ {
					expand: true,
					cwd: 'converted/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'minified/'
				} ]
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
	grunt.loadNpmTasks( 'grunt-contrib-imagemin' );
	grunt.loadNpmTasks( 'grunt-imagemagick' );
	grunt.loadNpmTasks( 'grunt-rasterize' );
	grunt.loadNpmTasks( 'grunt-shell' );
	grunt.loadNpmTasks( 'grunt-svg-modify' );

	// Tasks
	grunt.registerTask( 'default', [ 'shell', 'imagemin' ] );
};
