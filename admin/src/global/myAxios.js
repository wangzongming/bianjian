// import React from "react";
import axios from "axios";
// import { Redirect } from "react-router";
import { message as Msg } from "antd";
import store from "storejs";
import setUserInfo from "./setUserInfo";
// import createHistory from "history/createHashHistory";
const createHistory = require("history").createHashHistory;
const history = createHistory();
const { dev, apiUrl, apiNames } = window.globalConfig;

const getApiName = apiName => {
  if (apiNames[apiName]) {
    return `${apiUrl}${apiNames[apiName]}`;
  } else {
    Msg.error(`${apiName}接口未在config中定义`);
    return false;
  }
};
//参数：接口名  参数  是否不需要token
const myAxios = ({
  apiName,
  params = {},
  type = "json",
  notNeetToken = false
}) => {
  let _type = "";

  //传输类型判断
  switch (type) {
    case "json":
      _type = "application/json";
      break;
    case "file":
      _type = "multipart/form-data";
      break;
    default:
      _type = "json";
      break;
  }

  //获取本地token
  let _token = store.get("token");
//   console.log(_token)
  if (!_token && !dev && !notNeetToken) {
    //本地无token需要重新登录
    history.replace("/login?noToken=true");
    // <Redirect to="/login" /> 
    return new Promise(resolve => {
      resolve({});
    });
  }
  return new Promise(resolve => {
    let _apiName = getApiName(apiName);
    if (_apiName) {
      //api在config定义后才能使用请求
      axios({
        method: "post",
        url: _apiName,
        data: params,
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": _type,
          token: dev ? "000000" : _token
        }
      })
        .then(res => {
          const { data } = res; //这个data不是后台返回的
          const { code } = data;
          if (code === "101" || code === "3003" || code === "3004") {
            // console.log(data);
            //token错误 需要清除token登录
            setUserInfo({
              userInfo: {}
            });
            // <Redirect to="/login" />;
            history.replace("/login?noToken=true");
            return {};
          } else {
            resolve(data);
            return data;
          }
        })
        .catch(err => {
          let _o = {
            success: false,
            message: `请求错误，错误码：01，其他信息：${err}`,
            data: null,
            code: "01"
          };
          resolve(_o);
          return _o;
        });
    }
  });
};
export default myAxios;
