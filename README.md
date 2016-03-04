# gulp-basic
Build system for simple web apps

## Dependencies
* `brew install node`
* `npm install -g gulp`

## Setup
* `git clone git@github.com:chrisf74/gulp-basic.git`
* `cd gulp-basic`
* `npm install`

## Gulp Tasks
* `gulp test [options]`

	Runs tests via Karma server through PhantomJS browser

	`-watch` or `-w` re-runs the task when src or test files change

	`-browser` or `-b` captures browsers via launcher plugins. For example: `gulp test -b Chrome,Safari`

* `gulp serve`

	Serves src/index.html at 0.0.0.0:8080

* `gulp build`

	Copies src to build directory
