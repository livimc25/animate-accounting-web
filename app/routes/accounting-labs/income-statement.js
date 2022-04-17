import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class extends Route {
  @service store;
  createdStore = false;

  model() {
    if (!this.createdStore) {
      let oie = this.store.createRecord('page',{id:6, title:'Other Income and Expenses'});
      let gm = this.store.createRecord('page',{id:3, title:'Gross Margin'});
      let ite = this.store.createRecord('page',{id:8, title:'Income Tax Expense'});
      let sales = this.store.createRecord('page',{id:1, title:'Sales'});
      let opExp = this.store.createRecord('page',{id:4, title:'Operating Expenses'});
      let ni = this.store.createRecord('page',{id:9, title:'Net Income'});
      let cogs = this.store.createRecord('page',{id:2, title:'Cost of Goods Sold'});
      let ibt = this.store.createRecord('page',{id:7, title:'Income before Taxes'});
      let operil = this.store.createRecord('page',{id:5, title:'Operating Income OR Loss'});
      this.createdStore = true;
      return this.store.createRecord('book',{id:1, title:'Book Title',pages: [oie, gm, ite, sales, opExp, ni, cogs, ibt, operil]});
    }
  }

  @action
  exit() {
    this.store.unloadAll('book')
    this.store.unloadAll('page');
    this.createdStore = false;
    this.controller.set('sortFinishText', false);
  }
};