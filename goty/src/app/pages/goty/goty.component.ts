import { Component, OnInit } from '@angular/core';
import { GameDTO } from 'src/app/models/GameDTO';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.scss'],
})
export class GotyComponent implements OnInit {
  games: GameDTO[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getGoty().subscribe((response) => {
      this.games = response;
    });
  }
}
