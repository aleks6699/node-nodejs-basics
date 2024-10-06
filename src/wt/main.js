import { Worker } from "worker_threads";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
  const coresCount = os.cpus().length;
  const promises = [];
  for (let i = 0; i < coresCount; i += 1) {
    const promise = new Promise((resolve, reject) => {
      const worker = new Worker(path.resolve(__dirname, "worker.js"), {
        workerData: i + 10,
      });
      worker.on("message", (value) => {
        resolve({
          status: "resolved",
          data: value,
        });
      });
      worker.on("error", (_) => {
        reject({
          status: "error",
          data: null,
        });
      });
    });
    promises.push(promise);
  }
  const result = await Promise.allSettled(promises).then((res) =>
    res.map((obj) => (obj.status === "fulfilled" ? obj.value : obj.reason))
  );
  console.log(result);
};

await performCalculations();
