'use strict';

define("animate-accounting-web/tests/helpers/data-transfer", ["exports", "ember-drag-drop/test-support/helpers/data-transfer"], function (_exports, _dataTransfer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dataTransfer.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-drag-drop/test-support/helpers/data-transfer"eaimeta@70e063a35619d71f
});
define("animate-accounting-web/tests/helpers/drag-drop", ["exports", "ember-drag-drop/test-support/helpers/drag-drop"], function (_exports, _dragDrop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  var _exportNames = {};
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dragDrop.default;
    }
  });
  Object.keys(_dragDrop).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    if (key in _exports && _exports[key] === _dragDrop[key]) return;
    Object.defineProperty(_exports, key, {
      enumerable: true,
      get: function () {
        return _dragDrop[key];
      }
    });
  });
  0; //eaimeta@70e063a35619d71f0,"ember-drag-drop/test-support/helpers/drag-drop",0,"ember-drag-drop/test-support/helpers/drag-drop"eaimeta@70e063a35619d71f
});
define("animate-accounting-web/tests/helpers/ember-drag-drop", ["exports", "animate-accounting-web/tests/helpers/data-transfer"], function (_exports, _dataTransfer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.drag = drag;
  0; //eaimeta@70e063a35619d71f0,"@ember/runloop",0,"animate-accounting-web/tests/helpers/data-transfer"eaimeta@70e063a35619d71f

  function drop($dragHandle, dropCssPath, dragEvent) {
    let dropTarget = document.querySelector(dropCssPath);

    if (dropTarget.length === 0) {
      throw new Error(`There are no drop targets by the given selector: '${dropCssPath}'`);
    }

    Ember.run(() => {
      triggerEvent(dropTarget, 'dragover', _dataTransfer.default.makeMockEvent());
    });
    Ember.run(() => {
      triggerEvent(dropTarget, 'drop', _dataTransfer.default.makeMockEvent(dragEvent.dataTransfer.get('data.payload')));
    });
    Ember.run(() => {
      triggerEvent($dragHandle, 'dragend', _dataTransfer.default.makeMockEvent());
    });
  }

  function drag(cssPath) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    let dragEvent = _dataTransfer.default.makeMockEvent();

    let dragHandle = document.querySelector(cssPath);
    Ember.run(() => {
      triggerEvent(dragHandle, 'mouseover');
    });
    Ember.run(() => {
      triggerEvent(dragHandle, 'dragstart', dragEvent);
    });
    andThen(function () {
      if (options.beforeDrop) {
        options.beforeDrop.call();
      }
    });
    andThen(function () {
      if (options.drop) {
        drop(dragHandle, options.drop, dragEvent);
      }
    });
  }
});
define("animate-accounting-web/tests/helpers/ember-keyboard/register-test-helpers", ["exports", "ember-keyboard", "ember-keyboard/fixtures/modifiers-array", "ember-keyboard/fixtures/mouse-buttons-array", "ember-keyboard/utils/get-cmd-key"], function (_exports, _emberKeyboard, _modifiersArray, _mouseButtonsArray, _getCmdKey) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  0; //eaimeta@70e063a35619d71f0,"@ember/test",0,"ember-keyboard",0,"ember-keyboard/fixtures/modifiers-array",0,"ember-keyboard/fixtures/mouse-buttons-array",0,"ember-keyboard/utils/get-cmd-key"eaimeta@70e063a35619d71f

  const keyEvent = function keyEvent(app, attributes, type, element) {
    const event = (attributes || '').split('+').reduce((event, attribute) => {
      if (_modifiersArray.default.indexOf(attribute) > -1) {
        attribute = attribute === 'cmd' ? (0, _getCmdKey.default)() : attribute;
        event[`${attribute}Key`] = true;
      } else if (_mouseButtonsArray.default.indexOf(attribute) > -1) {
        event.button = (0, _emberKeyboard.getMouseCode)(attribute);
      } else {
        event.keyCode = (0, _emberKeyboard.getKeyCode)(attribute);
      }

      return event;
    }, {});
    return app.testHelpers.triggerEvent(element || document.body, type, event);
  };

  function _default() {
    Ember.Test.registerAsyncHelper('keyDown', function (app, attributes, element) {
      return keyEvent(app, attributes, 'keydown', element);
    });
    Ember.Test.registerAsyncHelper('keyUp', function (app, attributes, element) {
      return keyEvent(app, attributes, 'keyup', element);
    });
    Ember.Test.registerAsyncHelper('keyPress', function (app, attributes, element) {
      return keyEvent(app, attributes, 'keypress', element);
    });
    Ember.Test.registerAsyncHelper('mouseDown', function (app, attributes, element) {
      return keyEvent(app, attributes, 'mousedown', element);
    });
    Ember.Test.registerAsyncHelper('mouseUp', function (app, attributes, element) {
      return keyEvent(app, attributes, 'mouseup', element);
    });
    Ember.Test.registerAsyncHelper('touchStart', function (app, attributes, element) {
      return keyEvent(app, attributes, 'touchstart', element);
    });
    Ember.Test.registerAsyncHelper('touchEnd', function (app, attributes, element) {
      return keyEvent(app, attributes, 'touchend', element);
    });
  }
});
define("animate-accounting-web/tests/helpers/mock-event", ["exports", "ember-drag-drop/test-support/helpers/mock-event"], function (_exports, _mockEvent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  var _exportNames = {};
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mockEvent.default;
    }
  });
  Object.keys(_mockEvent).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    if (key in _exports && _exports[key] === _mockEvent[key]) return;
    Object.defineProperty(_exports, key, {
      enumerable: true,
      get: function () {
        return _mockEvent[key];
      }
    });
  });
  0; //eaimeta@70e063a35619d71f0,"ember-drag-drop/test-support/helpers/mock-event",0,"ember-drag-drop/test-support/helpers/mock-event"eaimeta@70e063a35619d71f
});
define("animate-accounting-web/tests/integration/components/index-footer-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | index-footer', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <IndexFooter />
      */
      {
        "id": "n4rCDWkH",
        "block": "{\"symbols\":[],\"statements\":[[8,\"index-footer\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <IndexFooter>
              template block text
            </IndexFooter>
          
      */
      {
        "id": "uwM9zBI7",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"index-footer\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("animate-accounting-web/tests/integration/components/scenario-incorrect-button/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | scenario-incorrect-button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <ScenarioIncorrectButton />
      */
      {
        "id": "+JNA9LhW",
        "block": "{\"symbols\":[],\"statements\":[[8,\"scenario-incorrect-button\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <ScenarioIncorrectButton>
              template block text
            </ScenarioIncorrectButton>
          
      */
      {
        "id": "uyZPpKM4",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"scenario-incorrect-button\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("animate-accounting-web/tests/integration/components/scenario-success-button/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | scenario-success-button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <ScenarioSuccessButton />
      */
      {
        "id": "LsZP+Eit",
        "block": "{\"symbols\":[],\"statements\":[[8,\"scenario-success-button\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <ScenarioSuccessButton>
              template block text
            </ScenarioSuccessButton>
          
      */
      {
        "id": "Px0exeJL",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"scenario-success-button\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("animate-accounting-web/tests/test-helper", ["animate-accounting-web/app", "animate-accounting-web/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"animate-accounting-web/app",0,"animate-accounting-web/config/environment",0,"@ember/test-helpers",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("animate-accounting-web/tests/unit/accounting-labs/revenue-recognition-and-matching/controller-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Controller | accounting-labs/revenue-recognition-and-matching', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:accounting-labs/revenue-recognition-and-matching');
      assert.ok(controller);
    });
  });
});
define("animate-accounting-web/tests/unit/accounting-labs/revenue-recognition-and-matching/scenario/controller-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Controller | accounting-labs/revenue-recognition-and-matching/scenario', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:accounting-labs/revenue-recognition-and-matching/scenario');
      assert.ok(controller);
    });
  });
});
define("animate-accounting-web/tests/unit/accounting-labs/revenue-recognition-and-matching/scenario/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | accounting-labs/revenue-recognition-and-matching/scenario', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:accounting-labs/revenue-recognition-and-matching/scenario');
      assert.ok(route);
    });
  });
});
define("animate-accounting-web/tests/unit/routes/accounting-labs/accounting-equation/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | accounting-labs/accounting-equation/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:accounting-labs/accounting-equation/index');
      assert.ok(route);
    });
  });
});
define("animate-accounting-web/tests/unit/routes/accounting-labs/accounting-equation/practice-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | accounting-labs/accounting-equation/practice', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:accounting-labs/accounting-equation/practice');
      assert.ok(route);
    });
  });
});
define("animate-accounting-web/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('animate-accounting-web/config/environment', [], function() {
  var prefix = 'animate-accounting-web';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('animate-accounting-web/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
