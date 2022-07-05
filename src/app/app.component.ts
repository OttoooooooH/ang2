import {Component, Input} from '@angular/core';
import {combineLatest} from "rxjs";
import {SvcaService} from "./svca.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 // datad:any;

  constructor(public datasvc: SvcaService) {
    // this.datad = datasvc.data
    setTimeout(() => {
      this.title = '這是兩秒後更新的標題'
    }, 2000)
  }

  title = '這個是網頁標題';
  url = 'http://google.com';
  typein = '';
  boo = true;

  @Input()
  newiput: any;
  dateA: any;
  dateB: any;

  d = new Date();


  getDateString(d: any) {
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    console.log(year + month + day + hour + min + sec)
    return year + month + day + hour + min + sec;

  }

  click($event: MouseEvent) {
    for (let i = 0; i < 2; i++) {
      console.log($event)
      console.log(this.typein)
      console.log(typeof this.typein)
      console.log(this.typein.valueOf())
      console.log(this.typein.length)
      console.log(typeof this.dateA)
      console.log(this.dateB)
      console.log(typeof $event)


    }
    this.getDateString(this.d);
    this.title = '按下後改變的標題'
  }
}
