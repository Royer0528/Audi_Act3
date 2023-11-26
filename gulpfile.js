const { src, dest, watch, series } = require('gulp');

// Compilar CSS
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser-js');

// Imagenes
const imagemin = require('gulp-imagemin');

function css(done) {
    // Identificar el archivo principal
    src('src/scss/app.scss')
        .pipe( sass() ) //  Compilar SASS
        .pipe( dest('build/css') ) // Exportarlo o guardarlo en una ubicación

    done();
}

function cssBuild(done) {
    src('build/css/app.css')
        .pipe( rename({
            suffix: '.min'
        }))
        .pipe( purgecss({
            content: ['index.html']
        }))
        .pipe( dest('build/css'))


    done();
}

function javascript() {
    return src('src/js/**/*.js')
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/js'));
}

function imagenes(done) {
    
    src('src/img/**/*')
        .pipe( imagemin( { optimizationLevel: 3 } ) )
        .pipe( dest('build/img') )
    
    done();
}

function dev( ) {
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', javascript);
    
}

exports.css = css;
exports.imagenes = imagenes;
exports.dev = dev;
exports.build = series( cssBuild );
exports.default = series( imagenes, css, dev );
