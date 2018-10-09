var socket = io();
        socket.on('connect', function () {
            console.log('Conectado al servidor');   
        });

        socket.on('disconnect', function () {
            console.log('Perdimos la coneccion con el server');
        })
        
        //enviar informacion
        socket.emit('enviarMensaje',{
            usuario: 'Julio',
            mensaje: 'Hola Mundo'
        }, function (resp){
            console.log(resp);
        });

        //escuchar informacion
        socket.on('enviarMensaje',function(mensaje){
            console.log(mensaje);
        })