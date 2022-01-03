const {src, dest, watch} = require("gulp");
const pug = require("gulp-pug");
const rename = require("gulp-rename");

function php() {
  return src("src/*.pug")
  .pipe(pug({pretty: true}))
  .pipe(rename({extname: ".php"}))
  .pipe(dest("dist"));
}

exports.php = php;

const sass = require("gulp-sass")(require("sass"));

function css() {
  return src("src/css/*.scss")
  .pipe(sass().on("error", sass.logError))
  .pipe(dest("dist/css/"));
}

exports.css = css;

const concat = require("gulp-concat");

function js() {
  return src("src/js/*.js")
  .pipe(concat("scripts.js"))
  .pipe(dest("dist/js/"));
}

exports.js = js;

exports.watch = function() {
  watch("src/css/*.scss", css);
  watch("src/*.pug", php);
  watch("src/js/*.js", js);
}