//recibimnos al io
const {io}= require('../server');

//para saber cuando un user se conecta al servidor 
io.on('connection',(client)=>{
    console.log('Usuario conectado');

    client.emit('enviarMensaje',{
        usuario:'Admin',
        mensaje:'Bienvenido'
    })

    client.on('disconnect',()=>{
        console.log('Usario desconectado')
    })
    
    //escuchar al cliente
    client.on('enviarMensaje', (data,callback)=>{
        console.log(data)

        //para que todos reciben la misma informacion
        client.broadcast.emit('enviarMensaje', data);
        /*if(mensaje.usuario){
            callback({
                resp:'Todo salio Bien!!!'
            });
        }else(
            callback({
                resp: 'Todo salio Mal!!!'
            })
        )*/

    })

})