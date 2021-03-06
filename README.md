#g5-knockout-dot.js

Simple module base with KnockoutJS and doT templating

---

###Setup

> Install the package and use it as a scaffold for your component

```
git clone https://github.com/MajorLeagueBaseball/g5-knockout-dot.git
```

```
npm install
```

###Server

> Server running on [http://localhost:9966](http://localhost:9966) with auto builds, [Ctrl+C] to kill server

```
npm run start-dev
```

###Test

```
npm test
```

###Build

```
npm run build
```

###Component Setup

```js

let linescoreComponent = g5KnockoutDot({
    container: document.getElementById('component--linescore'),
    css: 'linescore linescore--game',
    interval: 80000,
    enablePolling: false,
    path: '/src/data/linescore.json'
});
```

###Events

```js

linescoreComponent.on('ready', function(obj) {

    // console.log('component model and viewModel have been initiated', obj);

});

linescoreComponent.on('data', function(data) {

    // console.log('component data from model', data);

});

linescoreComponent.on('data-error', function(err) {

    // console.log('component model data error', err);

});
```

###Methods

```js

linescoreComponent.init(); // initiates component
```

###Style Guide / Rules

* Style Guide - [https://github.com/airbnb/javascript](https://github.com/airbnb/javascript)
* Protect against `new` - constructors can be called with or without `new`
* Maintain chainability, methods return `this`

###Notes

* `npm run start` will run a single build and start the server, if you want auto builds run `npm run start-dev`
* If you're having issues running the setup command, make sure you have the proper permissions setup (you can also attempt to run the commands with sudo, although that is usually discouraged)

###Reference

* [About g5-knockout](https://medium.com/@gregbabula/knockout-browserify-base-app-mvvm-with-an-event-layer-7b0996eb4d0a)
* [KnockoutJS Docs](http://knockoutjs.com/documentation/introduction.html)
* [Browserify Handbook](https://github.com/substack/browserify-handbook)
* [Task Automation with npm run](http://substack.net/task_automation_with_npm_run)
* [About Watchify](https://github.com/substack/watchify)
* [Tape Tests](https://github.com/substack/tape)
* [Simple HTTP Server](https://docs.python.org/2/library/simplehttpserver.html)
* [JSDoc](http://usejsdoc.org/)

###License

Copyright (c) 2015, Greg Babula <gbabula@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
