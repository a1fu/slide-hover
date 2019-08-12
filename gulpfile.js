const gulp = require('gulp')
const sass = require('gulp-sass')
const gls = require('gulp-live-server')

gulp.task('build:sass', () => {
    return gulp.src('src/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css/'))
})

gulp.task('watch', () => {
    gulp.watch('src/scss/**/*.scss', gulp.parallel('build:sass'))
})

gulp.task('server', () => {
    const server = gls.static('.', 4000)
    server.start()

    gulp.watch('**/*')
    .on('change', path => server.notify.call(server, { path }))
})

gulp.task('build', gulp.parallel( 'build:sass' ))