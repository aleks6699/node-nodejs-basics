import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  const filesDir = path.join(__dirname, "files");

  if (!fs.existsSync(filesDir)) {
    throw new Error("FS operation failed");
  }

  try {
    const files = await fs.promises.readdir(filesDir);
    console.log(files);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
