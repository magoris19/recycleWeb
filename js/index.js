$('#WAButton').floatingWhatsApp({
    phone: 'seu-numero-no-formato-internacional', //WhatsApp phone number sem espaco e letra
    headerTitle: 'Chat' , //Popup Title
    popupMessage: 'Deixe uma Mensagem', //Popup Message
    showPopup: true, //Enables popup display
     //buttonImage: '<img src="./img/whatsapp.svg"/>', //Button Image
    headerColor: 'green', //Custom header color
    backgroundColor: 'green', //Custom background button color
    position: "right", //Position: left | right
    size: 72,
    zIndex: 10
 });


 $(function() {

    // SETUP
    var $span ;
                                    // item is an empty string
    $span = $(' span , p');                               // Cache the unordered list
              // Cache form to add new items
            // Cache button to show form
  
    $('span, p').hide().each(function(index) {          // Hide list items
      $(this).delay(450 * index).fadeIn(1600);     // Then fade them in
    });
});