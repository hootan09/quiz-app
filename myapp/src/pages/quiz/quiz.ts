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
    answer: any;
    answerMode: boolean;
    correctAns: boolean;
    checkans: any;
    qtype: string;
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
        this.score = 0;
        this.id = 0;
        this.quizOver = false;
        this.inProgress = true;
        this.getQuestion();
    };

    reset(){
        this.inProgress = false;
        this.score = 0;
    };

    getQuestion() {
        var q = this.getQuestions(this.id);
        if (q) {
            this.question = q.question;
            this.answer = q.answer;
            if(q.qtype == "Default")
            {
            switch (q.opcount) {
                case "2":
                    this.options = [q.op1 , q.op2];
                    break;
                case "3":
                    this.options = [q.op1 , q.op2, q.op3];
                    break;
                case "4":
                    this.options = [q.op1 , q.op2, q.op3 , q.op4];
                    break;  
                case "5":
                    this.options = [q.op1 , q.op2, q.op3 , q.op4 , q.op5];
                    break;           
                default:
                    break;
            }
            }
            if(q.qtype == "Boolean")
            {
                this.options = ["true" , "false" ];
                this.answer = q.true.toString();
            }
            if(q.qtype == "Blank")
            {
                this.checkans = "";
            }
            this.qtype = q.qtype;
            console.log(this.options);
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
        if(this.checkans == this.answer){
            this.score++;
            this.correctAns = true;
        }
        else{
            this.correctAns = false;
        }
        this.answerMode = false;
        console.log(this.checkans);
    };

    nextQuestion() {
        this.id++;
        this.getQuestion();
    }

    //reset();

    getQuestions(id:number):any {
        
    if (id < this.items.length) {
        return this.items[id];
    } else {
        return false;
    }
	};
    ///////
    //////


}