
var globalConfig = {
    version: window.updateLog[0].version,
    dev: false,
    apiUrl:
        (window.location.origin === "https://www.property.sx.cn" || window.location.origin === "https://www.property.sx.cn/admin" || window.location.origin === "https://www.property.sx.cn/admin" || window.location.origin === "https://property.sx.cn")
            // ? "https://www.property.sx.cn/apis/"
            // ? "https://www.property.sx.cn/apis/"
            ? "http://5la4koc6x4.52http.net/cxd/"
            // "https://mnetwork.xyz:8080/",
            // : "https://www.property.sx.cn:8080/",
            : "http://5la4koc6x4.52http.net/cxd/",
    // :"https://menhechuanghb.com/apis/",
    name: "长兴岛出入境边防检查站",
    ueCdn: 'http://192.168.137.1:8000/ueditor',
    client: 'http://95laoopo1h.52http.net/',
    // ueCdn: 'http://ks7qxy0eh0.52http.net/ueditor',
    apiNames: {
        //后台人员操作
        login: "user/login",
        editPwd: "user/updateUserPwd", //改密
        adminUserList: "user/getSysUserListByBg",
        adminUserDel: "user/deleteSysUserInfoByBg",
        adminUserUpdate: "user/updateSysUserInfoByBg",
        adminUserAdd: "user/addSysUserInfoByBg",
        // getLoginStatus: "adminUser/getLoginStatus",
        // logout: "adminUser/logout",

        //用户操作
        // userList: "user/getSysUserListByBg",
        // userDel: "user/del",
        // userUpdate: "user/update",
        // userAdd: "user/add",
        // userHandPledge: "user/handPledge",
        // userRefundPledge: "user/refundPledge", 

        //轮播 
        bannerList: "getCxdWebHomeTopBannerList",
        bannerAdd: "addCxdWebHomeTopBanner",
        bannerUpdate: "updateCxdWebHomeTopBanner",
        bannerDel: "batchDeleteUpdateCxdWebHomeTopBanner",

        //轮播2 
        banner2List: "getCxdWebFrontierDefenseNewsBannerList",
        banner2Add: "addCxdWebFrontierDefenseNewsBanner",
        banner2Update: "updateCxdWebFrontierDefenseNewsBanner",
        banner2Del: "batchDeleteUpdateCxdWebFrontierDefenseNewsBanner",

        //边检要闻
        bianFangYaoWenList: "getCxdWebForntierDefenseNewsList",
        bianFangYaoWenAdd: "addCxdWebForntierDefenseNews",
        bianFangYaoWenUpdate: "updateCxdWebForntierDefenseNews",
        bianFangYaoWenDel: "batchDeleteUpdateCxdWebForntierDefenseNews",

        //基层动态
        jiChuDongTaiList: "getCxdWebGrassrootsDynamicsList",
        jiChuDongTaiAdd: "addCxdWebGrassrootsDynamics",
        jiChuDongTaiUpdate: "updateCxdWebGrassrootsDynamics",
        jiChuDongTaiDel: "batchDeleteUpdateCxdWebGrassrootsDynamics",

        //热点专题
        reDianZhuanTiList: "getCxdWebHotTopicsList",
        reDianZhuanTiAdd: "addCxdWebHotTopics",
        reDianZhuanTiUpdate: "updateCxdWebHotTopics",
        reDianZhuanTiDel: "batchDeleteUpdateCxdWebHotTopics",

        //边检业务
        bianJianYeWuList: "getCxdWebFrontierInspectionBusinessList",
        bianJianYeWuAdd: "addCxdWebFrontierInspectionBusiness",
        bianJianYeWuUpdate: "updateCxdWebFrontierInspectionBusiness",
        bianJianYeWuDel: "batchDeleteUpdateCxdWebFrontierInspectionBusiness",

        //网上公示
        wangShangGongShiList: "getCxdWebOnlinePublicityList",
        wangShangGongShiAdd: "addCxdWebOnlinePublicity",
        wangShangGongShiUpdate: "updateCxdWebOnlinePublicity",
        wangShangGongShiDel: "batchDeleteUpdateCxdWebOnlinePublicity",

        //投诉邮箱
        touShuYouXiangList: "getCxdWebComplaintMailboxList",
        touShuYouXiangAdd: "addCxdWebComplaintMailbox",
        touShuYouXiangUpdate: "updateCxdWebComplaintMailbox",
        touShuYouXiangDel: "batchDeleteUpdateCxdWebComplaintMailbox",

        //单位简介
        danWeiJianJieList: "getCxdWebUnitProfileList",
        danWeiJianJieAdd: "addCxdWebUnitProfile",
        danWeiJianJieUpdate: "updateCxdWebUnitProfile",
        danWeiJianJieDel: "batchDeleteUpdateCxdWebUnitProfile",

        //一体化
        yiTiHuaList: "getCxdWebIntegratedList",
        yiTiHuaAdd: "addCxdWebIntegrated",
        yiTiHuaUpdate: "updateCxdWebIntegrated",
        yiTiHuaDel: "batchDeleteUpdateCxdWebIntegrated",

        //宗旨平台
        zongZhiPingTaiList: "getCxdWebCompositePlatformList",
        zongZhiPingTaiAdd: "addCxdWebCompositePlatform",
        zongZhiPingTaiUpdate: "updateCxdWebCompositePlatform",
        zongZhiPingTaiDel: "batchDeleteUpdateCxdWebCompositePlatform",

        //党务公开
        dangWuGongKaiList: "getCxdWebPartyAffairsList",
        dangWuGongKaiAdd: "addCxdWebPartyAffairs",
        dangWuGongKaiUpdate: "updateCxdWebPartyAffairs",
        dangWuGongKaiDel: "batchDeleteUpdateCxdWebPartyAffairs",

        //字典组织层级[通用]
        addBaseCode: "addBaseCode",
        updateBaseCode: "updateBaseCode",
        getBaseCodeList: "getBaseCodeList",
        batchDeleteUpdateBaseCode: "batchDeleteUpdateBaseCode",
        pcUpdateBaseCodeOnTree: "pcUpdateBaseCodeOnTree", //更新数据字典[在树结构上编辑]   
        pcExchangeBaseCode: "pcExchangeBaseCode",
        moveUpdateBaseCode: "moveUpdateBaseCode",
        getBaseCodeTree: "getBaseCodeTree", //联动下拉
        getBaseCodeSelect: "getBaseCodeSelect",
        getBaseCodeUIConfig: "getBaseCodeUIConfig",


        //队伍建设 
        duiWuJianSheList: "getCxdWebBuildingContingentsList",
        duiWuJianSheAdd: "addCxdWebBuildingContingents",
        duiWuJianSheUpdate: "updateCxdWebBuildingContingents",
        duiWuJianSheDel: "batchDeleteUpdateCxdWebBuildingContingents",

        //月值班安排 
        zhiBanAnPaiByMonthList: "getCxdWebDutyMonthList",
        zhiBanAnPaiByMonthAdd: "addCxdWebDutyMonth",
        zhiBanAnPaiByMonthUpdate: "updateCxdWebDutyMonth",
        zhiBanAnPaiByMonthDel: "batchDeleteUpdateCxdWebDutyMonth",

        //值班安排 
        zhiBanAnPaiList: "getCxdWebDutyArrangementList",
        zhiBanAnPaiAdd: "addCxdWebDutyArrangement",
        zhiBanAnPaiUpdate: "updateCxdWebDutyArrangement",
        zhiBanAnPaiDel: "batchDeleteUpdateCxdWebDutyArrangement",

        //通知公告
        tongZhiGongGaoList: "getCxdWebNotificationNoticeList",
        tongZhiGongGaoAdd: "addCxdWebNotificationNotice",
        tongZhiGongGaoUpdate: "updateCxdWebNotificationNotice",
        tongZhiGongGaoDel: "batchDeleteUpdateCxdWebNotificationNotice",


        //队伍建设之星
        duiWuJianShePersonList: "getCxdWebBuildingContingentsBunnerList",
        duiWuJianShePersonAdd: "cxdWebBuildingContingentsBunner",
        duiWuJianShePersonUpdate: "updateCxdWebBuildingContingentsBunner",
        duiWuJianShePersonDel: "batchDeleteUpdateCxdWebBuildingContingentsBunner",


        //边检之星
        bianJianYeWuPersonList: "getCxdWebFrontierInspectionStarList",
        bianJianYeWuPersonAdd: "addCxdWebFrontierInspectionStar",
        bianJianYeWuPersonUpdate: "updateCxdWebFrontierInspectionStar",
        bianJianYeWuPersonDel: "batchDeleteUpdateCxdWebFrontierInspectionStar",


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

        //会议纪要
        addRessList: "getCxdWebMailListList",
        addRessAdd: "addCxdWebMailList",
        addRessUpdate: "updateCxdWebMailList",
        addRessDel: "batchDeleteUpdateCxdWebMailList",
 

    }
};
window.globalConfig = globalConfig;
window.tableConfig = {};
window.wxx = {
}