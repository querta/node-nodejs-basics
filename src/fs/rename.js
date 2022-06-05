import * as fs from 'fs/promises';

const checkExist = async (path) => {
    try {
        await fs.access(path);
        return true;
    } catch {
        return false;
    }
}

export const rename = async () => {
    try {
        if (!(await checkExist('./files/wrongFilename.txt')) || await checkExist('./files/properFilename.md'))
            console.log(new Error("FS operation failed"));    
        else {
            await fs.rename('./files/wrongFilename.txt', './files/properFilename.md');
        }
    } catch(err) {
        console.error(err);        
    }
};
rename();