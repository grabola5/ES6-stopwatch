'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stopwatch = function (_React$Component) {
	_inherits(Stopwatch, _React$Component);

	function Stopwatch(props) {
		_classCallCheck(this, Stopwatch);

		var _this = _possibleConstructorReturn(this, (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).call(this, props));

		_this.state = {
			running: false,
			minutes: 0,
			seconds: 0,
			miliseconds: 0
		};
		return _this;
	}

	_createClass(Stopwatch, [{
		key: 'format',
		value: function format(minutes, seconds, miliseconds) {
			return pad0(minutes) + ':' + pad0(seconds) + ':' + pad0(Math.floor(miliseconds));
		}
	}, {
		key: 'handleStartClick',
		value: function handleStartClick() {
			var _this2 = this;

			if (!this.state.running) {
				var watch = setInterval(function () {
					return _this2.calculate();
				}, 10);
				this.setState({
					watch: watch
				});
			}
		}
	}, {
		key: 'handleStopClick',
		value: function handleStopClick() {
			var clear = clearInterval(this.state.watch);
			this.setState({
				clear: clear
			});
		}
	}, {
		key: 'handleResetClick',
		value: function handleResetClick() {
			this.setState({
				running: false,
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			});
		}
	}, {
		key: 'calculate',
		value: function calculate() {
			var minutes = this.state.minutes;
			var seconds = this.state.seconds;
			var miliseconds = this.state.miliseconds;


			miliseconds += 1;
			if (miliseconds >= 100) {
				seconds += 1;
				miliseconds = 0;
			}
			if (seconds >= 60) {
				minutes += 1;
				seconds = 0;
			}

			this.setState({
				minutes: minutes,
				seconds: seconds,
				miliseconds: miliseconds
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var minutes = this.state.minutes;
			var seconds = this.state.seconds;
			var miliseconds = this.state.miliseconds;

			return React.createElement(
				'div',
				null,
				this.format(minutes, seconds, miliseconds),
				React.createElement(
					'button',
					{ className: 'button', onClick: function onClick() {
							return _this3.handleStartClick();
						} },
					'Start'
				),
				React.createElement(
					'button',
					{ className: 'button', onClick: function onClick() {
							return _this3.handleStopClick();
						} },
					'Stop'
				),
				React.createElement(
					'button',
					{ className: 'button', onClick: function onClick() {
							return _this3.handleResetClick();
						} },
					'Reset'
				)
			);
		}
	}]);

	return Stopwatch;
}(React.Component);

function pad0(value) {
	var result = value.toString();
	if (result.length < 2) {
		result = '0' + result;
	}
	return result;
}

var element = React.createElement(Stopwatch);
ReactDOM.render(element, document.getElementById('app'));
