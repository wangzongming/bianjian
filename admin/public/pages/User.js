//用户操作
// var userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
// var branch = userInfo && userInfo.branch || "0"; //所属分馆 主馆值为'0'

window.tableConfig.User = {
    fetchConfig: {
        //表格的ajax配置
        apiName: "userList",
        // otherParams: { branch: branch }
    },

    // data: [
    //     {
    //         id: '0',
    //         name: "李易峰",
    //         sex: "1",
    //         phone: "182116810115",
    //         weixin: "182116810115",
    //         roleId:"0",
    //         roleName: "父母",
    //         integral: 100,

    //         //小区信息
    //         communityName: "火星小区",
    //         communityId: '0',
    //         //楼号信息
    //         householdsName: "8号楼",
    //         householdsId: '0',
    //         //单元信息
    //         elementName: '一单元',
    //         elementId: '0',
    //         //户号
    //         roomNumberName: "1-8-6",
    //         roomNumberId: "0",
    //         //注册时间
    //         createTime: new Date(),
    //         //单位
    //         unit: "阿里巴巴",
    //         //是否属于维修者
    //         weiXiuZhe: "0", //0不是  1是

    //         // electricCharge: 50,
    //         // parkingCharge: 0,
    //         // tenementCharge:200, //物业费
    //     }
    // ],
    antd: {
        //同步antd table组件配置 ***必传
        rowKey: function (row) {
            // ***必传
            return row.id;
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

    //全局提示框 给false将
    infoAlert: function (selectedRows) {
        return "已选择 " + selectedRows.length + "项";
    },

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
                    name: "cancel", //关闭右边抽屉
                    type: "dashed", //类型  默认 primary
                    label: "取消"
                },
                {
                    name: "submit", //内置add del
                    type: "primary", //类型  默认 primary
                    label: "提交", //提交数据并且关闭右边抽屉
                    fetchConfig: {
                        //ajax配置
                        apiName: "userAdd"
                    }
                }
            ]
        },
        {
          name: "del", //内置add del
          icon: "delete", //icon
          type: "danger", //类型  默认 primary  [primary dashed danger]
          label: "删除",
          fetchConfig: {
            //ajax配置
            apiName: "userDel"
            // key: 'delete',//默认deleteList
          }
        }
    ],

    //所有字段配置
    formConfig: [
        // ***必传
        {
            isInTable: false,
            form: {
                field: "id",
                hide: true,
                type: "string"
            }
        },
        {
            isInSearch: true,
            table: {
                fixed: "left",
                width: 100,
                title: "姓名", //表头标题
                dataIndex: "name", //表格里面的字段
                key: "name", //表格的唯一key
                onClick: "detail"
            },
            form: {
                type: "string",
                placeholder: "请输入",
                required: true
            }
        },
        {
            isInSearch: true,
            table: {
                width: 80,
                title: "性别", //表头标题
                dataIndex: "sex", //表格里面的字段
                key: "sex", //表格的唯一key
                render: function (data) {
                    if (data) {
                        return data === "1" ? "男" : "女";
                    } else {
                        return "未知";
                    }
                }
            },
            form: {
                type: "select",
                placeholder: "请输入",
                // required: true,
                // initialValue: "2",
                optionData: [
                    {
                        label: "女",
                        value: "2"
                    },
                    {
                        label: "男",
                        value: "1"
                    }
                ]
            }
        },

        {
            isInSearch: true,
            table: {
                width: 150,
                title: "电话", //表头标题
                dataIndex: "phone", //表格里面的字段
                key: "phone", //表格的唯一key
                render: function (data) {
                    if (!data) {
                        return "-";
                    }
                    return data;
                }
            },
            form: {
                type: "string",
                placeholder: "请输入",
                required: true
            }
        },
        {
            isInSearch: true,
            table: {
                width: 130,
                title: "微信号", //表头标题
                dataIndex: "weixin", //表格里面的字段
                key: "weixin", //表格的唯一key
                render: function (data) {
                    if (!data) {
                        return "-";
                    }
                    return data;
                }
            },
            form: {
                type: "string",
                placeholder: "请输入"
            }
        },
        {
            isInSearch: true,
            table: {
                width: 110,
                title: "家庭角色", //表头标题
                dataIndex: "roleId", //表格里面的字段
                key: "roleId", //表格的唯一key
                type: "select",
                optionData: [
                    {
                        label: "父母",
                        value: "0"
                    },
                    {
                        label: "父母&子女",
                        value: "1"
                    },
                    {
                        label: "子女",
                        value: "2"
                    },
                    {
                        label: "爷爷/奶奶",
                        value: "3"
                    },
                    {
                        label: "其他",
                        value: "4"
                    }
                ],
            },
            form: {
                field: "roleId",
                type: "select",
                optionData: [
                    {
                        label: "父母",
                        value: "0"
                    },
                    {
                        label: "父母&子女",
                        value: "1"
                    },
                    {
                        label: "子女",
                        value: "2"
                    },
                    {
                        label: "爷爷/奶奶",
                        value: "3"
                    },
                    {
                        label: "其他",
                        value: "4"
                    }
                ],
                placeholder: "请输入"
            }
        },
        {
            // isInForm: false,
            // isInSearch: true,
            table: {
                width: 120,
                title: "积分", //表头标题
                dataIndex: "integral", //表格里面的字段
                key: "integral", //表格的唯一key
                align: "right",
                defaultSortOrder: "ascend",
                sorter: (a,b) => a.money - b.money
            },
            form: {
                type: "number",
                placeholder: "请输入",
                // required: true
            }
        },

        {//无限联动
            isInTable: false,//必须为false  默认false 
            form: {
                type: 'linkage',
                model: '0', // string  默认0  0所有数据都给到前端  1触焦时去请求数据
                fetchConfig: {//只有模式为0才写到这
                    apiName: 'getCBEHSelectOption',
                },
                optionConfig: { // 暂时只有模式为0有意义 所有子集默认optionConfig
                    value: 'id',
                    label: 'name',
                    children: 'children'
                },
                children: {//所有配置见qnn-form
                    isInTable: false,
                    form: {
                        label: '所属小区',
                        field: 'communityId',
                        type: 'select',
                        placeholder: '请选择',
                    },
                    children: {
                        form: {
                            label: '楼号',
                            placeholder: '请选择',
                            field: 'buildingNoId',
                            type: 'select'
                        },
                        children: {
                            form: {
                                label: '单元',
                                placeholder: '请选择',
                                field: 'elementId',
                                type: 'select'
                            },
                            children: {
                                form: {
                                    label: '户号',
                                    placeholder: '请选择',
                                    field: 'householdId',
                                    type: 'select'
                                }
                            }
                        }
                    }
                }
            }
        },

        {
            isInForm: false,
            table: {
                width: 100,
                title: "所属小区", //表头标题
                dataIndex: "communityName", //表格里面的字段
                key: "communityName" //表格的唯一key
            }
        },

        {
            isInForm: false,
            table: {
                width: 100,
                title: "楼号", //表头标题
                dataIndex: "buildingNoName", //表格里面的字段
                key: "buildingNoName" //表格的唯一key
            },
        },
        {
            isInForm: false,
            table: {
                width: 100,
                title: "单元", //表头标题
                dataIndex: "elementName", //表格里面的字段
                key: "elementName" //表格的唯一key
            },

        },
        {
            isInForm: false,
            table: {
                width: 200,
                title: "户号", //表头标题
                dataIndex: "householdName", //表格里面的字段
                key: "householdName" //表格的唯一key
            },
        },
        {
            isInSearch: true,
            table: {
                width: 200,
                title: "是否是维修者", //表头标题
                dataIndex: "weiXiuZhe", //表格里面的字段
                key: "weiXiuZhe", //表格的唯一key
                render: function (data) {
                    return data === "0" ? "否" : "是"
                }
            },
            form: {
                field: "weiXiuZhe",
                placeholder: "请选择",
                required: true,
                type: "select",
                // initialValue:'0',
                optionData: [
                    {
                        label: "否",
                        value: "0"
                    },
                    {
                        label: "是",
                        value: "1"
                    }
                ]
            }
        },

        {
            table: {
                width: 120,
                title: "单位", //表头标题
                dataIndex: "unit", //表格里面的字段
                key: "unit", //表格的唯一key 
            },
            form: {
                type: "string",
                placeholder: "请输入",
            }
        },

        {
            // isInForm: false,
            table: {
                width: 200,
                title: "注册时间", //表头标题
                dataIndex: "createTime", //表格里面的字段
                key: "createTime", //表格的唯一key ,
                format: "YYYY-MM-DD HH:mm:ss"
            },
            form: {
                initialValue: new Date(),
                editDisabled: true, //编辑处于禁用状态
                addDisabled: true, //编辑处于禁用状态
                type: "datetime"
            }
        },

        {
            isInForm: false,
            showType: "tile", //出来的样式 bubble（气泡）  tile（平铺） 默认bubble
            table: {
                width: 80,
                title: "操作",
                align: "center",
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
                                    apiName: "userUpdate"
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ]
};
