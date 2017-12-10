import React from 'react';
import ReactDOM from 'react-dom';
import SysuserListView from './list'
import { Form, Row, Col, Input, Button, Icon } from 'antd';
const FormItem = Form.Item;

export default class SysuserSearchView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false
        };
        this.handleSearch = (e) => {
            e.preventDefault();
            this.props.form.validateFields((err, values) => {
                console.log('Received values of form: ', values);
            });
        }

        this.handleReset = () => {
            this.props.form.resetFields();
        }
        this.toggle = () => {
            const { expand } = this.state;
            this.setState({ expand: !expand });
        }


    }

    getFields() {
        const count = this.state.expand ? 10 : 6;
        const children = [];
        for (let i = 0; i < 10; i++) {
            children.push(
                <Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
                    <FormItem label={`Field ${i}`}>
                        <Input placeholder="placeholder" />
                    </FormItem>
                </Col>
            );
        }
        return children;
    }


    render() {
        return (
            <div>
                <Form
                    className="ant-advanced-search-form"
                    onSubmit={this.handleSearch}
                >
                    <Row gutter={24}>{this.getFields()}</Row>
                    <Row>
                        <Col span={24} style={{ textAlign: 'right' }}>
                            <Button type="primary" htmlType="submit">Search</Button>
                            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>Clear</Button>
                            <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
                                Collapse <Icon type={this.state.expand ? 'up' : 'down'} />
                            </a>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

