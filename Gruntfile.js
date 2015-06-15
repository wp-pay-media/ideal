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
		},

		// Image Matrix
		imagematrix: {
			options: {
				types: [
					'png',
					'pdf',
					'eps'
				],
				sizes: [
					{ width: 512, height: 512 },
					{ width: 256, height: 256 },
					{ width: 128, height: 128 },
					{ width: 64,  height: 64 },
					{ width: 32,  height: 32 },
					{ width: 16,  height: 16 }
				]
			},
			idealSquareNoMargin: {
				src: 'src/ideal-square-no-margin/ideal-square-no-margin.svg',
				dest: 'converted/inkscape/{%= type %}/ideal-square-no-margin/ideal-square-no-margin-{%= width %}x{%= height %}.{%= type %}'
			},
			idealSquare20pctMargin: {
				src: 'src/ideal-square-20pct-margin/ideal-square-20pct-margin.svg',
				dest: 'converted/inkscape/{%= type %}/ideal-square-20pct-margin/ideal-square-20pct-margin-{%= width %}x{%= height %}.{%= type %}'
			}
		}
	} );

	// Image Matrix
	var chalk = require( 'chalk' );

	grunt.registerMultiTask( 'imagematrix', 'Create images in different formats and sizes', function() {
		var done = this.async();

		var options = this.options( {
			types: [],
			sizes: []
		} );

		var data = this.data;

		grunt.template.addDelimiters( 'imagematrix', '{%', '%}' );

		var matrix = [];

		var scalableTypes = [ 'eps', 'pdf' ];

		options.types.forEach( function( type ) {
			if ( scalableTypes.indexOf( type ) < 0 ) {
				options.sizes.forEach( function( size ) {
					matrix.push( {
						type: type,
						width: size.width,
						height: size.height
					} );
				} );
			} else {
				matrix.push( {
					type: type,
					width: 100,
					height: 100
				} );
			}
		} );

		// @see http://stackoverflow.com/a/16641954
		function loop( item ) {
			var filename = grunt.template.process( data.dest, {
				delimiters: 'imagematrix',
				data: item
			} );

			var inkscapeArgs = [];

			inkscapeArgs.push( '--export-' + item.type );
			inkscapeArgs.push( filename );
			inkscapeArgs.push( '--export-width' );
			inkscapeArgs.push( item.width );
			inkscapeArgs.push( '--export-height' );
			inkscapeArgs.push( item.height );
			inkscapeArgs.push( data.src );

			grunt.util.spawn( {
				cmd: 'inkscape',
				args: inkscapeArgs,
				opts: {
					stdio: 'inherit'
				}
			}, function() {
				grunt.log.writeln( chalk.green('✔ ') + filename );

				matrix.length ? loop( matrix.shift() ) : done();	
			} );
		}

		loop( matrix.shift() );
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
