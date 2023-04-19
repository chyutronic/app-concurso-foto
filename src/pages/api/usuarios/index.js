import nc from "next-connect";
import { pool } from "@/config/db";
import fs from "fs-extra";
import multer from "multer";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
});

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // store files in public folder
    cb(null, path.join("./public"));
  },
  filename: (req, file, cb) => {
    console.log(req.file);
    console.log(file);
    cb(
      null,
      file.originalname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

let upload = multer({ storage });
let uploadFile = upload.single("foto");

handler.use(uploadFile);

handler.get(async (req, res) => {
  const [result] = await pool.query("SELECT * FROM usuarios");
  return res.status(200).json(result);
});

handler.post(async (req, res) => {
  try {
    console.log(req.file);
    const { nombre, apellido, telefono, correo, lugar_compra } = req.body;

    const [result] = await pool.query("INSERT INTO usuarios SET ?", {
      nombre,
      apellido,
      telefono,
      correo,
      lugar_compra,
      foto: req.file.filename,
    });

    return res.status(200).json({
      nombre,
      apellido,
      telefono,
      correo,
      lugar_compra,
      id: result.insertId,
      message: "subido",
    });
    return res.status(200).json("subido");
  } catch (error) {
    console.log(error);
    return res.status(500).json("error");
  }
});

export default handler;
