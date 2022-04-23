import Controller from '@ember/controller';
import { A } from '@ember/array';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AccountingLabsStockholdersEquityController extends Controller {
    @tracked useSwap = true;
    sortableObjectList = A(
      [{id: 3, title:'- Dividends'},
      {id: 1, title:'Beginning Retained Earnings'},
      {id: 4, title:'Ending Retained Earnings'},
      {id: 2, title:'+ Net Income'}]
    );
  
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
      const properOrderArray = [1, 2, 3, 4]
      const alternativeOrderArray = [1, 3, 2, 4]
      if(JSON.stringify(itemIdArray)==JSON.stringify(properOrderArray) || JSON.stringify(itemIdArray)==JSON.stringify(alternativeOrderArray)) {
          this.set('sortFinishText', true);
          console.log('Sort Finish Text', this.sortFinishText);
      } else {
          console.log('Sort Finish Text', this.sortFinishText);
          this.set('sortFinishText', false);
      }
    }
}
