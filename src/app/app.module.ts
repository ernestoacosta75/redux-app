import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ChildrenComponent } from './components/counter/children/children.component';
import { NephewComponent } from './components/counter/nephew/nephew.component';

import { counterReducer } from './components/counter/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ChildrenComponent,
    NephewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // To register the state container within the application, you must
    // import the reducers and use the StoreModule.forRoot function
    StoreModule.forRoot({counter: counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
