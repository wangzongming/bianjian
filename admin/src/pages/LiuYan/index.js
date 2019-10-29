import React,{ Component } from "react";
import QnnT from '../../component/qnn-table';
import { message as Msg,Comment,Form,Input,Button } from 'antd'
import moment from 'moment';
const { TextArea } = Input;

class Reply extends Component {

    state = {
        //回复数据
        replyData: [
            // {
            //     replyId: "0",
            //     replyTime: 1234567891234,
            //     content: "这是回复内筒这是回复内筒这是回复内筒这是回复内筒这是回复内筒这是回复内筒",
            // } 
        ],

        //问题描述
        problemDescription: "",

        text: ''
    }

    componentDidMount() {
        this.refresh();
    }

    refresh = () => {
        const { fetch,rowData: { msgId,content } } = this.props 
        fetch("huiFuList",{ msgId }).then(({ success,data,message }) => {
            if (success) { 
                this.setState({
                    problemDescription: content,
                    replyData: data
                })
            } else {
                Msg.error(message)
            }
        })
    }

    onSubmit = () => {
        const { fetch,rowData: { msgId } } = this.props
        this.setState({ submitting: true })
        fetch("huiFuAdd",{ msgId, content: this.state.text }).then(({ success,data,message }) => {
            if (success) {
                Msg.success("回复成功！");
                this.setState({
                    submitting: false
                })

                this.refresh();
            } else {
                Msg.error(message)
            }
        })
    }

    render() {
        const { problemDescription,replyData,submitting } = this.state;

        const Editor = (
            <div>
                <Form.Item label="回复" colon>
                    <TextArea rows={4} onChange={(e) => { 
                        this.setState({ text: e.target.value })
                    }} value={this.state.text} />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" loading={submitting} onClick={this.onSubmit} type="primary">
                        回复
                    </Button>
                </Form.Item>
            </div>
        );

        return (
            <div style={{
                height:window.innerHeight - 54,
                overflowY:"scroll"
            }}>
                <Comment
                    content={
                        <p>
                            <b> 用户问题：</b>{problemDescription}
                        </p>
                    }
                >
                    {
                        replyData.map(item => {
                            return <Comment
                                actions={[<span key="comment-nested-reply-to">回复时间：{moment(item.replyTime).format('YYYY-MM-DD HH:mm:ss')}</span>]}
                                key={item.replyId}
                                content={`您的回复：${item.content}`}
                            />
                        })
                    }

                    {Editor}
                </Comment>


            </div>
        );
    }
}


class index extends Component {

    render() {
        return (
            <div key={this.props.match.url}>
                <QnnT
                    fetch={this.props.myFetch}
                    headers={{ token: this.props.userInfo.token }}
                    history={this.props.history}
                    match={this.props.match}
                    {...window.LiuYan}
                    componentsKey={{
                        reply: Reply
                    }}
                />
            </div>
        );
    }
}

export default index;
