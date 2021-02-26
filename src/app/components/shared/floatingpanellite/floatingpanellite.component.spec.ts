import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FloatingpanelliteComponent } from './floatingpanellite.component';

describe('FloatingpanelliteComponent', () => {
  let component: FloatingpanelliteComponent;
  let fixture: ComponentFixture<FloatingpanelliteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingpanelliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingpanelliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
