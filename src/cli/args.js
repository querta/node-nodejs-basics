export const parseArgs = () => {
    let result = "";
    for (let i=2; i < process.argv.length; i++) {
        result += `${process.argv[i++]} is ${process.argv[i]}`;
        if (i != (process.argv.length -1))
            result += ', ';
    }
    console.log(result);
};

parseArgs();