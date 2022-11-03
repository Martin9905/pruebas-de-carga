
class Constants {

    static ACCEPT_HEADER(){
        return 'application/json'
    }

    static CONTENT_TYPE(){
        return 'application/json'
    }

    static URL_SERVICE(){
        return 'http://localhost:5000/api/task'
    }

    static URL_CLOUD_SERVICE(){
        return '35.226.108.174:5000/api/task'
    }

    static AUTHENTICATION_TOKEN(){
        return 'Bearer '
    }

}
export { Constants}