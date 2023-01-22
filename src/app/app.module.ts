import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublisherRuleComponent } from './NavSection/publisher-rule/publisher-rule.component';
import { FeedManagerComponent } from './NavSection/feed-manager/feed-manager.component';
import { ReferrerManagerComponent } from './NavSection/referrer-manager/referrer-manager.component';
import { ISPManagerComponent } from './NavSection/i-s-p-manager/i-s-p-manager.component';
import { CountryManagerComponent } from './NavSection/country-manager/country-manager.component';
import { DomainManagerComponent } from './NavSection/domain-manager/domain-manager.component';
import { LoginpageComponent } from './Loginpage/loginpage/loginpage.component';
import { DashboardComponent } from './NavSection/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    PublisherRuleComponent,
    FeedManagerComponent,
    ReferrerManagerComponent,
    ISPManagerComponent,
    CountryManagerComponent,
    DomainManagerComponent,
    LoginpageComponent,
    DashboardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,ReactiveFormsModule],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
