window.config = {
    // domain: "http://47.93.216.184/apis/",
    // domain: "http://127.0.0.1:8080/",
    // domain: "http://nmxqwhscxr.51http.tech/",
    domain: "http://5la4koc6x4.52http.net/cxd/",
    adminDomain: "http://95laoopo1h.52http.net/install.zip",
    apis: {
        login: "user/login",
        register: "user/register", //注册
        getVcode: "user/getVcode", //获取邮箱验证码
        //轮播 
        bannerList: "getCxdWebHomeTopBannerList",

        //轮播2 
        banner2List: "getCxdWebFrontierDefenseNewsBannerList",

        //边检要闻
        bianFangYaoWenDetail: "getCxdWebForntierDefenseNewsDetail",
        bianFangYaoWenList: "getCxdWebForntierDefenseNewsList",

        //基层动态
        jiChuDongTaiDetail: "getCxdWebGrassrootsDynamicsDetail",
        jiChuDongTaiList: "getCxdWebGrassrootsDynamicsList",

        //热点专题
        reDianZhuanTiDetail: "getCxdWebHotTopicsDetail",
        reDianZhuanTiList: "getCxdWebHotTopicsList",

        //边检业务
        bianJianYeWuDetail: "getCxdWebFrontierInspectionBusinessDetail",
        bianJianYeWuList: "getCxdWebFrontierInspectionBusinessList",

        //队伍建设 
        duiWuJianSheList: "getCxdWebBuildingContingentsList",
        duiWuJianSheDetail: "getCxdWebBuildingContingentsDetail",

        //网上公示
        wangShangGongShiDetail: "getCxdWebOnlinePublicityDetail",
        wangShangGongShiList: "getCxdWebOnlinePublicityList",

        //网上公示
        tongZhiGongGaoList: "getCxdWebNotificationNoticeList",
        tongZhiGongGaoDetail: "getCxdWebNotificationNoticeDetail",



        //投诉邮箱
        touShuYouXiangList: "getCxdWebComplaintMailboxList",

        //单位简介
        danWeiJianJieList: "getCxdWebUnitProfileList",

        //一体化
        yiTiHuaDetail: "getCxdWebIntegratedDetail",
        yiTiHuaList: "getCxdWebIntegratedList",

        //宗旨平台
        zongZhiPingTaiDetail: "getCxdWebCompositePlatformDetail",
        zongZhiPingTaiList: "getCxdWebCompositePlatformList",


        //党务公开
        dangWuGongKaiDetail: "getCxdWebPartyAffairsDetail",
        dangWuGongKaiList: "getCxdWebPartyAffairsList",

        //获取baseCode数据
        getCxdWebBaseCodeList: "getCxdWebBaseCodeList",

        //两星
        duiWuJianShePersonList: "getCxdWebBuildingContingentsBunnerList",
        bianJianYeWuPersonList: "getCxdWebFrontierInspectionStarList",


        zhiBanAnPaiList: "getCxdWebDutyArrangementList",

        //获取值班安排
        getCxdWebSameDayDutyArrangement: "getCxdWebSameDayDutyArrangement",

        //留言
        liuYanList: "getCxdWebLeavingMessageList",
        liuYanAdd: "addCxdWebLeavingMessage",
        liuYanUpdate: "updateCxdWebLeavingMessage",
        liuYanDel: "batchDeleteUpdateCxdWebLeavingMessage",
        liuYanDetail: "getCxdWebLeavingMessageDetail",


        //回复
        huiFuList: "getCxdWebLeavingMessageReplyList",
        huiFuAdd: "addCxdWebLeavingMessageReply",
        huiFuUpdate: "updateCxdWebLeavingMessageReply",
        huiFuDel: "batchDeleteUpdateCxdWebLeavingMessageReply",

        //浮窗
        fuChuangList: "getCxdWebSuspensionPictureList",
        fuChuangAdd: "addCxdWebSuspensionPicture",
        fuChuangUpdate: "updateCxdWebSuspensionPicture",
        fuChuangDel: "batchDeleteUpdateCxdWebSuspensionPicture",

        //边检之星
        bianJianZhiXingList: "getCxdWebStarOfFrontierInspectionList",
        bianJianZhiXingAdd: "addCxdWebStarOfFrontierInspection",
        bianJianZhiXingUpdate: "updateCxdWebStarOfFrontierInspection",
        bianJianZhiXingDel: "batchDeleteUpdateCxdWebStarOfFrontierInspection",

        //主题教育
        zhuTiJiaoYuList: "getCxdWebThematicEducationList",
        zhuTiJiaoYuAdd: "addCxdWebThematicEducation",
        zhuTiJiaoYuUpdate: "updateCxdWebThematicEducation",
        zhuTiJiaoYuDel: "batchDeleteUpdateCxdWebThematicEducation",

        //政策规定
        fuWuShuiPingList: "getCxdWebServiceLevelList",
        fuWuShuiPingAdd: "addCxdWebServiceLevel",
        fuWuShuiPingUpdate: "updateCxdWebServiceLevel",
        fuWuShuiPingDel: "batchDeleteUpdateCxdWebServiceLevel",

        //会议纪要
        huiYiJiYaoList: "getCxdWebMinutesOfMeetingList",
        huiYiJiYaoAdd: "addCxdWebMinutesOfMeeting",
        huiYiJiYaoUpdate: "updateCxdWebMinutesOfMeeting",
        huiYiJiYaoDel: "batchDeleteUpdateCxdWebMinutesOfMeeting",


        zhuTiJiaoYuDetail: "getCxdWebThematicEducationDetail",
        fuWuShuiPingDetail: "getCxdWebServiceLevelDetail",
        huiYiJiYaoDetail: "getCxdWebMinutesOfMeetingDetail",

        getCxdWebMailListList: "getCxdWebMailListList"


    },
    curLang: "cn" //当前语言  en | cn
};

//菜单配置
window.menuConfig = [
    {
        label: "总站首页",
        url: "./index.html?isAlert=0",
        key: "home",
        hide: false
    },
    {
        label: "单位简介",
        url: "./danWeiJianJie.html?listType=danWeiJianJie",
        // icon: "./imgs/icon_danweijianjie.gif",
        icon: "icon-building-o",
        key: "danWeiJianJie",
        hide: false
    },
    {
        label: "一体化",
        // url: "./list.html?listType=yiTiHua",
        url: "http://10.80.251.11/",
        // icon: "./imgs/icon_yitihua.gif",
        icon: "icon-cubes",
        key: "yiTiHua",
        hide: false
    },
    {
        label: "综指平台",
        // url: "./list.html?listType=zongZhiPingTai",
        url: "http://10.80.251.11/?zhzhpt",
        icon: "icon-desktop",
        // icon: "./imgs/icon_zongzhipingtai.gif",
        key: "zongZhiPingTai",
        hide: false
    },
    {
        label: "党务公开",
        url: "./list.html?listType=dangWuGongKai",
        // icon: "./imgs/icon_dangwugongkai.gif",
        icon: "icon-bank",
        key: "dangWuGongKai",
        hide: false
    },
    {
        label: "通讯录",
        url: "./files.html",
        icon: "icon-book",
        key: "files",
        hide: false
    },

    //一些需要隐藏的菜单

    {
        label: "站长留言",
        url: "./liuYan.html?listType=liuYan0&target=0",
        key: "liuYan",
        icon: "./imgs/icon_zhanzhangliuyan.png",
        hide: true
    },

    {
        label: "站长留言",
        url: "./liuYan.html?listType=liuYan0&target=0",
        key: "liuYan0",
        icon: "./imgs/icon_zhanzhangliuyan.png",
        hide: true
    },

    {
        label: "政委信箱",
        url: "./liuYan.html?listType=liuYan1&target=1",
        key: "liuYan1",
        icon: "./imgs/icon_zhanzhangliuyan.png",
        hide: true
    },
    {
        label: "纪委信箱",
        url: "./liuYan.html?listType=liuYan2&target=2",
        key: "liuYan2",
        icon: "./imgs/icon_zhanzhangliuyan.png",
        hide: true
    },

    {
        label: "边检要闻",
        url: "./list.html?listType=bianFangYaoWen",
        key: "bianFangYaoWen",
        hide: true
    },
    {
        label: "基层动态",
        url: "./list.html?listType=jiChuDongTai",
        key: "jiChuDongTai",
        hide: true
    },
    {
        label: "队伍建设",
        url: "./list.html?listType=duiWuJianShe",
        key: "duiWuJianShe",
        hide: true
    },
    {
        label: "边检业务",
        url: "./list.html?listType=bianJianYeWu",
        key: "bianJianYeWu",
        hide: true
    },
    {
        label: "热点专题",
        url: "./list.html?listType=reDianZhuanTi",
        key: "reDianZhuanTi",
        hide: true
    },
    {
        label: "网上公示",
        url: "./list.html?listType=wangShangGongShi",
        key: "wangShangGongShi",
        hide: true
    },
    {
        label: "通知公告",
        url: "./list.html?listType=tongZhiGongGao",
        key: "tongZhiGongGao",
        hide: true
    },
    {
        label: "主题教育",
        url: "./list.html?listType=zhuTiJiaoYu",
        key: "zhuTiJiaoYu",
        hide: true
    },
    {
        label: "政策规定",
        url: "./list.html?listType=fuWuShuiPing",
        key: "fuWuShuiPing",
        hide: true
    },
    {
        label: "会议纪要",
        url: "./list.html?listType=huiYiJiYao",
        key: "huiYiJiYao",
        hide: true
    }
    // {
    //     label: "边检之星",
    //     url: "./list.html?listType=bianJianZhiXing",
    //     key: "bianJianZhiXing",
    //     hide: true
    // }
];

//当前路径 用于生成面板屑导航 [{label:"", url}]
window.curRouter = [
    {
        label: "首页",
        url: "./index.html?isAlert=0",
        key: "home"
    }
];

//当前路由的所有二级菜单项
window.curRouterTwoOptions = [];

//底部可配置为点击或者是个连接  url属性存在就是个连接   onClick存在就是个点击事件
window.footerConfig = [

];

//底部连接 
window.links = {
    sys: [
        {
            label: "测试001",
            url: "http://baidu.com"
        },
        {
            label: "测试001",
            url: "http://baidu.com"
        },
        {
            label: "测试001",
            url: "http://baidu.com"
        }
    ],
    yq: [
        {
            label: "百度",
            url: "http://baidu.com"
        },
        {
            label: "腾讯",
            url: "http://baidu.com"
        },
        {
            label: "阿里巴巴",
            url: "http://baidu.com"
        }
    ]
}
