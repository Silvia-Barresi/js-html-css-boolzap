// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e cliccando invia il testo viene aggiunto al thread sopra, come messaggio verde


$(document).ready(function(){

 var text = $('.newtext');

 var send = $('.fa-paper-plane');

 send.click(
   function () {
     var usersend = $('#mytext').val();

     text.append(usersend);
     $('input').val("<span>" + userend + "<span>");
   }

 );


});
