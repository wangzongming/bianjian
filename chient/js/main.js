//main.js用于渲染一些公共的模块
$(function () {
    //pc端监听窗口大小改变后自动刷新页面
    if (IsPC()) {
        $(window).resize(function () {
            window.location.href = window.location.href;
        });
    }

    //执行初始化
    init();
    function init() {
        //设置root高
        //因为需要全局网站背景 
        //底部是用的定位 有 100误差
        // if (window.innerHeight >= $(".root").height() + 200 - 10) {
        //     $(".root").css({ height: $(window).height() })
        // }
        $(".root").css({ height: $(window).height(),overflowY: "scroll" })

        //设置路由
        var listType = wxx.getUrlParam("listType");
        var detailType = wxx.getUrlParam("detailType");
        var itemName = wxx.getUrlParam("itemName");
        listType = listType || detailType;
        if (listType || detailType) {

            if (window && window.menuConfig) {
                for (var i = 0; i < window.menuConfig.length; i++) {
                    var menuItem = window.menuConfig[i];
                    if (menuItem && (menuItem.key === listType)) {
                        if (itemName) {
                            menuItem.label = menuItem.label + '·' + itemName;
                        }
                        window.curRouter.push(menuItem);
                    }
                }

                if (detailType) {
                    //需要把具体详情页面push到路由信息中去
                    window.curRouter.push({
                        label: "详情",
                        key: "detail",
                        cur: true
                    })
                }
            }

        }


        createHeader();
        createFooter();

        createTabs();

        //创建友情链接
        // createLinks();

    }

    //生成tabs
    function createLinks() {
        var $domSys = $(".otherLink .sys span");
        var $domYq = $(".otherLink .yq span");
        $domSys.html('');
        $domYq.html('');

        var sysLink = window.links.sys;
        var yqLink = window.links.yq;
        $.each(sysLink,function (index,item) {
            var $item = $('<a href="' + item.url + '">' + item.label + '</a>');
            if (index < sysLink.length && index > 0) {
                $domSys.append('、');
            }
            $domSys.append($item);
        });
        $.each(yqLink,function (index,item) {
            var $item = $('<a href="' + item.url + '">' + item.label + '</a>');
            if (index < yqLink.length && index > 0) {
                $domYq.append('、');
            }
            $domYq.append($item);
        });

        $(".otherLink").append('<div>总站主页 10.80.254.1</div>')

    }

    //生成header
    function createHeader() {
        var $header = $(".header");

        //创建顶部login
        var $login = $('<div class="logo"><img src="./imgs/logo.png" alt=""></div>');
        $header.append($login);


        //根据网址设置菜单项样式
        var pathname = window.location.pathname;

        //创建菜单
        var $menu = $('<div class="menu"></div>');

        //过滤掉不渲染的菜单项
        var menuData = [];
        for (var i = 0; i < window.menuConfig.length; i++) {
            var item = window.menuConfig[i];
            if (item && (item.hide === false)) {
                menuData.push(item);
            }
        }

        $.each(menuData,function (index,item) {

            //首页判断稍微特殊，因为可能index.html文件会不加入到地址上
            var isCur = false;
            if (pathname === "/") {
                if (item && item.key === "home") {
                    isCur = true;
                } else {
                    isCur = false;
                }
            } else {
                var listType = wxx.getUrlParam("listType");
                var detailType = wxx.getUrlParam("detailType");
                listType = listType || detailType;
                if (listType) {
                    //很多页面用的一个页面但是参数不同
                    isCur = item.url.indexOf(listType) !== -1;
                } else {
                    isCur = item.url.indexOf(pathname) !== -1;
                }
            }

            if (!item) {
                item = {}
            }

            var $menuItem = $('<div data-key="' + item.key + '" class="menuItem pointer">' + item.label + '</div>');
            if (item.icon) {
                var $icon = $('<span class="icon"><span class="' + item.icon + '"></span> </span>');
                $menuItem.prepend($icon);
            }

            //设置样式和当前路由数据
            if (isCur || item.cur) {
                $menuItem.addClass("cur");
            }

            // 菜单项点击
            $menuItem.click(function () {
                //实则没啥用 因为是直接跳转页面
                $(this).addClass("cur").siblings().removeClass("cur");
                var url = item.url;
                var dataKey = $(this).attr("data-key");
                if (dataKey === "yiTiHua" || dataKey === "zongZhiPingTai") {
                    wxx.push(url)
                } else {
                    //跳转页面
                    window.location.href = url;
                }

            })
            $menu.append($menuItem);
        })

        $header.append($menu);
    }


    //生成tabs
    function createTabs() {
        var $dom = $(".address-bar");
        $dom.html('<span class="text">当前位置：</span>');

        var data = window.curRouter;
        $.each(data,function (index,item) {
            var $item = '';
            if (item.cur || (index === data.length - 1)) {
                $item = $(
                    '<span class="address-bar-item cur">' + item.label + '</a>' + ((index < data.length - 1) ? '<span style="padding:0px 6px">/</span>' : '')
                );
            } else {
                $item = $(
                    '<a class="address-bar-item" href="' + item.url + '" target="_block">' + item.label + '</a>' + ((index < data.length - 1) ? '<span style="padding:0px 6px">/</span>' : '')
                );
            }
            $dom.append($item);
        });
    }
    window.createTabs = createTabs;


    //生成底部连接
    function createFooter() {
        var $footer = $(".footer");
        $footer.html(""); //清空

        $footer.append('<div class="footer-content"></div>');

        var $footerContent = $(".footer-content");

        //国徽图标
        $footerContent.append('<div class="footer-left"><img src="./imgs/guohui.png" alt=""></div>')

        //右边内容
        $footerContent.append('<div class="content"></div>')

        var $footerContentRight = $(".footer-content .content");

        var $row1 = $('<div class="row">'
            + '<span class="concat pointer">网站首页</span>'
            + '<span class="line">|</span>'
            + '<span class="statement pointer">单位简介</span>'
            + '<span class="line">|</span>'
            + '<span class="security pointer">管理端下载</span>'
            + '</div>');
        $footerContentRight.append($row1);

        // var $row2 = $('<div class="row">地址：大连长兴岛经济区星岛路306号</div>');
        // $footerContentRight.append($row2);

        var $row4 = $('<div class="row">主办单位：大连长兴岛出入境边防检查站</div>');
        $footerContentRight.append($row4);


        var $row3 = $('<div class="row">电话：0411-85283906 &nbsp;&nbsp; 邮编：116317  &nbsp;&nbsp;  地址：大连长兴岛经济区星岛路306号   </div>');
        $footerContentRight.append($row3);



        $('.concat').click(function () {
            //自定页 
            window.location.href = "./index.html?isAlert=0"
            // layer.open({
            //     title: "联系我们",
            //     type: 1,
            //     skin: 'layui-layer-demo', //样式类名
            //     closeBtn: 0, //不显示关闭按钮
            //     anim: 2,
            //     shadeClose: true, //开启遮罩关闭
            //     content: '<div style="padding:12px;">' +
            //         '暂无内容'
            //         + '</div>'
            // });
        })
        $('.statement').click(function () {
            wxx.push("./danWeiJianJie.html?listType=danWeiJianJie")
            // window.location.href = "./danWeiJianJie.html?listType=danWeiJianJie"
            // layer.open({
            //     title: "网站声明",
            //     type: 1,
            //     skin: 'layui-layer-demo', //样式类名
            //     closeBtn: 0, //不显示关闭按钮
            //     anim: 2,
            //     shadeClose: true, //开启遮罩关闭
            //     content: '<div style="padding:12px;">' +
            //         '暂无内容'
            //         + '</div>'
            // });
        })

        $('.security').click(function () {
            wxx.push(window.config.adminDomain)

            // layer.open({
            //     title: "隐私安全",
            //     type: 1,
            //     skin: 'layui-layer-demo', //样式类名
            //     closeBtn: 0, //不显示关闭按钮
            //     anim: 2,
            //     shadeClose: true, //开启遮罩关闭 
            //     area: ['80%','70%'],
            //     content: '<div style="padding:12px;">' +
            //         '<p>1、当您浏览、阅读或下载本网站的信息时，网站会自动搜集到您的信息（互联网地址、用户使用的浏览器和操作系统类型、访问时间、访问页面），这些信息不会被用来确定您的身份。</p>' +

            //         '<br/><p>2、当您在本网站进行用户注册登记时，在您的同意并确认下，本网站会通过注册表格形式要求您提供一些个人资料。这些个人资料包括个人识别资料（如姓名、性别、年龄、证件号码、电话、通信地址、住址、邮编、电子邮件地址等）、个人背景（如职业、教育程度等）。在未经您同意和确认之前，除国家法律、地方法规和政府规章规定之外，本网站保证不会把这些个人信息提供给任何私人或公司，只会根据需要与政府有关部门共同使用。</p>' +

            //         '<br/><br/><p>发生下列情况时本网站不承担任何责任:<br/>' +

            //         '<p>(一)由于您将用户密码告知他人或与他人共享注册帐户，由此导致的任何个人资料泄露。<br/>' +

            //         '<p>(二)任何黑客政击、计算机病毒侵入或发作、政府部门管制和其他不可抗力等造成的个人资料泄露、丢失、被盗用或被窜改等。<br/>' +

            //         '<p>(三)因与本网站链接的其它网站造成个人资料泄露及由此而导致的任何法律争议和后果。<br/>' +

            //         '<p>(四)当政府机关依照法定程序要求本网站披露个人资料时，本网站将根据其要求或为了公共安全的目的提供个人资料；这种情况下的任何披露，本网站均得免责。</div>'
            // });
        })
    }

    //tips
    $(".w-tips").click(function () {
        var copyData = $(this).attr("data-source");
        layer.tips(copyData,$(this),{
            tips: [1,"#0a8"],
            time: 3000
        });
    });

    //回顶
    $(".w-footer-goTop").click(function () {
        $("html").animate({ scrollTop: 0 },400);
    });

    function IsPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = [
            "Android",
            "iPhone",
            "SymbianOS",
            "Windows Phone",
            "iPad",
            "iPod"
        ];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }
});
