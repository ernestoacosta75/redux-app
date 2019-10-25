import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { ChildrenComponent } from './components/counter/children/children.component';
import { NephewComponent } from './components/counter/nephew/nephew.component';

import { counterReducer } from './components/counter/store/counter.reducer';
import { environment } from '../environments/environment.prod';

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
    StoreModule.forRoot({counter: counterReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production,  // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
