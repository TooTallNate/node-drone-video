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

Once installation is complete, you can begin recording video output from the
AR.Drone. First connect to your drone's WiFi hotspot (for example:
`ardrone2_058438`).

Once you are connected to the drone, you can begin the `drone-video` program.
By default it connects to `192.168.1.1` (the default IP address of the drone), but
you may override that via the `--ip` flag.

The `drone-video` program creates a directory with a timestamp to place the video
and metadata files into:

![](http://f.cl.ly/items/3U471K3H2S1N0F1n0L1U/Screen-Shot-2012-12-30-at-11.37.54-AM.png)

 * `navdata.log` - `\n` delimited log file of JSON objects with the contents of the AR.Drone's "navadata" events
 * `navdata.mov` - A `.mov` video file with the navdata events rendered to a transparent video
 * `video.h264` - The raw h264 video stream with the PaVE frame wrapper removed
 * `video.m4v` - A compressed version of the raw h264 feed compatible with most video players
 * `video.PaVE` - The raw PaVe framed video feed dumped directly from the AR.Drone's video port


Video Splicing
--------------

So the `drone-video` program outputs a directory with distinct `video.m4v` and
`navdata.mov` files. You most likely want to splice the two together so that you
can upload the resulting video to YouTube or whatever. You can do this in your
preferred video editing program.

A good `ffmpeg` command to splice the two videos together is:

``` bash
$ ffmpeg -i video.m4v -vf "movie=navdata.mov[clip2]; [in][clip2] overlay=0:0 [out]" -sameq overlay.m4v
```

An example of the produced overlay video can be seen here:

[![](http://f.cl.ly/items/0z1d2F1i2Z3p2c3o0305/overlay.png)](http://youtu.be/kETrx7npmeA)
