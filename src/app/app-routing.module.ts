import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth-guard.service';
import { LoginpageComponent } from './Loginpage/loginpage/loginpage.component';
import { CountryManagerComponent } from './NavSection/country-manager/country-manager.component';
import { DashboardComponent } from './NavSection/dashboard/dashboard.component';
import { DomainManagerComponent } from './NavSection/domain-manager/domain-manager.component';
import { FeedManagerComponent } from './NavSection/feed-manager/feed-manager.component';
import { ISPManagerComponent } from './NavSection/i-s-p-manager/i-s-p-manager.component';
import { PublisherRuleComponent } from './NavSection/publisher-rule/publisher-rule.component';
import { ReferrerManagerComponent } from './NavSection/referrer-manager/referrer-manager.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: 'login',component: LoginpageComponent },

  {
    path: '',
    canActivate:[AuthGuard],
    component: DashboardComponent,
    children: [
      {
        path: 'dashboard',
        
        redirectTo: 'publisher-rule',
        pathMatch: 'full',
      },
      { path: 'publisher-rule', component: PublisherRuleComponent },
      { path: 'feed-manager',component: FeedManagerComponent },
      { path: 'referrer-manager', component: ReferrerManagerComponent },
      { path: 'search-pixel-manager', component: ISPManagerComponent },
      { path: 'country-manager', component: CountryManagerComponent },
      { path: 'domain-manager', component: DomainManagerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
