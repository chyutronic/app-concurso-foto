export default function handler(req, res) {
  if (req.method === "POST") {
    return res.status(200).json("Creando un usuario");
  } else {
    return res.status(200).json("Obteniendo Usuarios...");
  }
}
