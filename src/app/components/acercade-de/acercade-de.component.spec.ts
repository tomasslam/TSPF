import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercadeDeComponent } from './acercade-de.component';

describe('AcercadeDeComponent', () => {
  let component: AcercadeDeComponent;
  let fixture: ComponentFixture<AcercadeDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercadeDeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercadeDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
