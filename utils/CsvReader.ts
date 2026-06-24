import * as fs from 'fs';
import { parse } from 'csv-parse/sync';
import path from 'path';
export class CsvReader {

    static getData(fileName: string): any[] {

         const filePath = path.join(process.cwd(), 'data', fileName);
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        const records = parse(fileContent, {
            columns: true,
            skip_empty_lines: true,
        });

        return records;
    }
}