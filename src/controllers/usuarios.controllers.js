import Usuario from "../models/usuario";
import { validationResult } from "express-validator";

export const login = async (req, res) => {
  try {
    // manejar los errores de la validacion
    const errors = validationResult(req);
    // errors.isEmpty() devuelve false si hay errores
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    //verificar si existe un mail como el recibido
    const { email, password } = req.body;

    //verificar si el email ya existe
    let usuario = await Usuario.findOne({ email }); //devulve un null
    if (!usuario) {
      //si el usuario existe
      return res.status(400).json({
        mensaje: "Correo o password invalido - correo",
      });
    }
   
    if (password !== usuario.password) {
      return res.status(400).json({
        mensaje: "Correo o password invalido - password",
      });
    }
    //generar el token

    //responder que el usuario es correcto
    res.status(200).json({
      mensaje: "El usuario existe",
      uid: usuario._id,
      nombre: usuario.nombre,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "usuario o contraseña invalido",
    });
  }
};

export const crearUsuario = async (req, res) => {
  try {
    // manejar los errores de la validacion
    const errors = validationResult(req);
    // errors.isEmpty() devuelve false si hay errores
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { email } = req.body;

    //verificar si el email ya existe
    // let usuario = await Usuario.findOne({ email: req.body.email }); //devulve un null
    let usuario = await Usuario.findOne({ email }); //devulve un null
    if (usuario) {
      //si el usuario existe
      return res.status(400).json({
        mensaje: "ya existe un usuario con el correo enviado",
      });
    }

    //guardamos el nuevo usuario en la BD
    usuario = new Usuario(req.body);
    //generar el token

    await usuario.save();
    
    res.status(201).json({
      mensaje: "usuario creado",
      nombre: usuario.nombre,
      uid: usuario._id,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "El usuario no pudo ser creado",
    });
  }
};
