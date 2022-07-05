import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '這個是網頁標題';
  url = 'http://google.com';
  typein = '';
  boo=true;
  data=[{"id":"1","name":"Otto","pre-add":"fff"},{"id":"2","name":"Foc","pre-add":"ggg"}]

  click($event: MouseEvent) {
    console.log($event)

  }
}
