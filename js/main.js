// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e cliccando invia il testo viene aggiunto al thread sopra, come messaggio verde


$(document).ready(function(){

 var text = $('.mainchat');
 var send = $('.fa-paper-plane');
 // var search =$('.fa-search')


 send.click(
   function () {

     // valore input
     var userSend = $('#mytext').val();
     // stampo il messaggio
     text.append('<div class="message greenmessage"><span>' + userSend + '</span><i class="fas fa-chevron-down"></i></div>');
     // input vuoto
     $('input').val('');
     // dopo un secondo arriva la risposta automatica
     setTimeout(function(){
       text.append('<div class="message whitemessage"><span>' + 'ok' + '</span><i class="fas fa-chevron-down"></i></div>');
     }, 1000);

   }

 );

    // cliccando enter, invio il messaggio

      $('.container').keypress(function(enter) {
      if ( enter.which == 13 ) {
      send.click();
      }
      });


  // ricerca tra i contatti con click su search


      $('#friendinput').keyup(function(){

        var searchcontacts = $(this).val().toLowerCase();

          $('.contact').each(function(){

          var myFriend = $(this).find('h2').text().toLowerCase();

          if(myFriend.includes(searchcontacts)){
              $(this).show();
          }else{
             $(this).hide();
           }
         });

       });

  // search.click(
  //   function(){
  //     // salvo l'input
  //     var searchcontacts = $('#friendinput').val().toLowerCase();
  //
  //     // ciclo tra i contatti
  //     $('.contact').each(function(){
  //       // salvo il valore del testo
  //       var myFriend = $(this).find('h2').text().toLowerCase();
  //
  //       // se il contatto esiste lo mostro e nascondo gli altri
  //       if(myFriend.includes(searchcontacts)){
  //         $(this).show();
  //       }else{
  //         $(this).hide();
  //   });
  //
  //   }
  // );

      // cancello il messaggio dal menu a tendina

        // nascondo il menu a tendina
        $('.deletemenu').hide();

        // al click spunta il menù e al click lo nascondo nuovamente

        $('.message').on('click','.fa-chevron-down',
            function(){

              var menuShow = $(this).siblings('.deletemenu');
              // se fratello menu è nascosto mostralo
              if (menuShow.is(':hidden')){
                menuShow.show();
              // altrimenti nascondilo
              }else{
                menuShow.hide();
              }

            });

        // cancello il messaggio cliccando sull'opzione dal menu a tendina
        $('.mainchat').on('click', '.delete',
            function(){
        // rimuovi tutta la famiglia del menu a tendina
              $(this).parents('.message').remove();
            });







});
