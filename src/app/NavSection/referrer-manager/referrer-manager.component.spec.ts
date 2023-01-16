import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferrerManagerComponent } from './referrer-manager.component';

describe('ReferrerManagerComponent', () => {
  let component: ReferrerManagerComponent;
  let fixture: ComponentFixture<ReferrerManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferrerManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferrerManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
