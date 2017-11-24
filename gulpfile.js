var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var pump = require('pump');
var inject = require('gulp-inject');
var mainBowerFiles = require('gulp-main-bower-files');
var series = require('stream-series');
var bowerMin = require('bower-min');
var cleanCSS = require('gulp-clean-css');

var bowerMinJavaScriptFiles = bowerMin('js', 'min.js');




//PRODUKCJA
//wstrzykuje js, css i zaleznosci z bowera do index.html  w src
gulp.task('index', function () {
  var target = gulp.src('./src/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['./src/**/*.js', './src/**/*.css'], {read: false});

 var sources2 = gulp.src('./bower.json').pipe(mainBowerFiles( ));
  return target.pipe(inject(series(sources, sources2)))
    .pipe(gulp.dest('./src'));
});


//FINALNA
//przenosi i scala zalez bowera do dist
gulp.task('vendor', function() {
  return gulp.src(bowerMinJavaScriptFiles.minified)
    .pipe(concat('vendor-scripts.min.js'))
    .pipe(gulp.dest('dist'))
});

//minifikuje js
gulp.task('minify-js', function (cb) {
  pump([
        gulp.src('src/main.js'),
		concat('final.js'),
        minify({
        ext:{

            min:'.min.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }),
        gulp.dest('dist/js')

    ],
    cb
  );
});

//minifikuje css
gulp.task('minify-css', function (cb) {
  pump([
        gulp.src('src/*.css'),
		concat('final.min.css'),
        cleanCSS({compatibility: 'ie8'}),
        gulp.dest('dist')
    ],
    cb
  );
});

//wstrzykuje mini zal do index.html w dist
gulp.task('indexFinal',['vendor', 'minify-js', 'minify-css'], function () {
  var target = gulp.src('./src/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['./dist/**/*.min.js', './dist/**/*.min.css'], {read: false});

 var sources2 = gulp.src('./bower.json').pipe(mainBowerFiles( ));
  return target.pipe(inject(sources))
    .pipe(gulp.dest('./dist'));
});
