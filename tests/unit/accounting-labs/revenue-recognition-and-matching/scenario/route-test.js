import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | accounting-labs/revenue-recognition-and-matching/scenario', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:accounting-labs/revenue-recognition-and-matching/scenario');
    assert.ok(route);
  });
});
