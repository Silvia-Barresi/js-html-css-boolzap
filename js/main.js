

$(document).ready(function(){


// variabili--------------------------------------------------------------------
   var mainChat = $('.mainchat');
   var send = $('.fa-paper-plane');
   var contact = $('.contact');

// creo la variabile per l'ora--------------------------------------------------

   var today = new Date();
   var time = zero(today.getHours()) + ':' + zero(today.getMinutes());

   function zero(number){
     if (number < 10){
       number = '0' + number;
     }
     return number
   };


// invio un messaggio-----------------------------------------------------------

    send.click(
     function () {

       // valore input
       var userSend = $('#mytext').val();
       var activeChat = $('.mainchat.active');

       if (userSend.length > 0){

         // stampo il messaggio
         activeChat.append('<div class="message greenmessage"><span>' + userSend + '</span><i class="fas fa-chevron-down"></i><div class="time"><span class="hour">' + time + '</span></div><div class="deletemenu"><ul><li>Info messaggio</li><li class="delete">Cancella messaggio</li></ul></div></div>');
         // input vuoto
         $('input').val('');
         // dopo un secondo arriva la risposta automatica
         setTimeout(function(){
          activeChat.append('<div class="message whitemessage"><span>' + 'ok' + '</span><i class="fas fa-chevron-down"></i><div class="time"><span class="hour">' + time + '</span><div class="deletemenu"><ul><li>Info messaggio</li><li class="delete">Cancella messaggio</li></ul></div></div>');
         }, 1000);


         // modifico l'orario di visualizzazione dei contatti
          $('.imchattingwith > p span.hour').text(time);
          $('.contact.active > span').text(time);

        // la chat scrolla verso l'ultimo messaggio inviato
          activeChat.scrollTop(activeChat.prop("scrollHeight"));

        };

     });

// cliccando enter, invio il messaggio------------------------------------------

    $('.container').keypress(function(enter) {
      if ( enter.which == 13 ) {
      send.click();
      }
    });


// ricerca tra i contatti con click su search-----------------------------------


    $('#friendinput').keyup(function(){
      // salvo l'input
        var searchcontacts = $(this).val().toLowerCase();
      // ciclo tra i contatti
        contact.each(function(){
      // salvo il valore del testo
        var myFriend = $(this).find('h2').text().toLowerCase();
      // se il contatto esiste lo mostro e nascondo gli altri
        if(myFriend.includes(searchcontacts)){
           $(this).show();
        }else{
           $(this).hide();
         }
       });

     });


          // ALTERNATIVA al keyup con click sull'icona search

          // var search = $(.fa-search)

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


// cancello il messaggio dal menu a tendina-------------------------------------

    // al click spunta il menù e al click lo nascondo nuovamente
    mainChat.on('click','.fa-chevron-down',
        function(){

          $(this).siblings('.deletemenu').toggle('active');

              // ALTERNATIVA AL TOGGLE

              // var menuShow = $(this).siblings('.deletemenu');
              // // se fratello menu è nascosto mostralo
              // if (menuShow.is(':hidden')){
              //   menuShow.show();
              // // altrimenti nascondilo
              // }else{
              //   menuShow.hide();
              // }
    });

// cancello il messaggio cliccando sull'opzione dal menu a tendina--------------
    mainChat.on('click', '.delete',
        function(){
    // rimuovi tutta la famiglia del menu a tendina
          $(this).parents('.message').remove();
    });





// Click sul contatto mostra la conversazione del contatto cliccato-------------
// è possibile inserire nuovi messaggi per ogni conversazione-------------------

    contact.click(
      function(){

        // rimuovo la classe active dal contatto e la aggiungo al contatto su cui clicco
        contact.removeClass('active');
        $(this).addClass('active');

        // salvo la variabile nome contatto sull'header della hat per sostituirla con il nome del contatto su cui clicco
        var contactName = $(this).find('.myfriend').text();
        $('.imchattingwith h2').text(contactName);

        // come prima ma con l'immagine
        var contactImg = $(this).find('img').attr('src');
        $('img.contactright').attr('src', contactImg);

        // salvo la conversazione che mi interessa
        var chat = $(this).data('chat');

        // nascondo l'active dalle chat che non mi interessano e la aggiungo a quella su cui clicco
        mainChat.removeClass('active').addClass('ghost');
        mainChat.eq(chat).removeClass('ghost').addClass('active');



              // ALTERNATIVA MAINCHAT DATA

              // salvo la conversazione che mi interessa attraverso l'attributo data
              // var conversazione = $(this).attr('data-chat');


              // salvo la sezione che contiene la conversazione che mi interessa
              // var mainChat = $('.mainchat[data-chat="' + conversazione + '"]');

              // nascondo l'active dalle chat che non mi interessano e la aggiungo a quella su cui clicco
              // $('.mainchat').removeClass('active');
              // mainChat.addClass('active');


        });


 });
