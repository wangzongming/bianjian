window.Notice = {
    fetchConfig: {
        //表格的ajax配置
        apiName: "noticeList",
        otherParams:{
            // isAdmin:true
        }
    },
    // data: [
    //     {
    //         id: "0",
    //         title: "又一国际巨头将撤离深圳！裁员千余人 两年后关门",
    //         digest:
    //             "爱普生精工深圳公司即将关门的消息近日引起了极大关注。爱普生中国随后确认，将在2021年3月关闭深圳区域手表制造公司。在手表行业整体低迷的环境下，这个来自日本的高端品牌选择将自家的业务进入“垃圾时间”",
    //         content:
    //             "爱普生精工深圳公司即将关门的消息近日引起了极大关注。爱普生中国随后确认，将在2021年3月关闭深圳区域手表制造公司。在手表行业整体低迷的环境下，这个来自日本的高端品牌选择将自家的业务进入“垃圾时间”",
    //         createTime: new Date(),
    //         createUserName: "admin",
    //         //小区
    //         communityName:"火星小区", //
    //         communityId:"123456", //0是全部
    //     }
    // ],
    antd: {
        //同步antd table组件配置 ***必传
        rowKey: function (row) {
            // ***必传
            return row.id;
        },
        // bordered: false,
        locale: {
            emptyText: "暂无数据"
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
    isShowRowSelect: true, //是否显示选择框  默认true
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
                        apiName: "noticeAdd"
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
                apiName: "noticeDel"
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
                type: "string",
                placeholder: "请输入...",
                required: true
            }
        },
        {
            isInSearch: true,
            table: {
                title: "标题", //表头标题
                dataIndex: "title", //表格里面的字段
                key: "title", //表格的唯一key 
            },
            form: {
                type: "string",
                placeholder: "请输入...",
                required: true
            }
        },

        {
            table: {
                title: "摘要", //表头标题
                dataIndex: "digest", //表格里面的字段
                key: "digest" //表格的唯一key ,
            },
            form: {
                type: "textarea",
                placeholder: "请输入...",
                required: true
            }
        },
        // {
        //     isInSearch: true,
        //     table: {
        //         width:100,
        //         title: "分类", //表头标题
        //         dataIndex: "type", //表格里面的字段
        //         key: "type" //表格的唯一key ,
        //     },
        //     form: {
        //         type: "select",
        //         placeholder: "请输入...",
        //         initialValue:"0",
        //         optionData:[
        //             {
        //                 label:"国内新闻",
        //                 value:"0"
        //             },
        //             {
        //                 label:"国际新闻",
        //                 value:"1"
        //             }
        //         ],
        //         required:true
        //     }
        // },
        {
            table: {
                width: 180,
                title: "发布时间", //表头标题
                dataIndex: "releaseTime", //表格里面的字段
                key: "releaseTime", //表格的唯一key ,
                format: "YYYY-MM-DD HH:mm:ss"
            },
            form: {
                type: "datetime",
                initialValue: new Date(),
                format: "YYYY-MM-DD HH:mm:ss"
            }
        },
        {
            isInSearch: true, 
            table: {
                width: 100,
                title: "所属小区", //表头标题
                dataIndex: "communityName", //表格里面的字段
                key: "communityName" //表格的唯一key
            },
            form: {
                field: "communityId",
                type: "select",
                placeholder: "请选择",
                fetchConfig: {
                    apiName: "communityList",
                    otherParams: {
                        type: "all"
                    }
                },
                optionConfig: {
                    value: "id",
                    label: "name"
                }
                // initialValue: branch
            }
        },
        {
            isInTable: false,
            table: {
                width: 120,
                title: "内容", //表头标题
                dataIndex: "content", //表格里面的字段
                key: "content" //表格的唯一key ,
            },
            form: {
                type: "richText",
                placeholder: "请输入...",
                fetchConfig:{
                    //必须配置  上传图片地址
                    uploadUrl:window.globalConfig.apiUrl + 'upload' //***必传
                },
                help:'图片尺寸缩放完毕后，请点击一下表单空白处，然后在点击一下该图片'
            },
            
        },
        // {
        //     table: {
        //         width: 120,
        //         title: "创建者", //表头标题
        //         dataIndex: "createUserName", //表格里面的字段
        //         key: "createUserName" //表格的唯一key ,
        //     },
        //     form: {
        //         type: "string",
        //         addShow: false, //新增时在表单中隐藏
        //         editShow: false //编辑时在表单中隐藏
        //     }
        // },
        {
            isInForm: false,
            showType: "tile", //出来的样式 bubble（气泡）  tile（平铺） 默认bubble
            table: {
                width: 120,
                title: "<center>操作</center>",
                key: "action",
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
                                    apiName: "noticeUpdate"
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
