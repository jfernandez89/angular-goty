import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { GameDTO } from 'src/app/models/GameDTO';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  games: any[] = [];

  constructor(private db: AngularFirestore) {}

  ngOnInit(): void {
    this.db
      .collection('goty')
      .valueChanges() // Only enter when the value changes
      .pipe(
        map((response: GameDTO[]) => {
          // Convert the recovered games as DTO in a new structure using destructuring
          return response.map(({ name, votes }) => ({ name, value: votes }));
        })
      )
      .subscribe((response) => {
        this.games = response;
      });
  }
}
