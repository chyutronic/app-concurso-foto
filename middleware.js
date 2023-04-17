import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(req) {
  const diskstorage = multer.diskStorage({
    destination: path.join(__dirname, "./public/imagenes"),
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });

  const fileUpload = multer({
    storage: diskstorage,
  }).single("imagen");

  return NextResponse.next();
}

export const config = {
  matcher: "/src/pages/api/usuarios",
};
