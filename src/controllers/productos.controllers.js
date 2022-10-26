import Producto from "../models/producto";

export const listarProductos = async(req, res) => {
  try{
    //buscar los productos
    const productos = await Producto.find();
    //responder al frontend con el arreglo de productos
    res.status(200).json(productos);
  }catch(error){
    console.log(error);
    //enviar una respuesta al frontend
    res.status(404).json({
      mensaje: 'Error al buscar los productos'
    })
  }
};

export const crearProducto = async (req, res) => {
  try {
    // console.log(req.body);
    //validar los datos del objeto
    const productoNuevo = new Producto(req.body);
    //guardar el objeto en la base de datos
    await productoNuevo.save();
    res.status(201).json({
      mensaje: "El producto fue creado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al intentar agregar un nuevo producto",
    });
  }
};
