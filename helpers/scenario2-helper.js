import http from 'k6/http';
import { sleep, check } from "k6";
import {RequestBuilder} from "../request/request-builder";

class Scenario2Helper {

    constructor(url_service,  headers) {
        this._url_service = url_service
        this._headers = headers
    }

    sendTasks(filename, format) {
        const taskConversionRequest =  new RequestBuilder();
        const payloadRequest = taskConversionRequest.buildTaskRequest(filename, format);
        this.sendClient(payloadRequest);
    }

    sendClient(payloadRequest){
        const response =  http.post(this._url_service, JSON.stringify(payloadRequest), this._headers);
        check(response, {
            "Status was 200": r => r.status === 200,
            "Homepage body size is 5242880 bytes": r => r.body && r.body.length === 5242880
        })
        sleep(1);
    }

}

export {Scenario2Helper}