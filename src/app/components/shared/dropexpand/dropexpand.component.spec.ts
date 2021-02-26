import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DropexpandComponent } from './dropexpand.component';

describe('DropexpandComponent', () => {
  let component: DropexpandComponent;
  let fixture: ComponentFixture<DropexpandComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DropexpandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropexpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
