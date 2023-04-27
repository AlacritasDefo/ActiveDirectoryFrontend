import {Component, Inject, Input, OnInit} from '@angular/core';
import {Team} from "../../team";
import {ActivatedRoute} from "@angular/router";
import {Service} from "../../service";
import { Location } from '@angular/common'
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {
  // @ts-ignore
  @Input() team: Team;

  constructor(
    private route: ActivatedRoute,
    private service: Service,
    private location: Location,
  ) {

}

  ngOnInit(): void {
    this.getTeam();
  }

  getTeam() {
    // @ts-ignore
    const id = this.route.snapshot.paramMap.get('id')-1;
    this.service.getTeam(id)
      .subscribe(team => this.team = team);
  }

  goBack() {
    this.location.back()
  }

}
