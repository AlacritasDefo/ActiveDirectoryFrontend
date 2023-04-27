import { Component, OnInit } from '@angular/core';
import {Player} from "../player";
import {Service} from "../service";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  players: Player[] = [];
  constructor(
    private service: Service
  ) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers() {
    this.service.getPlayers()
      .subscribe(players => this.players = players);
  }

}
