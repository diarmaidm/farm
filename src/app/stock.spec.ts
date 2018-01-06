import { async } from '@angular/core/testing';
import { Stock } from './stock';

describe('Stock', () => {
  it('should create stock', async(() => {
    let stock = new Stock;
    stock = {
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
    expect(stock).toBeDefined('stock is not defined');
  }));
});
