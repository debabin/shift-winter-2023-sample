import { Component } from '@angular/core';

import { CharacterService } from './utils/api/character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-first-project';

  characters!: Character[];
  constructor(private userService: CharacterService) {}

  ngOnInit() {
    this.userService.getCharacters().subscribe((data) => {
      this.characters = data.results;
    });
  }
}
