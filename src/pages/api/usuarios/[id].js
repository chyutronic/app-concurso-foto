export default function handler(req, res) {
  return res.status(200).json("Obteniendo un usuario..." + req.query.id);
}
