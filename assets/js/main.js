var txt = "";
$.get('soundcloudlog.txt', function(data) {
txt = data});

var html = ansi_up.ansi_to_html(txt);

var cdiv = document.getElementById("terminal");

cdiv.innerHTML = html;
