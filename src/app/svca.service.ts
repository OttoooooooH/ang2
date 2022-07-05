import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SvcaService {

  constructor() {
  }

  runn = 'running';

  run() {
    console.log(this.runn)
  }

}
