import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { CptaComponent } from './cpta/cpta.component';
import {ModaModule} from "./moda/moda.module";


@NgModule({
  declarations: [
    AppComponent,
    CptaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
