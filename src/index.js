import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import productoRouter from './routes/productos.routes'
import authRouter from './routes/usuarios.routes'
import * as dotenv from 'dotenv';
//llamar a la conexion a la bd
import './database';

dotenv.config();

//crear una instancia de express
const app = express();
//configurar un puerto
app.set('port', process.env.PORT || 4000);

app.listen( app.get('port'),()=>{
    console.log('Estoy en el puerto '+  app.get('port'));
})

//middlewares: son funciones que se ejecutan antes de llegar a las rutas
app.use(cors()); //permite peticiones remotas
//permite recibir y usar objetos en formato json
app.use(express.json());
app.use(express.urlencoded({extended:true}))
//informacion extra
app.use(morgan('dev'))
//cargar un archivo estatico
app.use(express.static(path.join(__dirname,'../public')))

//rutas
// app.get('/prueba', (req, res)=>{
//     res.send('hola desde el backend en la peticion get')
// })
//http://localhost:4000/apicafe/prueba
app.use('/apicafe',productoRouter)
// http://localhost:4000/apicafe/auth/
app.use('/apicafe/auth',authRouter)



