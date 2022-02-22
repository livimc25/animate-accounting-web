import EmberRouter from '@ember/routing/router';
import config from 'animate-accounting-web/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('what-is-accounting');
  this.route('why-learn-accounting');
  this.route('accounting-labs', function() {
    this.route('accounting-equation');
    this.route('revenue-recognition-and-matching');
    this.route('income-statement');
    this.route('balance-sheet');
    this.route('stockholders-equity');
  });
  this.route('getting-started', function() {
    this.route('what-is-accounting');
    this.route('why-learn-accounting');
  });
  this.route('stockholders-equity');
});
