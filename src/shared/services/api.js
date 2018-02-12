const endpoint = process.env.REACT_APP_API_ENDPOINT;

const httpService = {
  get(path) {
    return fetch(`${endpoint}/${path}`);
  },
  post() {},
  put() {},
  delete() {},
};

export default httpService;
