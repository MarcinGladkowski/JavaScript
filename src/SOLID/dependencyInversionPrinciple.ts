/**
 * Principle violation
 */
class XMLHttpService extends XMLHttpRequestService {}

class Http {
    /**
     *
     * @param xmlhttpService XMLHttpService
     */
    constructor(xmlhttpService: XMLHttpService) {}

    get(url, options) {
        this.xmlhttpService.request(url, 'GET')
    }
}

/**
 * Proper solution
 */
interface Connection {
    request(url: string, opts:any);
}

class Http {
    constructor(private httpConnection: Connection) { }
    get(url: string , options: any) {
        this.httpConnection.request(url,'GET');
    }
    post() {
        this.httpConnection.request(url,'POST');
    }
    //...
}

class XMLHttpService implements Connection {
    const xhr = new XMLHttpRequest();
    //...
    request(url: string, opts:any) {
        xhr.open();
        xhr.send();
    }
}