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

  selectedStock: Stock;

  onSelect(stock: Stock): void {
    this.selectedStock = stock;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
