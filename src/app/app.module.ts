import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildrenComponent } from './components/counter/children/children.component';
import { NephewComponent } from './components/counter/nephew/nephew.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildrenComponent,
    NephewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
