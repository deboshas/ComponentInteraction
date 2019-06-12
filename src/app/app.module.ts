import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoterChildComponent } from './voter-child/voter-child.component';
import { VoterParentComponent } from './voter-parent/voter-parent.component';
import { CountdownTimerComponent } from './count-down-timer/count-down-timer.component';
import { CountDownParentComponent } from './count-down-parent/count-down-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    VoterChildComponent,
    VoterParentComponent,
    CountdownTimerComponent,
    CountDownParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
