import { fork } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
  const filePath = path.join(__dirname, "files", "script.js");

  const childProcess = fork(filePath, args, {
    stdio: ["pipe", "pipe", "pipe", "ipc"],
  });

  process.stdin.pipe(childProcess.stdin);

  childProcess.stdout.pipe(process.stdout);

  childProcess.on("error", (error) => {
    console.error("Error in child process:", error);
  });

  childProcess.on("exit", (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

spawnChildProcess(["h", "d", "f", "e"]);
