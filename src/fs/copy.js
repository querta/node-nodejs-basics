import * as fs from 'fs/promises';

const checkExist = async (path) => {
    try {
        await fs.access(path);
        return true;
    } catch {
        return false;
    }
}

export const copy = async () => {
    try{
        if (!(await checkExist('./files')) || await checkExist('./files_copy'))
            console.log(new Error("FS operation failed"));
        else {
            await fs.mkdir('./files_copy');
            const files = await fs.readdir('./files');
            files.forEach(file => {
                fs.copyFile(`./files/${file}`, `./files_copy/${file}`);
            });
        }
    } catch(err) {
        console.log(new Error(err));
    }
};

copy();