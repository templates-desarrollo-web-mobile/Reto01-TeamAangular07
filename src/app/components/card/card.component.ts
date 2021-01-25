import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  defaultImage = 'assets/images/default.png';
  @Input() dataCard: any;
  constructor() { }

  ngOnInit(): void {
  }

}
