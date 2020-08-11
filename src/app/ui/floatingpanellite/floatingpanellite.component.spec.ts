import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingpanelliteComponent } from './floatingpanellite.component';

describe('FloatingpanelliteComponent', () => {
  let component: FloatingpanelliteComponent;
  let fixture: ComponentFixture<FloatingpanelliteComponent>;

  beforeEach(async(() => {
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
