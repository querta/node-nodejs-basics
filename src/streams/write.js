import { open } from 'fs/promises';

export const write = async () => {
    try {
        const file = await open('./files/fileToWrite.txt', 'w');
        const stream = file.createWriteStream();
        process.stdin.pipe(stream);
    } catch (err) {
        console.error(err);
    }
};

write();