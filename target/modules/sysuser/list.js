(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'react-dom', 'antd'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('react-dom'), require('antd'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.React, global.ReactDOM, global.antd);
        global.list = mod.exports;
    }
})(this, function (exports, _react, _reactDom, _antd) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _reactDom2 = _interopRequireDefault(_reactDom);

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

    var SysuserListView = function (_React$Component) {
        _inherits(SysuserListView, _React$Component);

        function SysuserListView(props) {
            _classCallCheck(this, SysuserListView);

            var _this = _possibleConstructorReturn(this, (SysuserListView.__proto__ || Object.getPrototypeOf(SysuserListView)).call(this, props));

            _this.state = {
                data: [],
                pagination: {},
                loading: false
            };
            _this.columns = [{
                title: 'Name',
                dataIndex: 'name',
                sorter: true,
                render: function render(name) {
                    return name.first + ' ' + name.last;
                },
                width: '20%'
            }, {
                title: 'Gender',
                dataIndex: 'gender',
                filters: [{ text: 'Male', value: 'male' }, { text: 'Female', value: 'female' }],
                width: '20%'
            }, {
                title: 'Email',
                dataIndex: 'email'
            }];

            _this.handleTableChange = function (pagination, filters, sorter) {
                var pager = _this.state.pagination;
                pager.current = pagination.current;
                _this.setState({
                    pagination: pager
                });
                _this.query({
                    results: pagination.pageSize,
                    page: pagination.current,
                    sortField: sorter.field,
                    sortOrder: sorter.order
                });
            };
            return _this;
        }

        _createClass(SysuserListView, [{
            key: 'query',
            value: function query() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.setState({ loading: true });
                var pagination = this.state.pagination;
                pagination.total = 200;

                var data = {
                    "results": [{
                        "gender": "male",
                        "name": {
                            "title": "mr" + new Date().getTime(),
                            "first": "wyatt" + new Date().getTime(),
                            "last": "myers"
                        },
                        "location": {
                            "street": "3871 green lane",
                            "city": "dublin",
                            "state": "tipperary",
                            "postcode": 11899
                        },
                        "email": "wyatt.myers@example.com",
                        "login": {
                            "username": "whitepeacock184",
                            "password": "nitram",
                            "salt": "nXa6Ertj",
                            "md5": "95f32e6fcb0ae5f7121533ca0ac3e0b7",
                            "sha1": "0473fb9ce81eb70bd0fe2633dd9a0d3eddfe36a8",
                            "sha256": "8ce82430a3db3dbee0968ccf150118dbbbde65cb68aaa0f39ea15956c4e44cff"
                        },
                        "dob": "1993-01-18 04:30:43",
                        "registered": "2013-09-25 08:36:28",
                        "phone": "021-533-1129",
                        "cell": "081-544-0681",
                        "id": {
                            "name": "PPS",
                            "value": "2579747T"
                        },
                        "picture": {
                            "large": "https://randomuser.me/api/portraits/men/13.jpg",
                            "medium": "https://randomuser.me/api/portraits/med/men/13.jpg",
                            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/13.jpg"
                        },
                        "nat": "IE"
                    }, {
                        "gender": "female",
                        "name": {
                            "title": "ms",
                            "first": "delphine" + new Date().getTime(),
                            "last": "claire" + new Date().getTime()
                        },
                        "location": {
                            "street": "3234 dalhousie ave",
                            "city": "windsor",
                            "state": "nova scotia",
                            "postcode": 21769
                        },
                        "email": "delphine.claire@example.com",
                        "login": {
                            "username": "ticklishfrog684",
                            "password": "mcdonald",
                            "salt": "LMOI5SF5",
                            "md5": "f25ae78ccd16b499f0937a6b0786d8b7",
                            "sha1": "0d00356d4b0c85d66e3e27d6ac1dbfbe20b148a4",
                            "sha256": "37cc61c67f9e0c7117160da44dc0f3cbf2fdd03062cb13768cc803033cd98843"
                        },
                        "dob": "1948-10-03 10:36:24",
                        "registered": "2012-05-08 22:29:06",
                        "phone": "623-322-8049",
                        "cell": "009-893-3703",
                        "id": {
                            "name": "",
                            "value": null
                        },
                        "picture": {
                            "large": "https://randomuser.me/api/portraits/women/76.jpg",
                            "medium": "https://randomuser.me/api/portraits/med/women/76.jpg",
                            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/76.jpg"
                        },
                        "nat": "CA"
                    }]
                };

                this.setState({
                    loading: false,
                    data: data.results,
                    pagination: pagination
                });
            }
        }, {
            key: 'componentDidMount',
            value: function componentDidMount() {
                this.query({});
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {}
        }, {
            key: 'render',
            value: function render() {
                return _react2.default.createElement(_antd.Table, { columns: this.columns,
                    rowKey: function rowKey(record) {
                        return record.registered;
                    },
                    dataSource: this.state.data,
                    pagination: this.state.pagination,
                    loading: this.state.loading,
                    onChange: this.handleTableChange
                });
            }
        }]);

        return SysuserListView;
    }(_react2.default.Component);

    exports.default = SysuserListView;
});