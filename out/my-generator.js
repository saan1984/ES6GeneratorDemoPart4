System.registerModule("../dev/my-generator.js", [], function() {
  "use strict";
  var __moduleName = "../dev/my-generator.js";
  var FruitGenerator = $traceurRuntime.initGeneratorFunction(function $__4() {
    return $traceurRuntime.createGeneratorInstance(function($ctx) {
      while (true)
        switch ($ctx.state) {
          case 0:
            $ctx.state = 2;
            return "Apple";
          case 2:
            $ctx.maybeThrow();
            $ctx.state = 4;
            break;
          case 4:
            $ctx.state = 6;
            return "Orange";
          case 6:
            $ctx.maybeThrow();
            $ctx.state = 8;
            break;
          case 8:
            $ctx.state = 10;
            return "Grapes";
          case 10:
            $ctx.maybeThrow();
            $ctx.state = 12;
            break;
          case 12:
            $ctx.state = 14;
            return "Mango";
          case 14:
            $ctx.maybeThrow();
            $ctx.state = -2;
            break;
          default:
            return $ctx.end();
        }
    }, $__4, this);
  });
  var messageElement = document.getElementById("message"),
      fruitList = FruitGenerator();
  for (var $__0 = fruitList[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__1 = void 0; !($__1 = $__0.next()).done; ) {
    var fruit = $__1.value;
    {
      var h1Element = document.createElement('h1');
      h1Element.innerText = fruit;
      messageElement.appendChild(h1Element);
    }
  }
  var createGenerator = function(itemArray) {
    return $traceurRuntime.initGeneratorFunction(function $__5() {
      var $__2,
          $__3,
          item;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              $__2 = itemArray[$traceurRuntime.toProperty(Symbol.iterator)](), $__3 = void 0;
              $ctx.state = 4;
              break;
            case 4:
              $ctx.state = (!($__3 = $__2.next()).done) ? 5 : -2;
              break;
            case 5:
              item = $__3.value;
              $ctx.state = 6;
              break;
            case 6:
              $ctx.state = 2;
              return item;
            case 2:
              $ctx.maybeThrow();
              $ctx.state = 4;
              break;
            default:
              return $ctx.end();
          }
      }, $__5, this);
    })();
  };
  var flowerArray = ["Rose", "Lotus", "Jasmine"],
      flowerList = createGenerator(flowerArray);
  for (var $__2 = flowerList[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__3 = void 0; !($__3 = $__2.next()).done; ) {
    var flower = $__3.value;
    {
      var h1Element = document.createElement('h1');
      h1Element.innerText = flower;
      messageElement.appendChild(h1Element);
    }
  }
  return {};
});
System.get("../dev/my-generator.js" + '');
