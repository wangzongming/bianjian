
window.zhiBanAnPaiByMonth = {
    fetchConfig: {
        //表格的ajax配置
        apiName: "zhiBanAnPaiByMonthList"
    },
    // data:[
    //     {
    //         dutyMonth:new Date().getTime()
    //     }
    // ],
    antd: {
        //同步antd table组件配置 ***必传
        rowKey: function (row) {
            // ***必传
            return row.monthId;
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
                        apiName: "zhiBanAnPaiByMonthAdd"
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
                apiName: "zhiBanAnPaiByMonthDel"
                // key: 'delete',//默认deleteList
            }
        },
        {
            name: "diy",
            type: "dashed", //类型  默认 primary
            icon: "download", //icon 
            label: "导入模板下载",
            onClick: function (args) {
                window.open(window.globalConfig.client + "import_template.xlsx")
            }
        }
    ],

    //所有字段配置
    formConfig: [
        // ***必传
        {
            isInTable: false,
            form: {
                field: "monthId",
                hide: true,
                type: "string",
                placeholder: "请输入",
                required: true
            }
        },
        { 
            table: {
                title: "值班月份", //表头标题
                dataIndex: "dutyMonth", //表格里面的字段
                key: "dutyMonth", //表格的唯一key ,
                format: "YYYY-MM"
            },
            form: {
                initialValue: new Date(),
                type: "month"
            }
        },
        // {
        //     table: {
        //         title: "导入状态", //表头标题
        //         dataIndex: "importFlag", //表格里面的字段
        //         key: "importFlag", //表格的唯一key , 
        //         render: function (data) {
        //             var obj = {
        //                 "0": "未导入",
        //                 "1": "已导入"
        //             }
        //             return obj[data];
        //         }
        //     },
        //     form: {
        //         type: "select",
        //         optionData: [
        //             {
        //                 label: "未导入",
        //                 value: "0"
        //             },
        //             {
        //                 label: "已导入",
        //                 value: "1"
        //             }
        //         ]
        //     }
        // },


        {
            table: {
                title: "批准人", //表头标题
                dataIndex: "approver", //表格里面的字段
                key: "approver", //表格的唯一key , 
            },
            form: {
                type: "string",
                placeholder: "请输入"
            }
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
                field: 'fileList', //唯一的字段名 ***必传
                type: 'files',
                label: '附件',
                required: true,//是否必填
                fetchConfig: {
                    apiName: window.globalConfig.apiUrl + 'upload',
                },
                // accept: 'image/jpeg, image/gif, image/png, image/jpg', //支持上传的类型 默认都支持  格式"image/gif, image/jpeg"   选填
                max: 1, 
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
                    // {
                    //     name: "edit", // 内置name有【edit, detail， del】
                    //     render: function (rowData) {
                    //         return "<a>编辑</a>";
                    //     },
                    //     //表单里面的按钮  name内置 【submit， cancel】
                    //     formBtns: [
                    //         {
                    //             name: "cancel", //关闭右边抽屉
                    //             type: "dashed", //类型  默认 primary
                    //             label: "取消"
                    //         },
                    //         {
                    //             name: "submit", //内置add del
                    //             type: "primary", //类型  默认 primary
                    //             label: "保存", //提交数据并且关闭右边抽屉
                    //             fetchConfig: {
                    //                 //ajax配置
                    //                 apiName: "zhiBanAnPaiByMonthUpdate"
                    //             }
                    //         }
                    //     ]
                    // },
                    {
                        name: "diy", // 内置name有【detail， del】
                        render: function (rowData) {
                            return "<a>详情</a>";
                        },
                        onClick:function(args){ 
                            args.props.history.push(`/ZhiBanAnPai/${args.rowData.dutyMonth}/${args.rowData.monthId}`)

                        }
                    }
                ]
            }
        }
    ]
};
