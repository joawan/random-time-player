#!/usr/bin/env node

var program = require('commander');

program
  .version('0.0.1')
  .option('-f, --file [value]', 'File to play, .wav format')
  .parse(process.argv);

var player = require('play-sound')({
    players: ['mplayer','afplay','aplay','mpg123','mpg321','play']
});

player.play(program.file, function(err) {
    if (err) console.log(err);
});