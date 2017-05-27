//首页内容

//定义首页四个图标导航
var FourBtnNav = React.createClass({displayName: "FourBtnNav",
    render : function(){

        var btnInfo = [
            {name:'约跑',imgSrc:'public/index/img/run.png',linkTo:'yuepao.html',text:'快来这里找到一起在夕阳下奔跑的小伙伴吧~'},
            {name:'健康科普',imgSrc:'public/index/img/healthy.png',linkTo:'yuepao.html',text:'良好的习惯保持健康持续的阅读扩展视野'},
            {name:'日常分享',imgSrc:'public/index/img/richang.png',linkTo:'yuepao.html',text:'这是一个自由分享生活点滴和愉快聊天的生活区'},
            {name:'设备推荐',imgSrc:'public/index/img/shebei.png',linkTo:'yuepao.html',text:'好设备能保证慢跑的质量我们为您精心挑选美好'},
        ];

        return(
            React.createElement("div", {className: "container four-modules"}, 
                React.createElement("div", {className: "Four-modules row"}, 
                    React.createElement(IndexFourButton, {info: btnInfo})
                )
            )
        )
    }
})

var IndexFourButton = React.createClass({displayName: "IndexFourButton",
    render : function(){
        var navInfo = this.props.info.map(function (info) {
            return(
                React.createElement("div", {className: "col-xs-6 col-md-3 four-btn"}, 
                    React.createElement("img", {src: info.imgSrc}), 
                    React.createElement("a", {href: info.linkTo}, info.name), 
                    React.createElement("p", null, info.text)
                )
            )
        });

        return(
            React.createElement("div", {className: "col-md-10 col-md-offset-1 modules-ctr row"}, 
                navInfo
            )
        )
    }
})


//定义首页地图
var IndexMap = React.createClass({displayName: "IndexMap",
    render:function(){

        var runInfo = [
            {text:'您曾经参与过约跑次数',times:'15'},
            {text:'您曾经发起约跑要请次数',times:'15'},
            {text:'您曾经跑过的城市数量',times:'15'}
        ];

        var atPlace = '广东省广州市';
        return(
            React.createElement("div", {className: "container"}, 
                React.createElement("div", {className: "m-map"}, 
                    React.createElement(UseMap, null), 
                    React.createElement("div", {className: "tips"}, 
                        React.createElement("div", {className: "t-tips"}, 
                            React.createElement("div", {className: "t-img"}, 
                                React.createElement("img", {src: "public/index/img/sign.png"})
                            ), 
                            React.createElement("p", null, "关注城市标志")
                        ), 
                        React.createElement("div", {className: "t-tips"}, 
                            React.createElement("div", {className: "t-img"}, 
                                React.createElement("img", {src: "public/index/img/blue.png"})
                            ), 
                            React.createElement("p", null, "城市标志点")
                        ), 
                        React.createElement("div", {className: "t-tips"}, 
                            React.createElement("div", {className: "t-img"}, 
                                React.createElement("img", {src: "public/index/img/yellow.png"})
                            ), 
                            React.createElement("p", null, "已点亮约跑城市")
                        )
                    ), 
                    React.createElement("p", {className: "region"}, "您当前关注的区域：", atPlace)
                ), 
                React.createElement(MapInfo, {info: runInfo})
            )
        )
    }
})

var UseMap = React.createClass({displayName: "UseMap",
    componentDidMount: function() {

    },
    render: function(){
        return(
            React.createElement("div", null, 
                React.createElement("img", {src: "public/index/img/map.png"})
            )
        )
    }
});

var MapInfo = React.createClass({displayName: "MapInfo",
    render: function(){

        var runInfo = this.props.info.map(function (info) {
            return(
                React.createElement("div", {className: "n-num"}, 
                    React.createElement("p", null, info.text), 
                    React.createElement("span", null, info.times)
                )
            )
        });

        return(
            React.createElement("div", null, 
                React.createElement("div", {className: "numb"}, 
                    React.createElement("div", {className: "numb-n"}, 
                        runInfo
                    )
                ), 
                React.createElement("div", {className: "province"}, 
                    React.createElement("p", null, "您曾参与过约跑的区域"), 
                    React.createElement("span", null, "广东省")
                )
            )
        )
    }
})

//首页广告
var IndexRed = React.createClass({displayName: "IndexRed",
    render : function(){
        return(
            React.createElement("div", {className: "recommend"}, 
                React.createElement("a", {href: "#"}, React.createElement("img", {src: "public/index/img/recommend.png"}))
           )
        );
    }
})

//首页底部图片区域
var IndexPic = React.createClass({displayName: "IndexPic",
    render: function(){
        return(
            React.createElement("div", {className: "picture"}, 
                React.createElement("div", {id: "ban"}, 
                    React.createElement("div", {className: "p-l-1"}, 
                        React.createElement("img", {src: "public/index/img/picture-1.png"})
                    ), 
                    React.createElement("div", {className: "p-l-2"}, 
                        React.createElement("img", {src: "public/index/img/picture-2.png"})
                    ), 
                    React.createElement("div", {className: "p-m"}, React.createElement("img", {src: "public/index/img/picture-3.png"})), 
                    React.createElement("div", {className: "p-r-1"}, 
                        React.createElement("img", {src: "public/index/img/picture-4.png"})
                    ), 
                    React.createElement("div", {className: "p-r-2"}, 
                        React.createElement("img", {src: "public/index/img/picture-5.png"})
                    )
                ), 
                React.createElement("div", {className: "dis", id: "dis"}, 
                    React.createElement("div", {className: "showImg"}, 
                        React.createElement("img", {src: "public/index/img/picture-1.png"}), 
                        React.createElement("img", {src: "public/index/img/picture-2.png"}), 
                        React.createElement("img", {src: "public/index/img/picture-3.png"}), 
                        React.createElement("img", {src: "public/index/img/picture-4.png"}), 
                        React.createElement("img", {src: "public/index/img/picture-5.png"})
                    ), 
                    React.createElement("a", {href: "#", className: "back glyphicon glyphicon-chevron-left", id: "back"}), 
                    React.createElement("a", {href: "#", className: "next glyphicon glyphicon-chevron-right", id: "next"}), 
                    React.createElement("span", {className: "mark1", id: "markclose"})
                ), 
                React.createElement("div", {className: "p-text"}, 
                    React.createElement("hr", {className: "r-left"}), 
                    React.createElement("p", null, "青春不老——城市慢跑"), 
                    React.createElement("hr", {className: "r-right"})
                )
            )
        )
    }
})

//首页内容
var BodyContainer = React.createClass({displayName: "BodyContainer",
    componentWillMount:function(){
        if (!localStorage.haveLocation) {
            console.log(localStorage.place);
        }else{
            console.log(localStorage.place);
        }
    },
    render: function(){
        return(
            React.createElement("div", {id: "index"}, 
                React.createElement(Header, null), 
                React.createElement(Banner, null), 
                React.createElement(FourBtnNav, null), 
                React.createElement(CtrTitle, {leftText: "地图", rightText: "Maps"}), 
                React.createElement(IndexMap, null), 
                React.createElement(IndexRed, null), 
                React.createElement(CtrTitle, {leftText: "美图", rightText: "Pictures"}), 
                React.createElement(IndexPic, null), 
                React.createElement(Footer, null)
            )
        )
    }
})

//输出
React.render(
  React.createElement(BodyContainer, null),
  document.body
);
