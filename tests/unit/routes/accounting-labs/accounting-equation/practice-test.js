import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | accounting-labs/accounting-equation/practice', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:accounting-labs/accounting-equation/practice');
    assert.ok(route);
  });
});
