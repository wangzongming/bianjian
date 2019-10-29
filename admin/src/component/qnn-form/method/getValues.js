import moment,{ isMoment } from 'moment'
//获取全部表单值
//需要绑定this
const getValues = function (isValidate = false,cb) {//参数为是否需要验证
    // 格式化参数方法
    const formatParams = (params) => {
        let _params = {};
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                let element = params[key];
                if (isMoment(element)) {//将moment格式化为时间戳
                    element = moment(element).valueOf()
                }
                _params[key] = element
            }
        }
        return _params;
    }

    if (!isValidate) {
        //不需要验证
        let values = formatParams(this.props.form.getFieldsValue());
        cb({
            ...values
        })
    } else {
        this.props.form.validateFieldsAndScroll((error,values) => {
            values = formatParams(values);
            if (error) {

                //表单块不能给错误提示
                //直接循环给每个错误字段设置一个错误
                const foopErr = (error) => {
                    for (const key in error) {
                        if (error.hasOwnProperty(key)) {
                            const { errors = [] } = error[key];
                            if (errors.length) {
                                for (let i = 0; i < errors.length; i++) {
                                    let { field,message } = errors[i];
                                    const value = this.props.form.getFieldValue(field);
                                    this.props.form.setFields({
                                        [field]: {
                                            errors: [
                                                {
                                                    field: [field],
                                                    message: message
                                                }
                                            ],
                                            value: value
                                        }
                                    });

                                }
                                let field = field
                            }


                        }
                    }
                }
                foopErr(error);

            }
            if (!error) {
                cb({
                    ...values
                })
            }
        });

    }
}

export default getValues;