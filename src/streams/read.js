import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import process from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const filePath = path.join(__dirname, "files", "fileToRead.txt");
  const readStream = fs.createReadStream(filePath);

  readStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  readStream.on("error", (error) => {
    throw new Error(error.message);
  });

  readStream.on("end", () => {
    console.log("File read successfully");
  });
};

await read();
