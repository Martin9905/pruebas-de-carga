import http from 'k6/http';
import { sleep, check } from "k6";
import {RequestBuilder} from "../request/request-builder";

class Scenario1Helper {

    constructor(url_service, data_csv_request, headers) {
        this._url_service = url_service
        this._headers = headers
        this._data_csv_request = data_csv_request
    }

    sendTask(format) {
        return this._data_csv_request.forEach(item => {
            const taskConversionRequest =  new RequestBuilder();
            const payloadRequest = JSON.stringify(
                taskConversionRequest.buildTaskRequestBatch(item, format)
            );
            const response =  http.post(this._url_service, JSON.stringify(payloadRequest), this._headers);
            check(response, {
                "Status was 200": r => r.status == 200,
            })
            sleep(1);

        })

    }

}

export {Scenario1Helper}