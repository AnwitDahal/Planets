import fs from 'fs/promises';
import nodePickle from 'node-pickle';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function jsonToPickle(jsonData: any, outputPicklePath: string): Promise<void> {
    try {
        const pickledData = await nodePickle.dumps(jsonData);
        await fs.writeFile(outputPicklePath, pickledData);
    } catch (error) {
        throw new Error(`Failed to convert JSON to pickle: ${error.message}`);
    }
}