import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class AccountingLabsRevenueRecognitionAndMatchingRoute extends Route {
    beforeModel(transition) {
        document.body.style.backgroundColor = "#112D32"
    }

}
