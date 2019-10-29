
window.fuChuang = {
    fetchConfig: {
        //表格的ajax配置
        apiName: "fuChuangList"
    },
    formItemLayout: {
        //默认数据
        labelCol: {
            xs: { span: 24 },
            sm: { span: 3 }
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 21 }
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
                apiName: "fuChuangUpdate"
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
            field: "pictureId",
            hide: true,
            type: "string",
            placeholder: "请输入",
            required: true
        },
        {
            field: 'attachment', //唯一的字段名 ***必传
            type: 'files',
            label: '浮窗图',
            required: true,//是否必填
            fetchConfig: {
                apiName: window.globalConfig.apiUrl + 'upload',
            },
            accept: 'image/jpeg, image/gif, image/png, image/jpg', //支持上传的类型 默认都支持  格式"image/gif, image/jpeg"   选填
            max: 1,
        },
        {
            label: "内容",
            field: "content",
            type: "richText",
            placeholder: "请输入...",
            fetchConfig: {
                //必须配置  上传图片地址
                uploadUrl: window.globalConfig.apiUrl + 'upload' //***必传
            },
            help: '图片尺寸缩放完毕后，请点击一下表单空白处，然后在点击一下该图片'

        }
    ]
};
