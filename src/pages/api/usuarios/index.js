import nc from "next-connect";
import { pool } from "@/config/db";
import fs from "fs-extra";
import multer from "multer";
import path from "path";
import sharp from "sharp";

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

    // Procesar la imagen utilizando Sharp y guardarla en una ubicación temporal
    const tempOutputPath = "./public/" + "modif" + req.file.filename;
    await sharp(req.file.path).resize(800, null).toFile(tempOutputPath);

    // Reemplazar el archivo original con el archivo procesado
    fs.unlinkSync(req.file.path);
    fs.renameSync(tempOutputPath, req.file.path);

    return res.status(200).json({
      nombre,
      apellido,
      telefono,
      correo,
      lugar_compra,
      id: result.insertId,
      message: "subido",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("error");
  }
});

export default handler;
