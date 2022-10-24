export const listarProductos = (req, res) => {
  res.send("hola desde el backend en la peticion get");
};

export const crearProducto = (req, res)=>{
    console.log(req.body)
    //validar los datos del objeto
    //guardar el objeto en la base de datos
    res.send('aqui tendria que crear un producto')
    }