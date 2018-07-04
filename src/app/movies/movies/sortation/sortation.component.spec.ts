import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortationComponent } from './sortation.component';

describe('SortationComponent', () => {
  let component: SortationComponent;
  let fixture: ComponentFixture<SortationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
