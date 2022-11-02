import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FileToBaseComponent } from './file-to-base.component';

describe('FileToBaseComponent', () => {
  let component: FileToBaseComponent;
  let fixture: ComponentFixture<FileToBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileToBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileToBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
