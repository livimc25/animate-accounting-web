import Route from '@ember/routing/route';

export default class AccountingLabsIndexRoute extends Route {
    beforeModel() {
        document.body.style.backgroundColor = "#88BDBC"
    }
}
