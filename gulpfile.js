"use strict";

let gulp = require("gulp");
let postcss = require("gulp-postcss");
let server = require("browser-sync").create();


gulp.task("serve", function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("*.html").on("change", server.reload);
  gulp.watch("*.css").on("change", server.reload);
  gulp.watch("js/*.js").on("change", server.reload);
});
