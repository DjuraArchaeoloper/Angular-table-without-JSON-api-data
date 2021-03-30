import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './Users'

const endpoint = 'https://fww-demo.herokuapp.com/'

@Injectable({
  providedIn: 'root',
})

export class RestService {
  
  constructor(private http: HttpClient) {}

  getAllRests(params): Observable<any> {
    return this.http.get(endpoint, { params });
  }

  url : string = 'http://localhost:3000/Users';

getUsers()
{
  return this.http.get<Users[]>(this.url);
}

}
