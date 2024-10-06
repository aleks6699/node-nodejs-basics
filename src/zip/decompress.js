import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import zlib from "zlib";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  const inputPath = path.join(__dirname, "files", "archive.gz");
  const outputPath = path.join(__dirname, "files", "fileToCompress.txt");
  const readStream = fs.createReadStream(inputPath);

  const writeStream = fs.createWriteStream(outputPath);

  const gunzipStream = zlib.createGunzip();
  readStream.pipe(gunzipStream).pipe(writeStream);
  writeStream.on("finish", () => {
    console.log("success decompress");
  });

  readStream.on("error", (err) => {
    console.error("Error during read: " + err);
  });

  gunzipStream.on("error", (err) => {
    console.error("Error during gunzip: " + err);
  });

  writeStream.on("error", (err) => {
    console.error("Error during write: " + err);
  });
};

await decompress();
