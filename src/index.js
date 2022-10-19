import express from 'express'

//crear una instancia de express
const app = express();
//configurar un puerto
app.set('port', process.env.PORT || 4000);

app.listen( app.get('port'),()=>{
    console.log('Estoy en el puerto '+  app.get('port'));
})

//middlewares: son funciones que se ejecutan antes de llegar a las rutas

//rutas


