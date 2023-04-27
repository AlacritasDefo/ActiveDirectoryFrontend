import {Component, Inject, Input, OnInit} from '@angular/core';
import {Player} from "../../player";
import {ActivatedRoute} from "@angular/router";
import {Service} from "../../service";
import {Location} from "@angular/common";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
  // @ts-ignore
  @Input() player: Player;

  constructor(
    private route: ActivatedRoute,
    private service: Service,
    private location: Location,
  ) {
  }

  ngOnInit(): void {
    this.getPlayer();
  }

  getPlayer() {
    let id: number;
    // @ts-ignore
    id = this.route.snapshot.paramMap.get('id')-1;
    this.service.getPlayer(id)
      .subscribe(player => this.player = player);
  }

  goBack() {
    this.location.back();
  }

}
