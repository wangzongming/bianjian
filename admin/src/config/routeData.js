//布局
import { incMenu,} from "../layout"; //DataIndexLayout
//页面
import {
    Qd,
    AdminUser,
    Banner,
    Banner2,
    BianFangYaoWen,
    BianJianYeWu,
    JiChuDongTai,
    TongZhiGongGao,
    TouShuYouXiang,
    WangShangGongShi,
    ReDianZhuanTi,
    DuiWuJianShe,

    DanWeiJianJie,
    DangWuGongKai,
    // YiTiHua,
    // ZongZhiPingTai,

    ZhiBanAnPai,
    ZhiBanAnPaiByMonth,
    BaseCode,
    BianJianYeWuPerson,
    DuiWuJianShePerson,

    LiuYan,
    FuChuang,
    BianJianZhiXing,

    ZhuTiJiaoYu,
    FuWuShuiPing,
    HuiYiJiYao,
    Address,
} from "../pages";

const routeData = [
    {
        componentKey: "ZhuTiJiaoYu",
        component: incMenu(ZhuTiJiaoYu)
    },
    {
        componentKey: "FuWuShuiPing",
        component: incMenu(FuWuShuiPing)
    },
    {
        componentKey: "HuiYiJiYao",
        component: incMenu(HuiYiJiYao)
    },
    {
        componentKey: "ZhiBanAnPai",
        component: incMenu(ZhiBanAnPai)
    },
    {
        componentKey: "BaseCode",
        component: incMenu(BaseCode)
    },
    {
        componentKey: "DanWeiJianJie",
        component: incMenu(DanWeiJianJie)
    },
    {
        componentKey: "DangWuGongKai",
        component: incMenu(DangWuGongKai)
    },
    // {
    //     componentKey: "YiTiHua",
    //     component: incMenu(YiTiHua)
    // },
    // {
    //     componentKey: "ZongZhiPingTai",
    //     component: incMenu(ZongZhiPingTai)
    // },

    {
        componentKey: "Banner",
        // component: DataIndexLayout(Banner)
        component: incMenu(Banner)
    },
    {
        componentKey: "Qd",
        component: incMenu(Qd)
    },
    {
        componentKey: "AdminUser",
        component: incMenu(AdminUser)
    },

    {
        componentKey: "Banner2",
        component: incMenu(Banner2)
    },

    {
        componentKey: "BianFangYaoWen",
        component: incMenu(BianFangYaoWen)
    },

    {
        componentKey: "BianJianYeWu",
        component: incMenu(BianJianYeWu)
    },
    {
        componentKey: "JiChuDongTai",
        component: incMenu(JiChuDongTai)
    },
    {
        componentKey: "TouShuYouXiang",
        component: incMenu(TouShuYouXiang)
    },
    {
        componentKey: "TongZhiGongGao",
        component: incMenu(TongZhiGongGao)
    },
    {
        componentKey: "WangShangGongShi",
        component: incMenu(WangShangGongShi)
    },
    {
        componentKey: "ReDianZhuanTi",
        component: incMenu(ReDianZhuanTi)
    },
    {
        componentKey: "DuiWuJianShe",
        component: incMenu(DuiWuJianShe)
    },

    {
        componentKey: "ZhiBanAnPaiByMonth",
        component: incMenu(ZhiBanAnPaiByMonth)
    },

    {
        componentKey: "BianJianYeWuPerson",
        component: incMenu(BianJianYeWuPerson)
    },

    {
        componentKey: "DuiWuJianShePerson",
        component: incMenu(DuiWuJianShePerson)
    },
    {
        componentKey: "LiuYan",
        component: incMenu(LiuYan)
    },
    {
        componentKey: "FuChuang",
        component: incMenu(FuChuang)
    },
    {
        componentKey: "BianJianZhiXing",
        component: incMenu(BianJianZhiXing)
    },
    {
        componentKey: "Address",
        component: incMenu(Address)
    },


];

export default routeData;
