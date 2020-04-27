        function myFunction() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("tel").value;
    var comm = document.getElementById("comment").value;

    var myObject = {name: name, email: email, telefono: tel, comentarios: comm};

    console.log(myObject);

    }
                function IniciarSesion(){
         var NomUsuari=document.getElementById("NombreDeUsuario").value
         var Contra=document.getElementById("Contrasena").value

         //En caso de no haya escrito nada
         if (NomUsuari==""&&Contra==""){
             //Usuarioo
             document.getElementById("NombreDeUsuario").style.border="2px solid red"
             document.getElementById("AlertasEnELUsuario").innerHTML="Escribe el nombre de usuario"
             document.getElementById("AlertasEnELUsuario").style.display="block"
             //Contraseña
             document.getElementById("Contrasena").style.border="2px solid red"
             document.getElementById("AlertasDeContrasena").innerHTML="Escribe la contraseña"
             document.getElementById("AlertasDeContrasena").style.display="block"
         }

         //En caso de que solo haya escrito la contraseña
         else if (NomUsuari==""&&Contra!=""){
             //Usuarioo
             document.getElementById("NombreDeUsuario").style.border="2px solid red"
             document.getElementById("AlertasEnELUsuario").innerHTML="Escribe el nombre de usuario"
             document.getElementById("AlertasEnELUsuario").style.display="block"
             //Contrasena
             document.getElementById("Contrasena").style.border="2px outset rgb(89, 160, 253)"
             document.getElementById("AlertasDeContrasena").style.display="none"
         }

         //En caso de que solo haya escrito el usuario
         else if (NomUsuari=="Alex"&&Contra==""){
             //Contrasena
             document.getElementById("Contrasena").style.border="2px solid red"
             document.getElementById("AlertasDeContrasena").innerHTML="Escribe la contraseña"
             document.getElementById("AlertasDeContrasena").style.display="block"
             //Usuarioo
             document.getElementById("NombreDeUsuario").style.border="2px outset rgb(97, 255, 97)"
             document.getElementById("AlertasEnELUsuario").style.display="none"
         }
         //En caso de que el usuario sea incorrecto
         else if (NomUsuari!="Alex"){
             //Usuarioo
             document.getElementById("NombreDeUsuario").style.border="2px solid red"
             document.getElementById("AlertasEnELUsuario").style.display="block"
             document.getElementById("AlertasEnELUsuario").innerHTML="El nombre de usuario no existe "
         }
         //En caso de que la contraseña sea incorrecta
         else if(NomUsuari=="Alex"&&Contra!="1234"){
             //Contrasena
             document.getElementById("Contrasena").style.border="2px solid red"
             document.getElementById("AlertasDeContrasena").style.display="block"
             document.getElementById("AlertasDeContrasena").innerHTML="La contraseña es incorrecta"
             //Usuarioo
             document.getElementById("NombreDeUsuario").style.border="2px outset rgb(97, 255, 97)"
             document.getElementById("AlertasEnELUsuario").style.display="none"
         }

         //en caso de que todo esté bien
         else if (NomUsuari=="Alex"&&Contra=="1234"){
             //Contrasena
             document.getElementById("Contrasena").style.border="2px outset rgb(97, 255, 97)"
             document.getElementById("AlertasDeContrasena").style.display="none"
             //Usuarioo
             document.getElementById("NombreDeUsuario").style.border="2px outset rgb(97, 255, 97)"
             document.getElementById("AlertasEnELUsuario").style.display="none"
             //cursor
             document.getElementById("body").style.cursor="progress";
             document.getElementById("EnviarA").style.cursor="progress";
             // deshabilitar boton enviar
             document.getElementById("EnviarA").disabled=true;
             //regresar propiedades al boton perfil de usuario
                 document.getElementById("TextoDelBoton").innerHTML="Alex";
                 document.getElementById("BotonDeUsuario").value="1"
                 document.getElementById("CerrarSesion").style.cursor="pointer";
                 $("#BotonDeImg").fadeIn(100);
                 //habilitar boton cerrar sesión
                 document.getElementById("CerrarSesion").disabled=false;
             //border bottom al header regresarlo a 0
             document.getElementById("nav").style.borderBottom="none"
             //animacion de carga
             setTimeout(function(){
                 document.getElementById("body").style.cursor="default";
                 document.getElementById("EnviarA").style.cursor="default";
                 $(".IniciarSesion").animate({
                     height:"0px",
                 },200)
                 $(".IniciarSesion").fadeOut(0)
                 $("#Usuarioo").fadeOut(0)
                 $("#BotonDeUsuario").fadeIn(0)
             },0)
         }
     }
     $("#NombreDeUsuario").click(function(){
         document.getElementById("NombreDeUsuario").style.border="2px outset rgb(119, 201, 255)"
         document.getElementById("Contrasena").style.border="2px outset rgb(119, 201, 255)"
         $("#AlertasEnELUsuario").fadeOut(0)
         $("#AlertasDeContrasena").fadeOut(0)
     })
     $("#Contrasena").click(function(){
         document.getElementById("Contrasena").style.border="2px outset rgb(119, 201, 255)"
         document.getElementById("NombreDeUsuario").style.border="2px outset rgb(119, 201, 255)"
         $("#AlertasEnELUsuario").fadeOut(0)
         $("#AlertasDeContrasena").fadeOut(0)
     })

     function Perfil(){
         var x=document.getElementById("BotonDeUsuario").value
         if (x==1){
             $(".Perfil").show(0)
             $(".Perfil").animate({
                 height:"210px",
             },150)
             //desabilitar el botón hasta que se termine la transicion para que no haya bug
             document.getElementById("BotonDeUsuario").disabled=true
             setTimeout(function(){
                 document.getElementById("BotonDeUsuario").disabled=false
             },200)
             //ocultar elementos del botón de usuario
             $("#BotonDeImg").fadeOut(0)
             document.getElementById("TextoDelBoton").innerHTML="Cerrar"
             document.getElementById("TextoDelBoton").style.color="black"
             document.getElementById("BotonDeUsuario").value="2"
             document.getElementById("nav").style.borderBottom="2px solid white"
         }
         else {
             $(".Perfil").animate({
                 height:"0px",
             },150)
             //desabilitar el botón hasta que se termine la transicion para que no haya bug
             document.getElementById("BotonDeUsuario").disabled=true
             setTimeout(function(){
                 document.getElementById("BotonDeUsuario").disabled=false
             },200)
             $(".Perfil").hide(0)
             //mostrar elementos del botón de usuario
             $("#BotonDeImg").fadeIn(0)
             document.getElementById("TextoDelBoton").innerHTML="Alex"
             document.getElementById("TextoDelBoton").style.color="black"
             document.getElementById("nav").style.borderBottom="none"
             document.getElementById("BotonDeUsuario").value="1"
         }
     }
     function CerrarSesion(){
         document.getElementById("body").style.cursor="progress";
         document.getElementById("CerrarSesion").style.cursor="progress";
         //propiedades al botón iniciar sesión
         document.getElementById("Usuarioo").value="1"
         document.getElementById("Usuarioo").innerHTML="Iniciar sesión"
         document.getElementById("Usuarioo").style.color="gray"
         document.getElementById("nav").style.borderBottom="none"
         document.getElementById("NombreDeUsuario").value=""
         document.getElementById("Contrasena").value=""
         document.getElementById("Contrasena").style.border="2px outset rgb(119, 201, 255)"
         document.getElementById("NombreDeUsuario").style.border="2px outset rgb(119, 201, 255)"
         document.getElementById("EnviarA").style.cursor="pointer";
         //habilitar boton enviar del boton iniciar sesion
          document.getElementById("EnviarA").disabled=false;
         //deshabilitar boton cerrar sesión
         document.getElementById("CerrarSesion").disabled=true;
         //animacion de carga
         setTimeout(function(){
             document.getElementById("body").style.cursor="default";
             document.getElementById("CerrarSesion").style.cursor="default";
             $(".IniciarSesion").animate({
                 height:"0px",
             },0)
             $(".Perfil").fadeOut(0)
             $("#BotonDeUsuario").fadeOut(0)
             $("#Usuarioo").fadeIn(0)
         },0)
     }

     /*Usuario */

     function Usuarioo(){
         x=document.getElementById("Usuarioo").value
         if (x==1){
             $(".IniciarSesion").show();
             $(".IniciarSesion").animate({
                 height:"300px",
             },0)
             //desabilitar el botón hasta que se termine la transicion para que no haya bug
             document.getElementById("Usuarioo").disabled=true
             setTimeout(function(){
                 document.getElementById("Usuarioo").disabled=false
             },0)
             document.getElementById("Usuarioo").style.backgroundColor="white"
             document.getElementById("Usuarioo").value="2"
             document.getElementById("Usuarioo").innerHTML="Cerrar"
             document.getElementById("Usuarioo").style.color="gray"
             document.getElementById("nav").style.borderBottom="2px solid white"
         }
         else {
             $(".IniciarSesion").animate({
                 height:"0px",
             },0)
             $(".IniciarSesion").hide(0)
             //desabilitar el botón hasta que se termine la transicion para que no haya bug
             document.getElementById("Usuarioo").disabled=true
             setTimeout(function(){
                 document.getElementById("Usuarioo").disabled=false
             },0)
             //hasta que no se termine la transición principal, no se cambiaran las sig propiedades
             setTimeout(function(){
                 document.getElementById("Usuarioo").style.color="gray"
                 document.getElementById("nav").style.borderBottom="none"
             },0)
             document.getElementById("Usuarioo").innerHTML="Iniciar sesión"
             document.getElementById("Usuarioo").value="1"

         }
     }
