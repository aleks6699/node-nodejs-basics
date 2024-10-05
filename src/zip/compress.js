import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import zlib from "zlib";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compress = async () => {
  const filePath = path.join(__dirname, "files", "fileToCompress.txt");
  const readStream = fs.createReadStream(filePath);

  const writeStream = fs.createWriteStream(
    path.join(__dirname, "files", "archive.gz")
  );

  const gzip = zlib.createGzip();

  readStream.pipe(gzip).pipe(writeStream);

  writeStream.on("finish", () => {
    console.log("success compress");
  });
};

await compress();
