import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSongFormComponent } from './edit-song-form.component';

describe('EditSongFormComponent', () => {
  let component: EditSongFormComponent;
  let fixture: ComponentFixture<EditSongFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSongFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSongFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
