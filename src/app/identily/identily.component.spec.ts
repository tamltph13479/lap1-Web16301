import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentilyComponent } from './identily.component';

describe('IdentilyComponent', () => {
  let component: IdentilyComponent;
  let fixture: ComponentFixture<IdentilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentilyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
