var ext1Data = [
    {
        label: "首页轮播",
        value: "/Banner",
    },
    {
        label: "单位简介",
        value: "/DanWeiJianJie",
    },
    // {
    //     label: "一体化",
    //     value: "/YiTiHua",
    // },
    // {
    //     label: "综指平台",
    //     value: "/ZongZhiPingTai",
    // },
    {
        label: "党务公开",
        value: "/DangWuGongKai",
    },
    {
        label: "边防模块",
        value: "/BianFangYaoWen",
    },
    {
        label: "边检业务",
        value: "/BianJianYeWu"
    },


    // {
    //     label: "边检业务图",
    //     value: "/BianJianYeWuPerson"
    // },
    {
        label: "边检之星",
        value: "/BianJianZhiXing"
    },
    {
        label: "队伍建设",
        value: "/DuiWuJianShe"
    },
    // {
    //     label: "队伍建设图",
    //     value: "/DuiWuJianShePerson"
    // },

    {
        label: "值班安排",
        value: "/ZhiBanAnPaiByMonth"
    },
    {
        label: "通知公告",
        value: "/TongZhiGongGao"
    },

    {
        label: "热点专题",
        value: "/ReDianZhuanTi"
    },
    {
        label: "网上公示",
        value: "/WangShangGongShi"
    },
    {
        label: "基层动态",
        value: "/JiChuDongTai"
    },
    {
        label: "主题教育",
        value: "/ZhuTiJiaoYu"
    },
    {
        label: "政策规定",
        value: "/FuWuShuiPing"
    },
    {
        label: "会议纪要",
        value: "/HuiYiJiYao"
    },

    // {
    //     label: "邮箱",
    //     value: "/TouShuYouXiang"
    // },
    {
        label: "首页浮窗",
        value: "/FuChuang",
    },
    // {
    //     label: "站长留言",
    //     value: "/LiuYan"
    // },
    {
        label: "站长信箱",
        value: "/LiuYan/0", //点击后跳转的地址 
    },
    {
        label: "政委信箱",
        value: "/LiuYan/1", //点击后跳转的地址 
    },
    {
        label: "纪委信箱",
        value: "/LiuYan/2", //点击后跳转的地址 
    },

    {
        label: "后台人员",
        value: "/AdminUser"
    },
    {
        label: "通讯录",
        value: "/Address"
    },
    {
        label: "常用字典",
        value: "/BaseCode"
    },
    
];

//管理员
window.tableConfig.AdminUser = {
    fetchConfig: {
        //表格的ajax配置
        apiName: "adminUserList",
        otherParams: {
            departmentId: "9999999999"
        }
    },
    // data: [
    //     {
    //         uid: "0",
    //         name: "youngWang",
    //         password: "123456",
    //         phone: 18216811014,
    //         permissions: "0",
    //         loginCount: 10,
    //         portrait: [
    //             {
    //                 url: "http://fpoimg.com/50x50",
    //                 uid:"1"
    //             }
    //         ]
    //     } 
    // ],
    antd: {
        //同步antd table组件配置 ***必传
        rowKey: function (row) {
            // ***必传
            return row.userKey;
        }
        // bordered: false
    },
    formItemLayoutSearch: {
        //默认数据
        labelCol: {
            xs: { span: 24 },
            sm: { span: 6 }
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 18 }
        }
    },
    paginationConfig: {
        // 同步antd的分页组件配置
        position: "bottom"
    },
    drawerConfig: {
        width: "800px"
    }, //抽屉的配置 同步antd的Drawer组件配置

    //所有操作按钮
    //内置 新增add 删除del
    actionBtns: [
        {
            name: "add",
            icon: "plus", //icon
            type: "primary", //类型  默认 primary
            label: "新增",
            //表单里面的按钮  name内置 【submit， cancel】
            formBtns: [
                {
                    name: "submit", //内置add del
                    type: "primary", //类型  默认 primary
                    label: "提交", //提交数据并且关闭右边抽屉
                    fetchConfig: {
                        //ajax配置
                        apiName: "adminUserAdd",
                        otherParams: {
                            sysDepartmentList: [
                                {
                                    label: "9999999999",
                                    value: "9999999999"
                                }
                            ]
                        }
                    }
                }
            ]
        },
        {
            name: "diyDel", //内置add del
            // name: "del", //内置add del
            icon: "delete", //icon
            type: "danger", //类型  默认 primary  [primary dashed danger]
            label: "删除",
            // fetchConfig: {
            //     //ajax配置
            //     apiName: "adminUserDel",
            //     // key: 'delete',//默认deleteList
            // },
            onClick: function (args) {
                var selectedRows = args.selectedRows;
                var msg = args.btnCallbackFn.msg;
                var fetch = args.btnCallbackFn.fetch;
                var refresh = args.btnCallbackFn.refresh;
                var params = {
                    userKey: []
                };
                if (!selectedRows.length) {
                    msg.error("请选择需要删除的数据");
                    return;
                }
                for (var i = 0; i < selectedRows.length; i++) {
                    params.userKey.push(selectedRows[i].userKey);
                }

                var loop = keys => {
                    if (keys.length) {
                        fetch("adminUserDel",{
                            userKey: keys.pop()
                        },function (res) {
                            if (res.success) {
                                loop(keys);
                            } else {
                                refresh();
                                msg.error(res.message)
                            }
                        })
                    } else {
                        refresh();
                        msg.success("删除完毕！",1.2);
                    }
                };
                loop(params.userKey);

            }

        }
    ],

    //所有字段配置
    formConfig: [
        // ***必传
        {
            isInTable: false,
            form: {
                field: "userKey",
                hide: true,
                type: "string",
                placeholder: "请输入",
                required: true
            }
        },
        // {
        //     isInTable: false,
        //     form: {
        //         field: "sysDepartmentList",
        //         hide: true,
        //         type: "PullPersion",
        //         placeholder: "请输入",
        //         required: true
        //     }
        // },


        {
            isInSearch: true,
            table: {
                title: "姓名", //表头标题
                dataIndex: "realName", //表格里面的字段
                key: "realName" //表格的唯一key
            },
            form: {
                type: "string",
                placeholder: "请输入",
                required: true,
                // editDisabled: true, //编辑处于禁用状态
                // help: "保存后将不可更改"
            }
        },
        {
            isInSearch: true,
            table: {
                title: "账号", //表头标题
                dataIndex: "userId", //表格里面的字段
                key: "userId" //表格的唯一key
            },
            form: {
                type: "string",
                placeholder: "请输入",
                required: true,
            }
        },
        {
            isInSearch: true,
            table: {
                title: "电话", //表头标题
                dataIndex: "mobile", //表格里面的字段
                key: "mobile" //表格的唯一key
            },
            form: {
                type: "phone",
                placeholder: "请输入",
                required: true
            }
        },



        // {
        //     table: {
        //         title: "密码", //表头标题
        //         dataIndex: "password", //表格里面的字段
        //         key: "password" //表格的唯一key
        //     },
        //     form: {
        //         type: "string",
        //         placeholder: "请输入",
        //         required: true
        //     }
        // },
        // {
        //     isInSearch: true,
        //     table: {
        //         title: "电话", //表头标题
        //         dataIndex: "phone", //表格里面的字段
        //         key: "phone" //表格的唯一key
        //     },
        //     form: {
        //         type: "string",
        //         placeholder: "请输入",
        //         required: true
        //     }
        // },
        {
            isInSearch: true,
            isInTable: false,
            table: {
                title: "权限", //表头标题
                dataIndex: "ext1", //表格里面的字段
                key: "ext1", //表格的唯一key 
            },
            form: {
                pullJoin: true,
                pushJoin: true,
                type: "select",
                placeholder: "可多选",
                required: true,
                multiple: true,
                optionData: ext1Data
            }
        },

        {
            isInForm: false,
            showType: "tile", //出来的样式 bubble（气泡）  tile（平铺） 默认bubble
            table: {
                width: 130,
                title: "操作",
                key: "action",
                fixed: "right", //固定到右边
                btns: [
                    {
                        name: "edit", // 内置name有【edit, detail， del】
                        render: function (rowData) {
                            return "<a>编辑</a>";
                        },
                        //表单里面的按钮  name内置 【submit， cancel】
                        formBtns: [
                            {
                                name: "cancel", //关闭右边抽屉
                                type: "dashed", //类型  默认 primary
                                label: "取消"
                            },
                            {
                                name: "submit", //内置add del
                                type: "primary", //类型  默认 primary
                                label: "保存", //提交数据并且关闭右边抽屉
                                fetchConfig: {
                                    //ajax配置
                                    apiName: "adminUserUpdate",
                                    otherParams: {
                                        sysDepartmentList: [
                                            {
                                                label: "9999999999",
                                                value: "9999999999"
                                            }
                                        ]
                                    }
                                }
                            }
                        ]
                    },
                    {
                        name: "detail", // 内置name有【detail， del】
                        render: function (rowData) {
                            return "<a>详情</a>";
                        }
                    }
                ]
            }
        }
    ]
};
