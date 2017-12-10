(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'react-dom', './list', 'antd'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('react-dom'), require('./list'), require('antd'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.React, global.ReactDOM, global.list, global.antd);
        global.search = mod.exports;
    }
})(this, function (exports, _react, _reactDom, _list, _antd) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    var _list2 = _interopRequireDefault(_list);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var FormItem = _antd.Form.Item;

    var SysuserSearchView = function (_React$Component) {
        _inherits(SysuserSearchView, _React$Component);

        function SysuserSearchView(props) {
            _classCallCheck(this, SysuserSearchView);

            var _this = _possibleConstructorReturn(this, (SysuserSearchView.__proto__ || Object.getPrototypeOf(SysuserSearchView)).call(this, props));

            _this.state = {
                expand: false
            };
            _this.handleSearch = function (e) {
                e.preventDefault();
                _this.props.form.validateFields(function (err, values) {
                    console.log('Received values of form: ', values);
                });
            };

            _this.handleReset = function () {
                _this.props.form.resetFields();
            };
            _this.toggle = function () {
                var expand = _this.state.expand;

                _this.setState({ expand: !expand });
            };

            return _this;
        }

        _createClass(SysuserSearchView, [{
            key: 'getFields',
            value: function getFields() {
                var count = this.state.expand ? 10 : 6;
                var children = [];
                for (var i = 0; i < 10; i++) {
                    children.push(_react2.default.createElement(
                        _antd.Col,
                        { span: 8, key: i, style: { display: i < count ? 'block' : 'none' } },
                        _react2.default.createElement(
                            FormItem,
                            { label: 'Field ' + i },
                            _react2.default.createElement(_antd.Input, { placeholder: 'placeholder' })
                        )
                    ));
                }
                return children;
            }
        }, {
            key: 'render',
            value: function render() {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _antd.Form,
                        {
                            className: 'ant-advanced-search-form',
                            onSubmit: this.handleSearch
                        },
                        _react2.default.createElement(
                            _antd.Row,
                            { gutter: 24 },
                            this.getFields()
                        ),
                        _react2.default.createElement(
                            _antd.Row,
                            null,
                            _react2.default.createElement(
                                _antd.Col,
                                { span: 24, style: { textAlign: 'right' } },
                                _react2.default.createElement(
                                    _antd.Button,
                                    { type: 'primary', htmlType: 'submit' },
                                    'Search'
                                ),
                                _react2.default.createElement(
                                    _antd.Button,
                                    { style: { marginLeft: 8 }, onClick: this.handleReset },
                                    'Clear'
                                ),
                                _react2.default.createElement(
                                    'a',
                                    { style: { marginLeft: 8, fontSize: 12 }, onClick: this.toggle },
                                    'Collapse ',
                                    _react2.default.createElement(_antd.Icon, { type: this.state.expand ? 'up' : 'down' })
                                )
                            )
                        )
                    )
                );
            }
        }]);

        return SysuserSearchView;
    }(_react2.default.Component);

    exports.default = SysuserSearchView;
});