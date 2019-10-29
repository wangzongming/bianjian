import React,{ Component } from "react";
import ReactUeditor from 'ifanrx-react-ueditor'
import s from "./style.less";
import $ from 'jquery'
import { message as Msg } from 'antd'
window.UEDITOR_HOME_URL = window.globalConfig.ueCdn + '/';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value || ""
        };
    }

    static getDerivedStateFromProps(props,state) {
        let obj = {
            ...state,
            ...props
        };
        return obj;
    }

    componentDidMount() {
        // this.ueditorRef.setContent(this.props.value);
    }

    componentDidUpdate(preProps) {
        //当props的值改变时并且不是输入状态就执行更新 
        if (!preProps.value && this.props.value) {
            let _val = this.state.value;
            setTimeout(() => {
                if (this.ueditorRef) { 
                    this.ueditorRef.setContent(_val);
                }
            },500);
        }
    }

    updateEditorContent(content) {
        this.props.onChange(content);
        this.setState({
            value: content
        })
        if (!this.state.inInput) {
            this.setState({
                isInput: true
            });
        }
    }

    uploadImage = e => {
        const { uploadUrl,token } = this.props;
        // console.log(this.props)
        Msg.loading('图片上传中...',0)
        return new Promise(function (resolve,reject) {
            var fd = new FormData();

            fd.append("fileToUpload",e.target.files[0]);
            $.ajax({
                url: uploadUrl,
                type: "POST",
                data: fd,
                processData: false,
                contentType: false,
                dataType: 'json',
                async: false,
                headers: {
                    token: token
                },
                success: function ({ data,success,message }) {
                    //成功后的回调事件
                    if (success) {
                        console.log(data.url)
                        resolve(data.url);
                    } else {
                        Msg.error(message)
                    }
                },
                complete: function () {
                    Msg.destroy()
                }
            })
        })
    }

    render() {
        const { disabled,value } = this.props; 
        return (
            <div className={s.editContainer}>
                <ReactUeditor 
                    config={{
                        readonly: disabled,
                        zIndex: 1001
                    }}
                    getRef={(me) => {
                        if(me){  
                            this.ueditorRef = me; 
                            if(me.getContentLength() === 0  && value){ 
                                setTimeout(() => {
                                    me.setContent(value);
                                },500);
                            }
                        }
                    }}
                    ueditorPath={window.globalConfig.ueCdn}
                    plugins={[
                        // 'insertCode',
                        'uploadImage',
                        'insertLink',
                        // uploadImagePlugin
                    ]}
                    uploadImage={this.uploadImage.bind(this)}
                    onChange={this.updateEditorContent.bind(this)}
                />
            </div>
        );
    }
}

export default index;
