$(document).ready(function(){


   $('#composer').on('click', function(){
      $('#composer').css('height', '6em');
      $('#tweet-controls').css('visibility', 'visible');

      $('#composer').focusout( function (){
         $('#composer').css( 'height', '2.5em' );
         // $('#tweet-controls').css('visibility', 'hidden');

      });
   });

   $('#composer').keyup(function(){
      var characterCount = $('#composer').val().length;
      $('#char-count').html( 140 - characterCount );


      if (characterCount >= 130 ){
         $('#char-count').css('color', 'red');
      }

      if (characterCount < 130 ){
         $('#char-count').css('color', 'black');
      }

      if (characterCount > 140 ){
         $('#tweet-submit').addClass('button-disabled');
      }
      else if (characterCount <= 140 ){
         $('#tweet-submit').removeClass('button-disabled');
      }


   });





});
