import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AccountingLabsBalanceSheetController extends Controller {
  sortFinishText = false;
  
  @action
  dragStart(object) {
    console.log('Drag Start', object);
  }
  @action
  sortEndAction() {
    var itemIdArray = [];
    const pagesList = this.get('model.pages');
    pagesList.forEach(element => {
        itemIdArray.push(element.id);
    });
    console.log('Sort Ended', pagesList);
    this.checkMatch(itemIdArray);
  }
  @action
  checkMatch(itemIdArray) {
    const properOrderArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']
    if(JSON.stringify(itemIdArray)==JSON.stringify(properOrderArray)) {
        this.set('sortFinishText', true);
        console.log('Sort Finish Text', this.sortFinishText);
    } else {
        console.log('Sort Finish Text', this.sortFinishText);
        this.set('sortFinishText', false);
    }
  }
}