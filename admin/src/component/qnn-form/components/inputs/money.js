import React from "react";
import {
    InputNumber,
    Form,
} from "../../lib";
const FormItem = Form.Item;
class MoneyComponent extends React.Component {
    render() {
        const { field,commProps,rcFormParams,inputProps,form: { getFieldDecorator } } = this.props;

        return (<FormItem {...commProps}>
            {getFieldDecorator(field,{
                ...rcFormParams,
            })(<InputNumber
                formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g,',')}
                parser={value => value.replace(/\$\s?|(,*)/g,'')}
                {...inputProps} />)}
        </FormItem>)
    }
}


export default MoneyComponent;