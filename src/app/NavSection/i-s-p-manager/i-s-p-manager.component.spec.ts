import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ISPManagerComponent } from './i-s-p-manager.component';

describe('ISPManagerComponent', () => {
  let component: ISPManagerComponent;
  let fixture: ComponentFixture<ISPManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ISPManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ISPManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
