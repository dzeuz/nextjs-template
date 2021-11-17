const path = require("path");

const config = {
    plugins: [],
    settings: {
        reactStrictMode: true,
        webpack: (config) => {
            config.resolve.alias = {
                ...config.resolve.alias,
                "@": path.join(__dirname, "src"),
                "@public": path.join(__dirname, "public"),
            };

            return config;
        },
    },
};

const pipe = (funcs) => (value) => funcs.reduce((v, f) => f(v), value);
module.exports = pipe(config.plugins)(config.settings);
