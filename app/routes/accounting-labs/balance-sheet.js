import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class extends Route {
  @service store;
  createdStore = false;

  model() {
    if (!this.createdStore) {
      let cl = this.store.createRecord('page',{id:6, title:'Current Liabilities'});
      let ts = this.store.createRecord('page',{id:11, title:'Treasury Stock'});
      let ppe = this.store.createRecord('page',{id:3, title:'Property Plant and Equipment'});
      let tl = this.store.createRecord('page',{id:8, title:'Total Liabilities'});
      let ca = this.store.createRecord('page',{id:1, title:'Current Assets'});
      let cc = this.store.createRecord('page',{id:9, title:'Contributed Capital'});
      let int = this.store.createRecord('page',{id:4, title:'Intangibles'});
      let tlse = this.store.createRecord('page',{id:13, title:'Total Liabilities & Stockholders Equity'});
      let lti = this.store.createRecord('page',{id:2, title:'Long Term Investments'});
      let re = this.store.createRecord('page',{id:10, title:'Retained Earnings'});
      let ltd = this.store.createRecord('page',{id:7, title:'Long Term Debt'});
      let tse = this.store.createRecord('page',{id:12, title:'Total Stockholders Equity'});
      let ta = this.store.createRecord('page',{id:5, title:'Total Assets'});
      this.createdStore = true;
      return this.store.createRecord('book',{id:1, title:'Book Title',pages: [cl, ts, ppe, tl, ca, cc, int, tlse, lti, re, ltd, tse, ta]});
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