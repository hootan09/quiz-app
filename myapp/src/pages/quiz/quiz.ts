import { Component } from '@angular/core';

import { NavController , NavParams } from 'ionic-angular';

import { QuizService } from '../../app/services/quiz.service';

@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html'
})
export class QuizPage {
    items: any;
    param: any;

    constructor(public navCtrl: NavController , private quizservice:QuizService , public params:NavParams) {
       this.param = params.get('item');
       if(this.param){ this.getQuiz(); }

  }

getQuiz(){
    this.quizservice.getQuiz(this.param).subscribe(response => {
        this.items =response.quizs;
        console.log(this.items);
       //this.test =  JSON.stringify(response);
    });
}



}