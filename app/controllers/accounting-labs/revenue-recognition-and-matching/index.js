import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AccountingLabsRevenueRecognitionAndMatchingController extends Controller {
    openModal1 = false
    isShowingModal = false

    @action
    openScenario1() {
        this.transitionToRoute('accounting-labs.revenue-recognition-and-matching.scenario');
    }
    @action
    toggleModal() {
        this.toggleProperty('isShowingModal');
    }
}
