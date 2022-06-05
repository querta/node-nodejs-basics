import * as fs from 'fs/promises';

const checkExist = async (path) => {
    try {
        await fs.access(path);
        return true;
    } catch {
        return false;
    }
}

export const create = async () => {
    const file = './files/fresh.txt';
    if ((await checkExist(file))) {
        console.log(new Error("FS operation failed"));
    } else {
        try {
            await fs.writeFile(file, 'I am fresh and young');
        } catch(err) {
            console.error(error.message);
        }
    }
    // fs.access(file)
    //     .then(() => console.log(new Error("FS operation failed")))
    //     .catch(() => {
    //         fs.writeFile(file, 'I am fresh and young', (err) => {
    //             console.log(new Error(err));
    //         });
    //     });
};
create();