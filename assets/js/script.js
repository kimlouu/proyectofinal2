$(document).ready(function() {
  anchor.init()

});
  anchor = {
    init: function() {
      $("a.anchorLink").click(function() {
        elementClick = $(this).attr("href")
        destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({
          scrollTop: destination
        }, 1100);
        return false;
      })
    }
  }

  //Funcionamiento de error al enviar mensaje de contacto
  $(document).on('click', '#send-btn', function() {

    var name = $('#exampleInputName2').val();
    var email = $('#exampleInputEmail1').val();
    var message = $('#contactTextArea').val();

    if (name == "") {
      $('#name_error').removeClass('hidden');
    }
    if (email == "") {
      $('#mail_error').removeClass('hidden');

    }
    if (message == "") {
      $('#message_error').removeClass('hidden');
    }



    //Borrar mensaje de error
    $(document).on('click', '.validate', function() {
      $(this).parents('.form-group').children('.error').addClass('hidden');


    });

  });

  //gallery

  // IDEA: determinar source de imagen con clase
  $(".featured").attr("src", "assets/img/5.jpg")
  // IDEA: Evento de click en imagen con clase de thumb
  $(".thumb").on("click", function() {
    source = $(this).attr("src");
    $(".featured").attr("src", source);
  })

