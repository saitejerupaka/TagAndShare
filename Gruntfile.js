
module.exports = function(grunt) {

grunt.initConfig({
  watch: {
  livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '*.html',
          'app/**/*.js',
          'styles.css'
        ]
      }
  },
  connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729,
        base: {
          path: '.',
          options: {
            index: 'index.html',
            maxAge: 300000
          }
        }
      },
      livereload: {
        options: {
          open: true
        }
      },
  }

   
});
grunt.loadNpmTasks('grunt-open');
//grunt.loadNpmTasks('grunt-karma');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', [ 'connect:livereload', 'watch']);
};