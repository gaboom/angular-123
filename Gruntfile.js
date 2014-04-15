module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nggettext_extract: {
      pot: {
        files: {
          'app/po/default.pot': ['app/**/*.html']
        }
      },
    },
    nggettext_compile: {
      all: {
        files: {
          'app/app-translations.js': ['app/po/*.po']
        }
      },
    },
  });
  
  // nggettext_extract && nggettext_compile
  grunt.loadNpmTasks('grunt-angular-gettext');  

};
