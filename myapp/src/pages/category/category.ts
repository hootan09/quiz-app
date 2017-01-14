import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { QuizService } from '../../app/services/quiz.service';

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

}