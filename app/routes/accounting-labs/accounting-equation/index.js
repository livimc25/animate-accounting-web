import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { A } from '@ember/array';

export default class AccountingLabsAccountingEquationIndexRoute extends Route {
    resetArray = A(
        [{id: 5, title:'Bonds Payable $120'},
        {id: 4, title:'Notes Payable $50'},
        {id: 6, title:'+'},
        {id: 7, title:'Common Stock $90'},
        {id: 2, title:'Copyright $250'},
        {id: 8, title:'Retained Earnings $490'},
        {id: 3, title:'='},
        {id: 1, title:'Cash $500'}]
    );

    @action
    exit() {
        this.controller.set('sortableObjectList', this.resetArray)
        this.controller.set('sortFinishText', false)
    }
}
