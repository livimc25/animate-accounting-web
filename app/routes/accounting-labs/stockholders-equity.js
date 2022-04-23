import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { A } from '@ember/array';

export default class AccountingLabsStockholdersEquityRoute extends Route {
    resetArray = A(
        [{id: 3, title:'- Dividends'},
        {id: 1, title:'Beginning Retained Earnings'},
        {id: 4, title:'Ending Retained Earnings'},
        {id: 2, title:'+ Net Income'}]
    );

    @action
    exit() {
        this.controller.set('sortableObjectList', this.resetArray)
        this.controller.set('sortFinishText', false)
    }
}
