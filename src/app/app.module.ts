import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardsComponent } from './cards/cards.component';
import { CardItemComponent } from './cards/card-item/card-item.component';
import { NewCardComponent } from './cards/new-card/new-card.component';
import { ModalComponent } from './cards/modal/modal.component';
import { MaterialModule } from './material/material.module';
import { CardService } from './shared/card.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardsComponent,
    CardItemComponent,
    NewCardComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,

    MaterialModule,
    //AppRoutingModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
