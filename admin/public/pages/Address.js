//首页轮播
window.Address = {
    fetchConfig: {
        //表格的ajax配置
        apiName: "addRessList"
    },
    antd: {
        //同步antd table组件配置 ***必传
        rowKey: "imgId"
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
                        apiName: "addRessAdd"
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
                apiName: "addRessDel"
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
                field: "millId",
                hide: true,
                type: "string",
                placeholder: "请输入",
                required: true
            }
        },
        {
            isInSearch: true,
            table: {
                title: "姓名", //表头标题
                dataIndex: "name", //表格里面的字段
                key: "name" //表格的唯一key
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
                title: "职位", //表头标题
                dataIndex: "dept", //表格里面的字段
                key: "dept" //表格的唯一key
            },
            form: {
                type: "string",
                placeholder: "请输入",
                // required: true,
            }
        },
        {
            isInSearch: true,
            table: {
                title: "电话", //表头标题
                dataIndex: "tel", //表格里面的字段
                key: "tel" //表格的唯一key
            },
            form: {
                type: "string",
                placeholder: "请输入", 
            }
        },
        {
            isInSearch: true,
            table: {
                title: "对讲机号", //表头标题
                dataIndex: "interphoneNumber", //表格里面的字段
                key: "interphoneNumber" //表格的唯一key
            },
            form: {
                type: "string",
                placeholder: "请输入", 
            }
        },
        { 
            table: {
                title: "内网", //表头标题
                dataIndex: "intranet", //表格里面的字段
                key: "intranet" //表格的唯一key
            },
            form: {
                type: "string",
                placeholder: "请输入", 
            }
        },
        { 
            table: {
                title: "电信专网", //表头标题
                dataIndex: "privateNetwork", //表格里面的字段
                key: "privateNetwork" //表格的唯一key
            },
            form: {
                type: "string",
                placeholder: "请输入", 
            }
        },
        { 
            table: {
                title: "排序", //表头标题
                dataIndex: "sort", //表格里面的字段
                key: "sort" //表格的唯一key
            },
            form: {
                type: "number",
                placeholder: "请输入", 
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
                                    apiName: "addRessUpdate"
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
