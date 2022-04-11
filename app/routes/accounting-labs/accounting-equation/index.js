import Route from '@ember/routing/route';

export default class AccountingLabsAccountingEquationIndexRoute extends Route {
    beforeModel(transition) {
        document.body.style.backgroundColor = "#112D32"
    }
}
