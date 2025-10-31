import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  const filesDir = path.join(__dirname, "files");
  const filesCopyDir = path.join(__dirname, "files_copy");

  try {
    if (!fs.existsSync(filesDir)) {
      throw new Error("FS operation failed: files directory does not exist");
    }

    if (fs.existsSync(filesCopyDir)) {
      throw new Error(
        "FS operation failed: files_copy directory already exists"
      );
    }

    await fs.promises.cp(filesDir, filesCopyDir, { recursive: true });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await copy();
