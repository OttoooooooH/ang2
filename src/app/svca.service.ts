import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SvcaService {

data:any;

  constructor(http:HttpClient) {
  http.get('http://localhost:4200/api/data.json')
    .subscribe(result=>{
      this.data=result;
    })
  }

  runn = 'running';

  run() {
    console.log(this.runn)
  }

}
