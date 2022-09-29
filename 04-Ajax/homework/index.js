var URL = "http://localhost:5000/amigos";

//Muestra la lista de amigos
$("#boton").click(function(){
    $('#lista').empty();
    //Trae la info de la URL
    $.get(`${URL}`, function(friends){
        console.log(friends);
        //Iteramos el array de objetos
        friends.forEach(e => {
            //creamos un li y le ponemos el id y un nombre
            let li = document.createElement("li");
            li.id = e.id;
            li.innerHTML = e.name;
            //agregamos el li a nuestra ul
            let list = document.getElementById('lista');
            list.appendChild(li);

            //otra forma de hacerlo mas simple con jquery
            //$("#lista").append(`<li id="${e.id}">${e.name}</li>`);
        });
    });

});

//busco a un amigo en particular
$("#search").click(function(){
    //guardamos el valor del input
    let valorInput = document.getElementById("input").value;
    //Trae la info de la URL
    if(valorInput){
        $.get(`http://localhost:5000/amigos/${valorInput}`, function(friend){

            $("#amigo").text(`El nombre de mi amigo es ${friend.name}`);   
        });    
    } else {
        $("#amigo").text('Amigo no encontrado');
    }

});

//elimino a un amigo
$("#delete").click(function(){
    //guardamos el valor del input
    let valorInput = document.getElementById("inputDelete").value;
    let friend;
    //Trae la info de la URL
    if(valorInput){
    $.get(`http://localhost:5000/amigos/${valorInput}`, function(f){
        friend =f;   
    });    
    
        $.ajax({
            url: `${URL}/${valorInput}`,
            type: "DELETE",
            success: function(){
                $('#success').text(`Tu amigo, ${friend.name} fue eliminado`);
                $('#inputDelete').val('');
            }
        });
    }
    else {
        $("#success").text('Tenes que ingresar un ID');
    }

});

//4 METODOS PRINCIPALES DEL HTTP

//GET => SOLICITA LA INFO
//POST => AGREGA UN NUEVO DATO
//PUT => MODIFICA UN DATO EXISTENTE
//DELETE => ELIMINA UN DATO EXISTENTE

//$.ajax({
//    url: url_api,
//    type: metodo_http,
//   success: callback,
//   error: callback
//})