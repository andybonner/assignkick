
// const environment = "production";
const environment = "development";

const config = {
    production: {
        API_URL: "http://hosting_url/api"
    },
    development: {

        API_URL: "http://localhost:8080/api"
    }
};

Object.freeze(config);
export default config[environment]