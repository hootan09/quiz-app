import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { QuizService } from '../../app/services/quiz.service';

@Component({
    selector: 'page-quiz',
    templateUrl: 'quiz.html'
})
export class QuizPage {
    items: any;
    param: any;
    ///////////
    id: number;
    quizOver: boolean;
    inProgress: boolean;
    score: number;
    question: string;
    options: string[];
    answer: number;
    answerMode: boolean;
    correctAns: boolean;
    ///////////

    constructor(public navCtrl: NavController, private quizservice: QuizService, public params: NavParams) {
        this.param = params.get('item');
        if (this.param) { this.getQuiz(); }
    }
    getQuiz() {
        this.quizservice.getQuiz(this.param).subscribe(response => {
            this.items = response.quizs;
            console.log(this.items);
            //this.test =  JSON.stringify(response);
        });
    }
    //////////
    /////////
    ////////

    start() {
        this.id = 0;
        this.quizOver = false;
        this.inProgress = true;
        //getQuestion();
    };

    reset(){
        this.inProgress = false;
        this.score = 0;
    };

    getQuestion() {
        var q = this.getQuestions(this.id);
        if (q) {
            this.question = q.question;
            this.options = q.options;
            this.answer = q.answer;
            this.answerMode = true;            
        } else {
            this.quizOver = true;
        }
    };

    checkAnswer() {
        // if (!$('input[name=answer]:checked').length) return;

        // var ans = $('input[name=answer]:checked').val();

        // if (ans == this.options[this.answer]) {
        //     this.score++;
        //     this.correctAns = true;
        // } else {
        //     this.correctAns = false;
        // }

        // this.answerMode = false;
    };

    nextQuestion() {
        this.id++;
        this.getQuestion();
    }

    //reset();

    getQuestions(id:number):any {
	var questions = [
		{
			question: "Which is the largest country in the world by population?",
			options: ["India", "USA", "China", "Russia"],
			answer: 2
		},
		{
			question: "When did the second world war end?",
			options: ["1945", "1939", "1944", "1942"],
			answer: 0
		},
		{
			question: "Which was the first country to issue paper currency?",
			options: ["USA", "France", "Italy", "China"],
			answer: 3
		},
		{
			question: "Which city hosted the 1996 Summer Olympics?",
			options: ["Atlanta", "Sydney", "Athens", "Beijing"],
			answer: 0
		},
		{	
			question: "Who invented telephone?",
			options: ["Albert Einstein", "Alexander Graham Bell", "Isaac Newton", "Marie Curie"],
			answer: 1
		}
	];

    if (id < questions.length) {
        return questions[id];
    } else {
        return false;
    }
	};
    ///////
    //////


}