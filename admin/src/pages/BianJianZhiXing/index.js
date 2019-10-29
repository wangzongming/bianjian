import React,{ Component } from "react";
import QnnT from '../../component/qnn-form';
import { Form } from "antd"
class index extends Component {
    render() {
        return (
            <div key={this.props.match.url}>
                <QnnT 
                    form={this.props.form}
                    fetch={this.props.myFetch}
                    headers={{ token: this.props.userInfo.token }}
                    history={this.props.history}
                    match={this.props.match}
                    {...window.BianJianZhiXing}
                />
            </div>
        );
    }
}

export default Form.create()(index);
