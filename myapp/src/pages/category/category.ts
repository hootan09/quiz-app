import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { QuizService } from '../../app/services/quiz.service';
import { QuizPage } from '../quiz/quiz';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {
  categores: any;

  constructor(public navCtrl: NavController , private quizservice:QuizService) {
    this.getCat();
  }

  getCat(){
        this.quizservice.getCat().subscribe(response => {
        this.categores =response;
        console.log(this.categores);
    });
  }


  viewItem(item){
    this.navCtrl.push(QuizPage , {
      item:item
    });
  }


}