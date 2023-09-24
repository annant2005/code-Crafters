import { Component } from '@angular/core';
import { TranslateComponent } from './translate/translate.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codecrafters';
  constructor(private translate:TranslateService){
    this.translate.setDefaultLang('en');
  }
  switchLanguage(language : string){
    this.translate.use(language);
  }
}
