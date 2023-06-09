import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me'

type ProfileType = {
  givenName?: string,
  surname?: string,
  id?: string,
  userPrincipalName?: string
};

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile!: ProfileType;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.http.get(GRAPH_ENDPOINT).subscribe(profile => {
      this.profile = profile;
    });
  }
}


