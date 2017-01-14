import { Component } from '@angular/core';

import { CategoryPage } from '../category/category';
import { AboutPage } from '../about/about';
import { QuizPage } from '../quiz/quiz';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = CategoryPage;
  tab2Root: any = QuizPage;
  tab3Root: any = AboutPage;

  constructor() {

  }
}
