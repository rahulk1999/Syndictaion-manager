import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  navs = [
    { url: 'publisher-rule', content: "Publisher Rule"},
    { url: 'feed-manager', content: "Feed Manager" },
    { url: 'referrer-manager', content: "Referrer Manager" },
    { url: 'search-pixel-manager', content: "Search Pixel Manager" },
    { url: 'country-manager', content: "country manager" },
    { url: 'domain-manager', content: "Domain Manager" }
  ]
}
