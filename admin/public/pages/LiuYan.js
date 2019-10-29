
window.LiuYan = {
    fetchConfig: {
        //表格的ajax配置
        apiName: "liuYanList",
        otherParams:function(obj){ 
            return obj.match.params;
        }
    },
    antd: {
        //同步antd table组件配置 ***必传
        rowKey: function (row) {
            // ***必传
            return row.msgId;
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
            name: "del", //内置add del
            icon: "delete", //icon
            type: "danger", //类型  默认 primary  [primary dashed danger]
            label: "删除",
            fetchConfig: {
                //ajax配置
                apiName: "liuYanDel"
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
                field: "msgId",
                hide: true,
                type: "string",
                placeholder: "请输入",
                required: true
            }
        },
        {
            isInSearch: true,
            table: {
                title: "标题", //表头标题
                dataIndex: "title", //表格里面的字段
                key: "title" //表格的唯一key
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
        // {
        //     isInSearch: true,
        //     table: {
        //         title: "手机号", //表头标题
        //         dataIndex: "tel", //表格里面的字段
        //         key: "tel" //表格的唯一key
        //     },
        //     form: {
        //         type: "phone",
        //         placeholder: "请输入",
        //         required: true,
        //     }
        // },
        {
            isInSearch: true,
            table: {
                title: "邮箱", //表头标题
                dataIndex: "mailbox", //表格里面的字段
                key: "telmailbox" //表格的唯一key
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
                title: "联系地址", //表头标题
                dataIndex: "address", //表格里面的字段
                key: "address" //表格的唯一key
            },
            form: {
                type: "string",
                placeholder: "请输入",
                required: true,
            }
        },

        {
            isInForm:false,
            table: {
                title: "留言时间", //表头标题
                dataIndex: "leavingMsgTime", //表格里面的字段
                key: "leavingMsgTime" //表格的唯一key
            },
            form: {
                type: "datetime",
                placeholder: "请选择",
            }
        },
        {
            isInForm: false,
            table: {
                title: "回复状态", //表头标题
                dataIndex: "replyFlag", //表格里面的字段
                key: "replyFlag", //表格的唯一key
                render: function (data) {
                    return data === '1' ? '已回复' : '未回复'
                }
            }
        }, 
        {
            isInTable: false,
            table: {
                title: "内容", //表头标题
                dataIndex: "content", //表格里面的字段
                key: "content" //表格的唯一key
            },
            form: {
                type: "textarea",
                placeholder: "请输入",
            }
        },


        {
            isInForm: false,
            showType: "tile", //出来的样式 bubble（气泡）  tile（平铺） 默认bubble
            
            table: {
                width: 160,
                title: "操作",
                key: "action", 
                fixed:'right',
                btns: [
                  
                    {
                        name: "detail", // 内置name有【detail， del】
                        render: function (rowData) {
                            return "<a>详情</a>";
                        }
                    },
                    {
                        name: "Component", // 内置name有【detail， del】
                        label:"回复",
                        drawerTitle:"回复",
                        Component:"reply"
                    }
                ]
            }
        }
    ]
};
