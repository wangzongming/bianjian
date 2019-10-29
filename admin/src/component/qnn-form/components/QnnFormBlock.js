import React from "react";
import s from "../styleByZJ.less";
import { Icon,Button,Row,Col } from "antd"; //, Form
import { QnnFormCom } from "../components";
class QnnFormBlock extends React.Component {

    static getDerivedStateFromProps(props,state) {
        return {
            ...state,
            ...props
        }
    }

    constructor(...args) {
        super(...args);

        //这块需要重构表单块数据放入到这儿的state中

        // const { value,Pprops } = this.props;

        //字段配置都在Pprops中
        // const { canAddForm } = Pprops;

        // let initVal = value ? value : (canAddForm ? [{ id: 1 }] : {});

        this.state = {

            //是否是可删减的表单块
            // canAddForm: canAddForm,

            //所有的表单块
            // formBlocks: initVal

        }
    }


    render() {
        // let s = this.style;
        const _props = this.props.Pprops;
        const _state = this.props.Pstate;
        const _setState = this.props.PsetState;
        const _setThisAttr = this.props.PsetThisAttr;
        const _getThisAttr = this.props.PgetThisAttr;
        let { label,field,initialValue,form } = _props;

        if (!_props.canAddForm) {
            let _initVal = this.props.value || initialValue || [];
            return (
                <div>
                    {/* label */}
                    <div>
                        <div className={s.QnnFormBlockLabel}>
                            <Row type="flex" justify="space-between">
                                <Col>
                                    <span id={field}>{label}</span>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    {/* /label */}
                    <QnnFormCom
                        {..._props}
                        initialValue={_initVal}
                        style={{ paddingBottom: "0px" }}
                    />
                </div>
            );
        } else {
            let { textObj = {} } = _props;
            textObj = {
                add: '添加',
                del: '删除',
                ...textObj
            }
            let { add,del } = textObj;

            //将初期値当做表单项，并且给每个表单项设置id
            let _initialValueKey = `${field}InitialValue`;
            let _initVal = this.props.value || initialValue; // || [{id:1}]
            // console.log(`${field}_Block`,form.getFieldValue(
            //     `${field}_Block`
            // ))
            if (
                !_getThisAttr(_initialValueKey) &&
                _initVal &&
                _initVal.length
            ) {
                _initVal = _initVal.map(item => {
                    let id =
                        new Date().getTime().toString() +
                        (Math.random() * 10000 + 100);
                    item.id = id;
                    return item;
                });
                _setThisAttr(_initialValueKey,_initVal);
            }
            const formBlocksNum = _state[field] ||
                _getThisAttr(_initialValueKey) || [{ id: 1 }];
            // console.log("formBlocksNum:",formBlocksNum);
            return (
                <div style={{ marginBottom: 12 }}>
                    <div>
                        {formBlocksNum.map((_item,_index) => {
                            let __props = { ..._props };
                            // console.log("_item：", _item)
                            return (
                                <div key={_index}>
                                    {/* label */}
                                    <div className={s.QnnFormBlockLabel}>
                                        <Row
                                            type="flex"
                                            justify="space-between"
                                            id={field}
                                        >
                                            <Col>
                                                {formBlocksNum.length > 1
                                                    ? `${label}${_index + 1}`
                                                    : label}
                                            </Col>
                                            <Col>
                                                {/* 刪除按鈕 */}
                                                {this.props.disabled ? null : (
                                                    <span
                                                        style={{
                                                            color: "#e92f0a",
                                                            display:
                                                                formBlocksNum.length <=
                                                                    1
                                                                    ? "none"
                                                                    : ""
                                                        }}
                                                        onClick={() => {
                                                            //删除之前应该把数组中其他值存起来
                                                            let _values = form.getFieldValue(
                                                                `${field}_Block`
                                                            );
                                                            if (
                                                                _values &&
                                                                _values.length
                                                            ) {
                                                                _values.splice(
                                                                    _index,
                                                                    1
                                                                );
                                                                _setThisAttr(
                                                                    field,
                                                                    _values
                                                                );
                                                            }
                                                            //删除
                                                            let _formBlocksNum = formBlocksNum.filter(
                                                                item => {
                                                                    return (
                                                                        item.id !==
                                                                        _item.id
                                                                    );
                                                                }
                                                            );
                                                            _setState({
                                                                [field]: _formBlocksNum,
                                                                needRefreshField: `${field}`
                                                            });

                                                            this.props.onChange(
                                                                _formBlocksNum
                                                            );
                                                        }}
                                                    >
                                                        <Icon type="delete" />
                                                        {del}
                                                    </span>
                                                )}
                                            </Col>
                                        </Row>
                                    </div>
                                    {/* /label */}
                                    {/* formBlocks */}
                                    <div className={s.QnnFormBlockForm}>
                                        <QnnFormCom
                                            {...__props}
                                            state={this.state}
                                            field={field}
                                            index={_index}
                                            style={{ paddingBottom: "0px" }}
                                            initialValue={_getThisAttr(
                                                _initialValueKey
                                            )}
                                            id={_item.id}
                                            data={_item}
                                        />
                                    </div>
                                    {/* /formBlocks */}
                                </div>
                            );
                        })}
                    </div>
                    {this.props.disabled ? null : (
                        <div style={{ padding: "12px" }}>
                            <Button
                                icon="plus"
                                size="small"
                                onClick={() => {
                                    let id =
                                        new Date().getTime().toString() +
                                        (Math.random() * 10000 + 100);
                                    let _obj = {
                                        id: id
                                    };
                                    let _values = form.getFieldValue(
                                        `${field}_Block`
                                    ) || formBlocksNum;
                                    _values = _values.map((item,i) => {
                                        return {
                                            ...item,
                                            ...formBlocksNum[i]
                                        }
                                    }); 
                                    let _formBlocksNum = _values.concat([
                                        _obj
                                    ]);
                                    _setState({
                                        [field]: _formBlocksNum
                                    });
                                    if (this.props.onChange) {
                                        this.props.onChange(_formBlocksNum);
                                    }
                                }}
                            >
                                {add}
                            </Button>
                        </div>
                    )}
                </div>
            );
        }
    }
}
export default QnnFormBlock;
