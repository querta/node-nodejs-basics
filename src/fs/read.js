import * as fs from 'fs/promises';

const checkExist = async (path) => {
    try {
        await fs.access(path);
        return true;
    } catch {
        return false;
    }
}


export const read = async () => {
    try {
        if (!(await checkExist('./files/fileToRead.txt')))
            console.log(new Error("FS operation failed"));
        else {
            const file = await fs.readFile('./files/fileToRead.txt', 'utf-8');
            console.log(file);
        }
    } catch(err) {
        console.error(err);
    }
};
read();