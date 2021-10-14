// injecting Http service
// if we send the put request to a URL, any data that's in there will be overwritten.

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardService } from './card.service';
import { Card } from '../cards/card.model';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataStorageService {

    constructor(private http: HttpClient, private cardService: CardService) { }

    storeCards() {
        const cards = this.cardService.getCards();
        this.http
            .put('https://ng-course-todo.firebaseio.com/cards.json', cards)
            // .subscribe();
            .subscribe(response => {
                console.log(response);
            });
    }

    fetchCards() {
        return this.http
            .get<Card[]>('https://ng-course-todo.firebaseio.com/cards.json')
            // .pipe(map(cards => {
            //     return cards.map(card => {
            //         return { ...card, status: card.status };
            //     });
            // }))
            // .pipe(tap(cards => {
            //     this.cardService.setCards(cards);
            // }))
            .subscribe(response => {
                this.cardService.setCards(response);
                //console.log(response);
            });

    }
}