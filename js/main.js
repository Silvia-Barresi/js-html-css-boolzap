// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e cliccando invia il testo viene aggiunto al thread sopra, come messaggio verde


$(document).ready(function(){

 var text = $('.mainchat');

 var send = $('.fa-paper-plane');

 send.click(
   function () {
     var usersend = $('#mytext').val();
     // console.log(usersend);

     text.append('<div class="greenmessage"><span>' + usersend + '</span><i class="fas fa-chevron-down"></i></div>');
     $('input').val('');
   }

 );


});
