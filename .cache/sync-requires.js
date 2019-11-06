const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-js": hot(preferDefault(require("/Users/harrychung/Documents/Projects/ycmentoring/src/templates/blog.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/harrychung/Documents/Projects/ycmentoring/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/harrychung/Documents/Projects/ycmentoring/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/harrychung/Documents/Projects/ycmentoring/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/harrychung/Documents/Projects/ycmentoring/src/pages/blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/harrychung/Documents/Projects/ycmentoring/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/harrychung/Documents/Projects/ycmentoring/src/pages/index.js"))),
  "component---src-pages-video-js": hot(preferDefault(require("/Users/harrychung/Documents/Projects/ycmentoring/src/pages/video.js")))
}

