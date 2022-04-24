import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { toDown, toUp } from 'ember-animated/transitions/move-over';

export default class ScenarioIncorrectButton extends Component {
  @tracked showIncorrectAnswer = false;

  @action toggleShowIncorrectAnswer() {
    this.showIncorrectAnswer = !this.showIncorrectAnswer;
  }

  rules({ newItems }) {
    if (newItems[0]) {
      return toUp;
    } else {
      return toDown;
    }
  }
}