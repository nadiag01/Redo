import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Character {
  name: string;
  gender: string;
  class: string;
  faction?: string;
  startingLocation?: string;
  funFact?: string;
}

export interface NewCharacter{
  character: Character;
  characterId: number;
 }

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="order-form-container">
      <form
        class="order-form"
        #tacoOrderForm="ngForm"
        (ngSubmit)="createCharacter()"
      >
        <h1>Complete the form below to place a new order.</h1>
        <fieldset>
          <legend>Create Character</legend>
          <div>
            <label for="genderType">Gender</label>
            <select
              name="genderType"
              id="genderType"
              [(ngModel)]="gender"
              ngModel
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label for="classType">Class</label>
            <select
              name="classType"
              id="classType"
              [(ngModel)]="class"
              ngModel
            >
              <option value="Warrior">Warrior</option>
              <option value="Mage">Mage</option>
              <option value="Rogue">Rogue</option>
            </select>
          </div>
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            class="name-input"
            [(ngModel)]="name"
            ngModel
          />
<br>
          <input type="submit" value="Create Character" />
        </fieldset>
      </form>
    </div>
  `,
  styles: ``,
})
export class CreateCharacterComponent {
  character: Character;
  characterId: number;
  name: string;
  gender: string;
  class: string;
  newCharacter: NewCharacter;

  constructor() {
    this.name = '';
    this.gender = '';
    this.class = '';
    this.characterId = 0;

    this.character = {
      name: "",
      gender: "",
      class: ""
    }

    this.newCharacter = {character: this.character, characterId: 0}
  }



  createCharacter() {
    console.log("class", this.class)
    this.characterId = Math.floor(Math.random() * 1000) + 1;

    let formChar = {
      name: this.name,
      gender: this.gender,
      class:  this.class
    }

    this.newCharacter = {
      character: formChar,
      characterId: this.characterId
    }
  }

}
