import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { CptaComponent } from './cpta/cpta.component';
import {ModaModule} from "./moda/moda.module";
import {SvcaService} from "./svca.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    CptaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModaModule,
    HttpClientModule
  ],
  providers: [SvcaService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
