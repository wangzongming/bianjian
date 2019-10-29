import React,{ Component } from "react";
import { menuData } from "../config";
import { connect } from "react-redux";
import { Layout,Menu,Icon,Modal,Divider,Badge,message as Msg } from "antd";
import s from "./createMenu.less";
import { blank } from "../layout";

const { title,data } = menuData // ; // icon,
const _menuData = data;

const { Sider } = Layout; // Footer,Header, Content,
const SubMenu = Menu.SubMenu;

class createMenu extends Component {
    state = {
        status: {},
        modal: false,
        collapsed: this.props.collapsed || false,
        menuDomArr: [], //所有菜单数据
        defaultSelectedKeys: this.props.match.url || "" //被选中的菜单
    };

    componentWillReceiveProps(props) {
        this.setState({
            collapsed: props.collapsed
        });
    }
    componentWillUnmount() {
        window.clearInterval(window.refOrderNumTimer);
    }

    componentDidMount() {
        // const curVersion = window.localStorage.getItem("curVersion");

        // if (!curVersion || curVersion !== window.globalConfig.version) {
        //     window.localStorage.setItem(
        //         "curVersion",
        //         window.globalConfig.version
        //     );
        //     this.setState({
        //         modal: true
        //     });
        // }

        //先直接创建一遍菜单是为了避免出现空白菜单情况
        let menuDomArr = this.forMenu.bind(this,_menuData)();
        this.setState({
            menuDomArr,
            title
        });
        if (this.props.wrappedComponentRef) {
            this.props.wrappedComponentRef(this)
        }
        //请求队伍建设和边检业务的拓展
        this.getMoreUpdateMenu();
    }

    //请求队伍建设和边检业务的拓展并且更新菜单数据
    getMoreUpdateMenu = () => {
        this.props.myFetch("getBaseCodeSelect",{
            itemId: "bianJianYeWu"
        }).then(({ success,data,message }) => {
            if (success) {
                let moreData = {
                    bianJianYeWu: data,
                }
                this.props.myFetch("getBaseCodeSelect",{
                    itemId: "jianSheDuiWu"
                }).then(({ success,data,message }) => {
                    if (success) {
                        moreData['jianSheDuiWu'] = data
                        let menuDomArr = this.forMenu(_menuData,moreData);
                        this.setState({
                            menuDomArr
                        });
                    } else {
                        Msg.error(message)
                    }
                })

            } else {
                Msg.error(message)
            }
        })
    }

    defaultSelectedKeys = [];
    defaultOpenKeys = [];

    onCollapse = collapsed => {
        this.setState({
            collapsed: !collapsed
        });
    };

    forMenu = (data,moreData) => {
        let num = 0;
        //递归菜单
        let _arr = [];
        for (let i = 0; i < data.length; i++) {
            let {
                route,
                children,
                hide,
                icon,
                label,
                index,
                defaultPath
            } = data[i];
            //设置默认首页
            if (index && !this.state.defaultSelectedKeys) {
                this.setState({
                    defaultSelectedKeys: route
                });
            }
            if (!hide) {
                if (moreData) {
                    switch (route) {
                        case "/BianJianYeWu":
                            children = children.splice(0,1)
                            if (moreData["bianJianYeWu"] && moreData["bianJianYeWu"].length) {
                                for (let i = 0; i < moreData["bianJianYeWu"].length; i++) {
                                    let item = moreData["bianJianYeWu"][i];
                                    let { itemName,itemId,ext1 = '1' } = item;
                                    if (!children.map(item => item.label).includes(itemName) && ext1 === "1") {
                                        children.push({
                                            label: itemName,
                                            route: "/BianJianYeWu/:list",
                                            defaultPath: `/BianJianYeWu/${itemId}`,
                                            componentKey: "BianJianYeWu"
                                        })
                                    }
                                }
                            }
                            break;
                        case "/DuiWuJianShe":
                            children = children.splice(0,1)
                            if (moreData["jianSheDuiWu"] && moreData["jianSheDuiWu"].length) {
                                for (let i = 0; i < moreData["jianSheDuiWu"].length; i++) {
                                    let item = moreData["jianSheDuiWu"][i];
                                    let { itemName,itemId,ext1 = '1' } = item;
                                    if (!children.map(item => item.label).includes(itemName) && ext1 === "1") {
                                        children.push({
                                            label: itemName,
                                            route: "/DuiWuJianShe/:list",
                                            defaultPath: `/DuiWuJianShe/${itemId}`,
                                            // route: `/DuiWuJianShe/${itemId}`,
                                            componentKey: "DuiWuJianShe"
                                        })
                                    }
                                }
                            }
                            break;
                        default:
                            break;
                    }
                }

                //不是隐藏菜单都显示出来
                if (Array.isArray(children) && children.length > 0) {
                    //有子集
                    _arr.push(
                        <SubMenu
                            key={defaultPath || route}
                            title={
                                <span>
                                    {icon ? <Icon type={icon} /> : null}
                                    <span>{label}</span>
                                </span>
                            }
                        >
                            {this.forMenu.bind(this,children)()}
                        </SubMenu>
                    );
                } else {
                    //没有子集
                    _arr.push(
                        <Menu.Item
                            onClick={() => {
                                document.getElementsByTagName(
                                    "title"
                                )[0].innerText = label;
                                this.props.push((defaultPath || route));
                            }}
                            key={defaultPath || route}
                        >
                            <div>
                                {icon ? <Icon type={icon} /> : null}
                                <span>{label}</span>
                                <Badge
                                    count={num}
                                    overflowCount={99}
                                    style={{ marginLeft: "8px" }}
                                />
                            </div>
                        </Menu.Item>
                    );
                }
            }
        }
        // console.log(_arr)
        return _arr;
    };

    render() {
        const {
            menuDomArr = [],
            collapsed,
            defaultSelectedKeys = "",
            // title
        } = this.state;
        let _defaultSelectedKeys = defaultSelectedKeys
            ? defaultSelectedKeys.split("/")
            : "";
        let defaultSelectedK = _defaultSelectedKeys[1]
            ? [`/${_defaultSelectedKeys[1]}`]
            : [];

        if (menuDomArr.length === 0 || !menuDomArr) {
            return <div />;
        } else {
            return (
                <Sider
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                    className={s.SiderCon}
                >
                    {/* <div className={s.loginContainer}> */}
                        {/* {icon ? (
                            <img className={s.logo} src={icon} alt="logo" />
                        ) : (
                            ""
                        )} */}

                        {/* <span style={{ display: collapsed ? "none" : "" }}>
                            {title} &nbsp;{" "}
                            <a
                                target="_block"
                                onClick={() => {
                                    this.setState({
                                        modal: true
                                    });
                                }}
                            >
                                {window.globalConfig.version}
                            </a>
                        </span> */}
                    {/* </div> */}
                    <Menu
                        // theme="dark"
                        
                        defaultOpenKeys={defaultSelectedK}
                        defaultSelectedKeys={[
                            `/${_defaultSelectedKeys[1]}`,
                            defaultSelectedKeys
                        ]}
                        mode="inline"
                    >
                        {menuDomArr}
                    </Menu>
                    <Modal
                        title="更新日志"
                        visible={this.state.modal}
                        onCancel={() => {
                            this.setState({
                                modal: false
                            });
                        }}
                        footer={[]}
                        width={650}
                    >
                        <div
                            style={{
                                width: "100%",
                                height: "400px",
                                overflowY: "scroll"
                            }}
                        >
                            {/* 最多渲染5条日志 */}
                            {window.updateLog &&
                                window.updateLog.map(
                                    (
                                        {
                                            version,
                                            changeLog: { client = [],sys = [] }
                                        },
                                        index
                                    ) => {
                                        if (index < 5) {
                                            return (
                                                <div
                                                    key={index}
                                                    style={{
                                                        paddingBottom: "20px"
                                                    }}
                                                >
                                                    <Divider
                                                        orientation="left"
                                                        style={{
                                                            fontSize: "18px"
                                                        }}
                                                    >
                                                        {version}
                                                    </Divider>
                                                    <p
                                                        style={{
                                                            fontWeight: "700"
                                                        }}
                                                    >
                                                        客户端：
                                                    </p>
                                                    <ul>
                                                        {client.map(
                                                            (item,idnex) => {
                                                                return (
                                                                    <li
                                                                        key={
                                                                            idnex
                                                                        }
                                                                    >
                                                                        {item}
                                                                    </li>
                                                                );
                                                            }
                                                        )}
                                                    </ul>
                                                    <p
                                                        style={{
                                                            fontWeight: "700"
                                                        }}
                                                    >
                                                        管理后台/系统：
                                                    </p>
                                                    <ul>
                                                        {sys.map(
                                                            (item,idnex) => {
                                                                return (
                                                                    <li
                                                                        key={
                                                                            idnex
                                                                        }
                                                                    >
                                                                        {item}
                                                                    </li>
                                                                );
                                                            }
                                                        )}
                                                    </ul>
                                                </div>
                                            );
                                        } else {
                                            return <div key={index} />;
                                        }
                                    }
                                )}
                        </div>
                    </Modal>
                </Sider>
            );
        }
    }
}

export default connect(state => state)(blank(createMenu));
