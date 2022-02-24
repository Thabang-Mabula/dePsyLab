import { Component } from '@angular/core';
import { AppEnum } from './common-items/constants/app-enum.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = AppEnum.APP_TITLE;
}
