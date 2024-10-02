import fs from "fs/promises";
import nodePickle from "node-pickle";
import path from "path";
import { fileURLToPath } from "url";

// Get current file's directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Construct the pickle file path relative to this file's directory
const pickleFilePath = path.join(__dirname, "test_matrix.pkl");

export async function pickleToJson(): Promise<any> {
  try {
    // Read and load the pickle file
    console.log("log 2.1");
    const pickledData = await fs.readFile(pickleFilePath);
    // console.log(pickleFilePath);
    console.log("log 2.2");
    const jsonData = await nodePickle.loads(pickledData);
    console.log("log 2.3");
    return jsonData;
  } catch (error) {
    throw new Error(`Failed to convert pickle to JSON: ${error.message}`);
  }
}
