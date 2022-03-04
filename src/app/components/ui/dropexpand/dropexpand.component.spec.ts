import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DropExpandComponent } from './dropexpand.component';

describe('DropexpandComponent', () => {
  let component: DropExpandComponent;
  let fixture: ComponentFixture<DropExpandComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DropExpandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
