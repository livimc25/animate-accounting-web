import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AccountingLabsRevenueRecognitionAndMatchingController extends Controller {
    isShowingModal1 = false
    isShowingModal2 = false
    isShowingModal3 = false
    isShowingModal4 = false
    isShowingModal5 = false

    @action
    toggleModal1() {
        this.toggleProperty('isShowingModal1');
    }
    @action
    toggleModal2() {
        this.toggleProperty('isShowingModal2');
    }
    @action
    toggleModal3() {
        this.toggleProperty('isShowingModal3');
    }
    @action
    toggleModal4() {
        this.toggleProperty('isShowingModal4');
    }
    @action
    toggleModal5() {
        this.toggleProperty('isShowingModal5');
    }
}
