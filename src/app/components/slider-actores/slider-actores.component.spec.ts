import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderActoresComponent } from './slider-actores.component';

describe('SliderActoresComponent', () => {
  let component: SliderActoresComponent;
  let fixture: ComponentFixture<SliderActoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderActoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderActoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
