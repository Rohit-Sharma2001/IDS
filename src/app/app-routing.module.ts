import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './home/home.component';
// import { ParcheseCardComponent } from './components/parchese-card/parchese-card.component';
import { CoursesCardComponent } from './courses/courses-card/courses-card.component';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { AdminComponent } from './components/admin/admin.component';
import { PrivacypolicyComponent } from './components/privacypolicy/privacypolicy.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { AuthGuard } from 'src/auth.guard';

const routes: Routes = [
  {path:"" ,component:AppComponent},
  {path:"login",component:LoginComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: "", component: HomeComponent },
    { path: "login", component:LoginComponent},
    { path: "register", component:RegisterComponent},
    {path:"courses",component:CoursesCardComponent},
    {path:"about",component:AboutComponent},
    {path:"admin",canActivate:[AuthGuard],component:AdminComponent},
    {path:"certificate", component:CertificateComponent},
    {path:"policy",component:PrivacypolicyComponent},
    {path:"contact", component:ContactComponent},
    {path:"about", component:AboutComponent},

  ], { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
