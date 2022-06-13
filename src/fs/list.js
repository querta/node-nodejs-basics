import * as fs from 'fs/promises';

const checkExist = async (path) => {
    try {
        await fs.access(path);
        return true;
    } catch {
        return false;
    }
}

export const list = async () => {
    try {
        if (!(await checkExist('./files')))
            console.log(new Error("FS operation failed"));
        else {
            const files = await fs.readdir('./files');
            files.forEach(file => {
                console.log(file);
            }); 
        }
    } catch(err) {
        console.error(err);
    }
};
list();