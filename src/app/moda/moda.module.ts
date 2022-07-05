import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CptbComponent} from './cptb/cptb.component';
import {CptcComponent} from './cptc/cptc.component';
import {SvcaService} from "../svca.service";


@NgModule({
  declarations: [
    CptbComponent,
    CptcComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CptbComponent,
    CptcComponent
  ],
  providers: [
    SvcaService
  ]
})
export class ModaModule {
}
