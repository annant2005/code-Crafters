import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('hi');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
  userInput: string = ''; 
  

  submitForm() {
    console.log(`Name: ${this.userInput}`);
    
  }
}
