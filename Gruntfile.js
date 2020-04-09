module.exports = function (grunt) {
    grunt.initConfig({
      eslint: {
        options: {
          configFile: '.eslintrc.json'
        },
        target: ['*.js']
      },
      csslint: {
        options: {
          csslintrc: '.csslintrc'
        },
        src: '*.css'
      },
      htmlhint: {
        options: {
          htmlhintrc: '.htmlhintrc'
        },
        src: 'index.html'
      },
      mocha: {
        test: {
          src: ['test/index.html'],
        },
        options: {
          run: true,
          reporter: 'Spec'
        }
      },
      htmlmin: {
        options: {
          collapseWhitespace: true,
          preserveLineBreaks: false
        },
        files: {
          src: './index.html',
          dest: 'dist/index.html'
        }
      },
      cssmin: {
        'dist/a.css': 'a.css'
      },
      uglify: {
        release:{
          files: {
            'dist/a.js': 'a.js',
            'dist/calc.js': 'calc.js'
          }
        }
      }	    
    });
  
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('lint', ['htmlhint', 'csslint', 'eslint']);
    grunt.registerTask('unitTest', ['mocha']);
    grunt.registerTask('minify', ['htmlmin', 'cssmin', 'uglify']);
  };