import { Component } from '@angular/core';

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [],
  template: `
    <div class="create-guild">
  <h2>Create a Guild</h2>
  <!-- <form (ngSubmit)="Submit()" #guildForm="ngForm"> -->

    <!-- Guild Name -->
    <label for="guildName">Guild Name:</label>
    <input type="text" id="guildName" name="guildName" ngModel required>
    <div ="guildForm.submitted && !guildForm.controls.guildName?.valid">
      Guild name is required.
    </div>

    <!-- Description -->
    <label for="description">Description:</label>
    <textarea id="description" name="description" ngModel required></textarea>
    <!-- <div *ngIf="guildForm.submitted && !guildForm.controls.description?.valid"> -->
      Description is required.
    </div>

    <!-- Type -->
    <label for="type">Type:</label>
    <select id="type" name="type" ngModel required>
      <option value="" disabled>Select Type</option>
      <option value="Competitive">Competitive</option>
      <option value="Casual">Casual</option>
      <option value="Social">Social</option>
      <option value="Educational">Educational</option>
    </select>
    <div ="guildForm.submitted && !guildForm.controls.type?.valid">
      Type is required.
    </div>

    <!-- Notification Preference -->
    <label>Notification Preference:</label>
    <label>
      <input type="radio" name="notificationPreference" value="Email" > Email
    </label>
    <label>
      <input type="radio" name="notificationPreference" value="SMS" > SMS
    </label>
    <label>
      <input type="radio" name="notificationPreference" value="In-App" > In-App
    </label>
    <div ="guildForm.submitted && !guildForm.controls.notificationPreference?.valid">
      Notification preference is required.
    </div>

    <!-- Accept Terms -->
    <label>
      <input type="checkbox" name="acceptTerms" > I accept the terms and conditions.
    </label>
    <div ="guildForm.submitted && !guildForm.controls.acceptTerms?.valid">
      You must accept the terms and conditions.
    </div>

    <!-- Submit Button -->
    <!-- <button type="submit" [disabled]="!guildForm.valid">Create Guild</button> -->
  <!-- </form> -->

  <!-- Display Created Guilds -->
  <div ="guilds.length > 0">
    <h3>Created Guilds</h3>
    <ul>
      <li>"let guild of guilds"
        <!-- <strong>{{ guild.guildName }}</strong> - {{ guild.type }} - {{ guild.notificationPreference }} -->
        <!-- <p>{{ guild.description }}</p> -->
      </li>
    </ul>
  </div>
<!-- </div> -->

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

}
