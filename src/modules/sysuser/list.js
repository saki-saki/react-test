import React from 'react';
import ReactDOM from 'react-dom';
import { Table } from 'antd';

export default class SysuserListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pagination: {},
            loading: false,
        };
        this.columns = [{
            title: 'Name',
            dataIndex: 'name',
            sorter: true,
            render: name => `${name.first} ${name.last}`,
            width: '20%',
        }, {
            title: 'Gender',
            dataIndex: 'gender',
            filters: [
                { text: 'Male', value: 'male' },
                { text: 'Female', value: 'female' },
            ],
            width: '20%',
        }, {
            title: 'Email',
            dataIndex: 'email',
        }];

        this.handleTableChange = (pagination, filters, sorter) => {
            const pager = this.state.pagination;
            pager.current = pagination.current;
            this.setState({
                pagination: pager,
            });
            this.query({
                results: pagination.pageSize,
                page: pagination.current,
                sortField: sorter.field,
                sortOrder: sorter.order
            });
        }
    }

    query(params = {}) {
        this.setState({ loading: true });
        const pagination = this.state.pagination
        pagination.total = 200;

        var data =
        {
            "results":[
                {
                    "gender":"male",
                    "name":{
                        "title":"mr"+new Date().getTime(),
                        "first":"wyatt"+new Date().getTime(),
                        "last":"myers"
                    },
                    "location":{
                        "street":"3871 green lane",
                        "city":"dublin",
                        "state":"tipperary",
                        "postcode":11899
                    },
                    "email":"wyatt.myers@example.com",
                    "login":{
                        "username":"whitepeacock184",
                        "password":"nitram",
                        "salt":"nXa6Ertj",
                        "md5":"95f32e6fcb0ae5f7121533ca0ac3e0b7",
                        "sha1":"0473fb9ce81eb70bd0fe2633dd9a0d3eddfe36a8",
                        "sha256":"8ce82430a3db3dbee0968ccf150118dbbbde65cb68aaa0f39ea15956c4e44cff"
                    },
                    "dob":"1993-01-18 04:30:43",
                    "registered":"2013-09-25 08:36:28",
                    "phone":"021-533-1129",
                    "cell":"081-544-0681",
                    "id":{
                        "name":"PPS",
                        "value":"2579747T"
                    },
                    "picture":{
                        "large":"https://randomuser.me/api/portraits/men/13.jpg",
                        "medium":"https://randomuser.me/api/portraits/med/men/13.jpg",
                        "thumbnail":"https://randomuser.me/api/portraits/thumb/men/13.jpg"
                    },
                    "nat":"IE"
                },
                {
                    "gender":"female",
                    "name":{
                        "title":"ms",
                        "first":"delphine"+new Date().getTime(),
                        "last":"claire"+new Date().getTime()
                    },
                    "location":{
                        "street":"3234 dalhousie ave",
                        "city":"windsor",
                        "state":"nova scotia",
                        "postcode":21769
                    },
                    "email":"delphine.claire@example.com",
                    "login":{
                        "username":"ticklishfrog684",
                        "password":"mcdonald",
                        "salt":"LMOI5SF5",
                        "md5":"f25ae78ccd16b499f0937a6b0786d8b7",
                        "sha1":"0d00356d4b0c85d66e3e27d6ac1dbfbe20b148a4",
                        "sha256":"37cc61c67f9e0c7117160da44dc0f3cbf2fdd03062cb13768cc803033cd98843"
                    },
                    "dob":"1948-10-03 10:36:24",
                    "registered":"2012-05-08 22:29:06",
                    "phone":"623-322-8049",
                    "cell":"009-893-3703",
                    "id":{
                        "name":"",
                        "value":null
                    },
                    "picture":{
                        "large":"https://randomuser.me/api/portraits/women/76.jpg",
                        "medium":"https://randomuser.me/api/portraits/med/women/76.jpg",
                        "thumbnail":"https://randomuser.me/api/portraits/thumb/women/76.jpg"
                    },
                    "nat":"CA"
                }
            ]
        };
        
        
        

        this.setState({
            loading: false,
            data: data.results,
            pagination,
        });

    }




    componentDidMount() {
        this.query({});
    }

    componentWillUnmount() {

    }


    render() {
        return (
            <Table columns={this.columns}
                rowKey={record => record.registered}
                dataSource={this.state.data}
                pagination={this.state.pagination}
                loading={this.state.loading}
                onChange={this.handleTableChange}
            />
        );
    }
}
