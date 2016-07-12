module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'src/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    uglify: {
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'dist/js/<%= pkg.name %>.min.js'
      },
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      }
    },
    copy: {
      build: {
        files: [
          {expand: true, src: ['src/_lib/angular/angular.min*'], flatten: true, dest: 'dist/js/'},
          {expand: true, src: ['src/_lib/bootstrap/dist/css/bootstrap.min.css*'], flatten: true, dest: 'dist/css/'},
          {expand: true, src: ['src/*.html'], dest: 'dist/', flatten: true,filter: 'isFile'},
          {expand: true, src: ['src/*.css'], dest: 'dist/css/', flatten: true,filter: 'isFile'},
        ]
      },
      options: {},
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'uglify', 'copy']);

};