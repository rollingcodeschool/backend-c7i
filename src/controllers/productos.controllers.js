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
export const obtenerProducto = async(req, res) => {
  try{
    //obtener el parametro
    console.log(req.params.id)
    //buscar en la base de datos el producto que coincide con el parametro
    const productoBuscado = await Producto.findById(req.params.id);
    //responder al frontend
    res.status(200).json(productoBuscado);
  }catch(error){
    console.log(error);
    //enviar una respuesta al frontend
    res.status(404).json({
      mensaje: 'Error al busca un producto'
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
