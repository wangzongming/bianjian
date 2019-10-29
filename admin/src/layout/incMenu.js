// 让组件包含左边菜单
import React from "react";
import blank from "./blank";
import { CreateMenu,logout,getUserInfo } from "../global"; //,setUserInfo 
import { Layout,Icon,message as Msg,Popover,Modal,Form,Button,Row,Col,} from "antd";
import QnnForm from '../component/qnn-table/qnn-form';
import myFetch from '../global/myFetch'

const { Header } = Layout;

class EditPwdModalCom extends React.PureComponent {
    render() {
        const { defaultPasswordReset,editPwdModal,editPwdOk,editPwdConfirmLoading,editPwdCancel,form,myFetch,history,match,wrappedComponentRef } = this.props;

        return (
            <div>
                <Modal
                    title={defaultPasswordReset ? "重置密码" : "修改密码"}
                    visible={editPwdModal}
                    closable={!defaultPasswordReset}
                    maskClosable={false}
                    centered={true}
                    keyboard={false}
                    onCancel={editPwdCancel}
                    footer={[
                        defaultPasswordReset ? null : (<Button key="back" onClick={editPwdCancel}>
                            取消
                    </Button>),
                        <Button key="submit" type="primary" loading={editPwdConfirmLoading} onClick={() => { editPwdOk(defaultPasswordReset) }}>
                            {editPwdConfirmLoading ? "提交中..." : "确定"}
                        </Button>,
                    ]}
                >
                    <div>
                        <QnnForm
                            {...this.props}
                            form={form}
                            myFetch={myFetch}
                            history={history}
                            match={match}
                            wrappedComponentRef={wrappedComponentRef}

                            formConfig={[
                                {
                                    label: "旧密码",
                                    field: "oldPwd",
                                    type: 'password',
                                    required: true,
                                    placeholder: "请输入...",
                                    hide: defaultPasswordReset, //重置密码不需要输入旧密码
                                },
                                {
                                    label: "新密码",
                                    field: "pwd",
                                    type: 'password',
                                    required: true,
                                    placeholder: "请输入..."
                                },
                                {
                                    label: "确认密码",
                                    field: "pwd2",
                                    type: 'password',
                                    required: true,
                                    placeholder: "请输入..."
                                }
                            ]}
                        />
                    </div>
                </Modal>
            </div>
        );
    }
}

const EditPwdModalComIncForm = Form.create()(EditPwdModalCom);

class SiderMenu extends React.Component {
    state = {
        userInfo: {
            avatar: "",
            name: ""
        },
        collapsed: false,

        //修改密码的弹出是否打开
        editPwdModal: false,

        //修改密码是否请求中
        editPwdConfirmLoading: false,

    };
    componentDidMount() {
        getUserInfo().then(({ userInfo: { portrait,realName = "未知" } }) => {
            this.setState({
                userInfo: {
                    avatar: portrait,
                    name: realName
                }
            });
        });
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };
    logout = () => {
        logout(this.props.history,this.props);
    };

    //修改密码
    editPwdOk = (defaultPasswordReset) => {
        const { pwd,pwd2,oldPwd } = this.qnnForm.props.form.getFieldsValue();

        if (pwd !== pwd2) {
            Msg.error("两次输入的密码不一致！请检查重试。");
            return;
        }

        this.setState({
            editPwdConfirmLoading: true,
        });

        let body = {
            userPwd: pwd,
            userPwdNew: pwd2
        }
        if (oldPwd) {
            body.userPwdOld = oldPwd;
        }
        myFetch(defaultPasswordReset ? "resetPwd" : 'editPwd',body).then(({ success,message }) => {
            this.setState({
                editPwdConfirmLoading: false,
            });
            if (success) {
                this.setState({
                    editPwdModal: false,
                });
                Msg.success(message);

                // setUserInfo(_json);

            } else {
                Msg.error(message);
            }
        });
    };

    editPwdCancel = () => {
        this.setState({
            editPwdModal: false,
        });
    };


    render() {
        const {
            userInfo: {
                // avatar,
                name
            },
            editPwdModal,
            editPwdConfirmLoading,
            defaultPasswordReset
        } = this.state;
        return (
            <Layout style={{ minHeight: "100vh" }}>
                <CreateMenu
                    wrappedComponentRef={(me) => {
                        this.getMoreUpdateMenu = me.getMoreUpdateMenu;
                    }}
                    collapsed={this.state.collapsed} />
                <Layout>
                    <Header style={{ background: "#fff",padding: 0 }}>
                        <Row style={{
                            background:"linear-gradient(45deg, rgb(24, 144, 255), whitesmoke)"
                        }}>
                            <Col span={4}>
                                <div style={{ marginLeft: "16px" }}>
                                    <Icon
                                        style={{ fontSize: "20px" }}
                                        className="trigger"
                                        type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                                        onClick={this.toggle}
                                    />
                                </div>
                                <div />
                            </Col>
                            <Col span={16}>
                                <div
                                    style={{
                                        fontSize: "40px",
                                        height: "64px",
                                        textShadow: "0 0 10px  rgb(24, 144, 255)",
                                        color: "rgb(24, 144, 255)",
                                        textAlign:"justify",
                                        color:"white"
                                        // display:"flex",
                                        // justifyContent:"center"
                                        // letterSpacing:"5px"

                                    }}
                                >出入境边防检查管理端<span style={{width:"100%",height:"0px", display:"inline-block"}}></span></div>
                            </Col>
                            <Col span={4} style={{ textAlign: "right",paddingRight: "24px" }}>
                                <div>
                                    <Popover
                                        content={
                                            <div style={{ minWidth: "100px",textAlign: "center" }}>
                                                <p><a onClick={() => {
                                                    this.setState({ editPwdModal: true })
                                                }}>修改密码</a></p>
                                                <p><a onClick={this.logout}>退出登录</a></p>
                                            </div>
                                        }
                                        placement="bottom"
                                    >
                                        {/* <Avatar src={avatar} /> */}
                                        <Icon type="user" />
                                        <span style={{ marginLeft: "5px" }}>{name}</span>
                                    </Popover>
                                </div>
                            </Col>
                        </Row>
                    </Header>
                    <div
                        style={{
                            padding: 16,
                            boxSizing: "box-border",
                            minHeight: "80vh",
                        }}
                    >
                        <div
                            style={{
                                padding: 16,
                                boxSizing: "box-border",
                                background: "#fff",  
                                minHeight: "80vh"
                            }}
                        >
                            {this.props.children ? (
                                React.Children.map(this.props.children,child =>
                                    React.cloneElement(child,{
                                        ...this.props,
                                        getMoreUpdateMenu: this.getMoreUpdateMenu
                                    })
                                )
                            ) : (
                                    <div />
                                )}
                        </div>

                        {/* 修改密码弹窗 */}
                        <EditPwdModalComIncForm
                            editPwdModal={editPwdModal}
                            editPwdConfirmLoading={editPwdConfirmLoading}
                            editPwdCancel={this.editPwdCancel.bind(this)}
                            editPwdOk={this.editPwdOk.bind(this)}
                            wrappedComponentRef={(me) => {
                                this.qnnForm = me;
                            }}
                            defaultPasswordReset={defaultPasswordReset}
                            fetch={this.props.myFetch}
                            {...this.props} />
                    </div>
                </Layout>
            </Layout>
        );
    }
}
const siderMenu = CurComponent => {
    const NewCom = blank(CurComponent);
    return props => {
        return (
            <SiderMenu {...props}>
                <NewCom {...props} />
            </SiderMenu>
        );
    };
};
export default siderMenu;
