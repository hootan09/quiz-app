import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { QuizService } from '../../app/services/quiz.service';

@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html'
})
export class QuizPage {
    items: any;
    test = 'سلام دنیا';

    constructor(public navCtrl: NavController , private quizservice:QuizService) {
       this.getQuiz();        
  }

getQuiz(){
    this.quizservice.getQuiz().subscribe(response => {
        this.items =response;
        console.log(this.items);
        this.test =  JSON.stringify(response);
    });
}



}