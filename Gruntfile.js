/**
 *
 * Run 'grunt' to generate JS and CSS in folder 'dist'
 * *
 * Run 'grunt watch' to automatically regenerate
 *
 */

module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({

    clean: {
      files: ['dist']
    },


    sass: {
      dist: {
        files: {
          'dist/rateit.css': 'src/css/rateit.scss',
        }
      }
    },


    autoprefixer: {
      options: {
        browsers: [ '> 1%', 'last 3 versions' ]
      },
      files: {
        src: ['dist/rateit.css', 'dist/rateit.css']
      }
    },


    copy: {
      assets: {
        files: [
          { src: 'src/js/jquery.rateit.js', dest: 'dist/jquery.rateit.js' },
          { src: ['*.png'], dest: 'dist/assets/', expand: true, cwd: 'src/assets/' },
        ]
      }
    },


    uglify: {
      my_target: {
        files: {
          'dist/jquery.rateit.min.js': ['dist/jquery.rateit.js'],
        },
      },
      options: {
        preserveComments: 'some'
      }
    },


    cssmin: {
      compress: {
        files: {
          'dist/rateit.min.css': [ 'dist/rateit.css' ]
        }
      }
    },
  });


  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task.
  grunt.registerTask('default', ['clean', 'copy', 'sass', 'autoprefixer', 'cssmin', 'uglify' ]);
};
