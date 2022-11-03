import {Constants} from "../utils/constants";
import papaparse from "https://jslib.k6.io/papaparse/5.1.1/index.js";
import { SharedArray } from "k6/data";
import {Scenario1Helper} from "../helpers/scenario1-helper";

export const options = {
    thresholds: {
        http_req_failed: ['rate<0.01'],
        http_req_duration: ['p(95)<1500']
    },
    scenarios: {
        transactions: {
            executor: 'ramping-arrival-rate',
            stages: [
                { duration: '1m', target: 100 },
                { duration: '1m', target: 100 },
                { duration: '1m', target: 200 },
                { duration: '1m', target: 200 },
                { duration: '1m', target: 300 },
                { duration: '1m', target: 300 },
                { duration: '1m', target: 400 },
                { duration: '1m', target: 400 },
                { duration: '1m', target: 500 },
                { duration: '1m', target: 500 },
                { duration: '1m', target: 0 }
            ]
        }
    }
};

const datacsv = new SharedArray("requests", function () {
    return papaparse.parse(open('./request/escenario-1.csv'), { header: true }).data;
});

export default function main() {

    const params = {
        headers: {
            'Accept': Constants.ACCEPT_HEADER(),
            'Content-Type': Constants.CONTENT_TYPE(),
            'Authorization': Constants.AUTHENTICATION_TOKEN()
        }
    }

    const helper = new Scenario1Helper(Constants.URL_CLOUD_SERVICE(),datacsv,params)
    helper.sendTask('ogg')

}