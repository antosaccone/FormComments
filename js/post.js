// JavaScript Document

// con deviceready nos aseguramos que el dispositivo este listo para ser usado
$(document).bind('deviceready', function(){
    $(function(){
        $('form').submit(function(){
            var dataID = $(this).parent().attr('data-datos-id'); //Busca de su elemento padre un ID
            var postData = $(this).serialize();					 //Se pueden crear atributos custom en HTML5 poniendo "data-"
            $.ajax({    //JQUERY: petición a un servidor         //serialize convierte los datos a una cadena de strings
                type: 'POST',
                data: postData+'&lid='+dataID,
                // cargamos la url del servidor externo
                url: 'http://knightsofthemedia.com.ar/commentsApp/guardar.php',
                success: function(data){
                    console.log(data);
                    $('#email').val('');
                    $('#comentario').val('');
                    alert('Tu comentario fue agregado');
                },
                error: function(data){
                    console.log(data);
                    alert('Ocurrio un error al enviar tu comentario');
                }
            });
            return false;
        });
    });
});