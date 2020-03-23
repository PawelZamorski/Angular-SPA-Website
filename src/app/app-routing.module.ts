import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Subpages
// Welcome page
import { WelcomeComponent } from './subpages/welcome/welcome.component';
// Other
import { MenuComponent } from './subpages/menu/menu.component';
import { GaleriaComponent } from './subpages/galeria/galeria.component';
import { KontaktComponent } from './subpages/kontakt/kontakt.component';
import { ImprezyComponent } from './subpages/imprezy/imprezy.component';
import { PrzyjeciaComponent } from './subpages/przyjecia/przyjecia.component';
// PageNotFound
import { PageNotFoundComponent } from './subpages/page-not-found/page-not-found.component';

const routes: Routes = [
  // Welcome Page
  { path: 'ugoni', component: WelcomeComponent },
  // Other
  { path: 'menu', component: MenuComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'imprezy', component: ImprezyComponent },
  { path: 'przyjecia', component: PrzyjeciaComponent },
  // Redirect To
  { path: '', redirectTo: '/ugoni', pathMatch: 'full' },
  // PageNotFound
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
