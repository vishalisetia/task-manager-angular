import { ElementRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {

  todoHeading = 'todo';
  doingHeading = 'doing';
  doneHeading = 'done';

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#0288D1';
  }

}