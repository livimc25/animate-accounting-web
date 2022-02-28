import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | accounting-labs/accounting-equation/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:accounting-labs/accounting-equation/index');
    assert.ok(route);
  });
});
