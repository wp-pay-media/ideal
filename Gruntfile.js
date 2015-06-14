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
					// PNG
					'inkscape --export-png=converted/inkscape/png/ideal-square-20pct-margin/ideal-square-20pct-margin-512x12.png --export-width=512 --export-height=512 src/ideal-square-20pct-margin/ideal-square-20pct-margin.svg',
					'inkscape --export-png=converted/inkscape/png/ideal-square-20pct-margin/ideal-square-20pct-margin-256x256.png --export-width=256 --export-height=256 src/ideal-square-20pct-margin/ideal-square-20pct-margin.svg',
					'inkscape --export-png=converted/inkscape/png/ideal-square-20pct-margin/ideal-square-20pct-margin-128x128.png --export-width=128 --export-height=128 src/ideal-square-20pct-margin/ideal-square-20pct-margin.svg',
					'inkscape --export-png=converted/inkscape/png/ideal-square-20pct-margin/ideal-square-20pct-margin-64x64.png --export-width=64 --export-height=64 src/ideal-square-20pct-margin/ideal-square-20pct-margin.svg',
					'inkscape --export-png=converted/inkscape/png/ideal-square-20pct-margin/ideal-square-20pct-margin-32x32.png --export-width=32 --export-height=32 src/ideal-square-20pct-margin/ideal-square-20pct-margin.svg',
					'inkscape --export-png=converted/inkscape/png/ideal-square-20pct-margin/ideal-square-20pct-margin-16x16.png --export-width=16 --export-height=16 src/ideal-square-20pct-margin/ideal-square-20pct-margin.svg',
					// SVG
					'inkscape --export-plain-svg=converted/inkscape/svg/ideal-square-20pct-margin/ideal-square-20pct-margin.svg src/ideal-square-20pct-margin/ideal-square-20pct-margin.svg',
					// EPS
					'inkscape --export-eps=converted/inkscape/eps/ideal-square-20pct-margin/ideal-square-20pct-margin.eps src/ideal-square-20pct-margin/ideal-square-20pct-margin.svg',
					// PDF
					'inkscape --export-pdf=converted/inkscape/pdf/ideal-square-20pct-margin/ideal-square-20pct-margin.pdf src/ideal-square-20pct-margin/ideal-square-20pct-margin.svg',

					// PNG
					'inkscape --export-png=converted/inkscape/png/ideal-square-no-margin/ideal-square-no-margin-512x12.png --export-width=512 --export-height=512 src/ideal-square-no-margin/ideal-square-no-margin.svg',
					'inkscape --export-png=converted/inkscape/png/ideal-square-no-margin/ideal-square-no-margin-256x256.png --export-width=256 --export-height=256 src/ideal-square-no-margin/ideal-square-no-margin.svg',
					'inkscape --export-png=converted/inkscape/png/ideal-square-no-margin/ideal-square-no-margin-128x128.png --export-width=128 --export-height=128 src/ideal-square-no-margin/ideal-square-no-margin.svg',
					'inkscape --export-png=converted/inkscape/png/ideal-square-no-margin/ideal-square-no-margin-64x64.png --export-width=64 --export-height=64 src/ideal-square-no-margin/ideal-square-no-margin.svg',
					'inkscape --export-png=converted/inkscape/png/ideal-square-no-margin/ideal-square-no-margin-32x32.png --export-width=32 --export-height=32 src/ideal-square-no-margin/ideal-square-no-margin.svg',
					'inkscape --export-png=converted/inkscape/png/ideal-square-no-margin/ideal-square-no-margin-16x16.png --export-width=16 --export-height=16 src/ideal-square-no-margin/ideal-square-no-margin.svg',
					// SVG
					'inkscape --export-plain-svg=converted/inkscape/svg/ideal-square-no-margin/ideal-square-no-margin.svg src/ideal-square-no-margin/ideal-square-no-margin.svg',
					// EPS
					'inkscape --export-eps=converted/inkscape/eps/ideal-square-no-margin/ideal-square-no-margin.eps src/ideal-square-no-margin/ideal-square-no-margin.svg',
					// PDF
					'inkscape --export-pdf=converted/inkscape/pdf/ideal-square-no-margin/ideal-square-no-margin.pdf src/ideal-square-no-margin/ideal-square-no-margin.svg'
				].join( '&&' )
			},

			imagemagick: {
				command: [
					'convert -background transparent -resize 512x512 src/ideal-square-20pct-margin/ideal-square-20pct-margin.svg converted/imagemagick/png/ideal-square-20pct-margin/ideal-square-20pct-margin-512x512.png',
					'convert -background transparent -resize 256x256 src/ideal-square-20pct-margin/ideal-square-20pct-margin.svg converted/imagemagick/png/ideal-square-20pct-margin/ideal-square-20pct-margin-256x256.png',
					'convert -background transparent -resize 128x128 src/ideal-square-20pct-margin/ideal-square-20pct-margin.svg converted/imagemagick/png/ideal-square-20pct-margin/ideal-square-20pct-margin-128x128.png',
					'convert -background transparent -resize 64x64 src/ideal-square-20pct-margin/ideal-square-20pct-margin.svg converted/imagemagick/png/ideal-square-20pct-margin/ideal-square-20pct-margin-64x64.png',
					'convert -background transparent -resize 32x32 src/ideal-square-20pct-margin/ideal-square-20pct-margin.svg converted/imagemagick/png/ideal-square-20pct-margin/ideal-square-20pct-margin-32x32.png',
					'convert -background transparent -resize 16x16 src/ideal-square-20pct-margin/ideal-square-20pct-margin.svg converted/imagemagick/png/ideal-square-20pct-margin/ideal-square-20pct-margin-16x16.png',

					'convert -background transparent -resize 16x16 src/ideal-square-no-margin/ideal-square-no-margin.svg converted/imagemagick/png/ideal-square-no-margin/ideal-square-no-margin-16x16.png',
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
