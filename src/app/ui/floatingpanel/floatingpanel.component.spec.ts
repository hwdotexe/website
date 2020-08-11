import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingpanelComponent } from './floatingpanel.component';

describe('FloatingpanelComponent', () => {
  let component: FloatingpanelComponent;
  let fixture: ComponentFixture<FloatingpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
