import { Component } from '@angular/core';

interface Character {
  name: string;
  gender: string;
  class: string;
  faction: string;
  startingLocation: string;
  funFact: string;
}

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [],
  template: `
    <p>
      create-character works!
    </p>
  `,
  styles: ``
})
export class CreateCharacterComponent {

}
