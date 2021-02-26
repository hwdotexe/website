import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WidepanelComponent } from './widepanel.component';

describe('WidepanelComponent', () => {
  let component: WidepanelComponent;
  let fixture: ComponentFixture<WidepanelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WidepanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
