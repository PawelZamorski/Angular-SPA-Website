import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrzyjeciaComponent } from './przyjecia.component';

describe('PrzyjeciaComponent', () => {
  let component: PrzyjeciaComponent;
  let fixture: ComponentFixture<PrzyjeciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrzyjeciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrzyjeciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
