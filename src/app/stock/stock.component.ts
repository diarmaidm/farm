import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { STOCKES } from '../mock-stockes';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  stockes = STOCKES;
  stock: Stock = {
    id: 1,
    obtainedhow: 'Bought',
    obtainedwhen: '01/01/2015',
    breed: 'Charolais',
    name: 'Jane',
    sex: 'Female',
    tag: 'A1-B2',
    tattoo: 'CC',
    value: null,
    soldwhen: null,
    otherdetails: null,
    damtag: null
  };

  constructor() {
  }

  ngOnInit() {
  }

}
