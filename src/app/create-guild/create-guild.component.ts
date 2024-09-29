
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="create-guild">
   <h2>Create a Guild</h2>
   <form [formGroup]="guildForm" (ngSubmit)="submit()">
   <!-- Guild Name -->
   <label for="guildName">Guild Name:</label>
   <input type="text" id="guildName" name="guildName" formControlName="guildName">
   <!-- Description -->
   <label for="description">Description:</label>
   <textarea id="description" name="description" formControlName="description"></textarea>
   <!-- Type -->
   <label for="type">Type:</label>
   <select id="type" name="type" formControlName="type">
      <option value="" disabled>Select Type</option>
      <option value="Competitive">Competitive</option>
      <option value="Casual">Casual</option>
      <option value="Social">Social</option>
      <option value="Educational">Educational</option>
   </select>
   <!-- Notification Preference -->
   <label>Notification Preference:</label>
   <label>
   <input type="radio" name="notificationPreference" formControlName="notificationPreference" value="Email" > Email
   </label>
   <label>
   <input type="radio" name="notificationPreference" formControlName="notificationPreference" value="SMS" > SMS
   </label>
   <label>
   <input type="radio" name="notificationPreference" formControlName="notificationPreference" value="In-App" > In-App
   </label>
   <!-- Accept Terms -->
   <label>
   <input type="checkbox" name="acceptTerms" formControlName="acceptTerms" > I accept the terms and conditions.
   </label>
   <!-- Submit Button -->
   <button type="submit" [disabled]="!guildForm.valid">Create Guild</button>
   </form>
</div>
<!-- Display Created Guilds -->
<div ="guilds.length >
   0">
   <h3>Created Guilds</h3>
   <ul>
      <li>
         <!-- <strong>{{ guild.guildName }}</strong> - {{ guild.type }} - {{ guild.notificationPreference }} -->
         <!-- <p>{{ guild.description }}</p> -->
      </li>
   </ul>
</div>
  `,
  styles: `.create-guild {
    max-width: 600px;
    margin: 0 auto;
  }

  .create-guild form {
    display: flex;
    flex-direction: column;
  }

  .create-guild label {
    margin: 5px 0;
  }

  .create-guild input, .create-guild select, .create-guild textarea {
    margin-bottom: 10px;
    padding: 8px;
  }

  button {
    margin-top: 15px;
  }

  h3 {
    margin-top: 30px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  `
})
export class CreateGuildComponent {
  constructor(private fb: FormBuilder) {}

  guildForm: FormGroup = this.fb.group({
    guildName: [null, Validators.compose([Validators.required])],
    description: [null, Validators.compose([Validators.required])],
    type: [null, Validators.compose([Validators.required])],
    acceptTerms: [false, Validators.compose([Validators.required])],
    notificationPreference: [null, Validators.compose([Validators.required])]
  })

  submit() {

  }
}
