import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../model/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {



  constructor(
    private http: HttpClient
  ) { }

  getCards() {
    return this.http.get(`http://localhost:8080/users/${'username'}/tasks`);
  }

  deleteCard(id) {
    return this.http.delete(`http://localhost:8080/users/${'username'}/tasks/${id}`);
  }
}
