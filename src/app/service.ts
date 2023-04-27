import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {Player} from "./player";
import {Team} from "./team";

@Injectable({providedIn: 'root'})
export class Service{
  private BACKEND_URL = 'http://localhost:8080/api/v1/'

  constructor(
    private http: HttpClient) {
  }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.BACKEND_URL + 'player');
  }

  getPlayer(id: number): Observable<Player> {
    return this.http.get<Player>(this.BACKEND_URL + 'player/' + id);
  }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.BACKEND_URL + 'team');
  }

  getTeam(id: number): Observable<Team> {
    return this.http.get<Team>(this.BACKEND_URL + 'team/' + id);
  }

}
