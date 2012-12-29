node-drone-video
================

Save down AR.Drone video streams to your filesystem with associated navdata video
streams. Splicing and editing the raw stream and navdata stream is left up to you
to do in Final Cut or whatever your preferred video editor is.

Installation
------------

First you must install `ffmpeg` and `ffplay` with at least the `--enable-libx264`
flag enabled. You can use Homebrew on OS X:

``` bash
$ brew install ffmpeg --with-ffplay
```

You can install the `drone-video` program with `npm`:

``` bash
$ npm install -g drone-video
```

Usage
-----

TODO...
