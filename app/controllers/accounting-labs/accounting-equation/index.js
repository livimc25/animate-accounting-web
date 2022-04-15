import Controller from '@ember/controller';
import { A } from '@ember/array';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AccountingLabsAccountingEquationIndexController extends Controller {
  @tracked useSwap = true;
  sortableObjectList = A(
    [{id: 5, title:'Bonds Payable $120'},
      {id: 4, title:'Notes Payable $50'},
      {id: 6, title:'+'},
      {id: 7, title:'Common Stock $90'},
      {id: 2, title:'Copyright $250'},
      {id: 8, title:'Retained Earnings $490'},
      {id: 3, title:'='},
      {id: 1, title:'Cash $500'}]
  )

  sortFinishText = false;
  
  @action
  dragStart(object) {
    console.log('Drag Start', object);
  }
  @action
  sortEndAction() {
    var itemIdArray = [];
    this.sortableObjectList.forEach(element => {
        itemIdArray.push(element.id);
    });
    console.log('Sort Ended', this.sortableObjectList);
    this.checkMatch(itemIdArray);
    }

  @action
  checkMatch(itemIdArray) {
    const properOrderArray = [1, 2, 3, 4, 5, 6, 7, 8]
    if(JSON.stringify(itemIdArray)==JSON.stringify(properOrderArray)) {
        this.set('sortFinishText', true);
        console.log('Sort Finish Text', this.sortFinishText);
    } else {
        console.log('Sort Finish Text', this.sortFinishText);
        this.set('sortFinishText', false);
    }
  }
}

