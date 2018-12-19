import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindDogComponent } from './find-dog/find-dog.component'
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'find', component: FindDogComponent },
  { path: 'home', component: HomeComponent},
  { path: 'report', component: ReportComponent},
  { path: 'contact', component: ContactUsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
