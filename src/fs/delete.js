import * as fs from 'fs/promises';

const checkExist = async (path) => {
    try {
        await fs.access(path);
        return true;
    } catch {
        return false;
    }
}


export const remove = async () => {
    try {
        if (!(await checkExist('./files/fileToRemove.txt')))
            console.log(new Error("FS operation failed"));    
        else 
            await fs.unlink('./files/fileToRemove.txt');
    } catch(err) {
        console.error(err);        
    }
};
remove();