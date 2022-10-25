import {Constants} from "../utils/constants";
import {Scenario2Helper} from "../helpers/scenario2-helper";

export const options = {
    thresholds: {
        http_req_duration: ['p(95)<600']
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

export default function main() {

    const params = {
        headers: {
            'Accept': Constants.ACCEPT_HEADER(),
            'Content-Type': Constants.CONTENT_TYPE(),
            'Authorization': Constants.AUTHENTICATION_TOKEN()
        }
    }

    const helper = new Scenario2Helper(Constants.URL_SERVICE(),params)
    helper.sendTasks('song.mp3', 'ogg')

}