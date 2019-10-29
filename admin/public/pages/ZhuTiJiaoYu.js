
window.ZhuTiJiaoYu = {
    fetchConfig: {
        //表格的ajax配置
        apiName: "zhuTiJiaoYuList"
    },
    antd: {
        //同步antd table组件配置 ***必传
        rowKey: function (row) {
            // ***必传
            return row.thematicId;
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
                        apiName: "zhuTiJiaoYuAdd"
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
                apiName: "zhuTiJiaoYuDel"
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
                field: "thematicId",
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
                title: "审核人", //表头标题
                dataIndex: "auditor", //表格里面的字段
                key: "auditor" //表格的唯一key
            },
            form: {
                type: "string",
                placeholder: "请输入",
            }
        },



        // {
        //     table: {
        //         width: 80,
        //         title: "排序", //表头标题
        //         dataIndex: "sort", //表格里面的字段
        //         key: "sort" //表格的唯一key
        //     },
        //     form: {
        //         type: "number",
        //         initialValue: 99,
        //         placeholder: "请输入",
        //     }
        // },

        // {
        //     isInSearch: true,
        //     table: {
        //         title: "发布部门", //表头标题
        //         dataIndex: "releaseDept", //表格里面的字段
        //         key: "releaseDept", //表格的唯一key , 
        //     },
        //     form: {
        //         type: "string",
        //         placeholder: "请输入", 
        //     }
        // },

        {
            isInSearch: true,
            table: {
                title: "发布者", //表头标题
                dataIndex: "publisher", //表格里面的字段
                key: "publisher" //表格的唯一key
            },
            form: {
                type: "string",
                placeholder: "请输入",
                required: true,



                spanForm: 12,
                formItemLayoutForm: {
                    //默认数据
                    labelCol: {
                        xs: { span: 24 },
                        sm: { span: 7 }
                    },
                    wrapperCol: {
                        xs: { span: 24 },
                        sm: { span: 16 }
                    }
                },
                colWrapperStyle: {
                    paddingLeft: "-18px"
                }
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

                spanForm: 12,
                formItemLayoutForm: {
                    //默认数据
                    labelCol: {
                        xs: { span: 24 },
                        sm: { span: 7 }
                    },
                    wrapperCol: {
                        xs: { span: 24 },
                        sm: { span: 15 }
                    }
                },
                colWrapperStyle: {
                    paddingLeft: "18px"
                }
            }
        },

        {
            isInForm: false,
            table: {
                title: "浏览量", //表头标题
                dataIndex: "numberOfVisits", //表格里面的字段
                key: "numberOfVisits" //表格的唯一key
            },
        },
        {
            table: {
                title: "备注", //表头标题
                dataIndex: "remarks", //表格里面的字段
                key: "remarks" //表格的唯一key
            },
            form: {
                type: "textarea",
                placeholder: "请输入",
            }
        },

        {
            isInTable: false,
            form: {
                field: 'attachment', //唯一的字段名 ***必传
                type: 'files',
                label: '附件',
                fetchConfig: {
                    apiName: window.globalConfig.apiUrl + 'upload',
                },
            }
        },
        {
            isInTable: false,
            table: {
                width: 120,
                title: "正文内容", //表头标题
                dataIndex: "content", //表格里面的字段
                key: "content" //表格的唯一key ,
            },
            form: {
                type: "richText",
                placeholder: "请输入...",
                fetchConfig: {
                    //必须配置  上传图片地址
                    uploadUrl: window.globalConfig.apiUrl + 'upload' //***必传
                },
                help: '图片尺寸缩放完毕后，请点击一下表单空白处，然后在点击一下该图片'
            },

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
                                    apiName: "zhuTiJiaoYuUpdate"
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
