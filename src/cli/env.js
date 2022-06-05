export const parseEnv = () => {
    const env = process.env;
    let result = "";
    for (let key in env){
        if (!key.indexOf('RSS_'))
            result += `${key}=${env[key]}; `;
    }
    console.log(result.slice(0, -2));
};

parseEnv();