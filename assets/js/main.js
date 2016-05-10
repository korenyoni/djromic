var term = require('hypernal')();
term.tail=true
term.appendTo('#terminal');

$.get('soundcloudlog.txt', function(data) {
    var txt = data

    term.write(txt);
});

