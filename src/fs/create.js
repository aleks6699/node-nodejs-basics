import { join } from "path";
import { existsSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const create = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filePath = join(__dirname, "files", "fresh.txt");
  const content = "I am fresh and young";

  try {
    if (existsSync(filePath)) {
      throw new Error("FS operation failed");
    }

    writeFileSync(filePath, content, { flag: "wx" });
  } catch (error) {
    console.error(error.message);
  }
};

await create();
