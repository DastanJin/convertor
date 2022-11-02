import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextToBaseComponent } from './text-to-base.component';

describe('TextToBaseComponent', () => {
  let component: TextToBaseComponent;
  let fixture: ComponentFixture<TextToBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextToBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextToBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
