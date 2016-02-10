module.exports = function(grunt){

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'public/js/*.js', 'test/*.js']
    },

    jasmine: {
      src: 'public/js/*.js',
      options: {
        specs: 'public/test/*.spec.js',
        helpers: 'public/test/*Helper.spec.js',
        display: 'full',
        summary: true
      }
    }
  });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.registerTask('default', ['jasmine']);

};
