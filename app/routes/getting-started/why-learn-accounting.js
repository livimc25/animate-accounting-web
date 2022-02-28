import Route from '@ember/routing/route';

export default class GettingStartedWhyLearnAccountingRoute extends Route {
    beforeModel(transition) {
        document.body.style.backgroundColor = "#6E6658"
    }
}
