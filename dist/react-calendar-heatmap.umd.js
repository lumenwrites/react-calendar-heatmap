(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.CalendarHeatmap = factory(global.React));
})(this, (function (React) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

  var ReactPropTypesSecret = ReactPropTypesSecret_1;

  function emptyFunction() {}
  function emptyFunctionWithReset() {}
  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  var factoryWithThrowingShims = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
        'Use PropTypes.checkPropTypes() to call them. ' +
        'Read more at http://fb.me/use-check-prop-types'
      );
      err.name = 'Invariant Violation';
      throw err;
    }  shim.isRequired = shim;
    function getShim() {
      return shim;
    }  // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bigint: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,

      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };

    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  var require$$0 = factoryWithThrowingShims;

  var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = require$$0();
  }
  });

  var PropTypes = propTypes;

  var safeIsNaN = Number.isNaN ||
      function ponyfill(value) {
          return typeof value === 'number' && value !== value;
      };
  function isEqual(first, second) {
      if (first === second) {
          return true;
      }
      if (safeIsNaN(first) && safeIsNaN(second)) {
          return true;
      }
      return false;
  }
  function areInputsEqual(newInputs, lastInputs) {
      if (newInputs.length !== lastInputs.length) {
          return false;
      }
      for (var i = 0; i < newInputs.length; i++) {
          if (!isEqual(newInputs[i], lastInputs[i])) {
              return false;
          }
      }
      return true;
  }

  function memoizeOne(resultFn, isEqual) {
      if (isEqual === void 0) { isEqual = areInputsEqual; }
      var cache = null;
      function memoized() {
          var newArgs = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              newArgs[_i] = arguments[_i];
          }
          if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) {
              return cache.lastResult;
          }
          var lastResult = resultFn.apply(this, newArgs);
          cache = {
              lastResult: lastResult,
              lastArgs: newArgs,
              lastThis: this,
          };
          return lastResult;
      }
      memoized.clear = function clear() {
          cache = null;
      };
      return memoized;
  }

  var MILLISECONDS_IN_ONE_DAY = 24 * 60 * 60 * 1000;
  var DAYS_IN_WEEK = 7;
  var MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var DAY_LABELS = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

  // returns a new date shifted a certain number of days (can be negative)
  function shiftDate(date, numDays) {
    var newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
  }
  function getBeginningTimeForDate(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  } // obj can be a parseable string, a millisecond timestamp, or a Date object

  function convertToDate(obj) {
    return obj instanceof Date ? obj : new Date(obj);
  }
  function dateNDaysAgo(numDaysAgo) {
    return shiftDate(new Date(), -numDaysAgo);
  }
  function getRange(count) {
    var arr = [];

    for (var idx = 0; idx < count; idx += 1) {
      arr.push(idx);
    }

    return arr;
  }

  var SQUARE_SIZE = 10;
  var MONTH_LABEL_GUTTER_SIZE = 4;
  var CSS_PSEDUO_NAMESPACE = 'react-calendar-heatmap-';

  var CalendarHeatmap = /*#__PURE__*/function (_React$Component) {
    _inherits(CalendarHeatmap, _React$Component);

    var _super = _createSuper(CalendarHeatmap);

    function CalendarHeatmap() {
      var _this;

      _classCallCheck(this, CalendarHeatmap);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "getValueCache", memoizeOne(function (props) {
        return props.values.reduce(function (memo, value) {
          var date = convertToDate(value.date);
          var index = Math.floor((date - _this.getStartDateWithEmptyDays()) / MILLISECONDS_IN_ONE_DAY); // eslint-disable-next-line no-param-reassign

          memo[index] = {
            value: value,
            className: _this.props.classForValue(value),
            title: _this.props.titleForValue ? _this.props.titleForValue(value) : null,
            tooltipDataAttrs: _this.getTooltipDataAttrsForValue(value)
          };
          return memo;
        }, {});
      }));

      return _this;
    }

    _createClass(CalendarHeatmap, [{
      key: "getDateDifferenceInDays",
      value: function getDateDifferenceInDays() {
        var _this$props = this.props,
            startDate = _this$props.startDate,
            numDays = _this$props.numDays;

        if (numDays) {
          // eslint-disable-next-line no-console
          console.warn('numDays is a deprecated prop. It will be removed in the next release. Consider using the startDate prop instead.');
          return numDays;
        }

        var timeDiff = this.getEndDate() - convertToDate(startDate);
        return Math.ceil(timeDiff / MILLISECONDS_IN_ONE_DAY);
      }
    }, {
      key: "getSquareSizeWithGutter",
      value: function getSquareSizeWithGutter() {
        return SQUARE_SIZE + this.props.gutterSize;
      }
    }, {
      key: "getMonthLabelSize",
      value: function getMonthLabelSize() {
        if (!this.props.showMonthLabels) {
          return 0;
        }

        if (this.props.horizontal) {
          return SQUARE_SIZE + MONTH_LABEL_GUTTER_SIZE;
        }

        return 2 * (SQUARE_SIZE + MONTH_LABEL_GUTTER_SIZE);
      }
    }, {
      key: "getWeekdayLabelSize",
      value: function getWeekdayLabelSize() {
        if (!this.props.showWeekdayLabels) {
          return 0;
        }

        if (this.props.horizontal) {
          return 30;
        }

        return SQUARE_SIZE * 1.5;
      }
    }, {
      key: "getStartDate",
      value: function getStartDate() {
        return shiftDate(this.getEndDate(), -this.getDateDifferenceInDays() + 1); // +1 because endDate is inclusive
      }
    }, {
      key: "getEndDate",
      value: function getEndDate() {
        return getBeginningTimeForDate(convertToDate(this.props.endDate));
      }
    }, {
      key: "getStartDateWithEmptyDays",
      value: function getStartDateWithEmptyDays() {
        return shiftDate(this.getStartDate(), -this.getNumEmptyDaysAtStart());
      }
    }, {
      key: "getNumEmptyDaysAtStart",
      value: function getNumEmptyDaysAtStart() {
        // return this.getStartDate().getDay();
        return (this.getStartDate().getDay() || 7) - 1;
      }
    }, {
      key: "getNumEmptyDaysAtEnd",
      value: function getNumEmptyDaysAtEnd() {
        // return DAYS_IN_WEEK - 1 - this.getEndDate().getDay();
        return DAYS_IN_WEEK - 1 - ((this.getEndDate().getDay() || 7) - 1);
      }
    }, {
      key: "getWeekCount",
      value: function getWeekCount() {
        var numDaysRoundedToWeek = this.getDateDifferenceInDays() + this.getNumEmptyDaysAtStart() + this.getNumEmptyDaysAtEnd();
        return Math.ceil(numDaysRoundedToWeek / DAYS_IN_WEEK);
      }
    }, {
      key: "getWeekWidth",
      value: function getWeekWidth() {
        return DAYS_IN_WEEK * this.getSquareSizeWithGutter();
      }
    }, {
      key: "getWidth",
      value: function getWidth() {
        return this.getWeekCount() * this.getSquareSizeWithGutter() - (this.props.gutterSize - this.getWeekdayLabelSize());
      }
    }, {
      key: "getHeight",
      value: function getHeight() {
        return this.getWeekWidth() + (this.getMonthLabelSize() - this.props.gutterSize) + this.getWeekdayLabelSize();
      }
    }, {
      key: "getValueForIndex",
      value: function getValueForIndex(index) {
        if (this.valueCache[index]) {
          return this.valueCache[index].value;
        }

        return null;
      }
    }, {
      key: "getClassNameForIndex",
      value: function getClassNameForIndex(index) {
        if (this.valueCache[index]) {
          return this.valueCache[index].className;
        }

        return this.props.classForValue(null);
      }
    }, {
      key: "getTitleForIndex",
      value: function getTitleForIndex(index) {
        if (this.valueCache[index]) {
          return this.valueCache[index].title;
        }

        return this.props.titleForValue ? this.props.titleForValue(null) : null;
      }
    }, {
      key: "getTooltipDataAttrsForIndex",
      value: function getTooltipDataAttrsForIndex(index) {
        if (this.valueCache[index]) {
          return this.valueCache[index].tooltipDataAttrs;
        }

        return this.getTooltipDataAttrsForValue({
          date: null,
          count: null
        });
      }
    }, {
      key: "getTooltipDataAttrsForValue",
      value: function getTooltipDataAttrsForValue(value) {
        var tooltipDataAttrs = this.props.tooltipDataAttrs;

        if (typeof tooltipDataAttrs === 'function') {
          return tooltipDataAttrs(value);
        }

        return tooltipDataAttrs;
      }
    }, {
      key: "getTransformForWeek",
      value: function getTransformForWeek(weekIndex) {
        if (this.props.horizontal) {
          return "translate(".concat(weekIndex * this.getSquareSizeWithGutter(), ", 0)");
        }

        return "translate(0, ".concat(weekIndex * this.getSquareSizeWithGutter(), ")");
      }
    }, {
      key: "getTransformForWeekdayLabels",
      value: function getTransformForWeekdayLabels() {
        if (this.props.horizontal) {
          return "translate(".concat(SQUARE_SIZE, ", ").concat(this.getMonthLabelSize(), ")");
        }

        return null;
      }
    }, {
      key: "getTransformForMonthLabels",
      value: function getTransformForMonthLabels() {
        if (this.props.horizontal) {
          return "translate(".concat(this.getWeekdayLabelSize(), ", 0)");
        }

        return "translate(".concat(this.getWeekWidth() + MONTH_LABEL_GUTTER_SIZE, ", ").concat(this.getWeekdayLabelSize(), ")");
      }
    }, {
      key: "getTransformForAllWeeks",
      value: function getTransformForAllWeeks() {
        if (this.props.horizontal) {
          return "translate(".concat(this.getWeekdayLabelSize(), ", ").concat(this.getMonthLabelSize(), ")");
        }

        return "translate(0, ".concat(this.getWeekdayLabelSize(), ")");
      }
    }, {
      key: "getViewBox",
      value: function getViewBox() {
        if (this.props.horizontal) {
          return "0 0 ".concat(this.getWidth(), " ").concat(this.getHeight());
        }

        return "0 0 ".concat(this.getHeight(), " ").concat(this.getWidth());
      }
    }, {
      key: "getSquareCoordinates",
      value: function getSquareCoordinates(dayIndex) {
        if (this.props.horizontal) {
          return [0, dayIndex * this.getSquareSizeWithGutter()];
        }

        return [dayIndex * this.getSquareSizeWithGutter(), 0];
      }
    }, {
      key: "getWeekdayLabelCoordinates",
      value: function getWeekdayLabelCoordinates(dayIndex) {
        if (this.props.horizontal) {
          return [0, (dayIndex + 1) * SQUARE_SIZE + dayIndex * this.props.gutterSize];
        }

        return [dayIndex * SQUARE_SIZE + dayIndex * this.props.gutterSize, SQUARE_SIZE];
      }
    }, {
      key: "getMonthLabelCoordinates",
      value: function getMonthLabelCoordinates(weekIndex) {
        if (this.props.horizontal) {
          return [weekIndex * this.getSquareSizeWithGutter(), this.getMonthLabelSize() - MONTH_LABEL_GUTTER_SIZE];
        }

        var verticalOffset = -2;
        return [0, (weekIndex + 1) * this.getSquareSizeWithGutter() + verticalOffset];
      }
    }, {
      key: "handleClick",
      value: function handleClick(value) {
        if (this.props.onClick) {
          this.props.onClick(value);
        }
      }
    }, {
      key: "handleMouseOver",
      value: function handleMouseOver(e, value) {
        if (this.props.onMouseOver) {
          this.props.onMouseOver(e, value);
        }
      }
    }, {
      key: "handleMouseLeave",
      value: function handleMouseLeave(e, value) {
        if (this.props.onMouseLeave) {
          this.props.onMouseLeave(e, value);
        }
      }
    }, {
      key: "renderSquare",
      value: function renderSquare(dayIndex, index) {
        var _this2 = this;

        var indexOutOfRange = index < this.getNumEmptyDaysAtStart() || index >= this.getNumEmptyDaysAtStart() + this.getDateDifferenceInDays();

        if (indexOutOfRange && !this.props.showOutOfRangeDays) {
          return null;
        }

        var _this$getSquareCoordi = this.getSquareCoordinates(dayIndex),
            _this$getSquareCoordi2 = _slicedToArray(_this$getSquareCoordi, 2),
            x = _this$getSquareCoordi2[0],
            y = _this$getSquareCoordi2[1];

        var value = this.getValueForIndex(index);
        var rect =
        /*#__PURE__*/
        // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
        React__default["default"].createElement("rect", _extends({
          key: index,
          width: SQUARE_SIZE,
          height: SQUARE_SIZE,
          x: x,
          y: y,
          className: this.getClassNameForIndex(index),
          onClick: function onClick() {
            return _this2.handleClick(value);
          },
          onMouseOver: function onMouseOver(e) {
            return _this2.handleMouseOver(e, value);
          },
          onMouseLeave: function onMouseLeave(e) {
            return _this2.handleMouseLeave(e, value);
          }
        }, this.getTooltipDataAttrsForIndex(index)), /*#__PURE__*/React__default["default"].createElement("title", null, this.getTitleForIndex(index)));
        var transformDayElement = this.props.transformDayElement;
        return transformDayElement ? transformDayElement(rect, value, index) : rect;
      }
    }, {
      key: "renderWeek",
      value: function renderWeek(weekIndex) {
        var _this3 = this;

        return /*#__PURE__*/React__default["default"].createElement("g", {
          key: weekIndex,
          transform: this.getTransformForWeek(weekIndex),
          className: "".concat(CSS_PSEDUO_NAMESPACE, "week")
        }, getRange(DAYS_IN_WEEK).map(function (dayIndex) {
          return _this3.renderSquare(dayIndex, weekIndex * DAYS_IN_WEEK + dayIndex);
        }));
      }
    }, {
      key: "renderAllWeeks",
      value: function renderAllWeeks() {
        var _this4 = this;

        return getRange(this.getWeekCount()).map(function (weekIndex) {
          return _this4.renderWeek(weekIndex);
        });
      }
    }, {
      key: "renderMonthLabels",
      value: function renderMonthLabels() {
        var _this5 = this;

        if (!this.props.showMonthLabels) {
          return null;
        }

        var weekRange = getRange(this.getWeekCount() - 1); // don't render for last week, because label will be cut off

        return weekRange.map(function (weekIndex) {
          var endOfWeek = shiftDate(_this5.getStartDateWithEmptyDays(), (weekIndex + 1) * DAYS_IN_WEEK);

          var _this5$getMonthLabelC = _this5.getMonthLabelCoordinates(weekIndex),
              _this5$getMonthLabelC2 = _slicedToArray(_this5$getMonthLabelC, 2),
              x = _this5$getMonthLabelC2[0],
              y = _this5$getMonthLabelC2[1];

          return endOfWeek.getDate() >= 1 && endOfWeek.getDate() <= DAYS_IN_WEEK ? /*#__PURE__*/React__default["default"].createElement("text", {
            key: weekIndex,
            x: x,
            y: y,
            className: "".concat(CSS_PSEDUO_NAMESPACE, "month-label")
          }, _this5.props.monthLabels[endOfWeek.getMonth()]) : null;
        });
      }
    }, {
      key: "renderWeekdayLabels",
      value: function renderWeekdayLabels() {
        var _this6 = this;

        if (!this.props.showWeekdayLabels) {
          return null;
        }

        return this.props.weekdayLabels.map(function (weekdayLabel, dayIndex) {
          var _this6$getWeekdayLabe = _this6.getWeekdayLabelCoordinates(dayIndex),
              _this6$getWeekdayLabe2 = _slicedToArray(_this6$getWeekdayLabe, 2),
              x = _this6$getWeekdayLabe2[0],
              y = _this6$getWeekdayLabe2[1];

          var cssClasses = "".concat(_this6.props.horizontal ? '' : "".concat(CSS_PSEDUO_NAMESPACE, "small-text"), " ").concat(CSS_PSEDUO_NAMESPACE, "weekday-label"); // eslint-disable-next-line no-bitwise

          return dayIndex & 1 ? /*#__PURE__*/React__default["default"].createElement("text", {
            key: "".concat(x).concat(y),
            x: x,
            y: y,
            className: cssClasses
          }, weekdayLabel) : null;
        });
      }
    }, {
      key: "render",
      value: function render() {
        this.valueCache = this.getValueCache(this.props);
        return /*#__PURE__*/React__default["default"].createElement("svg", {
          className: "react-calendar-heatmap",
          viewBox: this.getViewBox()
        }, /*#__PURE__*/React__default["default"].createElement("g", {
          transform: this.getTransformForMonthLabels(),
          className: "".concat(CSS_PSEDUO_NAMESPACE, "month-labels")
        }, this.renderMonthLabels()), /*#__PURE__*/React__default["default"].createElement("g", {
          transform: this.getTransformForAllWeeks(),
          className: "".concat(CSS_PSEDUO_NAMESPACE, "all-weeks")
        }, this.renderAllWeeks()), /*#__PURE__*/React__default["default"].createElement("g", {
          transform: this.getTransformForWeekdayLabels(),
          className: "".concat(CSS_PSEDUO_NAMESPACE, "weekday-labels")
        }, this.renderWeekdayLabels()));
      }
    }]);

    return CalendarHeatmap;
  }(React__default["default"].Component);

  CalendarHeatmap.propTypes = {
    values: PropTypes.arrayOf(PropTypes.shape({
      date: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]).isRequired
    }).isRequired).isRequired,
    // array of objects with date and arbitrary metadata
    numDays: PropTypes.number,
    // number of days back from endDate to show
    startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
    // start of date range
    endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
    // end of date range
    gutterSize: PropTypes.number,
    // size of space between squares
    horizontal: PropTypes.bool,
    // whether to orient horizontally or vertically
    showMonthLabels: PropTypes.bool,
    // whether to show month labels
    showWeekdayLabels: PropTypes.bool,
    // whether to show weekday labels
    showOutOfRangeDays: PropTypes.bool,
    // whether to render squares for extra days in week after endDate, and before start date
    tooltipDataAttrs: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    // data attributes to add to square for setting 3rd party tooltips, e.g. { 'data-toggle': 'tooltip' } for bootstrap tooltips
    titleForValue: PropTypes.func,
    // function which returns title text for value
    classForValue: PropTypes.func,
    // function which returns html class for value
    monthLabels: PropTypes.arrayOf(PropTypes.string),
    // An array with 12 strings representing the text from janurary to december
    weekdayLabels: PropTypes.arrayOf(PropTypes.string),
    // An array with 7 strings representing the text from Sun to Sat
    onClick: PropTypes.func,
    // callback function when a square is clicked
    onMouseOver: PropTypes.func,
    // callback function when mouse pointer is over a square
    onMouseLeave: PropTypes.func,
    // callback function when mouse pointer is left a square
    transformDayElement: PropTypes.func // function to further transform the svg element for a single day

  };
  CalendarHeatmap.defaultProps = {
    numDays: null,
    startDate: dateNDaysAgo(200),
    endDate: new Date(),
    gutterSize: 1,
    horizontal: true,
    showMonthLabels: true,
    showOutOfRangeDays: false,
    tooltipDataAttrs: null,
    titleForValue: null,
    classForValue: function classForValue(value) {
      return value ? 'color-filled' : 'color-empty';
    },
    monthLabels: MONTH_LABELS,
    weekdayLabels: DAY_LABELS,
    onClick: null,
    onMouseOver: null,
    onMouseLeave: null,
    transformDayElement: null
  };

  return CalendarHeatmap;

}));
