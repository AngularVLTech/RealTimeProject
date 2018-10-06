import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogViewComponentComponent } from './catalog-view-component.component';

describe('CatalogViewComponentComponent', () => {
  let component: CatalogViewComponentComponent;
  let fixture: ComponentFixture<CatalogViewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogViewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
