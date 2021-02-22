import { TestBed, waitForAsync } from '@angular/core/testing';
import { ScrollsComponent } from './scrolls.component';

describe('ScrollsComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ScrollsComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ScrollsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'scrolls'`, () => {
    const fixture = TestBed.createComponent(ScrollsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('scrolls');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ScrollsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('scrolls app is running!');
  });
});
