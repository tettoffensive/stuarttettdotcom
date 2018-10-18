# \<stuarttettdotcom\>

Personal Website

## Gulp

```
$ gulp build
$ gulp watch
```

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Viewing Your Application

```
$ cd dist
$ polymer serve
```

## Building Your Application

```
$ cd dist
$ polymer build
```

This will create builds of your application in the `build/` directory, optimized to be served in production. You can then serve the built versions by giving `polymer serve` a folder to serve from:

```
$ cd dist
$ polymer serve build/default
```

## Running Tests

```
$ cd dist
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
