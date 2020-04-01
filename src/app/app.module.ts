import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// Angular Forms (Template-driven forms)
import { FormsModule } from '@angular/forms';

// Other Modules (installed via npm)
// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Angular Material
import { MatCardModule } from '@angular/material/card';
// Angular Material Form
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
// Navigation Component
import { NavigationComponent } from './navigation/navigation.component';
// Angular Material components required by Navigation Component
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Customs components
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { SocialComponent } from './social/social.component';
// Subpages
import { WelcomeComponent } from './subpages/welcome/welcome.component';
import { MenuComponent } from './subpages/menu/menu.component';
import { GaleriaComponent } from './subpages/galeria/galeria.component';
import { KontaktComponent } from './subpages/kontakt/kontakt.component';
import { ImprezyComponent } from './subpages/imprezy/imprezy.component';
import { PrzyjeciaComponent } from './subpages/przyjecia/przyjecia.component';
import { PageNotFoundComponent } from './subpages/page-not-found/page-not-found.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    // Customs components
    CarouselComponent,
    FooterComponent,
    SocialComponent,
    // Subpages
    WelcomeComponent,
    MenuComponent,
    GaleriaComponent,
    KontaktComponent,
    ImprezyComponent,
    PrzyjeciaComponent,
    PageNotFoundComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // Font Awesome
    FontAwesomeModule,
    // Angular Material
    MatCardModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
