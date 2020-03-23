import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Other Modules (installed via npm)
// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Angular Material
import { MatCardModule } from '@angular/material/card';
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
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
