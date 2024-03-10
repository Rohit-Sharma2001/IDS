import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NgbDropdown} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './comman/header/header.component';
import { ClouserComponent } from './components/clouser/clouser.component';
import { CardsComponent } from './components/cards/cards.component'; 
import { SlidbarComponent } from './components/slidbar/slidbar.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { ParcheseCardComponent } from './components/parchese-card/parchese-card.component';
import { QoutesCarouselComponent } from './components/qoutes-carousel/qoutes-carousel.component';
import { FooterComponent } from './comman/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { CoursesCardComponent } from './courses/courses-card/courses-card.component';
import { UserProfilesComponent } from './users/user-profiles/user-profiles.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiCallingService } from './Service/api-calling.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { PrivacypolicyComponent } from './components/privacypolicy/privacypolicy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClouserComponent,
    CardsComponent,
    SlidbarComponent,
    ImageCardComponent,
    ParcheseCardComponent,
   
    QoutesCarouselComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AboutUsComponent,
    CoursesCardComponent,
    UserProfilesComponent,
    CertificateComponent,
    AdminComponent,
    PrivacypolicyComponent,
    DashboardComponent,
    ContactComponent,
    AboutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  ],
  providers: [ApiCallingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
