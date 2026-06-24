import fs from 'fs';
import  path from 'path';

export class JsonReader {

    static getTestData(fileName: string): any {
        const filePath = path.join(process.cwd(), 'data', fileName);

        const jsonData = fs.readFileSync(filePath, 'utf-8');

        return JSON.parse(jsonData);
    }
}