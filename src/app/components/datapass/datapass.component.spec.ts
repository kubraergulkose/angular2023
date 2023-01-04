import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapassComponent } from './datapass.component';

describe('DatapassComponent', () => {
  let component: DatapassComponent;
  let fixture: ComponentFixture<DatapassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatapassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatapassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
