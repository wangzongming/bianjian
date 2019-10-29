//页面上的小轮播（首页第二个轮播）
window.BianJianYeWuPerson = {
    fetchConfig: {
        //表格的ajax配置
        apiName: "bianJianYeWuPersonList"
    },

    formItemLayout: {
        //默认数据
        labelCol: {
            xs: { span: 24 },
            sm: { span: 3 }
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 10 }
        }
    },


    //所有操作按钮
    //内置 新增add 删除del
    btns: [
        {
            name: "submit",
            icon: "plus", //icon
            type: "primary", //类型  默认 primary
            label: "保存",
            //表单里面的按钮  name内置 【submit， cancel】
            fetchConfig: {
                //ajax配置
                apiName: "bianJianYeWuPersonUpdate"
            },
            onClick: function (args) {
                if (args.response.success) {
                    args.btnfns.Msg.success("保存成功")
                } else {
                    args.btnfns.Msg.error("保存成功")
                }
            }
        }
    ],

    //所有字段配置
    formConfig: [
        // ***必传
        {
            field: "imgId",
            hide: true,
            type: "string",
            placeholder: "请输入",
            required: true
        },

        {
            label: "边检业务数据", //表头标题
            field: "businessId",
            type: "selectByPaging",
            placeholder: "请选择",
            required: true,
            fetchConfig: {
                apiName: "bianJianYeWuList",
                searchKey: 'title',
                otherParams: {
                    itemId: "11"
                }
            },
            optionConfig: {
                label: "title",
                value: "businessId"
            }
        },


        {
            field: 'imgList', //唯一的字段名 ***必传
            type: 'files',
            label: '图片',
            required: true,//是否必填
            fetchConfig: {
                apiName: window.globalConfig.apiUrl + 'upload',
            },
            accept: 'image/jpeg, image/gif, image/png, image/jpg', //支持上传的类型 默认都支持  格式"image/gif, image/jpeg"   选填
            max: 1,
        },
    ]
};