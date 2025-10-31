import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const read = async () => {
  const filePath = path.join(__dirname, "files", "fileToRead.txt");

  if (!fs.existsSync(filePath)) {
    throw new Error("FS operation failed");
  }

  try {
    const content = await fs.promises.readFile(filePath, "utf-8");
    console.log(content);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();
