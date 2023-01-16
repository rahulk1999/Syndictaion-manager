import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherRuleComponent } from './publisher-rule.component';

describe('PublisherRuleComponent', () => {
  let component: PublisherRuleComponent;
  let fixture: ComponentFixture<PublisherRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherRuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublisherRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
