import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RafeComponent } from './rafe.component';

describe('RafeComponent', () => {
  let component: RafeComponent;
  let fixture: ComponentFixture<RafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RafeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
