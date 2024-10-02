import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rename = async () => {
  const filesDir = path.join(__dirname, "files", "wrongFilename.txt");
  const filesRenameDir = path.join(__dirname, "files", "properFilename.md");

  if (!fs.existsSync(filesDir) || fs.existsSync(filesRenameDir)) {
    throw new Error("FS operation failed");
  }

  await fs.promises.rename(filesDir, filesRenameDir);
};

await rename();
