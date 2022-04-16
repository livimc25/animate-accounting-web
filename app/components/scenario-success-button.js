import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { toUp, toDown } from 'ember-animated/transitions/move-over';

export default class ScenarioSuccessButton extends Component {
  @tracked showHello = false;

  @action toggleShowHello() {
    this.showHello = !this.showHello;
  }

  rules({ newItems }) {
    if (newItems[0]) {
      return toUp;
    } else {
      return toDown;
    }
  }
}