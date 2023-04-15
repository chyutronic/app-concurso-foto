import { pool } from "@/config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return res.status(200).json("obteniendo usuarios...");
    case "POST":
      const { nombre, apellido, telefono, correo, lugar_compra, foto } =
        req.body;
      const [result] = await pool.query("INSERT INTO usuarios SET ?", {
        nombre,
        apellido,
        telefono,
        correo,
        lugar_compra,
        foto,
      });
      return res.status(200).json({
        nombre,
        apellido,
        telefono,
        correo,
        lugar_compra,
        foto,
        id: result.insertId,
      });
  }
}
