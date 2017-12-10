(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['react', 'react-dom', 'antd'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('react'), require('react-dom'), require('antd'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.React, global.ReactDOM, global.antd);
        global.index = mod.exports;
    }
})(this, function (_react, _reactDom, _antd) {
    'use strict';

    var _react2 = _interopRequireDefault(_react);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var SubMenu = _antd.Menu.SubMenu;

    _reactDom2.default.render(_react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_antd.DatePicker, null),
        _react2.default.createElement(
            'h1',
            null,
            'Hello, world!'
        ),
        _react2.default.createElement(
            'div',
            { style: { width: 256 } },
            _react2.default.createElement(
                _antd.Menu,
                {
                    defaultSelectedKeys: ['1'],
                    defaultOpenKeys: ['sub1'],
                    mode: 'inline',
                    theme: 'dark'
                },
                _react2.default.createElement(
                    _antd.Menu.Item,
                    { key: '1' },
                    _react2.default.createElement(_antd.Icon, { type: 'pie-chart' }),
                    _react2.default.createElement(
                        'span',
                        null,
                        'Option 1'
                    )
                ),
                _react2.default.createElement(
                    _antd.Menu.Item,
                    { key: '2' },
                    _react2.default.createElement(_antd.Icon, { type: 'desktop' }),
                    _react2.default.createElement(
                        'span',
                        null,
                        'Option 2'
                    )
                ),
                _react2.default.createElement(
                    _antd.Menu.Item,
                    { key: '3' },
                    _react2.default.createElement(_antd.Icon, { type: 'inbox' }),
                    _react2.default.createElement(
                        'span',
                        null,
                        'Option 3'
                    )
                ),
                _react2.default.createElement(
                    SubMenu,
                    { key: 'sub1', title: _react2.default.createElement(
                            'span',
                            null,
                            _react2.default.createElement(_antd.Icon, { type: 'mail' }),
                            _react2.default.createElement(
                                'span',
                                null,
                                'Navigation One'
                            )
                        ) },
                    _react2.default.createElement(
                        _antd.Menu.Item,
                        { key: '5' },
                        'Option 5'
                    ),
                    _react2.default.createElement(
                        _antd.Menu.Item,
                        { key: '6' },
                        'Option 6'
                    ),
                    _react2.default.createElement(
                        _antd.Menu.Item,
                        { key: '7' },
                        'Option 7'
                    ),
                    _react2.default.createElement(
                        _antd.Menu.Item,
                        { key: '8' },
                        'Option 8'
                    )
                ),
                _react2.default.createElement(
                    SubMenu,
                    { key: 'sub2', title: _react2.default.createElement(
                            'span',
                            null,
                            _react2.default.createElement(_antd.Icon, { type: 'appstore' }),
                            _react2.default.createElement(
                                'span',
                                null,
                                'Navigation Two'
                            )
                        ) },
                    _react2.default.createElement(
                        _antd.Menu.Item,
                        { key: '9' },
                        'Option 9'
                    ),
                    _react2.default.createElement(
                        _antd.Menu.Item,
                        { key: '10' },
                        'Option 10'
                    ),
                    _react2.default.createElement(
                        SubMenu,
                        { key: 'sub3', title: 'Submenu' },
                        _react2.default.createElement(
                            _antd.Menu.Item,
                            { key: '11' },
                            'Option 11'
                        ),
                        _react2.default.createElement(
                            _antd.Menu.Item,
                            { key: '12' },
                            'Option 12'
                        )
                    )
                )
            )
        )
    ), document.getElementById('root'));
});