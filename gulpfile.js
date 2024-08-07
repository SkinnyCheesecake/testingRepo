import { dest, watch, src, series } from 'gulp'
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import terser from 'gulp-terser';

const sass = gulpSass(dartSass);


//THIS IS THE FUNCTION TO RENDER SCSS TO CSS
export function css ( done ){
    src( 'src/scss/app.scss', {sourcemaps: true})
    .pipe( sass({
        outputStyle: 'compressed'
    }).on('error', sass.logError) )
    .pipe( dest( 'dist/css', {sourcemaps: true} ));

    done();
}

//THIS IS THE FUNCTION TO RENDER JAVASCRIPT
export function js ( done ){
    src( 'src/js/app.js' ).pipe(terser()).pipe( dest( 'dist/js' ) );

    done();
}


//THIS IS THE FUNCTION TO RENDER BOTH JAVASCRIPT AND SCSS
export function render (){

    watch( 'src/scss/**/*.scss', css );
    watch( 'src/js/**/*.js', js );

}

export default series( js, css, render );