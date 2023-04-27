import { Component, OnInit } from '@angular/core';
import {Team} from "../team";
import {Service} from "../service";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teams: Team[] = [];

  constructor(private service: Service) { }

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams(): void {
    this.service.getTeams()
      .subscribe(teams => this.teams = teams);
  }

}
