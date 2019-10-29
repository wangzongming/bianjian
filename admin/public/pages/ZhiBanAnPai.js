
window.ZhiBanAnPai = {
    fetchConfig: {
        //表格的ajax配置
        apiName: "zhiBanAnPaiList",
        params:{
            month:"month",
            monthId:"monthId",
        }
    },
    antd: {
        //同步antd table组件配置 ***必传
        rowKey: function (row) {
            // ***必传
            return row.dutyId;
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
            name: "goback",
            type: "dashed", //类型  默认 primary
            icon: "left", //icon 
            label: "返回", 
            onClick:function(args){ 
                args.props.history.goBack() 
            }
        },
        // {
        //     name: "add",
        //     icon: "plus", //icon
        //     type: "primary", //类型  默认 primary
        //     label: "新增",
        //     //表单里面的按钮  name内置 【submit， cancel】
        //     formBtns: [
        //         {
        //             name: "submit", //内置add del
        //             type: "primary", //类型  默认 primary
        //             label: "提交", //提交数据并且关闭右边抽屉
        //             fetchConfig: {
        //                 //ajax配置
        //                 apiName: "zhiBanAnPaiAdd"
        //             }
        //         }
        //     ]
        // },
        // {
        //     name: "del", //内置add del
        //     icon: "delete", //icon
        //     type: "danger", //类型  默认 primary  [primary dashed danger]
        //     label: "删除",
        //     fetchConfig: {
        //         //ajax配置
        //         apiName: "zhiBanAnPaiDel"
        //         // key: 'delete',//默认deleteList
        //     }
        // }
    ],

    //所有字段配置
    formConfig: [
        // ***必传
        {
            isInTable: false,
            form: {
                field: "dutyId",
                hide: true,
                type: "string",
                placeholder: "请输入",
                required: true
            }
        },
        {
            table: {
                width: 200,
                title: "值班日期", //表头标题
                dataIndex: "dutyDate", //表格里面的字段
                key: "dutyDate", //表格的唯一key ,
                format: "YYYY-MM-DD"
            },
            form: {
                initialValue: new Date(), 
                type: "date"
            }
        },  
        {
            table: { 
                title: "星期", //表头标题
                dataIndex: "weekDay", //表格里面的字段
                key: "weekDay", //表格的唯一key , 
            },
            form: { 
                type: "string",
                placeholder:"请输入"
            }
        }, 
        {
            table: { 
                title: "站机关值班领导", //表头标题
                dataIndex: "dutyLeaderOfStationOrgans", //表格里面的字段
                key: "dutyLeaderOfStationOrgans", //表格的唯一key , 
            },
            form: { 
                type: "string",
                placeholder:"请输入"
            }
        }, 
        {
            table: { 
                title: "站机关值班干部", //表头标题
                dataIndex: "stationOfficersOnDuty", //表格里面的字段
                key: "stationOfficersOnDuty", //表格的唯一key , 
            },
            form: { 
                type: "string",
                placeholder:"请输入"
            }
        }, 
        {
            table: { 
                title: "执勤业务科带班员", //表头标题
                dataIndex: "headman", //表格里面的字段
                key: "headman", //表格的唯一key , 
            },
            form: { 
                type: "string",
                placeholder:"请输入"
            }
        }, 
        {
            table: { 
                title: "执勤业务科检查员", //表头标题
                dataIndex: "inspector", //表格里面的字段
                key: "inspector", //表格的唯一key , 
            },
            form: { 
                type: "string",
                placeholder:"请输入"
            }
        }, 
        {
            table: { 
                title: "监护中队值班干部", //表头标题
                dataIndex: "guardianshipSquadronDutyCadres", //表格里面的字段
                key: "guardianshipSquadronDutyCadres", //表格的唯一key , 
            },
            form: { 
                type: "string",
                placeholder:"请输入"
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
                                    apiName: "zhiBanAnPaiUpdate"
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
