//首页轮播
window.Banner = {
    fetchConfig: {
        //表格的ajax配置
        apiName: "bannerList"
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
                        apiName: "bannerAdd"
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
                apiName: "bannerDel"
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
                field: "imgId",
                hide: true,
                type: "string",
                placeholder: "请输入",
                required: true
            }
        },
        {
            isInForm: false,
            table: {
                title: "图片地址", //表头标题
                dataIndex: "imgUrl", //表格里面的字段
                key: "imgUrl", //表格的唯一key
                width: 250,
                render: function (data) {
                    return '<img width="250px" height="100px" src="' + data + '"/>'
                }
            }
        },
        {
            table: {
                title: "点击跳转地址", //表头标题
                dataIndex: "linkUrl", //表格里面的字段
                key: "linkUrl" //表格的唯一key
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
            table: {
                title: "创建时间", //表头标题
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
                        sm: { span: 16 }
                    }
                },
                colWrapperStyle:{
                    paddingLeft:"-18px"
                }

            
            }
        },

        {
            isInTable: false,
            form: {
                field: 'imgList', //唯一的字段名 ***必传
                type: 'files',
                label: '轮播图',
                required: true,//是否必填
                fetchConfig: {
                    apiName: window.globalConfig.apiUrl + 'upload',
                },
                accept: 'image/jpeg, image/gif, image/png, image/jpg', //支持上传的类型 默认都支持  格式"image/gif, image/jpeg"   选填
                max: 1,

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
                                    apiName: "bannerUpdate"
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
