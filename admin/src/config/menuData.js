//菜单配置
// { 配置项
//   label: "工作台",
//   route: "/orb/worktable",
//   componentKey: "worktable",
//   mustLogin:true, //默认true
//   index: true //是否是首页 默认false
//   hide:true  不显示到菜单 默认false
//  defaultPath: "/BianJianYeWu/list", 点击后跳转的地址
//   children:[]
// }, 
var userInfo = JSON.parse(window.localStorage.getItem("userInfo")) || {};
var ext1 = []; //必须是数组
if (userInfo.ext1) {
    ext1 = userInfo.ext1.split(",");
}
const menu = {
    title: "长兴岛出入境边防检查站",
    icon: require("../img/logo/logo.jpg"),
    data: [
        {
            icon: "picture",
            label: "首页轮播",
            route: "/Banner",
            componentKey: "Banner",
            index: true
            // children: [ 
            // {
            //     label: "首页轮播(小)",
            //     route: "/Banner/Banner2",
            //     componentKey: "Banner2"
            // }
            // ]
        },
        {
            icon: "bank",
            label: "单位简介",
            route: "/DanWeiJianJie",
            componentKey: "DanWeiJianJie",
            // children: [
            //     {
            //         label: "数据管理",
            //         route: "/DanWeiJianJie/manage", 
            //         componentKey: "DanWeiJianJie", 
            //     } 
            // ]
        },
        // {
        //     icon: "control",
        //     label: "一体化",
        //     route: "/YiTiHua",
        //     componentKey: "YiTiHua",
        // },
        // {
        //     icon: "bank",
        //     label: "综指平台",
        //     route: "/ZongZhiPingTai",
        //     componentKey: "ZongZhiPingTai",
        // },
        {
            icon: "audit",
            label: "党务公开",
            route: "/DangWuGongKai",
            componentKey: "DangWuGongKai",
        },


        {
            icon: "profile",
            label: "边防模块",
            route: "/BianFangYaoWen",
            children: [
                {
                    icon: "profile",
                    label: "边检要闻",
                    route: "/BianFangYaoWen/list",
                    componentKey: "BianFangYaoWen",
                },
                {
                    icon: "picture",
                    label: "要闻轮播",
                    route: "/BianFangYaoWen/Banner2",
                    componentKey: "Banner2",
                },
            ]

        },
        {
            icon: "profile",
            label: "边检业务",
            route: "/BianJianYeWu",
            children: [
                {
                    label: "边检业务",
                    route: "/BianJianYeWu/:list",
                    defaultPath: "/BianJianYeWu/11",
                    componentKey: "BianJianYeWu"
                }
            ]
        },
        // {
        //     icon: "star",
        //     label: "边检业务图",
        //     route: "/BianJianYeWuPerson",
        //     componentKey: "BianJianYeWuPerson"
        // },
        {
            icon: "star",
            label: "边检之星",
            route: "/BianJianZhiXing",
            componentKey: "BianJianZhiXing"
        },
        {
            icon: "team",
            label: "队伍建设",
            route: "/DuiWuJianShe",
            children: [
                {
                    label: "队伍建设",
                    route: "/DuiWuJianShe/:list",
                    defaultPath: "/DuiWuJianShe/10001",
                    componentKey: "DuiWuJianShe"
                }
            ]
        },
        // {
        //     icon: "star",
        //     label: "队伍建设图",
        //     route: "/DuiWuJianShePerson",
        //     componentKey: "DuiWuJianShePerson"
        //     // children: [
        //     //     {
        //     //         label: "队伍之星",
        //     //         route: "/DuiWuJianShePerson",
        //     //         defaultPath: "/DuiWuJianShePerson",
        //     //         componentKey: "DuiWuJianShePerson"
        //     //     }
        //     // ]
        // },

        {
            icon: "table",
            label: "值班安排",
            route: "/ZhiBanAnPaiByMonth",
            componentKey: "ZhiBanAnPaiByMonth"
        },
        {
            icon: "table",
            label: "值班安排详情",
            route: "/ZhiBanAnPai/:month/:monthId",
            componentKey: "ZhiBanAnPai",
            hide: true
        },
        {
            icon: "bell",
            label: "通知公告",
            route: "/TongZhiGongGao",
            componentKey: "TongZhiGongGao"
        },


        {
            icon: "fire",
            label: "热点专题",
            route: "/ReDianZhuanTi",
            componentKey: "ReDianZhuanTi"
        },
        {
            icon: "global",
            label: "网上公示",
            route: "/WangShangGongShi",
            componentKey: "WangShangGongShi"
        },
        {
            icon: "bars",
            label: "基层动态",
            route: "/JiChuDongTai",
            componentKey: "JiChuDongTai"
        },

        {
            icon: "skin",
            label: "主题教育",
            route: "/ZhuTiJiaoYu",
            componentKey: "ZhuTiJiaoYu"
        },
        {
            icon: "rocket",
            label: "政策规定",
            route: "/FuWuShuiPing",
            componentKey: "FuWuShuiPing"
        },
        {
            icon: "edit",
            label: "会议纪要",
            route: "/HuiYiJiYao",
            componentKey: "HuiYiJiYao"
        },

        //0站长信箱 1政委信箱  2纪委信箱
        // {
        //     icon: "tablet",
        //     label: "邮箱",
        //     route: "/TouShuYouXiang",
        //     componentKey: "TouShuYouXiang"
        // },
        {
            icon: "message",
            label: "站长信箱",
            route: "/LiuYan/:target",
            defaultPath: "/LiuYan/0", //点击后跳转的地址
            componentKey: "LiuYan"
        },
        {
            icon: "message",
            label: "政委信箱",
            route: "/LiuYan/:target",
            defaultPath: "/LiuYan/1", //点击后跳转的地址
            componentKey: "LiuYan"
        },
        {
            icon: "message",
            label: "纪委信箱",
            route: "/LiuYan/:target",
            defaultPath: "/LiuYan/2", //点击后跳转的地址
            componentKey: "LiuYan"
        },


        {
            icon: "desktop",
            label: "首页浮窗",
            route: "/FuChuang",
            componentKey: "FuChuang"
        },

        {
            icon: "team",
            label: "后台人员",
            route: "/AdminUser",
            componentKey: "AdminUser"
        },
        {
            icon: "book",
            label: "通讯录",
            route: "/Address",
            componentKey: "Address"
        },

        {
            icon: "book",
            label: "常用字典",
            route: "/BaseCode",
            componentKey: "BaseCode"
        },


        
    ]
};

const setMenuHide = (menus) => {
    for (let i = 0; i < menus.length; i++) {
        let item = menus[i];
        if (!ext1.includes(item.route) && !ext1.includes(item.defaultPath)) { 
            menus[i].hide = true;
        } 
    } 
    return menus;
}
menu.data = setMenuHide(menu.data);

export default menu;
