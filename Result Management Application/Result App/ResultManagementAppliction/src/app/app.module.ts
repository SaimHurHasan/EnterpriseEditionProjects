import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultDashboardComponent } from './result-dashboard/result-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './shared/api.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FrontComponent } from './front/front.component';
import { StudComponent } from './stud/stud.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import{  RouterModule} from '@angular/router'



@NgModule({
  declarations: [
    AppComponent,
    ResultDashboardComponent,
    LoginComponent,
    SignupComponent,
    FrontComponent,
    StudComponent,
    ScorecardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
