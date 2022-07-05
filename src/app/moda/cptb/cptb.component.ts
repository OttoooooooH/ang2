import {Component, OnInit} from '@angular/core';
import {SvcaService} from "../../svca.service";

@Component({
  selector: 'app-cptb',
  templateUrl: './cptb.component.html',
  styleUrls: ['./cptb.component.css']
})
export class CptbComponent implements OnInit {

  constructor(public svca: SvcaService) {
  }

  ngOnInit(): void {
    this.svca.run();
  }

}
