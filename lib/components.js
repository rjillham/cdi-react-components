'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CdiConfirmModal = exports.HelloLib = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _availityReactstrapValidation = require('availity-reactstrap-validation');

var _reactstrap = require('reactstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HelloLib = exports.HelloLib = function (_Component) {
    _inherits(HelloLib, _Component);

    function HelloLib() {
        _classCallCheck(this, HelloLib);

        return _possibleConstructorReturn(this, (HelloLib.__proto__ || Object.getPrototypeOf(HelloLib)).apply(this, arguments));
    }

    _createClass(HelloLib, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                'Hello World'
            );
        }
    }]);

    return HelloLib;
}(_react.Component);

var CdiConfirmModal = exports.CdiConfirmModal = function (_Component2) {
    _inherits(CdiConfirmModal, _Component2);

    function CdiConfirmModal(props) {
        _classCallCheck(this, CdiConfirmModal);

        var _this2 = _possibleConstructorReturn(this, (CdiConfirmModal.__proto__ || Object.getPrototypeOf(CdiConfirmModal)).call(this, props));

        _this2.save = _this2.save.bind(_this2);
        _this2.cancel = _this2.cancel.bind(_this2);
        return _this2;
    }

    _createClass(CdiConfirmModal, [{
        key: 'save',
        value: function save() {
            this.props.onConfirmClose(true);
        }
    }, {
        key: 'cancel',
        value: function cancel() {
            this.props.onConfirmClose(false);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                    _reactstrap.Modal,
                    { isOpen: this.props.modalState, className: this.props.className },
                    _react2.default.createElement(
                        _reactstrap.ModalHeader,
                        null,
                        this.props.modalData.header
                    ),
                    _react2.default.createElement(
                        _reactstrap.ModalBody,
                        null,
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            this.props.modalData.message
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'row' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col text-right' },
                                _react2.default.createElement(
                                    _reactstrap.Button,
                                    { color: 'primary', onClick: this.save },
                                    'Yes'
                                ),
                                '\xA0',
                                _react2.default.createElement(
                                    _reactstrap.Button,
                                    { color: 'secondary', onClick: this.cancel },
                                    'No'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return CdiConfirmModal;
}(_react.Component);
