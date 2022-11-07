import { Router } from "express";
import { check } from "express-validator";
import { crearUsuario, login } from "../controllers/usuarios.controllers";

const router = Router();

//agregar las validaciones con express-validator
router
  .route("/")
  .post(
    [
      check("email", "El email es obligatorio").isEmail(),
      check(
        "password",
        "El password debe contener 6 caracteres como minimo"
      ).isLength({ min: 6 }),
      // resultadosValidacion,
    ],
    login
  );
router
  .route("/nuevo")
  .post(
    [
      check("usuario", "El nombre es obligatorio").not().isEmpty(),
      check("email", "El email es obligatorio").isEmail(),
      check("password", "El password debe de ser de 6 caracteres").isLength({
        min: 6,
      }),
      // resultadosValidacion,
    ],
    crearUsuario
  );

export default router;
