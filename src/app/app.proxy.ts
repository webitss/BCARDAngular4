import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AppProxy {
    constructor(private http: HttpClient) {

    }

    baseUrl = 'http://localhost:8431/Service1.svc/';

    // baseUrl = 'http://qa.webit-track.com/BCardWS/Service1.svc/';

    post(url: string, data): Promise<any> {
        console.log(data+" "+url);
        return this.http.post(`${this.baseUrl}${url}`, data).toPromise();
    }

}