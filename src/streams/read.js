import { open } from 'fs/promises';

export const read = async () => {
    try {
        const file = await open('./files/fileToRead.txt', 'r');
        file.createReadStream().pipe(process.stdout);
    } catch (err) {
        console.error(err);
    }
};

read();