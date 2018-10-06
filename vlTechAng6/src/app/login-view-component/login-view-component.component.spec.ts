import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginViewComponentComponent } from './login-view-component.component';

describe('LoginViewComponentComponent', () => {
  let component: LoginViewComponentComponent;
  let fixture: ComponentFixture<LoginViewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginViewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
