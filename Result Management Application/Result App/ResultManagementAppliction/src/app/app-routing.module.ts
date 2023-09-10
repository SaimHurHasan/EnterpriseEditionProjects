import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontComponent } from './front/front.component';
import { LoginComponent } from './login/login.component';
import { ResultDashboardComponent } from './result-dashboard/result-dashboard.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { SignupComponent } from './signup/signup.component';
import { StudComponent } from './stud/stud.component';

const routes: Routes = [
  { path:'',redirectTo:'front',pathMatch:'full'},
  { path:'login',component:LoginComponent},
  { path:'signup',component:SignupComponent},
  { path:'front',component:FrontComponent},
  { path:'stud',component:StudComponent},
  { path:'dashboard',component:ResultDashboardComponent},
  { path:'scorecard/:id',component:ScorecardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
