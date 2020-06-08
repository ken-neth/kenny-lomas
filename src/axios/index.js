import axios from "axios";
const dotenv = require("dotenv");
dotenv.config();

// let API_URL = process.env.API_URL
let API_URL = "https://steet-art-tracker-express.herokuapp.com";
// let API_URL ='http://localhost:8080'

export function configureAxiosRequest(api, payload) {
  const axiosRequest = {
    method: "GET",
    url: API_URL + api,
    responseType: "json",
    headers: { "Access-Control-Allow-Origin": "*" },
    ...payload
  };
  return axiosRequest;
}

export function APIFetchToAction(dispatch, api, payload, action) {
  const axiosRequest = configureAxiosRequest(api, payload);

  axios({ ...axiosRequest })
    .then(res => dispatch({ type: action.SUCCESS, data: res.data }))
    .catch(err => dispatch({ type: action.FAILURE, data: err }));
}

export default {
  APIFetchToAction: APIFetchToAction,
  configureAxiosRequest: configureAxiosRequest
};
