$(document).ready(() => {
    console.log("document ready");

    var socket = io();
    $('form').submit(() => {
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;
    });
    socket.on('chat message', (msg) => {
        $('#messages').append($('<li>').text(msg));
    });
});