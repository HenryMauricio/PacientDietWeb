import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionListComponent } from './operacion-list.component';

describe('OperacionListComponent', () => {
  let component: OperacionListComponent;
  let fixture: ComponentFixture<OperacionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
