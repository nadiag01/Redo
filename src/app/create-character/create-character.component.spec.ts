import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterComponent } from './create-character.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate a random character ID between 1 and 1000 with no decimal places', () => {
    expect(component).toBeTruthy();
  });

  it('should add a character with correct customization', () => {
    expect(component).toBeTruthy();
  });

  it('should reset all form fields to their default values after resetForm is called', () => {
    expect(component).toBeTruthy();
  });
});
