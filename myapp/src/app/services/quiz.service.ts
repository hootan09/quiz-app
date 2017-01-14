import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class QuizService{
    http:any;
    baseUrl: String;
    bu: String;

    constructor(http:Http){
        this.http = http;
        this.baseUrl = 'http://127.0.0.1:3000/';
    }

    // getPosts(category, limit){
    //     return this.http.get(this.baseUrl+'/'+category+'/top.json?limit='+limit)
    //         .map(res => res.json());
    // }

    //get the list of quiz from server
    getQuiz(){
        return this.http.get(this.baseUrl+'api/LPIC1')
        .map(res =>res.json());
    }
}