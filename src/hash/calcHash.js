import { createHash } from 'crypto';
import { readFile } from 'fs/promises';


export const calculateHash = async () => {
    try {
        const file = await readFile('./files/fileToCalculateHashFor.txt');
        const hash = await createHash('sha256');
        hash.update(file);
        console.log(`${hash.digest('hex')}`);
    } catch(err) {
        console.error(err);
    }
};

calculateHash();