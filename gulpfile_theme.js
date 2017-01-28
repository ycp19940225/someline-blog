var elixir = require('laravel-elixir');
var gulp = require("gulp");

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir((mix) => {

    // less
    mix.less('../angulr/css/less/app.less', 'resources/assets/angulr/css/');

    // styles
    mix.styles([
        'public/bower_components/bootstrap/dist/css/bootstrap.css',
        'public/vendors/bower_components/animate.css/animate.css',
        'public/bower_components/font-awesome-4.7.0/css/font-awesome.css',
        'public/vendors/bower_components/simple-line-icons/css/simple-line-icons.css',
        'resources/assets/angulr/css/*.css'
    ], 'public/css/theme.src.css', './');

    // scripts
    mix.scripts([
        'public/vendors/bower_components/jquery/dist/jquery.min.js',
        'public/bower_components/bootstrap/dist/js/bootstrap.min.js',
        'resources/assets/angulr/js/support/ui-*.js',
    ], 'public/js/theme.src.js', './');

    // copy necessary fonts
    gulp.src('public/fonts/**')
        .pipe(gulp.dest('public/build/fonts'));

});