import { Component, OnInit } from '@angular/core';
import { GameDTO } from 'src/app/models/GameDTO';
import { GameService } from 'src/app/services/game.service';
import Swal from 'sweetalert2';

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

  vote(id: string) {
    this.gameService.voteAsGoty(id).subscribe(
      (data: any) => {
        if (data.done) {
          Swal.fire('', data.message, 'success');
        }
      },
      (error) => {
        Swal.fire('', error.error.message, 'error');
      }
    );
  }
}
