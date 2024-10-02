import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { pickleToJson } from './pickleToJson';
import { jsonToPickle } from './jsonToPickle';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/pickle-to-json', async (req: Request, res: Response) => {
    try {
        console.log('log 1');
        const pickleFilePath = path.join(__dirname, 'test_matrix.pkl');
        console.log('log 2');
        const jsonData = await pickleToJson();
        console.log('log 3');
        res.json({
            message: 'Pickle file converted to JSON successfully',
            data: jsonData
        });
    } catch (error) {
        console.error('Error converting pickle to JSON:', error);
        res.status(500).json({
            error: 'Failed to convert pickle to JSON',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
});

router.post('/json-to-pickle', async (req: Request, res: Response) => {
    try {
        const jsonData = req.body;
        if (!jsonData) {
            throw new Error('No JSON data provided');
        }

        const outputPicklePath = path.join(__dirname, 'output_matrix.pkl');
        await jsonToPickle(jsonData, outputPicklePath);
        
        res.json({
            message: 'JSON converted to pickle file successfully',
            pickleFilePath: outputPicklePath
        });
    } catch (error) {
        console.error('Error converting JSON to pickle:', error);
        res.status(500).json({
            error: 'Failed to convert JSON to pickle',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
});

export default router;