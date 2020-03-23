import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprezyComponent } from './imprezy.component';

describe('ImprezyComponent', () => {
  let component: ImprezyComponent;
  let fixture: ComponentFixture<ImprezyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprezyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprezyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
