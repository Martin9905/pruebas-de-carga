
class RequestBuilder {

    buildTaskRequest(fileName, format){
        return {
            filename: fileName,
            newFormat: format
        }
    }

    buildTaskRequestBatch(item, format){
        return {
            filename: item.filename,
            newFormat: format
        }
    }

}
export {RequestBuilder}