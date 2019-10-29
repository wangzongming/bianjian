//投诉邮箱
window.TouShuYouXiang = {
    fetchConfig: {
        //表格的ajax配置
        apiName: "touShuYouXiangList"
    },
    antd: {
        //同步antd table组件配置 ***必传
        rowKey: function (row) {
            // ***必传
            return row.mailId;
        }
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
                        apiName: "touShuYouXiangAdd"
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
                apiName: "touShuYouXiangDel"
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
                field: "mailId",
                hide: true,
                type: "string",
                placeholder: "请输入",
                required: true
            }
        },
        {
            isInSearch: true,
            table: {
                title: "邮箱地址", //表头标题
                dataIndex: "mailAddress", //表格里面的字段
                key: "mailAddress" //表格的唯一key
            },
            form: {
                type: "string",
                placeholder: "请输入",
                required: true,
            }
        },
        {
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
            table: {
                width: 200,
                title: "发布时间", //表头标题
                dataIndex: "releaseTime", //表格里面的字段
                key: "releaseTime", //表格的唯一key ,
                format: "YYYY-MM-DD"
            },
            form: {
                initialValue: new Date(),
                // editDisabled: true, //编辑处于禁用状态
                // addDisabled: true, //编辑处于禁用状态
                type: "date",

                
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
                                    apiName: "touShuYouXiangUpdate"
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
